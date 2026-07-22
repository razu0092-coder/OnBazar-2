import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, MapPin, Phone, User, CreditCard } from 'lucide-react';

const CheckoutPage = ({ cartItems, onClearCart, onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'Dhaka',
    paymentMethod: 'cod'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = formData.city === 'Dhaka' ? 60 : 120;
  const total = subtotal + deliveryFee;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    onClearCart();
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16">
        <div className="text-center space-y-6 max-w-md bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">আপনার অর্ডারটি সফল হয়েছে!</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            ধন্যবাদ, <span className="font-semibold text-slate-900">{formData.name}</span>! আমরা দ্রুত আপনার সাথে যোগাযোগ করব।
          </p>
          <div className="bg-slate-50 p-4 rounded-xl text-left text-xs space-y-1 border border-slate-200">
            <p><span className="text-slate-400">ফোন নাম্বার:</span> {formData.phone}</p>
            <p><span className="text-slate-400">ঠিকানা:</span> {formData.address}, {formData.city}</p>
            <p><span className="text-slate-400">পেমেন্ট মেথড:</span> {formData.paymentMethod === 'cod' ? 'ক্যাশ অন ডেলিভারি' : 'বিকাশ / নগদ'}</p>
          </div>
          <button 
            onClick={() => onNavigate('home')}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            হোম পেজে ফিরে যান
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-8">চেকআউট (Order Checkout)</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Shipping & Billing Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <User className="w-5 h-5 text-emerald-600" /> গ্রাহকের তথ্য
              </h2>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">আপনার পূর্ণ নাম</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="যেমন: মোঃ রহিম হোসেন"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">মোবাইল নম্বর</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  placeholder="017XXXXXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">ডেলিভারি এরিয়া</label>
                <select 
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
                >
                  <option value="Dhaka">ঢাকার ভেতরে (৳৬০)</option>
                  <option value="Outside Dhaka">ঢাকার বাইরে (৳১২০)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">সম্পূর্ণ ঠিকানা</label>
                <textarea 
                  name="address"
                  required
                  rows={3}
                  placeholder="বাসা/রোড নম্বর, এরিয়ার নাম, এলাকা..."
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-emerald-600" /> পেমেন্ট পদ্ধতি
              </h2>

              <div className="space-y-3">
                <label className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all ${
                  formData.paymentMethod === 'cod' ? 'border-emerald-600 bg-emerald-50/50' : 'border-slate-200'
                }`}>
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="cod" 
                    checked={formData.paymentMethod === 'cod'} 
                    onChange={handleChange}
                    className="text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="ml-3 font-semibold text-slate-800 text-sm">ক্যাশ অন ডেলিভারি (Cash on Delivery)</span>
                </label>

                <label className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all ${
                  formData.paymentMethod === 'bkash' ? 'border-emerald-600 bg-emerald-50/50' : 'border-slate-200'
                }`}>
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="bkash" 
                    checked={formData.paymentMethod === 'bkash'} 
                    onChange={handleChange}
                    className="text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="ml-3 font-semibold text-slate-800 text-sm">বিকাশ / নগদ (Online Payment)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary Side Card */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-6 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">অর্ডারের বিশদ বিবরণ</h2>

              <div className="space-y-3 max-h-60 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <span className="text-slate-700 line-clamp-1">{item.title} × {item.quantity}</span>
                    <span className="font-semibold text-slate-900">৳{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>সাবটোটাল</span>
                  <span>৳{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>ডেলিভারি ফিশ</span>
                  <span>৳{deliveryFee}</span>
                </div>
                <div className="border-t border-slate-100 pt-2 flex justify-between text-lg font-bold text-slate-900">
                  <span>সর্বমোট</span>
                  <span className="text-emerald-600">৳{total.toLocaleString()}</span>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl transition-colors shadow-md"
              >
                অর্ডার নিশ্চিত করুন
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Safe & Secure Checkout
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
