import React, { useState } from 'react';
import { ShoppingBag, Mail, Globe2, Github, Linkedin, PenSquare } from 'lucide-react';
import toast from 'react-hot-toast';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem('subscribedEmail', email);
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
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
          
          <a
            href="https://medium.com/@yourname"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 flex items-center gap-2 glossy-button"
          >
            <PenSquare size={20} />
            Create Your Own Affiliate Web
          </a>

          <a
            href="https://github.com/yugeshsivakumar/Affiliate-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 flex items-center gap-2 glossy-button"
          >
            <PenSquare size={20} />
            View my Code 
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
            <a href="https://yuegsh.me" className="text-gray-500 hover:text-indigo-400 transition-colors">
              <Globe2 size={24} />
            </a>
            <a href="https://github.com/yugeshsivakumar" className="text-gray-500 hover:text-indigo-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yugeshsivakumar" className="text-gray-500 hover:text-indigo-400 transition-colors">
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