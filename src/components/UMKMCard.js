import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const UMKMCard = ({ umkm }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  // Check if UMKM is liked on mount
  useEffect(() => {
    const likedUMKM = JSON.parse(localStorage.getItem('likedUMKM') || '[]');
    setIsLiked(likedUMKM.includes(umkm.id));
  }, [umkm.id]);

  const handleLike = (e) => {
    e.stopPropagation();
    const likedUMKM = JSON.parse(localStorage.getItem('likedUMKM') || '[]');
    
    if (isLiked) {
      // Remove from liked
      const updated = likedUMKM.filter(id => id !== umkm.id);
      localStorage.setItem('likedUMKM', JSON.stringify(updated));
      setIsLiked(false);
    } else {
      // Add to liked
      likedUMKM.push(umkm.id);
      localStorage.setItem('likedUMKM', JSON.stringify(likedUMKM));
      setIsLiked(true);
    }
    
    // Dispatch custom event for other components
    window.dispatchEvent(new Event('likeChanged'));
  };

  const handleClick = () => {
    navigate(`/umkm/${umkm.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 h-full flex flex-col"
    >
      {/* Image Container - Fixed aspect ratio */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={umkm.image}
          alt={umkm.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Category Badge - Top Left */}
        <div className="absolute top-4 left-4 px-4 py-2 bg-white rounded-full text-xs font-semibold text-gray-700 shadow-md">
          {umkm.category}
        </div>
        
        {/* Favorite Button - Top Right */}
        <button
          onClick={handleLike}
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-all"
        >
          <FaHeart className={`${isLiked ? 'text-red-500' : 'text-gray-300'} transition-colors`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
          {umkm.name}
        </h3>
        
        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed flex-1">
          {umkm.description}
        </p>

        {/* Rating & Distance */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="font-semibold text-sm text-gray-800">
              {umkm.rating}
            </span>
            <span className="text-xs text-gray-500">
              ({umkm.reviews})
            </span>
          </div>
          
          <div className="flex items-center gap-1.5 text-gray-600">
            <FaMapMarkerAlt className="text-sm" />
            <span className="text-sm">{umkm.distance}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UMKMCard;
