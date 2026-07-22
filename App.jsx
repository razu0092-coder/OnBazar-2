import React, { useState } from 'react';
import HomePage from './HomePage';
import ProductDetail from './ProductDetail';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import { ShoppingBag, Menu, X, Phone, Globe } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('bn'); // 'bn' for Bangla, 'en' for English

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentPage('productDetail');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      
      {/* 1. Top Banner Bar (Dark Background) */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>
              {language === 'bn' 
                ? 'হেল্পলাইন: +880 1700-000000 (২৪/৭ সাপোর্ট)' 
                : 'Helpline: +880 1700-000000 (24/7 Support)'}
            </span>
          </div>
          <div>
            <span>
              {language === 'bn' 
                ? 'সারাদেশে হোম ডেলিভারি সুবিধা' 
                : 'Nationwide Home Delivery Available'}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar (Dark Color Theme) */}
      <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo (Updated & Fixed Design) */}
          <div 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 cursor-pointer select-none group"
          >
            <div className="bg-emerald-500 text-slate-950 font-black text-xl px-2.5 py-1 rounded-lg shadow-sm group-hover:bg-emerald-400 transition-colors">
              ON
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold text-white tracking-tight leading-none">
                অনলাইন<span className="text-emerald-400">বাজার</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase mt-0.5">
                OnBazar.com
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-200">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`hover:text-emerald-400 transition-colors ${currentPage === 'home' ? 'text-emerald-400 font-semibold' : ''}`}
            >
              {language === 'bn' ? 'হোম' : 'Home'}
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className={`hover:text-emerald-400 transition-colors ${currentPage === 'about' ? 'text-emerald-400 font-semibold' : ''}`}
            >
              {language === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className={`hover:text-emerald-400 transition-colors ${currentPage === 'contact' ? 'text-emerald-400 font-semibold' : ''}`}
            >
              {language === 'bn' ? 'যোগাযোগ' : 'Contact'}
            </button>
          </nav>

          {/* Actions: Language Switcher & Cart */}
          <div className="flex items-center gap-4">
            
            {/* Language Switcher Button */}
            <button 
              onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-700 transition-colors"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
            </button>

            {/* Cart Icon */}
            <button 
              onClick={() => setCurrentPage('cart')}
              className="relative p-2 text-slate-200 hover:text-emerald-400 transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-500 text-slate-950 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700 px-4 pt-2 pb-4 space-y-2">
            <button 
              onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-slate-200 font-medium hover:text-emerald-400"
            >
              {language === 'bn' ? 'হোম' : 'Home'}
            </button>
            <button 
              onClick={() => { setCurrentPage('about'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-slate-200 font-medium hover:text-emerald-400"
            >
              {language === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}
            </button>
            <button 
              onClick={() => { setCurrentPage('contact'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-slate-200 font-medium hover:text-emerald-400"
            >
              {language === 'bn' ? 'যোগাযোগ' : 'Contact'}
            </button>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage 
            onProductClick={handleProductClick} 
            onAddToCart={addToCart} 
          />
        )}
        {currentPage === 'productDetail' && selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onAddToCart={addToCart}
            onBack={() => setCurrentPage('home')}
          />
        )}
        {currentPage === 'cart' && (
          <CartPage 
            cart={cart} 
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            onProceedToCheckout={() => setCurrentPage('checkout')}
            onContinueShopping={() => setCurrentPage('home')}
          />
        )}
        {currentPage === 'checkout' && (
          <CheckoutPage 
            cart={cart}
            onSuccess={() => {
              setCart([]);
              setCurrentPage('home');
            }}
          />
        )}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4 mt-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <p>© 2026 অনলাইন বাজার (OnBazar)। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </footer>
    </div>
  );
}
