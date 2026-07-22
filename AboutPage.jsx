import React from 'react';
import { Target, Users, Award, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header Banner */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
            আমাদের গল্প
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            অনলাইন বাজার (OnBazar)-এ আপনাকে স্বাগতম
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            আমরা বিশ্বাস করি কেনাকাটা হওয়া উচিত সহজ, নির্ভরযোগ্য এবং আনন্দদায়ক। ২০২০ সাল থেকে আমরা গুণগত মানসম্পন্ন পণ্য সবার ঘরে পৌঁছে দিতে কাজ করে যাচ্ছি।
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4 hover:shadow-md transition-shadow">
            <div className="p-3 bg-emerald-100 text-emerald-700 w-fit rounded-xl">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">আমাদের লক্ষ্য (Mission)</h3>
            <p className="text-slate-600 leading-relaxed">
              গ্রাহকদের হাতের নাগালে আসল পণ্য, সঠিক মূল্য এবং দ্রুততম সময়ে হোম ডেলিভারি নিশ্চিত করা। প্রযুক্তিকে কাজে লাগিয়ে অনলাইন শপিংকে আরও বেশি বিশ্বাসযোগ্য করে তোলাই আমাদের মূল উদ্দেশ্য।
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4 hover:shadow-md transition-shadow">
            <div className="p-3 bg-teal-100 text-teal-700 w-fit rounded-xl">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">আমাদের ভিশন (Vision)</h3>
            <p className="text-slate-600 leading-relaxed">
              বাংলাদেশের এক নম্বর বিশ্বস্ত ই-কমার্স প্ল্যাটফর্মে পরিণত হওয়া, যেখানে কাস্টমার সন্তুষ্টি হবে আমাদের অর্জনের সেরা মাপকাঠি।
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">কেন অনবুল বাজার বেছে নেবেন?</h2>
            <p className="text-slate-500 mt-2">আমাদের বিশেষত্ব ও সেবা যা আপনাকে দেবে সেরা অভিজ্ঞতা</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-3">
              <div className="mx-auto p-3 bg-emerald-50 text-emerald-600 rounded-full w-12 h-12 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-slate-900">১০০% গ্যারান্টিড আসল প্রডাক্ট</h4>
              <p className="text-slate-500 text-sm">আমরা সরাসরি অথোরাইজড ভেন্ডর ও ইম্পোর্টার থেকে পণ্য সংগ্রহ করি।</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-3">
              <div className="mx-auto p-3 bg-emerald-50 text-emerald-600 rounded-full w-12 h-12 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-slate-900">কাস্টমার ফ্রেন্ডলি রিফান্ড</h4>
              <p className="text-slate-500 text-sm">পণ্য কোনো ত্রুটিপূর্ণ হলে ৭ দিনের ফ্রেন্ডলি রিটার্ন ও রিফান্ড সুবিধা।</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-3">
              <div className="mx-auto p-3 bg-emerald-50 text-emerald-600 rounded-full w-12 h-12 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-slate-900">৫০,০০০+ হ্যাপি কাস্টমার</h4>
              <p className="text-slate-500 text-sm">সারাদেশে হাজারো সন্তুষ্ট গ্রাহকের ভালোবাসা ও আস্থা।</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
