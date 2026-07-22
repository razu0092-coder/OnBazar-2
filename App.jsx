import React, { useState } from 'react';
import HomePage from './HomePage';
import ProductDetail from './ProductDetail';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import { ShoppingBag, Search, Heart, User, Globe, Phone, Mail } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [language, setLanguage] = useState('en');

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
    <div className="min-h-screen flex flex-col bg-slate-100 font-sans text-slate-800">
      
      {/* 1. Top Mini Header */}
      <div className="bg-[#0b1329] text-slate-400 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 hover:text-white cursor-pointer">
              <Phone className="w-3 h-3 text-amber-500" /> 01754441155
            </span>
            <span className="flex items-center gap-1 hover:text-white cursor-pointer">
              <Mail className="w-3 h-3 text-amber-500" /> razu0092@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <button className="hover:text-white">Help</button>
            <button className="hover:text-white">Track Order</button>
            <button 
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-white px-2 py-0.5 rounded text-[11px]"
            >
              <Globe className="w-3 h-3" />
              <span>{language === 'en' ? 'বাংলা' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Middle Header */}
      <header className="bg-[#0b132b] text-white py-3 px-4 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-1 cursor-pointer select-none"
          >
            <div className="bg-amber-500 text-slate-950 font-black rounded-full w-7 h-7 flex items-center justify-center text-sm shadow">
              On
            </div>
            <span className="text-2xl font-black text-white tracking-tight">
              Bazar
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for your desired products..." 
                className="w-full bg-[#1c2541] text-white text-sm placeholder-slate-400 py-2 pl-4 pr-10 rounded-full border border-slate-700 focus:outline-none focus:border-amber-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-2.5" />
            </div>
          </div>

          {/* User Icons */}
          <div className="flex items-center gap-5 text-slate-300">
            <button className="relative hover:text-amber-500 transition-colors">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-amber-500 text-slate-950 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </button>
            <button 
              onClick={() => setCurrentPage('cart')}
              className="relative hover:text-amber-500 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-amber-500 text-slate-950 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">{totalCartCount}</span>
            </button>
            <button className="hover:text-amber-500 transition-colors">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="max-w-7xl mx-auto flex items-center gap-6 mt-3 text-xs font-semibold text-slate-300 pt-2 border-t border-slate-800/60 overflow-x-auto">
          <button onClick={() => setCurrentPage('home')} className="text-amber-500 hover:text-amber-400 border-b-2 border-amber-500 pb-1 whitespace-nowrap">All Catalog</button>
          <button className="hover:text-amber-500 transition-colors whitespace-nowrap">Electronics</button>
          <button className="hover:text-amber-500 transition-colors whitespace-nowrap">Fashion & Clothing</button>
          <button className="hover:text-amber-500 transition-colors whitespace-nowrap">Smart Gadgets</button>
          <button className="hover:text-amber-500 transition-colors whitespace-nowrap">Home Appliances</button>
          <button className="hover:text-amber-500 transition-colors whitespace-nowrap">Beauty & Care</button>
        </div>
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
      <footer className="bg-[#0b1329] text-slate-400 py-8 px-4 mt-12 border-t border-slate-800 text-center text-sm">
        <p>© 2026 OnBazar. All rights reserved.</p>
      </footer>
    </div>
  );
}
