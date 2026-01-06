import { Calendar, Clock, ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";

export const EventCalendar = () => {
  const events = [
    {
      date: "২৬",
      month: "মার্চ",
      title: "স্বাধীনতা দিবস উদযাপন",
      time: "সকাল ৯:০০",
      type: "national", // for conditional styling if needed
    },
    {
      date: "১৪",
      month: "এপ্রিল",
      title: "বাংলা নববর্ষ উৎসব",
      time: "সকাল ১০:৩০",
      type: "cultural",
    },
    {
      date: "০১",
      month: "মে",
      title: "মে দিবস (স্কুল ছুটি)",
      time: "সারাদিন",
      type: "holiday",
    },
  ];

  return (
    <section className='py-24 bg-white relative overflow-hidden'>
      {/* Background Icon (Decorative) */}
      <div className='absolute -left-20 top-20 text-slate-50 opacity-50 pointer-events-none'>
        <CalendarDays size={400} strokeWidth={0.5} />
      </div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20'>
          {/* Left Column: Header & Intro */}
          <div className='lg:col-span-4 flex flex-col justify-center'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-bold uppercase tracking-wider mb-6 w-fit'>
              <span className='w-2 h-2 rounded-full bg-yellow-500 animate-pulse'></span>
              নোটিশ বোর্ড
            </div>

            <h2 className='text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight'>
              আসন্ন <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>
                ইভেন্টসমূহ
              </span>
            </h2>

            <p className='text-slate-600 text-lg mb-8 leading-relaxed'>
              গ্লোবাল স্ট্যান্ডার্ড স্কুলের বার্ষিক ক্যালেন্ডারের গুরুত্বপূর্ণ
              তারিখ, ছুটি এবং উৎসবগুলোর তালিকা দেখে নিন।
            </p>

            <Link
              href='/events'
              className='group inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-xl font-bold transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/30 w-fit'
            >
              সব ইভেন্ট দেখুন{" "}
              <ArrowRight
                size={18}
                className='group-hover:translate-x-1 transition-transform'
              />
            </Link>
          </div>

          {/* Right Column: Event List */}
          <div className='lg:col-span-8 flex flex-col gap-5'>
            {events.map((ev, i) => (
              <div
                key={i}
                className='group flex flex-col md:flex-row items-start md:items-center gap-6 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 hover:-translate-y-1 cursor-pointer'
              >
                {/* Date Badge */}
                <div className='flex-shrink-0 flex flex-col items-center justify-center w-20 h-20 bg-blue-50 rounded-xl group-hover:bg-blue-600 transition-colors duration-300 border border-blue-100 group-hover:border-blue-600'>
                  <span className='text-2xl font-black text-blue-600 group-hover:text-white transition-colors'>
                    {ev.date}
                  </span>
                  <span className='text-xs font-bold text-blue-400 uppercase tracking-wider group-hover:text-blue-100 transition-colors'>
                    {ev.month}
                  </span>
                </div>

                {/* Content */}
                <div className='flex-1 min-w-0'>
                  <h4 className='text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors line-clamp-1'>
                    {ev.title}
                  </h4>
                  <div className='flex items-center gap-2 text-slate-500 text-sm font-medium'>
                    <Clock size={16} className='text-yellow-500' />
                    <span>{ev.time}</span>
                  </div>
                </div>

                {/* Arrow Icon (Desktop) */}
                <div className='hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all'>
                  <ArrowRight size={20} className='-ml-0.5' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
