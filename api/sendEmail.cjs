// api/sendEmail.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Resend } from "resend";

// Add detailed logging for debugging
console.log("API handler initializing...");

// 🔐 Firebase Configuration
const firebaseConfig = {  
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,  
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,  
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,  
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,  
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,  
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Log configuration (without sensitive values)
console.log("Firebase config keys present:", Object.keys(firebaseConfig).filter(key => firebaseConfig[key] !== undefined));

let app;
let db;
let resend;

try {
  // Initialize Firebase
  console.log("Initializing Firebase...");
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  console.log("Firebase initialized successfully");
  
  // Initialize Resend API
  console.log("Initializing Resend...");
  resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);
  console.log("Resend initialized successfully");
} catch (initError) {
  console.error("Initialization error:", initError);
}

// Use named exports instead of CommonJS exports
export { app, db };

// Use default export for the handler
export default async function handler(req, res) {
  console.log("Request received:", req.method);
  
  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  
  if (req.method !== "POST") {
    console.log("Method not allowed:", req.method);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Log authorization header (without revealing the full token)
  const providedKey = req.headers.authorization;
  console.log("Authorization header present:", !!providedKey);
  
  // Secure API with Secret Key
  const expectedKey = `Bearer ${import.meta.env.VITE_ADMIN_SECRET_KEY}`;
  console.log("Admin key configured:", !!import.meta.env.VITE_ADMIN_SECRET_KEY);
  
  if (providedKey !== expectedKey) {
    console.log("Authorization failed");
    return res.status(403).json({ message: "Unauthorized Access" });
  }
  
  console.log("Authorization successful");

  try {
    // Fetch all subscriber emails from Firestore
    console.log("Fetching subscribers from Firestore...");
    const querySnapshot = await getDocs(collection(db, "subscribers"));
    const emails = querySnapshot.docs.map((doc) => doc.data().email);
    console.log(`Found ${emails.length} subscribers`);

    if (emails.length === 0) {
      console.log("No subscribers found");
      return res.status(400).json({ message: "No subscribers found" });
    }

    // Send email from contact@yugesh.me
    console.log("Sending emails via Resend...");
    const sendResult = await resend.emails.send({
      from: "contact@yugesh.me", // Use your verified business email
      to: emails,
      subject: "🚀 New Product Alert!",
      html: `
        <h2>🔥 A New Product Has Been Added!</h2>
        <p>Check out our latest addition and grab it now!</p>
        <a href="https://yugesh.me/shop">View Product</a>
      `,
    });
    console.log("Email send result:", sendResult);

    console.log("Emails sent successfully");
    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error details:", error);
    
    // Return more detailed error information
    res.status(500).json({ 
      message: "Failed to send emails", 
      error: typeof error === 'object' ? {
        name: error.name,
        message: error.message,
        stack: error.stack
      } : String(error)
    });
  }
}