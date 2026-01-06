"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "ভর্তির জন্য কি কি কাগজপত্র জমা দিতে হবে?",
      a: "শিক্ষার্থীর জন্ম নিবন্ধন কার্ডের অনলাইন কপি, ২ কপি পাসপোর্ট সাইজের রঙিন ছবি, পিতা-মাতার এনআইডি কার্ডের ফটোকপি এবং পূর্ববর্তী স্কুলের ছাড়পত্র (টিসি) জমা দিতে হবে।",
    },
    {
      q: "স্কুলের ক্লাসের সময়সূচী বা টাইমটেবিল কি?",
      a: "মর্নিং শিফট (প্লে-নার্সারি) সকাল ৮:০০ থেকে ১০:৩০ পর্যন্ত এবং ডে শিফট (১ম-১০ম শ্রেণি) সকাল ১০:৪৫ থেকে বিকেল ৩:৩০ পর্যন্ত পরিচালিত হয়।",
    },
    {
      q: "শিক্ষার্থীদের জন্য পরিবহন সুবিধা আছে কি?",
      a: "হ্যাঁ, কেরাণীগঞ্জ এবং এর আশেপাশের এলাকার জন্য আমাদের নিজস্ব ৫টি স্কুল ভ্যান ও ১টি বাস সার্ভিস চালু আছে। দূরত্বের ওপর ভিত্তি করে চার্জ নির্ধারিত হয়।",
    },
    {
      q: "টিউশন ফি কি অনলাইনে পরিশোধ করা যায়?",
      a: "হ্যাঁ, আমরা বিকাশ, রকেট এবং নগদ পেমেন্ট গ্রহণ করি। এছাড়াও স্কুলের নির্ধারিত ব্যাংক অ্যাকাউন্টেও ফি জমা দেওয়া যাবে।",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='py-24 bg-white relative overflow-hidden'>
      {/* Decorative Background */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-50 pointer-events-none'>
        <div className='absolute top-20 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl mix-blend-multiply'></div>
        <div className='absolute bottom-20 left-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl mix-blend-multiply'></div>
      </div>

      <div className='max-w-3xl mx-auto px-6 relative z-10'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4'>
            <HelpCircle size={14} />
            সচরাচর জিজ্ঞাসা
          </div>
          <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6'>
            আপনার প্রশ্নের <span className='text-blue-600'>উত্তর</span>
          </h2>
          <p className='text-slate-600'>
            অভিভাবকদের পক্ষ থেকে প্রায়শই করা কিছু প্রশ্নের উত্তর নিচে দেওয়া হলো।
          </p>
        </div>

        <div className='space-y-4'>
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`group border rounded-2xl transition-all duration-300 overflow-hidden bg-white
              ${
                openIndex === i
                  ? "border-blue-500 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500"
                  : "border-slate-200 hover:border-blue-300"
              }`}
            >
              <button
                onClick={() => toggleFAQ(i)}
                className='w-full flex items-center justify-between p-6 text-left focus:outline-none'
              >
                <span
                  className={`text-lg font-bold transition-colors ${
                    openIndex === i ? "text-blue-900" : "text-slate-700"
                  }`}
                >
                  {item.q}
                </span>
                <span
                  className={`flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                    openIndex === i
                      ? "bg-blue-600 text-white rotate-180"
                      : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600"
                  }`}
                >
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              {/* Animated Content using Grid Trick */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className='overflow-hidden'>
                  <div className='px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-dashed border-slate-100 mt-2'>
                    <div className='pt-4'>{item.a}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className='mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center'>
          <p className='text-slate-900 font-bold mb-2'>
            আপনার প্রশ্নের উত্তর খুঁজে পাননি?
          </p>
          <p className='text-slate-500 text-sm mb-4'>
            আমাদের অফিস চলাকালীন সময়ে কল করুন অথবা মেসেজ পাঠান।
          </p>
          <div className='flex justify-center gap-4'>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline'
            >
              <MessageCircle size={16} /> যোগাযোগ করুন
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
