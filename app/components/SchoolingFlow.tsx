import {
  ClipboardList,
  BellRing,
  PieChart,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const SchoolingFlow = () => {
  const flows = [
    {
      icon: ClipboardList,
      text: "ডিজিটাল হাজিরা",
      desc: "ফিঙ্গারপ্রিন্ট বা কার্ড পাঞ্চের মাধ্যমে অটোমেটিক উপস্থিতি।",
      step: "০১",
    },
    {
      icon: BellRing,
      text: "এসএমএস এলার্ট",
      desc: "সন্তান স্কুলে প্রবেশ ও বের হওয়ার সাথে সাথে অভিভাবকের ফোনে নোটিফিকেশন।",
      step: "০২",
    },
    {
      icon: PieChart,
      text: "স্মার্ট রিপোর্ট",
      desc: "পরীক্ষার ফলাফল ও পারফরম্যান্স গ্রাফ অ্যাপের মাধ্যমে দেখা।",
      step: "০৩",
    },
    {
      icon: ShieldCheck,
      text: "সর্বোচ্চ নিরাপত্তা",
      desc: "সিসিটিভি ও ডিজিটাল ট্র্যাকিং দ্বারা ক্যাম্পাসের নিরাপত্তা নিশ্চিত।",
      step: "০৪",
    },
  ];

  return (
    <section className='py-24 px-4 md:px-6'>
      <div className='max-w-7xl mx-auto relative'>
        {/* Main Container */}
        <div className='bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-blue-900/20'>
          {/* Background Grid & Glows */}
          <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]'></div>
          <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500'></div>
          <div className='absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none'></div>

          <div className='relative z-10'>
            {/* Header */}
            <div className='text-center mb-20'>
              <span className='text-cyan-400 font-bold tracking-widest uppercase text-xs mb-3 block'>
                টেকনোলজি ইন্টিগ্রেশন
              </span>
              <h2 className='text-3xl md:text-5xl font-black text-white mb-6'>
                স্মার্ট স্কুলিং{" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>
                  ইকো-সিস্টেম
                </span>
              </h2>
              <p className='text-slate-400 max-w-2xl mx-auto text-lg'>
                প্রথাগত খাতা-কলমের বাইরে এসে আমরা ব্যবহার করছি অত্যাধুনিক
                সফটওয়্যার, যা অভিভাবক ও স্কুলের মধ্যে সেতুবন্ধন তৈরি করে।
              </p>
            </div>

            {/* Steps Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative'>
              {/* Connector Line (Desktop Only) */}
              <div className='hidden lg:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-700 -z-10'></div>

              {flows.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className='group relative pt-4'>
                    {/* Icon Box */}
                    <div className='relative mx-auto w-24 h-24 mb-8'>
                      {/* Hexagon/Circle Shape */}
                      <div className='absolute inset-0 bg-slate-800 rounded-2xl border border-slate-700 shadow-xl group-hover:border-cyan-500/50 group-hover:bg-slate-800/80 transition-all duration-500 rotate-3 group-hover:rotate-6'></div>
                      <div className='absolute inset-0 bg-slate-800 rounded-2xl border border-slate-700 shadow-sm group-hover:border-cyan-500 group-hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] transition-all duration-500 -rotate-3 group-hover:-rotate-3 flex items-center justify-center'>
                        <Icon
                          size={32}
                          className='text-slate-400 group-hover:text-cyan-400 transition-colors duration-300'
                        />
                      </div>

                      {/* Step Number Badge */}
                      <div className='absolute -top-3 -right-3 w-8 h-8 bg-cyan-500 text-slate-900 font-bold rounded-full flex items-center justify-center text-xs shadow-lg z-10'>
                        {f.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className='text-center px-2'>
                      <h3 className='text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors'>
                        {f.text}
                      </h3>
                      <p className='text-slate-400 text-sm leading-relaxed'>
                        {f.desc}
                      </p>
                    </div>

                    {/* Mobile Arrow */}
                    <div className='lg:hidden flex justify-center mt-8 last:hidden text-slate-700'>
                      <ArrowRight className='animate-bounce' />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
