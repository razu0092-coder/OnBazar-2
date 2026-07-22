import React, { useState } from 'react';
import { Star, ShoppingCart, ShieldCheck, Truck, RefreshCw, Heart, Share2, Check } from 'lucide-react';

const ProductDetailPage = ({ productId, onAddToCart, onNavigate }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Mock product data
  const product = {
    id: productId || '1',
    title: 'Wireless Noise Canceling Premium Headphones',
    price: 4500,
    originalPrice: 5500,
    rating: 4.8,
    reviewsCount: 124,
    description: 'উচ্চমানের আকুস্টিক ফিল্টার এবং সুপিরিয়র বেস ফিচারযুক্ত হেডফোন। এতে রয়েছে দীর্ঘস্থায়ী ব্যাটারি ব্যাকআপ ও আরামদায়ক ইয়ারপ্যাড।',
    specs: [
      { key: 'Bluetooth Version', value: 'v5.3' },
      { key: 'Battery Backup', value: 'Up to 30 Hours' },
      { key: 'Charging Time', value: '1.5 Hours' },
      { key: 'Warranty', value: '1 Year Brand Warranty' }
    ],
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80'
    ],
    reviews: [
      { id: 1, user: 'রাশেদুল ইসলাম', rating: 5, date: '১০ জুলাই ২০২৪', comment: 'প্রোডাক্টের কোয়ালিটি চমৎকার! সাউন্ড বেস খুব ভালো।' },
      { id: 2, user: 'ফারহানা আহমেদ', rating: 4, date: '০৫ জুলাই ২০২৪', comment: 'ডেলিভারি দ্রুত পেয়েছি, প্যাকেটজাতকরণ খুব ভালো ছিল।' }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Product Overview Section */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Images Gallery */}
          <div className="md:col-span-6 space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src={product.images[selectedImage]} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 rounded-lg border-2 overflow-hidden ${
                    selectedImage === idx ? 'border-emerald-600' : 'border-slate-200'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details & Actions */}
          <div className="md:col-span-6 space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-amber-400 mb-2">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-bold text-slate-800 text-sm">{product.rating}</span>
                <span className="text-slate-400 text-xs">({product.reviewsCount} টি রিভিও)</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                {product.title}
              </h1>
            </div>

            <div className="flex items-baseline space-x-3">
              <span className="text-3xl font-extrabold text-emerald-600">৳{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-slate-400 line-through text-lg">৳{product.originalPrice.toLocaleString()}</span>
              )}
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">{product.description}</p>

            {/* Quantity Selector & Add to Cart */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-semibold text-slate-700">পরিমাণ:</span>
                <div className="flex items-center border border-slate-300 rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 rounded-l-lg font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 font-bold text-slate-900">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 rounded-r-lg font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button 
                  onClick={() => onAddToCart({ ...product, quantity })}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" /> কার্টে যোগ করুন
                </button>
                <button 
                  onClick={() => {
                    onAddToCart({ ...product, quantity });
                    onNavigate('checkout');
                  }}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl transition-colors"
                >
                  এখনই কিনুন
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 text-center text-xs text-slate-600">
              <div className="p-2 bg-slate-50 rounded-lg">
                <Truck className="w-4 h-4 mx-auto text-emerald-600 mb-1" />
                <span>দ্রুত ডেলিভারি</span>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg">
                <ShieldCheck className="w-4 h-4 mx-auto text-emerald-600 mb-1" />
                <span>অরিজিনাল গ্যারান্টি</span>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg">
                <RefreshCw className="w-4 h-4 mx-auto text-emerald-600 mb-1" />
                <span>৭ দিন রিটার্ন</span>
              </div>
            </div>

          </div>
        </div>

        {/* Tabbed Info Section (Description, Specs, Reviews) */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="flex border-b border-slate-200 bg-slate-50">
            <button 
              onClick={() => setActiveTab('description')}
              className={`px-6 py-4 font-bold text-sm transition-colors ${
                activeTab === 'description' ? 'bg-white text-emerald-600 border-b-2 border-emerald-600' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              বিস্তারিত বর্ণনা
            </button>
            <button 
              onClick={() => setActiveTab('specs')}
              className={`px-6 py-4 font-bold text-sm transition-colors ${
                activeTab === 'specs' ? 'bg-white text-emerald-600 border-b-2 border-emerald-600' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              স্পেসিফিকেশন
            </button>
            <button 
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-4 font-bold text-sm transition-colors ${
                activeTab === 'reviews' ? 'bg-white text-emerald-600 border-b-2 border-emerald-600' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              কাস্টমার রিভিউ ({product.reviews.length})
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {activeTab === 'description' && (
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>{product.description}</p>
                <p>আমাদের যেকোনো গ্যাজেটে রয়েছে শতভাগ জেনুইন পারফরম্যান্সের নিশ্চয়তা।</p>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="max-w-md">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    {product.specs.map((spec, idx) => (
                      <tr key={idx} className="border-b border-slate-100">
                        <td className="py-3 font-semibold text-slate-700">{spec.key}</td>
                        <td className="py-3 text-slate-500">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-extrabold text-slate-900">{product.rating}</div>
                  <div>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400">সর্বমোট {product.reviewsCount} টি মূল্যায়নের ওপর ভিত্তি করে</span>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  {product.reviews.map((rev) => (
                    <div key={rev.id} className="bg-slate-50 p-4 rounded-xl space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-900 text-sm">{rev.user}</span>
                        <span className="text-xs text-slate-400">{rev.date}</span>
                      </div>
                      <p className="text-slate-600 text-xs">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailPage;
