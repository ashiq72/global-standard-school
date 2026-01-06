import Image from "next/image";
import { Quote, Award } from "lucide-react";

export const PrincipalMessage = () => {
  return (
    <section className='py-24 bg-white relative overflow-hidden'>
      {/* Abstract Background Pattern */}
      <div className='absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-20 pointer-events-none'></div>
      <div className='absolute bottom-10 left-10 text-slate-100'>
        <Quote size={200} className='rotate-12 opacity-50' />
      </div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-24'>
          {/* Left: Image Composition */}
          <div className='w-full lg:w-5/12 relative group'>
            {/* Decorative Offset Border */}
            <div className='absolute inset-0 bg-blue-600 rounded-[2rem] rotate-6 scale-95 opacity-20 group-hover:rotate-3 transition-transform duration-500'></div>
            <div className='absolute inset-0 bg-blue-600 rounded-[2rem] -rotate-3 scale-95 opacity-10 group-hover:-rotate-1 transition-transform duration-500'></div>

            {/* Main Image Container */}
            <div className='relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white'>
              <Image
                src='https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/ea170051-a85b-4f6b-ae5a-c102d3c3a03c.jpg'
                alt='Principal Faruk Hossain'
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-105'
                sizes='(max-width: 768px) 100vw, 40vw'
                priority
              />

              {/* Gradient Overlay for Text Visibility (Mobile) */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden'></div>
            </div>

            {/* Floating Experience Badge */}
            <div className='absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-in slide-in-from-bottom-4 duration-700'>
              <div className='bg-yellow-100 p-3 rounded-full text-yellow-600'>
                <Award size={28} />
              </div>
              <div>
                <p className='text-2xl font-black text-slate-900 leading-none'>
                  ১০+
                </p>
                <p className='text-xs font-bold text-slate-500 uppercase tracking-wider mt-1'>
                  বছরের অভিজ্ঞতা
                </p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className='w-full lg:w-7/12'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6'>
              <span className='w-2 h-2 rounded-full bg-blue-600'></span>
              অধ্যক্ষের বার্তা
            </div>

            <h2 className='text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight'>
              আগামীর নেতৃত্ব গড়ার <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>
                এক নিরলস যাত্রা
              </span>
            </h2>

            <div className='relative'>
              <Quote className='absolute -top-4 -left-6 text-blue-100 fill-current w-12 h-12 -z-10 transform -scale-x-100' />
              <blockquote className='text-lg md:text-xl text-slate-600 leading-relaxed font-medium italic mb-10 border-l-4 border-yellow-500 pl-6'>
                "আমাদের লক্ষ্য কেবল পাঠ্যপুস্তকের জ্ঞান দান করা নয়, বরং প্রতিটি
                শিক্ষার্থীকে নৈতিক মূল্যবোধ সম্পন্ন একজন সুনাগরিক হিসেবে গড়ে
                তোলা। দক্ষিণ কেরাণীগঞ্জে আধুনিক ও প্রযুক্তি-বান্ধব শিক্ষার আলো
                ছড়িয়ে দিতে আমরা বদ্ধপরিকর। প্রতিটি শিশুই আমাদের কাছে একটি
                সম্ভাবনা, এবং সেই সম্ভাবনাকে বাস্তবে রূপ দেওয়াই আমাদের ব্রত।"
              </blockquote>
            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-6'>
              <div className='flex-1'>
                <h4 className='text-2xl font-bold text-slate-900'>
                  মোঃ ফারুক হোসাইন
                </h4>
                <p className='text-blue-600 font-medium'>
                  প্রধান শিক্ষক, গ্লোবাল স্ট্যান্ডার্ড স্কুল
                </p>
              </div>

              {/* Digital Signature Representation */}
              <div className='h-16 w-40 opacity-70 relative'>
                {/* You can replace this SVg with an actual signature image */}
                <svg
                  viewBox='0 0 200 60'
                  className='w-full h-full text-slate-800'
                >
                  <path
                    d='M10,40 Q30,10 50,40 T100,30 T150,40 T190,20'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                  <text
                    x='20'
                    y='50'
                    fontFamily='cursive'
                    fontSize='24'
                    fill='currentColor'
                  >
                    F. Hossain
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
