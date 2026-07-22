import React from 'react';
import { Truck, ShieldCheck, Headphones, RefreshCw, ArrowRight } from 'lucide-react';

const HomePage = ({ onProductClick, onAddToCart }) => {
  return (
    <div className="space-y-8 pb-12">
      
      {/* Dark Banner Section */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-[#1c2541] text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="max-w-lg space-y-4 z-10">
            <span className="bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase px-3 py-1 rounded-md tracking-wider">
              MEGA SALE 2026
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Not Just Products; Get the Best Experience
            </h1>
            <p className="text-slate-300 text-sm">
              Get top quality products for your daily life with attractive discounts and fast delivery.
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2.5 rounded-xl shadow transition-all flex items-center gap-2 text-sm mt-2">
              Shop Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Subtle Background Pattern */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none hidden md:block">
            <div className="w-full h-full border-8 border-white rounded-full scale-150 transform translate-x-12"></div>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
            <Truck className="w-8 h-8 text-slate-700" />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Fast Delivery</h4>
              <p className="text-xs text-slate-500">2-3 Days across Bangladesh</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-slate-700" />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">100% Original</h4>
              <p className="text-xs text-slate-500">Guaranteed Authentic Products</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
            <Headphones className="w-8 h-8 text-slate-700" />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">24/7 Support</h4>
              <p className="text-xs text-slate-500">We are here for any assistance</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
            <RefreshCw className="w-8 h-8 text-slate-700" />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Easy Return</h4>
              <p className="text-xs text-slate-500">7 Days Cashback Guarantee</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
