# Website Direktori UMKM - Lex Legum Qeon

Website direktori UMKM (Usaha Mikro Kecil Menengah) yang memudahkan pengguna untuk menemukan dan mengeksplorasi berbagai UMKM lokal berdasarkan kategori seperti Makanan, Minuman, dan Fashion. Website ini dibangun untuk kompetisi dengan fokus pada user experience dan tampilan yang menarik.

## Tech Stack

- **React** 19.0.2 - Library JavaScript untuk membangun user interface
- **Tailwind CSS** 3.4.1 - Framework CSS untuk styling
- **React Router DOM** 7.9.4 - Routing library untuk navigasi antar halaman
- **React Icons** 5.5.0 - Library icon untuk UI
- **Create React App** - Tool untuk setup React project

## Cara Menjalankan Project

### 1. Clone Repository
```bash
git clone https://github.com/rafienajwan/MIA.git
cd mia
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm start
```

Website akan otomatis terbuka di browser pada `http://localhost:3000`

## Progress Saat Ini

✅ **Landing Page (Home)** - Halaman utama dengan:
- Hero banner menampilkan UMKM featured
- Grid 6 UMKM terpopuler dengan rating dan jarak
- Sidebar "Yang Baru" dengan 3 UMKM terbaru
- Search functionality untuk mencari UMKM
- Footer dengan copyright

✅ **Halaman Categories** - Halaman filter kategori dengan:
- Filter buttons (All, Foods, Drinks, Fashion)
- Grid display semua UMKM berdasarkan kategori
- Responsive layout 3 kolom

✅ **Komponen Reusable**:
- Header dengan navigasi dan profile dropdown
- UMKM Card dengan image, rating, dan detail
- Filter buttons dengan active state
- Footer component

✅ **Fitur**:
- Routing dengan React Router
- Search UMKM by name atau kategori
- Filter UMKM by kategori
- Responsive design untuk berbagai ukuran layar
- Custom scrollbar styling
- Hover effects dan smooth transitions

## Struktur Folder
```
src/
├── components/        # Reusable components
├── pages/            # Page components
├── data/             # Mock data UMKM
├── App.js            # Main app dengan routing
└── index.css         # Global styles dengan Tailwind

public/
├── Union.png         # Logo aplikasi
└── index.html        # HTML template
```

## Fitur Mendatang
- Halaman About Us
- Halaman detail UMKM
- Filter advanced (by rating, distance, price range)
- Integration dengan Google Maps untuk lokasi

---
**Dibuat oleh:** Lex Legum Qeon  
**Tahun:** 2025
