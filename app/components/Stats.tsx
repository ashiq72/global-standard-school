import { Users, GraduationCap, Trophy, Award } from "lucide-react";

export const Stats = () => {
  const stats = [
    {
      icon: Users,
      count: "১০+",
      label: "অভিজ্ঞ শিক্ষক",
      desc: "নিবেদিত ও প্রশিক্ষণপ্রাপ্ত",
    },
    {
      icon: GraduationCap,
      count: "৫০০+",
      label: "বর্তমান শিক্ষার্থী",
      desc: "প্লে থেকে দশম শ্রেণি",
    },
    {
      icon: Trophy,
      count: "১০০%",
      label: "পাসের হার",
      desc: "বিগত বোর্ড পরীক্ষায়",
    },
    {
      icon: Award,
      count: "৫০+",
      label: "জাতীয় পুরস্কার",
      desc: "শিক্ষা ও ক্রীড়া ক্ষেত্রে",
    },
  ];

  return (
    <section className='py-20 bg-slate-900 relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]'></div>

      {/* Decorative Glows */}
      <div className='absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none'></div>
      <div className='absolute top-1/2 right-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12'>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className='relative group flex flex-col items-center text-center'
              >
                {/* Vertical Divider (Desktop Only) */}
                {index !== 0 && (
                  <div className='hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent'></div>
                )}

                {/* Icon */}
                <div className='mb-4 p-3 bg-slate-800 rounded-2xl border border-slate-700 text-slate-400 group-hover:text-yellow-400 group-hover:border-yellow-500/30 transition-all duration-500 shadow-lg group-hover:-translate-y-2'>
                  <Icon size={24} />
                </div>

                {/* Number */}
                <h3 className='text-4xl md:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-amber-600 drop-shadow-sm'>
                  {stat.count}
                </h3>

                {/* Label */}
                <p className='text-white font-bold text-lg mb-1'>
                  {stat.label}
                </p>

                {/* Description */}
                <p className='text-slate-400 text-xs font-medium uppercase tracking-wide'>
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
