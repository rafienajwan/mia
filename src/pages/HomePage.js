import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import UMKMCard from '../components/UMKMCard';
import WhatsNewSidebar from '../components/WhatsNewSidebar';
import Footer from '../components/Footer';
import { umkmData } from '../data/umkmData';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter UMKM berdasarkan search
  const filteredUMKM = useMemo(() => {
    return umkmData.filter((umkm) => {
      const matchesSearch =
        umkm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        umkm.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesSearch;
    });
  }, [searchQuery]);

  // Get featured UMKM
  const featuredUMKM = umkmData.find((umkm) => umkm.isFeatured) || umkmData[0];
  
  // Get new UMKM
  const newUMKM = umkmData.filter((umkm) => umkm.isNew);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header onSearch={setSearchQuery} activeNav="home" />

      {/* Main Content */}
      <main className="pt-20 sm:pt-28 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6 sm:gap-8">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Hero Banner */}
              <HeroBanner umkm={featuredUMKM} />

              {/* UMKM Terpopuler Section */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  UMKM Terpopuler
                </h2>

                {/* Grid responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                  {filteredUMKM.slice(0, 6).map((umkm) => (
                    <UMKMCard key={umkm.id} umkm={umkm} />
                  ))}
                </div>

                {/* Show message if no results */}
                {filteredUMKM.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      Tidak ada UMKM ditemukan
                    </h3>
                    <p className="text-gray-500">
                      Coba ubah kata kunci pencarian
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Sidebar - Hidden on tablet, shown on xl screens */}
            <div className="hidden xl:block space-y-8">
              {/* Yang Baru */}
              <WhatsNewSidebar umkmList={newUMKM} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
