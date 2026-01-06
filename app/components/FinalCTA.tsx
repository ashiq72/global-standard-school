import Link from "next/link";
import { ArrowRight, Phone, Rocket, Sparkles, Star } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className='py-24 px-6 bg-white'>
      <div className='max-w-7xl mx-auto relative'>
        {/* Main Card Container */}
        <div className='relative overflow-hidden rounded-[3rem] bg-slate-900 shadow-2xl shadow-blue-900/20 px-8 py-16 md:p-24 text-center'>
          {/* --- Background Effects --- */}
          {/* Grid Pattern */}
          <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20'></div>

          {/* Glowing Orbs */}
          <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[128px] opacity-40 pointer-events-none mix-blend-screen'></div>
          <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[128px] opacity-40 pointer-events-none mix-blend-screen'></div>

          {/* Decorative Floating Icons */}
          <div className='absolute top-12 left-12 text-yellow-400 opacity-20 rotate-12 hidden md:block animate-pulse'>
            <Star size={64} fill='currentColor' />
          </div>
          <div className='absolute bottom-12 right-12 text-blue-400 opacity-20 -rotate-12 hidden md:block'>
            <Rocket size={64} />
          </div>

          {/* --- Content --- */}
          <div className='relative z-10 flex flex-col items-center'>
            {/* Badge */}
            <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 text-yellow-400 text-sm font-bold uppercase tracking-wider mb-8 shadow-lg'>
              <Sparkles size={14} /> ২০২৬ শিক্ষাবর্ষ
            </div>

            {/* Heading */}
            <h2 className='text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight'>
              আপনার সন্তানের <br className='hidden md:block' />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500'>
                উজ্জ্বল ভবিষ্যৎ
              </span>{" "}
              শুরু হোক এখানে
            </h2>

            {/* Subtext */}
            <p className='text-blue-100/80 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed font-medium'>
              মানসম্মত শিক্ষা, ডিজিটাল ক্যাম্পাস এবং নৈতিক মূল্যবোধের সমন্বয়ে
              আমরা গড়ে তুলছি আগামীর বিশ্বমানের নাগরিক। সীমিত আসনে ভর্তি চলছে।
            </p>

            {/* Buttons */}
            <div className='flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto'>
              <Link
                href='/admission'
                className='group w-full sm:w-auto relative bg-yellow-400 text-blue-950 px-8 py-4 rounded-xl font-black text-lg transition-all duration-300 hover:bg-yellow-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(250,204,21,0.5)] flex items-center justify-center gap-2'
              >
                ভর্তি ফরম পূরণ করুন
                <ArrowRight
                  className='group-hover:translate-x-1 transition-transform'
                  size={20}
                />
              </Link>

              <Link
                href='/contact'
                className='group w-full sm:w-auto bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/30 flex items-center justify-center gap-2'
              >
                <Phone size={20} />
                সরাসরি কথা বলুন
              </Link>
            </div>

            {/* Bottom Note */}
            <p className='mt-8 text-sm text-slate-400 font-medium'>
              * অনলাইনে আবেদন করলে ভর্তি ফিতে ১০% ছাড়!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
