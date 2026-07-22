import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ChevronDown, ChevronUp } from 'lucide-react';

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "কীভাবে অর্ডার প্লেস করব?",
      a: "যে কোনো প্রোডাক্ট পেজ থেকে 'Add to Cart' বাটনে ক্লিক করে চেকআউট পেজে গিয়ে আপনার ঠিকানা দিয়ে সহজে অর্ডার করতে পারবেন।"
    },
    {
      q: "ডেলিভারি পেতে কতদিন সময় লাগে?",
      a: "ঢাকার ভেতরে সাধারণত ২৪-৪৮ ঘণ্টার মধ্যে এবং ঢাকার বাইরে ২-৩ কার্যদিবসের মধ্যে ডেলিভারি করা হয়।"
    },
    {
      q: "পণ্য পছন্দ না হলে কি রিটার্ন করা যাবে?",
      a: "হ্যাঁ, প্রোডাক্ট পাওয়ার ৭ দিনের মধ্যে অরিজিনাল কন্ডিশনে থাকলে আমাদের রিটার্ন পলিসি অনুযায়ী রিটার্ন বা এক্সচেঞ্জ করতে পারবেন।"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">আমাদের সাথে যোগাযোগ করুন</h1>
          <p className="text-slate-500 text-sm sm:text-base">
            আপনার কোনো প্রশ্ন, মতামত বা সহায়তার প্রয়োজন হলে নিচে মেসেজ দিন অথবা সরাসরি কল করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-6">
              <h2 className="text-xl font-bold text-slate-900">যোগাযোগের ঠিকানা</h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase">ফোন নম্বর</h4>
                    <p className="text-slate-800 font-medium text-sm">+880 1700-000000</p>
                    <p className="text-slate-800 font-medium text-sm">+880 1800-000000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase">ইমেইল</h4>
                    <p className="text-slate-800 font-medium text-sm">support@onbazar.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase">অফিস</h4>
                    <p className="text-slate-800 font-medium text-sm">লেভেল ৪, ব্লক-বি, ধানমন্ডি, ঢাকা-১২০৯</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={(e) => { e.preventDefault(); alert('ধন্যবাদ! আপনার বার্তাটি আমরা পেয়েছি।'); }} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-5">
              <h2 className="text-xl font-bold text-slate-900">মেসেজ পাঠান</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">আপনার নাম</label>
                  <input type="text" required placeholder="মোঃ আনিস" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">ইমেইল / মোবাইল</label>
                  <input type="text" required placeholder="example@mail.com" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">বিষয় (Subject)</label>
                <input type="text" required placeholder="আপনার বিষয় লিখুন..." className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">মেসেজ</label>
                <textarea rows={4} required placeholder="বিস্তারিত লিখুন..." className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm" />
              </div>

              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> মেসেজ পাঠান
              </button>
            </form>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center">সাধারণ জিজ্ঞাসা (FAQ)</h2>
          
          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-4 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-emerald-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                {openFaq === idx && (
                  <div className="p-4 bg-slate-50 border-t border-slate-200 text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
