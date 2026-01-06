import {
  Play,
  Wifi,
  FlaskConical,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export const CampusExperience = () => {
  const features = [
    {
      icon: Wifi,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      title: "স্মার্ট ক্লাসরুম",
      desc: "প্রতিটি ক্লাসে মাল্টিমিডিয়া প্রজেক্টর এবং হাই-স্পিড ওয়াইফাই সুবিধা।",
    },
    {
      icon: FlaskConical,
      color: "text-teal-600",
      bg: "bg-teal-50",
      title: "আধুনিক বিজ্ঞান ল্যাব",
      desc: "হাতে-কলমে ব্যবহারিক পরীক্ষার মাধ্যমে শিক্ষার পূর্ণতা।",
    },
    {
      icon: ShieldCheck,
      color: "text-rose-600",
      bg: "bg-rose-50",
      title: "নিরাপদ জোন",
      desc: "সিসিটিভি নিয়ন্ত্রিত আগানগর পশ্চিম এলাকার সবচেয়ে নিরাপদ ক্যাম্পাস।",
    },
  ];

  return (
    <section className='py-24 bg-white relative overflow-hidden'>
      {/* Background Decorative Blobs */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none' />
      <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none' />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Left Content */}
          <div className='order-2 lg:order-1'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6'>
              <span className='w-2 h-2 rounded-full bg-blue-600 animate-pulse'></span>
              ক্যাম্পাস লাইফ
            </div>

            <h2 className='text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight'>
              শিক্ষার পরিবেশ হোক <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>
                আনন্দময় ও ডিজিটাল
              </span>
            </h2>

            <p className='text-slate-600 text-lg mb-10 max-w-lg'>
              আমরা নিশ্চিত করি এমন একটি পরিবেশ যেখানে প্রযুক্তি এবং প্রকৃতি মিলে
              মিশে শিক্ষার্থীদের মেধা বিকাশে সহায়তা করে।
            </p>

            <div className='space-y-6'>
              {features.map((item, i) => (
                <div
                  key={i}
                  className='group flex gap-5 p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 border border-transparent hover:border-slate-100'
                >
                  <div
                    className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <item.icon size={28} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className='font-bold text-slate-800 text-lg mb-1 group-hover:text-blue-700 transition-colors'>
                      {item.title}
                    </h4>
                    <p className='text-slate-500 text-sm leading-relaxed'>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Video Section */}
          <div className='order-1 lg:order-2 relative'>
            {/* Abstract Shape behind video */}
            <div className='absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2.5rem] rotate-3 opacity-10 scale-105 transform translate-y-4'></div>

            <div className='relative group cursor-pointer overflow-hidden rounded-[2rem] shadow-2xl shadow-blue-900/20 aspect-video bg-slate-900'>
              {/* Thumbnail Placeholder (Replace with <img src="..." />) */}
              <div className='absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black opacity-80 group-hover:opacity-70 transition-opacity duration-500'></div>

              {/* Play Button */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='relative'>
                  <div className='absolute inset-0 bg-white/30 rounded-full blur-xl animate-pulse'></div>
                  <div className='w-20 h-20 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-600'>
                    <Play size={32} fill='currentColor' className='ml-1' />
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className='absolute bottom-6 left-6 right-6'>
                <div className='bg-white/90 backdrop-blur-md p-4 rounded-xl flex items-center justify-between border border-white/20'>
                  <div>
                    <p className='text-xs text-slate-500 font-semibold uppercase'>
                      Watch Trailer
                    </p>
                    <p className='text-slate-900 font-bold'>
                      ক্যাম্পাস ডকুমেন্টারি
                    </p>
                  </div>
                  <span className='flex items-center gap-1 text-xs font-bold bg-slate-900 text-white px-3 py-1.5 rounded-lg'>
                    ২:৩০ মি. <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
