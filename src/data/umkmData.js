// Mock data untuk 10 UMKM
export const umkmData = [
  {
    id: 1,
    name: 'Kedai Omah Feby 9',
    category: 'Makanan',
    rating: 4.8,
    reviews: 256,
    distance: '1.2 km',
    image: '/1.OmaFeby.jpg',
    description: 'Sate ayam dan kambing dengan bumbu kacang spesial. Sudah berdiri sejak 1995.',
    address: 'Kantin UPN "Veteran Jawa Timur',
    phone: '0812-3456-7890',
    openHours: '07:00 - 15:00',
    priceRange: 'Rp 15.000 - Rp 20.000',
    isFeatured: true,
    isNew: false,
    instagram: 'omah_feby',
    email: 'omah_feby@gmail.com',
    menuItems: [
      {
        id: 1,
        name: 'Nasi Goreng',
        price: 'Rp 15.000',
        description: 'A flavorful stir-fried rice dish with sweet soy sauce, spices, and a fried egg on top.',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=400&fit=crop'
      },
      {
        id: 2,
        name: 'Nasi Ayam Kremes',
        price: 'Rp 18.000',
        description: 'A crispy fried chicken served with crunchy golden crumbs on top.',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop'
      },
      {
        id: 3,
        name: 'Nasi Goreng Special',
        price: 'Rp 17.000',
        description: 'Special fried rice with extra toppings and premium ingredients.',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=400&fit=crop'
      },
      {
        id: 4,
        name: 'Nasi Ayam Bakar',
        price: 'Rp 20.000',
        description: 'Grilled chicken with special spices, served with rice and fresh vegetables.',
        image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&h=400&fit=crop'
      }
    ]
  },
  {
    id: 2,
    name: 'Es Esem Id',
    category: 'Minuman',
    rating: 4.6,
    reviews: 189,
    distance: '0.8 km',
    image: '/2.EsemID.jpg',
    description: 'Kopi tradisional dengan racikan rahasia turun temurun.',
    address: 'Jl. Sudirman No. 12, Jakarta Pusat',
    phone: '0813-2345-6789',
    openHours: '07:00 - 21:00',
    priceRange: 'Rp 10.000 - Rp 35.000',
    isFeatured: false,
    isNew: true,
    instagram: 'es_esem_id',
    email: 'esemid@gmail.com',
    menuItems: [
      {
        id: 1,
        name: 'Es Kopi Susu',
        price: 'Rp 15.000',
        description: 'Creamy iced coffee with fresh milk and smooth texture.',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop'
      },
      {
        id: 2,
        name: 'Es Teh Manis',
        price: 'Rp 8.000',
        description: 'Sweet iced tea, refreshing and perfect for hot days.',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop'
      },
      {
        id: 3,
        name: 'Es Jeruk',
        price: 'Rp 10.000',
        description: 'Fresh orange juice with ice, naturally sweet and vitamin-rich.',
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop'
      }
    ]
  },
  {
    id: 3,
    name: 'Pasar Bekas Gembong',
    category: 'Fashion',
    rating: 4.9,
    reviews: 342,
    distance: '2.5 km',
    image: '/3.PasarGembong.jpg',
    description: 'Batik tulis dan cap dengan motif tradisional dan modern.',
    address: 'Jl. Diponegoro No. 78, Yogyakarta',
    phone: '0814-3456-7891',
    openHours: '09:00 - 18:00',
    priceRange: 'Rp 150.000 - Rp 1.500.000',
    isFeatured: false,
    isNew: false,
    instagram: 'pasar_gembong',
    email: 'pasargembong@gmail.com',
    menuItems: [
      {
        id: 1,
        name: 'Batik Tulis Premium',
        price: 'Rp 500.000',
        description: 'Hand-drawn batik with traditional patterns and high-quality fabric.',
        image: 'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=400&h=400&fit=crop'
      },
      {
        id: 2,
        name: 'Batik Cap',
        price: 'Rp 200.000',
        description: 'Stamped batik with beautiful motifs, affordable price.',
        image: 'https://images.unsplash.com/photo-1610652492456-48f6c27c2257?w=400&h=400&fit=crop'
      },
      {
        id: 3,
        name: 'Kemeja Batik Modern',
        price: 'Rp 250.000',
        description: 'Modern batik shirt, suitable for formal and casual occasions.',
        image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop'
      }
    ]
  },
  {
    id: 4,
    name: 'Sambal Kringz Surabaya',
    category: 'Makanan',
    rating: 4.7,
    reviews: 178,
    distance: '1.5 km',
    image: '/4.SambalKringz.jpg',
    description: 'Barbershop dengan gaya modern dan tradisional. Pelayanan ramah.',
    address: 'Jl. Gatot Subroto No. 23, Bandung',
    phone: '0815-4567-8912',
    openHours: '10:00 - 20:00',
    priceRange: 'Rp 25.000 - Rp 75.000',
    isFeatured: false,
    isNew: true,
    instagram: 'sambal_kringz',
    email: 'sambalkringz@gmail.com',
    menuItems: [
      {
        id: 1,
        name: 'Sambal Kringz Original',
        price: 'Rp 25.000',
        description: 'Crispy sambal with medium spicy level, perfect for any meal.',
        image: 'https://images.unsplash.com/photo-1596040033229-a0b3b83a08b2?w=400&h=400&fit=crop'
      },
      {
        id: 2,
        name: 'Sambal Kringz Pedas',
        price: 'Rp 25.000',
        description: 'Extra spicy version for spicy food lovers.',
        image: 'https://images.unsplash.com/photo-1596040033229-a0b3b83a08b2?w=400&h=400&fit=crop'
      },
      {
        id: 3,
        name: 'Paket Sambal Kringz',
        price: 'Rp 65.000',
        description: 'Package of 3 different sambal flavors: original, spicy, and sweet.',
        image: 'https://images.unsplash.com/photo-1596040033229-a0b3b83a08b2?w=400&h=400&fit=crop'
      }
    ]
  },
  {
    id: 5,
    name: 'Te Amo Bakery Surabaya',
    category: 'Makanan',
    rating: 4.5,
    reviews: 134,
    distance: '3.2 km',
    image: '/5.teamobakerysurabaya.jpeg',
    description: 'Produk kerajinan bambu berkualitas: keranjang, hiasan, furniture.',
    address: 'Jl. Raya Bogor No. 156, Depok',
    phone: '0816-5678-9123',
    openHours: '08:00 - 17:00',
    priceRange: 'Rp 20.000 - Rp 500.000',
    isFeatured: false,
    isNew: false,
    instagram: 'te_amo_bakery',
    email: 'teamobakery@gmail.com',
    menuItems: [
      {
        id: 1,
        name: 'Roti Coklat',
        price: 'Rp 12.000',
        description: 'Soft bread with rich chocolate filling.',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop'
      },
      {
        id: 2,
        name: 'Croissant',
        price: 'Rp 18.000',
        description: 'Flaky, buttery French pastry, freshly baked.',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop'
      },
      {
        id: 3,
        name: 'Brownies',
        price: 'Rp 20.000',
        description: 'Rich, fudgy chocolate brownies with walnuts.',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop'
      }
    ]
  },
  {
    id: 6,
    name: 'Cak Cuk Outlet',
    category: 'Fashion',
    rating: 4.4,
    reviews: 298,
    distance: '0.5 km',
    image: '/6.kaos-cak-cuk.jpeg',
    description: 'Bakso bakar dengan bumbu pedas manis yang khas dan nagih.',
    address: 'Jl Dharmawangsa nomor 53-A, Kecamatan Gubeng, Surabaya.',
    phone: '0817-6789-0124',
    openHours: '11:00 - 23:00',
    priceRange: 'Rp 20.000 - Rp 45.000',
    isFeatured: true,
    isNew: false,
    instagram: 'cak_cuk_official',
    email: 'cakcuk@gmail.com',
    menuItems: [
      {
        id: 1,
        name: 'Kaos Cak Cuk Surabaya',
        price: 'Rp 75.000',
        description: 'Premium quality t-shirt with Surabaya iconic design.',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'
      },
      {
        id: 2,
        name: 'Kaos Bonek Pride',
        price: 'Rp 80.000',
        description: 'Official Bonek supporter shirt, high-quality material.',
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop'
      },
      {
        id: 3,
        name: 'Hoodie Cak Cuk',
        price: 'Rp 150.000',
        description: 'Comfortable hoodie with Cak Cuk branding.',
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop'
      }
    ]
  },
  {
    id: 7,
    name: 'Depot Bu Rudy',
    category: 'Makanan',
    rating: 4.3,
    reviews: 167,
    distance: '1.8 km',
    image: '/7.DepotBuRudy.png',
    description: 'Minuman segar dengan berbagai varian: teh, jeruk, kelapa muda.',
    address: 'Jl. Ahmad Yani No. 34, Semarang',
    phone: '0818-7890-1235',
    openHours: '08:00 - 20:00',
    priceRange: 'Rp 5.000 - Rp 25.000',
    isFeatured: false,
    isNew: true,
    instagram: 'depot_bu_rudy',
    email: 'depotburudy@gmail.com',
    menuItems: [
      {
        id: 1,
        name: 'Rawon',
        price: 'Rp 25.000',
        description: 'Traditional black beef soup with authentic spices.',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop'
      },
      {
        id: 2,
        name: 'Soto Ayam',
        price: 'Rp 20.000',
        description: 'Yellow chicken soup with vermicelli and vegetables.',
        image: 'https://images.unsplash.com/photo-1604908815604-68e888a00db7?w=400&h=400&fit=crop'
      },
      {
        id: 3,
        name: 'Nasi Campur',
        price: 'Rp 22.000',
        description: 'Mixed rice with various side dishes.',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=400&fit=crop'
      }
    ]
  },
  {
    id: 8,
    name: 'Konveksi Murah Meriah',
    category: 'Fashion',
    rating: 4.6,
    reviews: 221,
    distance: '2.1 km',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400',
    description: 'Jasa konveksi kaos, seragam, dan sablon dengan harga terjangkau.',
    address: 'Jl. Pemuda No. 67, Malang',
    phone: '0819-8901-2346',
    openHours: '09:00 - 17:00',
    priceRange: 'Rp 30.000 - Rp 200.000',
    isFeatured: false,
    isNew: false,
    instagram: 'konveksi_murahmeriah',
    email: 'konveksimurah@gmail.com',
    menuItems: [
      {
        id: 1,
        name: 'Kaos Custom',
        price: 'Rp 35.000',
        description: 'Custom printed t-shirt with your own design.',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'
      },
      {
        id: 2,
        name: 'Seragam Kantor',
        price: 'Rp 100.000',
        description: 'Professional office uniform, tailored fit.',
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop'
      },
      {
        id: 3,
        name: 'Polo Shirt',
        price: 'Rp 50.000',
        description: 'High-quality polo shirt for corporate events.',
        image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop'
      }
    ]
  },
  {
    id: 9,
    name: 'Laundry Express 24 Jam',
    category: 'Jasa',
    rating: 4.8,
    reviews: 412,
    distance: '0.9 km',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400',
    description: 'Laundry kilat dengan layanan antar jemput. Buka 24 jam.',
    address: 'Jl. Veteran No. 91, Medan',
    phone: '0811-9012-3457',
    openHours: '24 Jam',
    priceRange: 'Rp 5.000/kg',
    isFeatured: false,
    isNew: false,
    instagram: 'laundry_express24',
    email: 'laundryexpress@gmail.com',
    menuItems: [
      {
        id: 1,
        name: 'Cuci Kering',
        price: 'Rp 5.000/kg',
        description: 'Wash and dry service, ready in 6 hours.',
        image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop'
      },
      {
        id: 2,
        name: 'Cuci Setrika',
        price: 'Rp 7.000/kg',
        description: 'Complete wash, dry and iron service.',
        image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop'
      },
      {
        id: 3,
        name: 'Express 3 Jam',
        price: 'Rp 10.000/kg',
        description: 'Super fast service, ready in 3 hours.',
        image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop'
      }
    ]
  },
  {
    id: 10,
    name: 'Anyaman Rotan Berkah',
    category: 'Kerajinan',
    rating: 4.7,
    reviews: 189,
    distance: '2.8 km',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
    description: 'Produk anyaman rotan berkualitas: tas, furniture, dekorasi rumah.',
    address: 'Jl. Diponegoro No. 112, Solo',
    phone: '0812-0123-4568',
    openHours: '08:00 - 16:00',
    priceRange: 'Rp 50.000 - Rp 1.000.000',
    isFeatured: false,
    isNew: true,
    instagram: 'anyaman_rotan_berkah',
    email: 'anyamanrotan@gmail.com',
    menuItems: [
      {
        id: 1,
        name: 'Tas Rotan',
        price: 'Rp 150.000',
        description: 'Handwoven rattan bag, stylish and eco-friendly.',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop'
      },
      {
        id: 2,
        name: 'Kursi Rotan',
        price: 'Rp 500.000',
        description: 'Comfortable rattan chair for living room.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop'
      },
      {
        id: 3,
        name: 'Keranjang Rotan',
        price: 'Rp 75.000',
        description: 'Multi-purpose rattan basket for storage.',
        image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop'
      }
    ]
  },
];

// Kategori untuk filter
export const categories = [
  { id: 'all', name: 'Semua', icon: '🏪' },
  { id: 'makanan', name: 'Makanan', icon: '🍽️' },
  { id: 'minuman', name: 'Minuman', icon: '☕' },
  { id: 'fashion', name: 'Fashion', icon: '👔' },
  { id: 'jasa', name: 'Jasa', icon: '🔧' },
  { id: 'kerajinan', name: 'Kerajinan', icon: '🎨' },
];
