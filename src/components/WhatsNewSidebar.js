import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const WhatsNewSidebar = ({ umkmList }) => {
  const navigate = useNavigate();

  const handleClick = (umkmId) => {
    navigate(`/umkm/${umkmId}`);
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-800">Yang Baru</h2>
      </div>
      <div className="space-y-4">
        {umkmList.slice(0, 3).map((umkm) => (
          <div
            key={umkm.id}
            onClick={() => handleClick(umkm.id)}
            className="flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 transition-all cursor-pointer group"
          >
            {/* Square Image with aspect ratio */}
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={umkm.image}
                  alt={umkm.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-800 text-sm mb-0.5 truncate">
                {umkm.name}
              </h3>
              <p className="text-xs text-gray-500">
                {umkm.category} • {umkm.distance}
              </p>
            </div>

            {/* Arrow Button */}
            <button className="flex-shrink-0 w-9 h-9 bg-[#4A5F7F] text-white rounded-full flex items-center justify-center group-hover:bg-[#3D4E6B] transition-all">
              <FaArrowRight className="text-xs" />
            </button>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <button className="w-full mt-6 py-3.5 bg-[#4A5F7F] text-white rounded-2xl font-semibold text-sm hover:bg-[#3D4E6B] hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
        Jelajahi Lebih Banyak
      </button>
    </div>
  );
};

export default WhatsNewSidebar;
