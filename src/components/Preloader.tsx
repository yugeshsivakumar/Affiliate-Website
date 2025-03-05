import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950">
      <div className="relative">
        {/* Outer spinning circles */}
        <div className="absolute inset-0 animate-spin">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-400 rounded-full"></div>
          <div className="absolute top-1/4 right-0 w-2 h-2 bg-purple-400 rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-400 rounded-full"></div>
          <div className="absolute top-1/4 left-0 w-2 h-2 bg-purple-400 rounded-full"></div>
        </div>

        {/* Middle ring */}
        <div className="w-24 h-24 border-4 border-indigo-400/30 border-t-indigo-400 rounded-full animate-spin"></div>
        
        {/* Inner ring */}
        <div className="absolute top-2 left-2 w-20 h-20 border-4 border-purple-400/30 border-b-purple-400 rounded-full animate-spin-slow"></div>
        
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ShoppingBag className="w-8 h-8 text-white animate-pulse" />
        </div>

        {/* Glowing orbs */}
        <div className="absolute -inset-4">
          <div className="absolute top-1/2 left-0 w-3 h-3 bg-indigo-400 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute bottom-0 right-1/2 w-3 h-3 bg-indigo-400 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-3 h-3 bg-purple-400 rounded-full blur-sm animate-pulse"></div>
        </div>
      </div>

      {/* Loading text */}
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 text-white font-medium">
        <span className="inline-block animate-pulse">Loading...</span>
      </div>
    </div>
  );
};

export default Preloader;