import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import AboutUsPage from './pages/AboutUsPage'; // import halaman About Us
import UMKMDetailPage from './pages/UMKMDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/about" element={<AboutUsPage />} /> {/* route baru */}
        <Route path="/umkm/:id" element={<UMKMDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
