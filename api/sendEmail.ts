// api/sendEmail.ts
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Resend } from "resend";

// Firebase Configuration (using process.env for security)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Resend API
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Secure API with Secret Key
  const providedKey = req.headers.authorization;
  if (providedKey !== `Bearer ${process.env.ADMIN_SECRET_KEY}`) {
    return res.status(403).json({ message: "Unauthorized Access" });
  }

  try {
    // Fetch all subscriber emails from Firestore
    const querySnapshot = await getDocs(collection(db, "subscribers"));
    const emails = querySnapshot.docs.map((doc) => doc.data().email);

    if (emails.length === 0) {
      return res.status(400).json({ message: "No subscribers found" });
    }

    // Send email from Products@yugesh.me
    await resend.emails.send({
      from: "contact@yugesh.me", // Use your verified business email
      to: emails,
      subject: "🚀 New Product Alert!",
      html: `
        <h2>🔥 A New Product Has Been Added!</h2>
        <p>Check out our latest addition and grab it now!</p>
        <a href="https://yourwebsite.com">View Product</a>
      `,
    });

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ message: "Failed to send emails" });
  }
}
