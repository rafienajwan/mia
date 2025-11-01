import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterButtons from '../components/FilterButtons';
import UMKMCard from '../components/UMKMCard';
import { umkmData } from '../data/umkmData';

const CategoriesPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter UMKM berdasarkan kategori yang dipilih
  const filteredUMKM = activeFilter === 'all' 
    ? umkmData 
    : umkmData.filter(umkm => {
        const categoryMap = {
          'foods': 'Makanan',
          'drinks': 'Minuman',
          'fashion': 'Fashion'
        };
        return umkm.category === categoryMap[activeFilter];
      });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto px-6 pt-28 pb-8 w-full">
        {/* Filter Buttons */}
        <FilterButtons 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
        />

        {/* UMKM Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredUMKM.map((umkm) => (
            <UMKMCard key={umkm.id} umkm={umkm} />
          ))}
        </div>

        {/* Empty State */}
        {filteredUMKM.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Tidak ada UMKM dalam kategori ini
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CategoriesPage;
