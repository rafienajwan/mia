import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const location = useLocation();

  // Hide search on About Us page
  const hideSearch = location.pathname === '/about';

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', color: 'from-blue-500 to-blue-600', path: '/' },
    { id: 'categories', label: 'Categories', color: 'from-purple-500 to-purple-600', path: '/categories' },
    { id: 'about', label: 'About us', color: 'from-pink-500 to-pink-600', path: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
      <div className="h-20 flex items-center justify-between px-8 max-w-full">
        {/* Logo & Navigation */}
        <div className="flex items-center gap-12 flex-shrink-0">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/Union.png" 
              alt="Logo" 
              className="w-11 h-11 object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const isHovered = hoveredNav === item.id;
              
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onMouseEnter={() => setHoveredNav(item.id)}
                  onMouseLeave={() => setHoveredNav(null)}
                  className="relative py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors whitespace-nowrap"
                >
                  {item.label}
                  
                  {/* Underline with gradient */}
                  {(isActive || isHovered) && (
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} transition-all duration-300`}></div>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Search Bar - Hidden on About Us page */}
        {!hideSearch && (
          <div className="flex-1 max-w-md mx-8 min-w-0">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Cari UMKM berdasarkan nama atau kategori..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>
        )}

        {/* Right Side */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {/* Promo Text */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400 whitespace-nowrap">Enjoy your shop,</span>
          </div>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-3 hover:bg-gray-50 px-3 py-2 rounded-xl transition-all"
            >
              <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">Guest</span>
              <img
                src="/avatar.png"
                alt="User"
                className="w-10 h-10 rounded-full flex-shrink-0"
              />
              <FaChevronDown className="text-gray-400 text-xs flex-shrink-0" />
            </button>

            {/* Dropdown Menu */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Profile</span>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <FaUser className="text-gray-600 text-sm" />
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
