import React from 'react';
import { FaThLarge, FaUtensils, FaCoffee, FaTshirt, FaHeart } from 'react-icons/fa';

const FilterButtons = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: 'all', label: 'All', icon: FaThLarge },
    { id: 'liked', label: 'Liked', icon: FaHeart },
    { id: 'foods', label: 'Foods', icon: FaUtensils },
    { id: 'drinks', label: 'Drinks', icon: FaCoffee },
    { id: 'fashion', label: 'Fashion', icon: FaTshirt },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Filter By</h2>
      <div className="flex gap-3 flex-wrap">
        {filters.map((filter) => {
          const Icon = filter.icon;
          return (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-[#4A5F7F] text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-[#4A5F7F] hover:text-[#4A5F7F]'
              }`}
            >
              <Icon className={`text-lg ${filter.id === 'liked' && activeFilter === filter.id ? 'text-red-300' : ''}`} />
              <span>{filter.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterButtons;
