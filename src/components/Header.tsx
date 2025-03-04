import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 glass-effect backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center">
        <div className="flex items-center">
          <ShoppingBag className="h-8 w-8 text-indigo-400 mr-2" />
          <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            AffiliateHub
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;