import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterButtons from '../components/FilterButtons';
import UMKMCard from '../components/UMKMCard';
import { umkmData } from '../data/umkmData';

const CategoriesPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter UMKM berdasarkan kategori yang dipilih
  const filteredUMKM = React.useMemo(() => {
    if (activeFilter === 'liked') {
      const likedUMKM = JSON.parse(localStorage.getItem('likedUMKM') || '[]');
      return umkmData.filter(umkm => likedUMKM.includes(umkm.id));
    }
    
    if (activeFilter === 'all') {
      return umkmData;
    }
    
    const categoryMap = {
      'foods': 'Makanan',
      'drinks': 'Minuman',
      'fashion': 'Fashion'
    };
    
    return umkmData.filter(umkm => umkm.category === categoryMap[activeFilter]);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-8 w-full">
        {/* Filter Buttons */}
        <FilterButtons 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
        />

        {/* UMKM Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {filteredUMKM.map((umkm) => (
            <UMKMCard key={umkm.id} umkm={umkm} />
          ))}
        </div>

        {/* Empty State */}
        {filteredUMKM.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">
              {activeFilter === 'liked' ? '💔' : '🔍'}
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {activeFilter === 'liked' 
                ? 'Belum ada UMKM yang disukai' 
                : 'Tidak ada UMKM dalam kategori ini'}
            </h3>
            <p className="text-gray-500">
              {activeFilter === 'liked'
                ? 'Mulai like UMKM favoritmu!'
                : 'Coba pilih kategori lain'}
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CategoriesPage;
