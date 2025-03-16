import React, { useState } from 'react';
import { Download, ThumbsUp, ThumbsDown, Star, Share2, ShoppingCart, Users, BookCopy, ArrowDownToLine } from 'lucide-react';
import { Product } from '../types';
import toast from 'react-hot-toast';
import DownloadModal from './DownloadModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [userRatings, setUserRatings] = useState<number[]>(product.userRatings || []);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const averageUserRating = userRatings.length > 0 
    ? (userRatings.reduce((sum, rating) => sum + rating, 0) / userRatings.length).toFixed(1) 
    : 'No ratings';

  const handleRating = (rating: number) => {
    if (userRating === rating) {
      setUserRating(null);
      setUserRatings(userRatings.slice(0, -1));
    } else {
      setUserRating(rating);
      if (userRating === null) {
        setUserRatings([...userRatings, rating]);
      } else {
        const newRatings = [...userRatings];
        newRatings[newRatings.length - 1] = rating;
        setUserRatings(newRatings);
      }

      const subscribedEmail = localStorage.getItem('subscribedEmail');
      if (subscribedEmail) {
        console.log(`Sending email to ${subscribedEmail} about new rating for ${product.name}`);
      }
    }
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(product.amazonLink);
      toast.success('Product link copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M+`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K+`;
    }
    return `${num}`;
  };

  const getMetricsDisplay = () => {
    switch (product.category) {
      case 'books':
        return {
          icon: <BookCopy size={16} className="mr-1" />,
          label: 'Copies Sold',
        };
      case 'software':
        return {
          icon: <Download size={16} className="mr-1" />,
          label: 'Downloads',
        };
      default:
        return {
          icon: <Users size={16} className="mr-1" />,
          label: 'Users',
        };
    }
  };

  const getActionButton = () => {
    if (product.category === 'software') {
      return (
        <a 
          href={product.amazonLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="glossy-button inline-flex items-center gap-2 text-sm"
        >
          <ArrowDownToLine size={16} />
          Download
        </a>
      );
    }
    return (
      <>
        <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:neon-glow transform hover:-translate-y-1">
          <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="block relative">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
                {product.category}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>
          </a>
          
          <div className="p-4">
            <a 
              href={product.amazonLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="text-lg font-bold mb-2 text-white hover:text-indigo-400 transition-colors">
                {product.name}
              </h3>
            </a>
            
            <div className="flex items-center mb-3">
              <div className="flex items-center text-sm text-gray-400">
                {metrics.icon}
                <span>{formatNumber(product.downloads)} {metrics.label}</span>
              </div>
              <div className="ml-auto flex">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-4 h-4 ${i < product.rating ? 'text-purple-400' : 'text-gray-700'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <p className="text-gray-400 mb-3 text-sm line-clamp-3">{product.review}</p>
            
            <div className="flex flex-wrap gap-2 mb-3">
              <button 
                onClick={() => setShowDetails(!showDetails)}
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                {showDetails ? 'Hide details' : 'Show pros & cons'}
              </button>
              
              {showDetails && (
                <div className="w-full mt-2 space-y-3 bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                  <div>
                    <h4 className="flex items-center text-green-400 font-medium mb-1">
                      <ThumbsUp size={16} className="mr-2" /> Pros
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                      {product.pros.map((pro, index) => (
                        <li key={index}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="flex items-center text-red-400 font-medium mb-1">
                      <ThumbsDown size={16} className="mr-2" /> Cons
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                      {product.cons.map((con, index) => (
                        <li key={index}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mb-3 p-3 bg-gray-800 bg-opacity-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-white font-medium text-sm">Your Rating</h4>
                <span className="text-sm text-gray-400">User avg: {averageUserRating}</span>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => handleRating(rating)}
                    className={`p-1 rounded-full transition-all ${
                      userRating && userRating >= rating 
                        ? 'text-yellow-400 scale-110' 
                        : 'text-gray-600 hover:text-gray-400'
                    }`}
                  >
                    <Star size={16} fill={userRating && userRating >= rating ? "currentColor" : "none"} />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex gap-2">
              {getActionButton()}
              <button
                onClick={handleShare}
                className="glossy-button inline-flex items-center gap-2 text-sm"
              >
                <Share2 size={16} />
                Share
              </button>
            </div>
          </div>
        </div>
  
        {showDownloadModal && (
          <DownloadModal 
            isOpen={showDownloadModal} 
            onClose={() => setShowDownloadModal(false)} 
            productName={product.name}
            amazonLink={product.amazonLink}
          />
        )}
      </>
    );
  };

export default ProductCard;

export default ProductCard