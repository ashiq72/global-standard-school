import Link from "next/link";
import { Phone, MessageCircle, Headphones } from "lucide-react";

export const InquirySection = () => {
  return (
    <section className='py-24 bg-white relative'>
      <div className='max-w-5xl mx-auto px-6'>
        {/* Main Card */}
        <div className='relative bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[2.5rem] p-8 md:p-12 overflow-hidden border border-blue-100 shadow-xl shadow-blue-900/5'>
          {/* Decorative Background Icon */}
          <div className='absolute right-0 bottom-0 opacity-5 -mr-10 -mb-10 text-blue-600 rotate-12 pointer-events-none'>
            <Headphones size={250} strokeWidth={1} />
          </div>

          <div className='relative z-10 flex flex-col md:flex-row items-center justify-between gap-10'>
            {/* Text Content */}
            <div className='text-center md:text-left space-y-4 max-w-lg'>
              <div className='inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-xs font-bold text-emerald-600 shadow-sm border border-emerald-100 mx-auto md:mx-0'>
                <span className='relative flex h-2.5 w-2.5'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500'></span>
                </span>
                সাপোর্ট টিম এখন অনলাইন
              </div>

              <h2 className='text-3xl md:text-4xl font-black text-slate-900 leading-tight'>
                ভর্তি বিষয়ে কোনো <br />
                <span className='text-blue-600'>জিজ্ঞাসা আছে?</span>
              </h2>
              <p className='text-slate-600 font-medium text-lg'>
                আমাদের ভর্তি বিষয়ক অভিজ্ঞ কাউন্সিলররা আপনার যেকোনো প্রশ্নের
                উত্তর দিতে প্রস্তুত।
              </p>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 w-full md:w-auto'>
              <Link
                href='tel:+8801721126532'
                className='group flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
              >
                <Phone size={20} className='group-hover:animate-wiggle' />
                <span className=' whitespace-nowrap'>কল করুন</span>
              </Link>

              <Link
                href='https://wa.me/8801721126532'
                target='_blank'
                className='flex items-center justify-center gap-3 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all duration-300'
              >
                <MessageCircle size={20} />
                <span>হোয়াটসঅ্যাপ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
