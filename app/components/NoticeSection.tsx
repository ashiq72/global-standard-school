"use client";

import Link from "next/link";
import { Bell, ArrowRight, CalendarDays, Megaphone } from "lucide-react";

export const NoticeSection = () => {
  const notices = [
    {
      id: 1,
      month: "জানু",
      day: "০৫",
      text: "২০২৬ শিক্ষাবর্ষের নতুন বই বিতরণ কার্যক্রম শুরু।",
      category: "একাডেমিক",
      href: "/notices/new-books-2026",
    },
    {
      id: 2,
      month: "জানু",
      day: "১০",
      text: "অভিভাবক সমাবেশ ও বার্ষিক পরিকল্পনা আলোচনা।",
      category: "ইভেন্ট",
      href: "/notices/parent-meeting-annual-plan",
    },
    {
      id: 3,
      month: "জানু",
      day: "১৫",
      text: "প্রথম সাময়িক পরীক্ষার সিলেবাস প্রকাশ।",
      category: "পরীক্ষা",
      href: "/notices/first-term-syllabus",
    },
  ];

  return (
    <section className='relative py-20 bg-slate-50 overflow-hidden'>
      {/* Background Decorative Elements */}
      <div className='absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-30 pointer-events-none'></div>
      <div className='absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-100 blur-3xl opacity-30 pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12'>
          {/* Left Column: Notice Board (Spans 8 cols) */}
          <div className='lg:col-span-8'>
            <div className='flex justify-between items-end mb-8'>
              <div>
                <span className='text-blue-600 font-semibold tracking-wider text-sm uppercase flex items-center gap-2'>
                  <Megaphone size={16} /> আপডেট
                </span>
                <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mt-2'>
                  নোটিশ বোর্ড
                </h2>
              </div>
              <Link
                href='/notices'
                className='hidden sm:flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors'
              >
                সব দেখুন <ArrowRight size={16} />
              </Link>
            </div>

            <div className='space-y-4'>
              {notices.map((notice, index) => (
                <Link
                  key={notice.id}
                  href={notice.href}
                  className='group block relative bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300'
                >
                  <div className='flex items-center gap-5'>
                    {/* Date Badge */}
                    <div className='flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 bg-blue-50 rounded-xl group-hover:bg-blue-600 transition-colors duration-300'>
                      <span className='text-xs font-medium text-blue-600 uppercase group-hover:text-blue-100'>
                        {notice.month}
                      </span>
                      <span className='text-xl font-bold text-blue-700 group-hover:text-white'>
                        {notice.day}
                      </span>
                    </div>

                    {/* Content */}
                    <div className='flex-1 min-w-0'>
                      <div className='flex items-center gap-2 mb-1'>
                        <span className='px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-semibold tracking-wide'>
                          {notice.category}
                        </span>
                      </div>
                      <h3 className='text-lg font-medium text-slate-700 group-hover:text-blue-700 truncate transition-colors duration-200'>
                        {notice.text}
                      </h3>
                    </div>

                    {/* Arrow Icon */}
                    <div className='hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300'>
                      <ArrowRight size={20} className='-ml-0.5' />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile "View All" button */}
            <div className='mt-6 sm:hidden'>
              <Link
                href='/notices'
                className='block w-full text-center py-3 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50'
              >
                সব নোটিশ দেখুন
              </Link>
            </div>
          </div>

          {/* Right Column: Highlight/CTA Card (Spans 4 cols) */}
          <div className='lg:col-span-4 flex flex-col h-full'>
            <div className='h-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-2xl shadow-blue-900/20 flex flex-col justify-between group'>
              {/* Abstract decorative circles */}
              <div className='absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/10 blur-xl group-hover:scale-150 transition-transform duration-700'></div>
              <div className='absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 rounded-full bg-white/10 blur-xl'></div>

              <div>
                <div className='inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md mb-6 ring-1 ring-white/30'>
                  <Bell
                    className='text-white drop-shadow-md animate-[wiggle_1s_ease-in-out_infinite]'
                    size={24}
                  />
                </div>
                <h3 className='text-2xl font-bold mb-3 leading-tight'>
                  জরুরি ঘোষণা ও<br />
                  ভর্তি তথ্য
                </h3>
                <p className='text-blue-100 text-sm leading-relaxed mb-6 opacity-90'>
                  ভর্তি সংক্রান্ত তথ্য, ফরম পূরণ বা যেকোনো সহযোগিতার জন্য আমাদের
                  হেল্পলাইন ২৪/৭ খোলা আছে।
                </p>
              </div>

              <div className='space-y-3 relative z-10'>
                <Link
                  href='tel:+8801721126532'
                  className='block w-full py-3.5 bg-white text-blue-700 rounded-xl font-bold text-center shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300'
                >
                  কল করুন
                </Link>
                <Link
                  href='/admission'
                  className='block w-full py-3.5 bg-blue-800/50 hover:bg-blue-800/70 backdrop-blur-sm border border-white/10 text-white rounded-xl font-medium text-center transition-all duration-300'
                >
                  ভর্তি তথ্য দেখুন
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
