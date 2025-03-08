import React, { useState } from "react";
import { ShoppingBag, Mail, Globe2, Github, Linkedin, Heart, Code, PenSquare, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// 🔐 Firebase Configuration
const firebaseConfig = {  
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,  
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,  
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,  
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,  
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,  
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false); // ✅ Controls green tick visibility

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe button clicked!");

    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }

    // ✅ Show green tick immediately when button is clicked
    setSubscribed(true);

    // ✅ Remove green tick after 10 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
    
    try {
      console.log("Trying to add email to Firestore:", email);
      await addDoc(collection(db, "subscribers"), { email, subscribedAt: new Date() });

      // ✅ Firebase success → Show toast
      toast.success("Successfully subscribed!");
      setEmail(""); // Clear input field after success

    } catch (error) {
      console.error("Error adding email:", error);
      toast.error("Subscription failed, check console.");

      // ❌ Firebase failed → Remove green tick
      setSubscribed(false);
    }
  };

  return (
    <footer className="bg-gray-950 text-gray-300 relative z-10">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <ShoppingBag className="h-6 w-6 text-indigo-400 mr-2" />
            <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              AffiliateHub
            </span>
          </div>
          <div className="flex gap-4 mb-4">
            <a href="https://github.com/yugeshsivakumar/Affiliate-Website" 
               target="_blank" rel="noopener noreferrer" 
               className="glossy-button flex items-center gap-2">
              <Code size={20} />
              View Code
            </a>
            <a href="https://github.com/sponsors/yugeshsivakumar" 
               target="_blank" rel="noopener noreferrer" 
               className="glossy-button flex items-center gap-2">
              <Heart size={20} />
              Donation
            </a>
          </div>

          <a href="https://medium.com/@Yugesh_S" 
             target="_blank" rel="noopener noreferrer" 
             className="mb-8 glossy-button flex items-center gap-2">
            <PenSquare size={20} />
            Create Your Own Affiliate Web
          </a>

          <div className="mb-8 max-w-md text-center">
            <h3 className="font-bold text-lg mb-4 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get updates on new product recommendations.</p>

            {/* 📨 Email Subscription Form */}
            <form onSubmit={handleSubscribe} className="flex items-center relative">
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-l-lg w-full focus:outline-none bg-gray-800 border border-gray-700 text-gray-200"
              />
              <button type="submit" className="glossy-button rounded-l-none">
                Subscribe
              </button>

              {/* ✅ Green tick appears instantly when button is clicked */}
              {subscribed && (
                <CheckCircle size={24} className="text-green-400 absolute right-[-35px] transition-opacity duration-300" />
              )}
            </form>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} AffiliateHub. All rights reserved.</p>
            <p className="mt-2 text-sm">
              This site contains affiliate links. I may earn a commission when you purchase through these links.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;