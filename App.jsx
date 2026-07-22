import React, { useState } from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import ContactPage from './ContactPage';
import ProductDetailPage from './ProductDetail';
import { ShoppingBag, Search, Menu, X, Heart, Phone, Mail } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [cart, setCart] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (page, productId = null) => {
    setCurrentPage(page);
    if (productId) setSelectedProductId(productId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: product.quantity || 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 flex justify-between items-center">
        <div>
          <span>📞 হেল্পলাইন: +880 1700-000000 | ২৪/৭ কাস্টমার সাপোর্ট</span>
        </div>
        <div className="hidden sm:flex gap-4">
          <span>সারাদেশে হোম ডেলিভারি সুবিধা</span>
        </div>
      </div>

      {/* Main Header / Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavigate('home')} 
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="bg-emerald-600 text-white font-black text-xl p-2 rounded-lg">
              অন
            </div>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">
              অনলাইন<span className="text-emerald-600">বাজার</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            <button 
              onClick={() => handleNavigate('home')}
              className={`hover:text-emerald-600 transition-colors ${currentPage === 'home' ? 'text-emerald-600' : ''}`}
            >
              হোম (Home)
            </button>
            <button 
              onClick={() => handleNavigate('about')}
              className={`hover:text-emerald-600 transition-colors ${currentPage === 'about' ? 'text-emerald-600' : ''}`}
            >
              আমাদের সম্পর্কে
            </button>
            <button 
              onClick={() => handleNavigate('contact')}
              className={`hover:text-emerald-600 transition-colors ${currentPage === 'contact' ? 'text-emerald-600' : ''}`}
            >
              যোগাযোগ
            </button>
          </nav>

          {/* Header Action Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button 
              onClick={() => handleNavigate('cart')}
              className="relative p-2 text-slate-700 hover:text-emerald-600 transition-colors"
              title="Cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-3">
            <button 
              onClick={() => handleNavigate('home')}
              className="block w-full text-left py-2 font-semibold text-slate-700 border-b border-slate-100"
            >
              হোম (Home)
            </button>
            <button 
              onClick={() => handleNavigate('about')}
              className="block w-full text-left py-2 font-semibold text-slate-700 border-b border-slate-100"
            >
              আমাদের সম্পর্কে
            </button>
            <button 
              onClick={() => handleNavigate('contact')}
              className="block w-full text-left py-2 font-semibold text-slate-700"
            >
              যোগাযোগ
            </button>
          </div>
        )}
      </header>

      {/* Dynamic Content Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onAddToCart={handleAddToCart} />
        )}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'cart' && (
          <CartPage 
            cartItems={cart} 
            onUpdateQuantity={handleUpdateQuantity} 
            onRemoveItem={handleRemoveItem}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'checkout' && (
          <CheckoutPage 
            cartItems={cart} 
            onClearCart={handleClearCart} 
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'product-detail' && (
          <ProductDetailPage 
            productId={selectedProductId} 
            onAddToCart={handleAddToCart}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <span className="text-xl font-extrabold text-white">অনলাইন<span className="text-emerald-500">বাজার</span></span>
            <p className="text-xs leading-relaxed text-slate-400">
              বাংলাদেশের সেরা ও নির্ভরযোগ্য অনলাইন ই-কমার্স শপ। সঠিক পণ্য সঠিক দামে পৌঁছে দেওয়াই আমাদের অঙ্গীকার।
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => handleNavigate('home')} className="hover:text-white">হোম</button></li>
              <li><button onClick={() => handleNavigate('about')} className="hover:text-white">আমাদের গল্প</button></li>
              <li><button onClick={() => handleNavigate('contact')} className="hover:text-white">যোগাযোগ</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">গ্রাহক সেবা</h4>
            <ul className="space-y-2 text-xs">
              <li><span>রিটার্ন ও রিফান্ড পলিসি</span></li>
              <li><span>টার্মস ও কন্ডিশনস</span></li>
              <li><span>প্রাইভেসি পলিসি</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">হেল্পলাইন</h4>
            <p className="text-xs text-slate-400">সকাল ৯টা - রাত ১০টা</p>
            <p className="text-emerald-400 font-bold text-sm mt-1">+880 1700-000000</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} অনলাইন বাজার (OnBazar). All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
