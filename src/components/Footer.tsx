import React, { useState } from 'react';
import { ShoppingBag, Mail, Globe2, Github, Linkedin, Heart, Code, PenSquare } from 'lucide-react';
import toast from 'react-hot-toast';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// 🔐 Firebase Configuration (Fixed `storageBucket`)

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
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe button clicked!");

    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }

    try {
      console.log("Trying to add email to Firestore:", email);

      await addDoc(collection(db, "subscribers"), { 
        email, 
        subscribedAt: new Date() 
      });

      toast.success("Successfully subscribed!");
      setEmail("");
    } catch (error) {
      console.error("Error adding email:", error);
      toast.error("Subscription failed, check console.");
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
            <form onSubmit={handleSubscribe} className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-l-lg w-full focus:outline-none bg-gray-800 border border-gray-700 text-gray-200"
              />
              <button 
                type="submit" 
                className="glossy-button rounded-l-none"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex space-x-6 mb-8">
            <a href="https://yugesh.me" className="text-gray-500 hover:text-indigo-400 transition-colors">
              <Globe2 size={24} />
            </a>
            <a href="https://github.com/yugeshsivakumar" className="text-gray-500 hover:text-indigo-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="http://linkedin.com/in/yugeshsivakumar" className="text-gray-500 hover:text-indigo-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:imyugesh.s@gmail.com" className="text-gray-500 hover:text-indigo-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} AffiliateHub. All rights reserved.</p>
          <p className="mt-2 text-sm">
            This site contains affiliate links. I may earn a commission when you purchase through these links.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;