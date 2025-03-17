import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  platformLinks?: {
    windows?: string;
    mac?: string;
    linux?: string;
    android?: string;
    ios?: string;
  };
}

const DownloadModal: React.FC<DownloadModalProps> = ({ 
  isOpen, 
  onClose, 
  productName,
  platformLinks = {} 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const platforms = [
    {
      name: 'Windows',
      icon: "https://cdn-icons-png.flaticon.com/512/888/888882.png",
      link: platformLinks.windows,
    },
    {
      name: 'macOS',
      icon: "https://cdn-icons-png.flaticon.com/512/2/2235.png",
      link: platformLinks.mac,
    },
    {
      name: 'Linux',
      icon: "https://cdn-icons-png.flaticon.com/512/6124/6124995.png",
      link: platformLinks.linux,
    },
    {
      name: 'Android',
      icon: "https://cdn-icons-png.flaticon.com/512/888/888839.png",
      link: platformLinks.android,
    },
    {
      name: 'iOS',
      icon: "https://cdn-icons-png.flaticon.com/512/831/831276.png",
      link: platformLinks.ios,
    },
  ];

  const availablePlatforms = platforms.filter(platform => platform.link);
  const unavailablePlatforms = platforms.filter(platform => !platform.link);

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

        {availablePlatforms.length > 0 ? (
          <div className="space-y-3 mb-4">
            {availablePlatforms.map((platform) => (
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
                    className="w-8 h-8"
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
        ) : null}

        {unavailablePlatforms.length > 0 && (
          <div className="mt-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700">
            <p className="text-amber-400 font-medium mb-2">Limited Availability</p>
            <p className="text-gray-400 text-sm">
              {productName} is currently only available for{' '}
              {availablePlatforms.map(p => p.name).join(', ')}.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Not available for: {unavailablePlatforms.map(p => p.name).join(', ')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DownloadModal;