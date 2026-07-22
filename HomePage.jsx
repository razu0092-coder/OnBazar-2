import React, { useState } from 'react';
import { ShoppingCart, Heart, Search, Star, ArrowRight, ShieldCheck, Truck, RefreshCw, Headphones, Eye } from 'lucide-react';

const HomePage = ({ onNavigate, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Fashion', 'Home & Living', 'Beauty', 'Gadgets'];

  const featuredProducts = [
    {
      id: '1',
      title: 'Wireless Noise Canceling Headphones',
      price: 4500,
      originalPrice: 5500,
      rating: 4.8,
      reviewsCount: 124,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
      badge: 'Best Seller',
      category: 'Electronics'
    },
    {
      id: '2',
      title: 'Smart Fitness Watch Series 7',
      price: 3200,
      originalPrice: 4000,
      rating: 4.6,
      reviewsCount: 89,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
      badge: '15% OFF',
      category: 'Gadgets'
    },
    {
      id: '3',
      title: 'Ergonomic Premium Leather Chair',
      price: 12500,
      originalPrice: 15000,
      rating: 4.9,
      reviewsCount: 56,
      image: 'https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?w=500&q=80',
      badge: 'Popular',
      category: 'Home & Living'
    },
    {
      id: '4',
      title: 'Minimalist Canvas Backpack',
      price: 1850,
      originalPrice: 2200,
      rating: 4.5,
      reviewsCount: 42,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
      badge: 'New',
      category: 'Fashion'
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? featuredProducts 
    : featuredProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Hero Banner Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="bg-emerald-500/30 text-emerald-100 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Special Eid Offer
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              অনলাইন বাজারের সাথে সেরা কেনাকাটার অভিজ্ঞতা
            </h1>
            <p className="text-emerald-100 text-lg">
              সেরা মানের গ্যাজেট, ফ্যাশন এবং গৃহস্থালি পণ্য কিনুন আকর্ষণীয় ছাড় ও দ্রুততম ডেলিভারিতে।
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => onNavigate('products')}
                className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold px-6 py-3 rounded-lg shadow-md transition-all flex items-center gap-2"
              >
                শপিং শুরু করুন <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80" 
              alt="Hero Shopping" 
              className="rounded-2xl shadow-2xl object-cover max-h-96 w-full max-w-md border-4 border-white/20"
            />
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-6 rounded-xl shadow-lg border border-slate-100">
          <div className="flex items-center space-x-4 p-2">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">দ্রুত ডেলিভারি</h4>
              <p className="text-xs text-slate-500">সারাদেশে ২-৩ দিনে হোম ডেলিভারি</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-2">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">১০০% আসল পণ্য</h4>
              <p className="text-xs text-slate-500">অরিজিনাল ব্র্যান্ড ওয়্যারেন্টি</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-2">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">সহজ রিটার্ন পলিসি</h4>
              <p className="text-xs text-slate-500">৭ দিনের মধ্যে রিটার্ন সুবিধা</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-2">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">২৪/৭ সাপোর্ট</h4>
              <p className="text-xs text-slate-500">যে কোনো প্রয়োজনে কাস্টমার সেবা</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter & Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">জনপ্রিয় প্রোডাক্টস</h2>
            <p className="text-slate-500 text-sm mt-1">আমাদের সেরা এবং টপ রেটেড কালেকশন</p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 overflow-hidden flex flex-col group"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
                  {product.badge}
                </span>
                <button 
                  onClick={() => onNavigate('product-detail', product.id)}
                  className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-slate-700 p-2 rounded-full shadow transition-all opacity-0 group-hover:opacity-100"
                  title="Quick View"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1 text-amber-400 mb-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                    <span className="text-xs text-slate-400">({product.reviewsCount})</span>
                  </div>
                  <h3 
                    onClick={() => onNavigate('product-detail', product.id)}
                    className="font-semibold text-slate-800 text-sm hover:text-emerald-600 cursor-pointer line-clamp-2 transition-colors"
                  >
                    {product.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-slate-900">৳{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-slate-400 line-through ml-1.5">
                        ৳{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <button 
                    onClick={() => onAddToCart(product)}
                    className="bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white p-2.5 rounded-lg transition-all duration-200"
                    title="Add to Cart"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
