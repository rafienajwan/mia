import React from 'react';
import { FaArrowRight, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HeroBanner = ({ umkm }) => {
  const navigate = useNavigate();

  if (!umkm) return null;

  const handleVisitNow = () => {
    navigate(`/umkm/${umkm.id}`);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#4A5F7F] to-[#3D4E6B] rounded-2xl sm:rounded-3xl shadow-xl">
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 p-6 sm:p-8 md:p-10">
        {/* Left Content */}
        <div className="flex-1 text-white z-10">
          {/* Category Label */}
          <div className="inline-block text-xs font-medium text-white/80 mb-2">
            UMKM Pilihan Minggu Ini
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            {umkm.name}
          </h1>
          
          <p className="text-sm text-white/90 mb-5 sm:mb-6 max-w-sm leading-relaxed">
            {umkm.description}
          </p>

          {/* Rating & Distance */}
          <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8 flex-wrap">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400 text-sm" />
              <span className="font-semibold text-sm">{umkm.rating}</span>
              <span className="text-white/70 text-xs">({umkm.reviews} ulasan)</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <FaMapMarkerAlt className="text-white/80" />
              <span>{umkm.distance}</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleVisitNow}
            className="group bg-white text-gray-800 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm flex items-center gap-3 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Kunjungi Sekarang
            <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
          </button>
        </div>

        {/* Right Image */}
        <div className="relative flex-shrink-0 w-full md:w-auto">
          <div className="relative w-full aspect-square max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto">
            {/* Main Image with rounded corners */}
            <img
              src={umkm.image}
              alt={umkm.name}
              className="w-full h-full object-cover rounded-2xl sm:rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>
    </div>
  );
};

export default HeroBanner;
