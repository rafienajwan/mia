import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaStar, FaMapMarkerAlt, FaPhone, FaClock, FaMoneyBillWave, FaChevronLeft, FaChevronRight, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { umkmData } from '../data/umkmData';

const UMKMDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const menuScrollRef = useRef(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);

  // Find UMKM by ID
  const umkm = umkmData.find(u => u.id === parseInt(id));

  if (!umkm) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-32 text-center">
          <h2 className="text-2xl font-bold">UMKM tidak ditemukan</h2>
        </div>
      </div>
    );
  }

  // Use menu items from UMKM data
  const menuItems = umkm.menuItems || [];

  const scrollMenu = (direction) => {
    if (menuScrollRef.current) {
      const scrollAmount = 300;
      menuScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Handle review submission
    // Reset form
    setEmail('');
    setName('');
    setRating(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-8 pt-24">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
        >
          <FaChevronLeft className="text-sm" />
          <span className="font-medium">Back</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 pb-12">
        <div className="bg-gradient-to-r from-[#4A5F7F] to-[#5D7C96] rounded-[2.5rem] overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-8 lg:p-12">
            {/* Left Content */}
            <div className="flex-1 text-white space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {umkm.name}
              </h1>

              <p className="text-lg leading-relaxed opacity-90">
                {umkm.description}
              </p>

              {/* Rating & Info */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <FaStar className="text-yellow-300" />
                  <span className="font-bold">{umkm.rating}</span>
                  <span className="text-sm opacity-80">({umkm.reviews} reviews)</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <FaMapMarkerAlt />
                  <span>{umkm.address}</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-shrink-0 lg:w-[450px]">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={umkm.image}
                  alt={umkm.name}
                  className="w-full h-[300px] lg:h-[350px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Menu</h2>
          
          {menuItems.length > 3 && (
            <div className="flex gap-2">
              <button
                onClick={() => scrollMenu('left')}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <FaChevronLeft className="text-gray-600" />
              </button>
              <button
                onClick={() => scrollMenu('right')}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <FaChevronRight className="text-gray-600" />
              </button>
            </div>
          )}
        </div>

        {menuItems.length > 0 ? (
          <div
            ref={menuScrollRef}
            className="flex gap-6 overflow-x-auto pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[320px] bg-[#4A5F7F] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Price Badge */}
                <div className="px-8 pt-8 pb-6">
                  <div className="flex gap-3 mb-4">
                    <span className="px-4 py-1.5 bg-white rounded-full text-xs font-semibold text-gray-800">
                      {item.price}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white leading-tight mb-3">
                    {item.name}
                  </h3>
                  
                  <p className="text-sm text-white/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Image */}
                <div className="relative bg-white aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p>Menu belum tersedia</p>
          </div>
        )}
      </section>

      {/* Location & Review Section */}
      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Location</h2>
            
            {/* Info Cards */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#4A5F7F] text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600">{umkm.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaPhone className="text-[#4A5F7F] text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">{umkm.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaClock className="text-[#4A5F7F] text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Open Hours</h4>
                  <p className="text-gray-600">{umkm.openHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaMoneyBillWave className="text-[#4A5F7F] text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Price Range</h4>
                  <p className="text-gray-600">{umkm.priceRange}</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-[300px] bg-gray-200">
              <iframe
                title="UMKM Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1753924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Review Form */}
          <div className="bg-gradient-to-br from-[#4A5F7F] to-[#5D7C96] rounded-3xl p-8 shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-2">Review</h2>
            <p className="text-white/80 mb-6">
              Tried our food? Leave your review and let us know what you think!
            </p>

            <form onSubmit={handleSubmitReview} className="space-y-5">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Rate</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="transition-transform hover:scale-110"
                    >
                      <FaStar
                        className={`text-2xl ${
                          star <= rating ? 'text-yellow-300' : 'text-white/30'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-[#4A5F7F] font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-50 mt-12">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
            Contact Information
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Get in touch with us through any of these channels. We'd love to hear from you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href={`https://www.instagram.com/${umkm.instagram || ''}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gradient-to-br from-[#4A5F7F] to-[#3D4E6B] rounded-3xl p-8 text-center text-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <FaInstagram className="text-4xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Instagram</h3>
                <p className="text-sm opacity-90">{umkm.instagram || 'Not available'}</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${umkm.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gradient-to-br from-[#4A5F7F] to-[#3D4E6B] rounded-3xl p-8 text-center text-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="text-4xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">WhatsApp</h3>
                <p className="text-sm opacity-90">{umkm.phone}</p>
              </div>
            </a>

            <a
              href={`mailto:${umkm.email || ''}`}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#4A5F7F] to-[#3D4E6B] rounded-3xl p-8 text-center text-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <FaEnvelope className="text-4xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Email</h3>
                <p className="text-sm opacity-90">{umkm.email || 'Not available'}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UMKMDetailPage;
