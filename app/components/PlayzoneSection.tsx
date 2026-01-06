import {
  FerrisWheel,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Star,
  Heart,
} from "lucide-react";

export const PlayzoneSection = () => {
  const activities = [
    {
      icon: FerrisWheel,
      title: "মজার সব রাইডস",
      desc: "দোলনা, স্লাইড এবং সি-স সহ আধুনিক ও নিরাপদ রাইড।",
      color: "text-pink-500",
      bg: "bg-pink-100",
      border: "hover:border-pink-200",
    },
    {
      icon: Puzzle,
      title: "ব্রেইন গেমস জোন",
      desc: "মেধা বিকাশের জন্য কালারফুল পাজল, লেগো ও ব্লক গেমস।",
      color: "text-sky-500",
      bg: "bg-sky-100",
      border: "hover:border-sky-200",
    },
    {
      icon: ShieldCheck,
      title: "নিরাপদ সফট-ম্যাট",
      desc: "পড়ে গিয়ে ব্যাথা পাওয়া রোধ করতে সম্পূর্ণ ফ্লোর ফোম দিয়ে মোড়ানো।",
      color: "text-emerald-500",
      bg: "bg-emerald-100",
      border: "hover:border-emerald-200",
    },
  ];

  return (
    <section className='py-24 bg-orange-50/50 relative overflow-hidden'>
      {/* Background Doodles */}
      <div className='absolute top-20 left-10 text-yellow-400 opacity-40 animate-spin-slow'>
        <Star size={48} fill='currentColor' />
      </div>
      <div className='absolute bottom-20 right-10 text-pink-300 opacity-30 animate-bounce'>
        <Heart size={48} fill='currentColor' />
      </div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-100/50 rounded-full blur-3xl pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-24'>
          {/* Left Side: Photo Scrapbook Layout */}
          <div className='lg:w-1/2 relative'>
            <div className='grid grid-cols-2 gap-6 p-4'>
              {/* Photo 1 */}
              <div className='space-y-6 pt-8'>
                <div className='relative h-60 bg-gradient-to-br from-rose-200 to-rose-100 rounded-[2rem] shadow-xl rotate-[-3deg] border-4 border-white flex items-center justify-center overflow-hidden group hover:rotate-0 transition-transform duration-500'>
                  <span className='absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/30 backdrop-blur-sm rotate-3'></span>
                  <FerrisWheel
                    size={64}
                    className='text-rose-400 opacity-50 group-hover:scale-110 transition-transform'
                  />
                  <p className='absolute bottom-4 font-bold text-rose-400 uppercase tracking-widest text-sm'>
                    Fun Time
                  </p>
                </div>
                {/* Photo 2 */}
                <div className='relative h-44 bg-gradient-to-br from-sky-200 to-sky-100 rounded-[2rem] shadow-xl rotate-[2deg] border-4 border-white flex items-center justify-center overflow-hidden group hover:rotate-0 transition-transform duration-500'>
                  <Puzzle
                    size={50}
                    className='text-sky-400 opacity-50 group-hover:scale-110 transition-transform'
                  />
                </div>
              </div>

              <div className='space-y-6'>
                {/* Photo 3 */}
                <div className='relative h-44 bg-gradient-to-br from-emerald-200 to-emerald-100 rounded-[2rem] shadow-xl rotate-[3deg] border-4 border-white flex items-center justify-center overflow-hidden group hover:rotate-0 transition-transform duration-500'>
                  <ShieldCheck
                    size={50}
                    className='text-emerald-400 opacity-50 group-hover:scale-110 transition-transform'
                  />
                </div>
                {/* Photo 4 */}
                <div className='relative h-60 bg-gradient-to-br from-amber-200 to-amber-100 rounded-[2rem] shadow-xl rotate-[-2deg] border-4 border-white flex items-center justify-center overflow-hidden group hover:rotate-0 transition-transform duration-500'>
                  <span className='absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-16 bg-white/30 backdrop-blur-sm rotate-90'></span>
                  <Sparkles
                    size={64}
                    className='text-amber-400 opacity-50 group-hover:scale-110 transition-transform'
                  />
                  <p className='absolute bottom-4 font-bold text-amber-500 uppercase tracking-widest text-sm'>
                    Magic
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className='lg:w-1/2'>
            <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-rose-100 text-rose-500 text-sm font-bold shadow-sm mb-6'>
              <span className='animate-bounce'>🎈</span> কিডস জোন
            </div>

            <h2 className='text-4xl md:text-5xl font-black text-slate-800 leading-[1.2] mb-6'>
              খেলার ছলে{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500'>
                শেখার আনন্দ
              </span>{" "}
              <br />
              প্রতিটি শিশুর অধিকার
            </h2>

            <p className='text-slate-600 text-lg mb-10 leading-relaxed'>
              গ্লোবাল স্ট্যান্ডার্ড স্কুলে আমরা বিশ্বাস করি প্রতিটি শিশুর শৈশব
              হওয়া উচিত রঙিন। তাই আমাদের ক্যাম্পাসে রয়েছে বিশাল প্লে-গ্রাউন্ড,
              যেখানে শিক্ষার্থীরা পড়াশোনার ফাঁকে নির্মল আনন্দ উপভোগ করতে পারে।
            </p>

            <div className='flex flex-col gap-4'>
              {activities.map((act, i) => {
                const Icon = act.icon;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-5 p-4 rounded-2xl bg-white border border-transparent transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 ${act.border}`}
                  >
                    <div
                      className={`w-14 h-14 ${act.bg} ${act.color} rounded-xl flex items-center justify-center shrink-0`}
                    >
                      <Icon size={28} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className='text-xl font-bold text-slate-800 mb-1'>
                        {act.title}
                      </h4>
                      <p className='text-slate-500 text-sm font-medium'>
                        {act.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Wave SVG */}
      <div className='absolute bottom-0 w-full leading-none text-white'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 120'>
          <path
            fill='currentColor'
            fillOpacity='1'
            d='M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      </div>
    </section>
  );
};
