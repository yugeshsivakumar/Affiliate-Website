import React from 'react';
import { X } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  amazonLink: string;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, productName, amazonLink }) => {
  if (!isOpen) return null;

  const platforms = [
    {
      name: 'Windows',
      icon: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg",
      link: `${amazonLink}/windows`,
    },
    {
      name: 'Android',
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg",
      link: `${amazonLink}/android`,
    },
    {
      name: 'iOS',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      link: `${amazonLink}/ios`,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-md glass-card p-6 rounded-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <h3 className="text-xl font-bold mb-4 text-white">
          Download {productName}
        </h3>
        
        <div className="space-y-3">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors group"
            >
              <div className="flex items-center justify-center w-10 h-10 mr-4">
                <img 
                  src={platform.icon} 
                  alt={`${platform.name} logo`}
                  className={`w-8 h-8 ${platform.name === 'iOS' ? 'invert' : ''}`}
                />
              </div>
              <div>
                <h4 className="font-medium text-white group-hover:text-indigo-400 transition-colors">
                  {platform.name}
                </h4>
                <p className="text-sm text-gray-400">
                  Download for {platform.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;