import React from 'react';
import { FaArrowRight, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const HeroBanner = ({ umkm }) => {
  if (!umkm) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#4A5F7F] to-[#3D4E6B] rounded-3xl shadow-xl">
      <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10">
        {/* Left Content */}
        <div className="flex-1 text-white z-10">
          {/* Category Label */}
          <div className="inline-block text-xs font-medium text-white/80 mb-2">
            UMKM Pilihan Minggu Ini
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {umkm.name}
          </h1>
          
          <p className="text-sm text-white/90 mb-6 max-w-sm leading-relaxed">
            {umkm.description}
          </p>

          {/* Rating & Distance */}
          <div className="flex items-center gap-6 mb-8">
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
          <button className="group bg-white text-gray-800 px-8 py-3.5 rounded-full font-semibold text-sm flex items-center gap-3 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
            Kunjungi Sekarang
            <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
          </button>
        </div>

        {/* Right Image */}
        <div className="relative flex-shrink-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Main Image with rounded corners */}
            <img
              src={umkm.image}
              alt={umkm.name}
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
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
