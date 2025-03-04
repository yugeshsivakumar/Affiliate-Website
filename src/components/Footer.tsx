import React, { useState } from 'react';
import { ShoppingBag, Mail, Linkedin, Github, Globe2 } from 'lucide-react'; // Use Globe2 for Medium

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    // Open your Substack subscription page with prefilled email
    window.open(`https://yugeshs.substack.com/subscribe?email=${encodeURIComponent(email)}`, "_blank");
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

          <div className="mb-8 max-w-md text-center">
            <h3 className="font-bold text-lg mb-4 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get updates on new product recommendations.</p>
            <form className="flex" onSubmit={handleSubscribe}>
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

          {/* Social Media Links */}
          <div className="flex space-x-6 mb-8">
            <a href="mailto:imyugesh.s@gmail.com" className="text-gray-500 hover:text-indigo-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/yugeshsivakumar" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://yugesh.me" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-400 transition-colors">
              <Globe2 size={24} /> {/* Use Globe2 for Medium */}
            </a>
            <a href="https://github.com/yugeshsivakumar" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-400 transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p className="mt-2 text-sm">
            This site contains affiliate links. We may earn a commission when you purchase through these links.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
