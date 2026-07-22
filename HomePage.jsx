import React from 'react';
import { Truck, ShieldCheck, Headphones, RefreshCw, ArrowRight, Star, Plus, Facebook, Instagram, Youtube } from 'lucide-react';

const products = [
  { id: 1, name_bn: "ওয়ারলেস প্রিমিয়াম ব্লুটুথ হেডফোন", name_en: "Wireless Premium Bluetooth Headphones", cat_bn: "ইলেকট্রনিক্স", cat_en: "Electronics", price: 2450, oldPrice: 3200, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80", badge_bn: "২০% ছাড়", badge_en: "20% OFF" },
  { id: 2, name_bn: "স্মার্ট ফিটনেস ওয়াচ উইথ হার্ট রেট সেন্সর", name_en: "Smart Fitness Watch with Heart Rate Sensor", cat_bn: "গ্যাজেট", cat_en: "Gadget", price: 1850, oldPrice: 2500, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80", badge_bn: "হট", badge_en: "HOT" },
  { id: 3, name_bn: "ক্লাসিক রানিং স্পোর্টস শু", name_en: "Classic Running Sports Shoes", cat_bn: "ফ্যাশন", cat_en: "Fashion", price: 3100, oldPrice: 4200, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80", badge_bn: "বেস্ট সেলার", badge_en: "BESTSELLER" },
  { id: 4, name_bn: "মিনিমালিস্ট ডেস্কে সাজানোর ডিজিটাল ঘড়ি", name_en: "Minimalist Desktop Digital Clock", cat_bn: "হোম অ্যাপ্লায়েন্স", cat_en: "Home Appliance", price: 1200, oldPrice: 1500, image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=500&q=80", badge_bn: null, badge_en: null },
  { id: 5, name_bn: "অর্গানিক স্কিন কেয়ার ময়েশ্চারাইজার", name_en: "Organic Skincare Moisturizer", cat_bn: "বিউটি", cat_en: "Beauty", price: 950, oldPrice: 1300, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80", badge_bn: "নতুন", badge_en: "NEW" },
  { id: 6, name_bn: "পোর্টেবল ওয়াটারপ্রুফ ব্লুটুথ স্পিকার", name_en: "Portable Waterproof Bluetooth Speaker", cat_bn: "ইলেকট্রনিক্স", cat_en: "Electronics", price: 2800, oldPrice: 3500, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80", badge_bn: "১৫% ছাড়", badge_en: "15% OFF" },
  { id: 7, name_bn: "লেদার প্রিমিয়াম ট্রাভেল ব্যাকপ্যাক", name_en: "Leather Premium Travel Backpack", cat_bn: "ফ্যাশন", cat_en: "Fashion", price: 2200, oldPrice: 2900, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80", badge_bn: null, badge_en: null },
  { id: 8, name_bn: "প্রফেশনাল স্টুডিও মাইক্রোফোন", name_en: "Professional Studio Recording Microphone", cat_bn: "গ্যাজেট", cat_en: "Gadget", price: 3500, oldPrice: 4500, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80", badge_bn: "হট", badge_en: "HOT" }
];

const HomePage = ({ onProductClick, onAddToCart, language }) => {
  const isBn = language === 'bn';

  return (
    <div className="space-y-12 pb-12">
      
      {/* HERO BANNER */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-[#1c2541] text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="max-w-lg space-y-4 z-10">
            <span className="bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase px-3 py-1 rounded-md tracking-wider">
              {isBn ? 'মেগা সেল ২০২৬' : 'MEGA SALE 2026'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              {isBn ? 'শুধু পন্য নয়; নিন সেরা অভিজ্ঞতা' : 'Not Just Products; Get the Best Experience'}
            </h1>
            <p className="text-slate-300 text-sm">
              {isBn ? 'আপনার দৈনন্দিন জীবনের প্রয়োজনীয় সব সেরা কোয়ালিটির প্রোডাক্ট পান আকর্ষণীয় ছাড় ও দ্রুত ডেলিভারিতে।' : 'Get top quality products for your daily life with attractive discounts and fast delivery.'}
            </p>
            <a href="#products" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2.5 rounded-xl shadow transition-all text-sm mt-2">
              {isBn ? 'এখনই কেনাকাটা করুন' : 'Shop Now'} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none hidden md:block">
            <div className="w-full h-full border-8 border-white rounded-full scale-150 transform translate-x-12"></div>
          </div>
        </div>
      </section>

      {/* SERVICE FEATURES */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
            <Truck className="w-8 h-8 text-slate-700" />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">{isBn ? 'দ্রুত ডেলিভারি' : 'Fast Delivery'}</h4>
              <p className="text-xs text-slate-500">{isBn ? 'সমগ্র বাংলাদেশে ২-৩ দিনে' : '2-3 Days across Bangladesh'}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-slate-700" />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">{isBn ? '১০০% অরিজিনাল' : '100% Original'}</h4>
              <p className="text-xs text-slate-500">{isBn ? 'গ্যারান্টিযুক্ত পণ্য' : 'Guaranteed Authentic Products'}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
            <Headphones className="w-8 h-8 text-slate-700" />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">{isBn ? '২৪/৭ সাপোর্ট' : '24/7 Support'}</h4>
              <p className="text-xs text-slate-500">{isBn ? 'যেকোনো সহায়তায় আমরা আছি' : 'We are here for any assistance'}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
            <RefreshCw className="w-8 h-8 text-slate-700" />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">{isBn ? 'সহজ রিটার্ন' : 'Easy Return'}</h4>
              <p className="text-xs text-slate-500">{isBn ? '৭ দিনের ক্যাশব্যাক গ্যারান্টি' : '7 Days Cashback Guarantee'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-800 border-b-2 border-amber-500 inline-block pb-1">
            {isBn ? 'জনপ্রিয় ক্যাটাগরি' : 'Popular Categories'}
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group text-center p-3">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80" alt="Electronics" className="w-full h-28 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
            <h3 className="font-semibold text-sm text-slate-800 mt-3">{isBn ? 'ইলেকট্রনিক্স' : 'Electronics'}</h3>
          </div>
          <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group text-center p-3">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80" alt="Smart Watch" className="w-full h-28 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
            <h3 className="font-semibold text-sm text-slate-800 mt-3">{isBn ? 'স্মার্ট ওয়াচ' : 'Smart Watch'}</h3>
          </div>
          <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group text-center p-3">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" alt="Fashion" className="w-full h-28 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
            <h3 className="font-semibold text-sm text-slate-800 mt-3">{isBn ? 'জুতো ও ফ্যাশন' : 'Shoes & Fashion'}</h3>
          </div>
          <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group text-center p-3">
            <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80" alt="Beauty" className="w-full h-28 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
            <h3 className="font-semibold text-sm text-slate-800 mt-3">{isBn ? 'বিউটি কেয়ার' : 'Beauty Care'}</h3>
          </div>
        </div>
      </section>

      {/* TRENDING PRODUCTS */}
      <section id="products" className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-800 border-b-2 border-amber-500 inline-block pb-1">
            {isBn ? 'ট্রেন্ডিং প্রোডাক্টস' : 'Trending Products'}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((prod) => {
            const name = isBn ? prod.name_bn : prod.name_en;
            const cat = isBn ? prod.cat_bn : prod.cat_en;
            const badge = isBn ? prod.badge_bn : prod.badge_en;

            return (
              <div key={prod.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col overflow-hidden group">
                <div className="relative h-48 bg-slate-100 overflow-hidden cursor-pointer" onClick={() => onProductClick && onProductClick(prod)}>
                  {badge && (
                    <span className="absolute top-2 left-2 bg-amber-500 text-slate-950 font-bold text-[10px] px-2 py-0.5 rounded shadow z-10">
                      {badge}
                    </span>
                  )}
                  <img src={prod.image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-1">{cat}</span>
                  <h3 className="font-bold text-slate-800 text-sm line-clamp-2 cursor-pointer hover:text-amber-600 transition-colors" onClick={() => onProductClick && onProductClick(prod)}>
                    {name}
                  </h3>
                  <div className="flex items-center gap-1 text-amber-400 my-2 text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="text-slate-400 ml-1 text-[11px]">(4.8)</span>
                  </div>
                  <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900 text-base">৳ {prod.price}</span>
                      {prod.oldPrice && (
                        <span className="text-xs text-slate-400 line-through ml-2">৳ {prod.oldPrice}</span>
                      )}
                    </div>
                    <button 
                      onClick={() => onAddToCart && onAddToCart(prod)}
                      className="bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 p-2 rounded-full transition-colors"
                      title="Add to Cart"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* DEAL OF THE DAY BANNER */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-amber-500">
              {isBn ? 'দিনের সেরা অফার!' : 'Deal of the Day!'}
            </h3>
            <p className="text-slate-300 text-sm max-w-md">
              {isBn ? 'প্রিমিয়াম নয়েজ ক্যানসেলিং হেডফোনে পাচ্ছেন বিশেষ ৪৫% ফ্ল্যাট ডিসকাউন্ট। স্টক সীমিত!' : 'Get a special 45% flat discount on Premium Noise-Canceling Headphones. Limited stock!'}
            </p>
          </div>
          
          <div className="flex gap-3">
            <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg text-center min-w-[55px]">
              <span className="block font-bold text-lg text-amber-400">08</span>
              <span className="text-[10px] uppercase text-slate-300">{isBn ? 'ঘন্টা' : 'Hrs'}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg text-center min-w-[55px]">
              <span className="block font-bold text-lg text-amber-400">45</span>
              <span className="text-[10px] uppercase text-slate-300">{isBn ? 'মিঃ' : 'Min'}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg text-center min-w-[55px]">
              <span className="block font-bold text-lg text-amber-400">12</span>
              <span className="text-[10px] uppercase text-slate-300">{isBn ? 'সেঃ' : 'Sec'}</span>
            </div>
          </div>

          <a href="#products" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2.5 rounded-xl shadow transition-all text-sm whitespace-nowrap">
            {isBn ? 'অফারটি নিন' : 'Grab Deal'}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b1329] text-slate-400 pt-12 pb-6 px-4 border-t border-slate-800 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-1 select-none">
              <div className="bg-amber-500 text-slate-950 font-black rounded-full w-6 h-6 flex items-center justify-center text-xs">On</div>
              <span className="text-xl font-black text-white">Bazar</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isBn ? 'শুধু পন্য নয়; নিন সেরা অভিজ্ঞতা। আপনার বিশ্বস্ত অনলাইন শপিং পার্টনার।' : 'Not just products; get the best experience. Your trusted online shopping partner.'}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">{isBn ? 'দ্রুত লিঙ্ক' : 'Quick Links'}</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-amber-500">{isBn ? 'হোম' : 'Home'}</a></li>
              <li><a href="#products" className="hover:text-amber-500">{isBn ? 'শপ' : 'Shop'}</a></li>
              <li><a href="#" className="hover:text-amber-500">{isBn ? 'আমাদের সম্পর্কে' : 'About Us'}</a></li>
              <li><a href="#" className="hover:text-amber-500">{isBn ? 'যোগাযোগ' : 'Contact Us'}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">{isBn ? 'কাস্টমার কেয়ার' : 'Customer Care'}</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-amber-500">{isBn ? 'রিফান্ড পলিসি' : 'Refund Policy'}</a></li>
              <li><a href="#" className="hover:text-amber-500">{isBn ? 'টার্মস ও কন্ডিশন' : 'Terms & Conditions'}</a></li>
              <li><a href="#" className="hover:text-amber-500">{isBn ? 'শিপিং চার্জ' : 'Shipping Charges'}</a></li>
              <li><a href="#" className="hover:text-amber-500">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">{isBn ? 'সোশ্যাল মিডিয়া' : 'Social Media'}</h4>
            <div className="flex gap-4 text-slate-300">
              <a href="https://www.facebook.com/OnBazar.Daka/" target="_blank" rel="noreferrer" className="hover:text-amber-500">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-amber-500">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-amber-500">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 OnBazar. {isBn ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}</p>
        </div>
      </footer>

    </div>
  );
};

export default HomePage;
