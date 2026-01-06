import {
  DownloadCloud,
  CalendarDays,
  BookOpen,
  Coins,
  ArrowRight,
  FileText,
} from "lucide-react";

export const ResourceHub = () => {
  const resources = [
    {
      title: "ছুটির তালিকা ২০২৬",
      subtitle: "একাডেমিক ক্যালেন্ডার",
      icon: CalendarDays,
      size: "1.2 MB",
    },
    {
      title: "সিলেবাস ও পাঠ্যক্রম",
      subtitle: "১ম - ১০ম শ্রেণি",
      icon: BookOpen,
      size: "4.5 MB",
    },
    {
      title: "বেতন ও ফি কাঠামো",
      subtitle: "২০২৬ শিক্ষাবর্ষ",
      icon: Coins,
      size: "850 KB",
    },
  ];

  return (
    <section className='py-24 px-6'>
      <div className='max-w-6xl mx-auto relative group'>
        {/* Main Container */}
        <div className='relative bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden shadow-2xl shadow-blue-900/40'>
          {/* Background Grid Pattern */}
          <div className='absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]'></div>

          {/* Glowing Gradient Orb */}
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-blue-600/20 blur-[100px] rounded-full pointer-events-none'></div>

          <div className='relative z-10 flex flex-col md:flex-row items-center gap-12'>
            {/* Left: Text Content */}
            <div className='text-center md:text-left md:w-5/12'>
              <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6'>
                <DownloadCloud size={14} />
                ডিজিটাল আর্কাইভ
              </div>
              <h2 className='text-3xl md:text-4xl font-black mb-6 leading-tight'>
                প্রয়োজনীয় তথ্য ও <br />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300'>
                  রিসোর্স হাব
                </span>
              </h2>
              <p className='text-slate-400 mb-8 leading-relaxed'>
                অভিভাবক ও শিক্ষার্থীদের সুবিধার্থে স্কুলের যাবতীয় অফিসিয়াল
                ডকুমেন্ট, ফর্ম এবং নোটিশ এখানে ডিজিটাল ফরম্যাটে সংরক্ষিত আছে।
              </p>

              <button className='hidden md:inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-300 transition-colors'>
                সব ফাইল দেখুন <ArrowRight size={16} />
              </button>
            </div>

            {/* Right: Resource Grid */}
            <div className='w-full md:w-7/12 grid gap-4'>
              {resources.map((item, i) => (
                <button
                  key={i}
                  className='group relative flex items-center justify-between p-4 md:p-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl transition-all duration-300 backdrop-blur-sm'
                >
                  <div className='flex items-center gap-5 text-left'>
                    <div className='w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300'>
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className='font-bold text-lg text-white group-hover:text-blue-300 transition-colors'>
                        {item.title}
                      </h4>
                      <p className='text-xs text-slate-400 font-medium'>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Meta & Download Icon */}
                  <div className='flex items-center gap-4'>
                    <span className='hidden sm:block px-2 py-1 rounded bg-white/5 text-[10px] font-bold text-slate-400 border border-white/5'>
                      PDF • {item.size}
                    </span>
                    <div className='w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-slate-300 group-hover:border-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-all'>
                      <DownloadCloud size={14} />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile View All Button */}
            <button className='md:hidden w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-sm'>
              সব ফাইল দেখুন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
