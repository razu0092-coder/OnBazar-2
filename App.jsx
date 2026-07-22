import React, { useState } from 'react';
import HomePage from './HomePage';
import ProductDetail from './ProductDetail';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import { ShoppingBag, Menu, X, Phone } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      {/* Top Banner Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>হেল্পলাইন: +880 1700-000000 (২৪/৭ সাপোর্ট)</span>
          </div>
          <div>
            <span>সারাদেশে হোম ডেলিভারি সুবিধা</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <div className="bg-emerald-600 text-white font-bold text-xl px-3 py-1 rounded-lg">
              অন
            </div>
            <span className="text-xl font-extrabold text-slate-800 tracking-tight">
              অনলাইন<span className="text-emerald-600">বাজার</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`hover:text-emerald-600 transition-colors ${currentPage === 'home' ? 'text-emerald-600 font-semibold' : 'text-slate-600'}`}
            >
              হোম (Home)
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className={`hover:text-emerald-600 transition-colors ${currentPage === 'about' ? 'text-emerald-600 font-semibold' : 'text-slate-600'}`}
            >
              আমাদের সম্পর্কে
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className={`hover:text-emerald-600 transition-colors ${currentPage === 'contact' ? 'text-emerald-600 font-semibold' : 'text-slate-600'}`}
            >
              যোগাযোগ
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <button 
              onClick={() => setCurrentPage('cart')}
              className="relative p-2 text-slate-700 hover:text-emerald-600 transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2">
            <button 
              onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-slate-700 font-medium"
            >
              হোম (Home)
            </button>
            <button 
              onClick={() => { setCurrentPage('about'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-slate-700 font-medium"
            >
              আমাদের সম্পর্কে
            </button>
            <button 
              onClick={() => { setCurrentPage('contact'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-slate-700 font-medium"
            >
              যোগাযোগ
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
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 mt-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <p>© 2026 অনলাইন বাজার (OnBazar)। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </footer>
    </div>
  );
}
