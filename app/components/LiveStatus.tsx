import { Clock, Calendar, Users, Radio, ArrowUpRight } from "lucide-react";

export const LiveStatus = () => {
  // Mock data - in a real app this would come from an API/State
  const currentDate = "০৬ জানুয়ারি, ২০২৬";
  const currentDay = "মঙ্গলবার";

  return (
    <section className='py-12 px-6'>
      <div className='max-w-7xl mx-auto'>
        {/* Main Dashboard Container */}
        <div className='bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative'>
          {/* Top colored line */}
          <div className='h-2 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500'></div>

          <div className='p-8 md:p-10'>
            {/* Header Section */}
            <div className='flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12'>
              <div>
                <div className='flex items-center gap-2 mb-2'>
                  <span className='relative flex h-3 w-3'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
                    <span className='relative inline-flex rounded-full h-3 w-3 bg-red-500'></span>
                  </span>
                  <span className='text-red-500 font-bold text-xs uppercase tracking-widest'>
                    লাইভ আপডেট
                  </span>
                </div>
                <h3 className='text-3xl md:text-4xl font-black text-slate-900'>
                  আজকের <span className='text-blue-600'>ক্যাম্পাস</span>
                </h3>
                <p className='text-slate-500 font-medium mt-1'>
                  {currentDate} | {currentDay}
                </p>
              </div>

              {/* Status Badges */}
              <div className='flex flex-wrap gap-3'>
                <div className='px-5 py-2.5 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm'>
                  <Radio size={16} className='animate-pulse' />
                  ক্যাম্পাস খোলা
                </div>
                <div className='px-5 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-slate-900/20'>
                  <Clock size={16} className='text-yellow-400' />
                  বর্তমান পিরিয়ড: ৩য়
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {/* Card 1: Time/Lunch */}
              <div className='group p-6 rounded-2xl bg-amber-50 border border-amber-100 hover:border-amber-200 transition-all duration-300 hover:-translate-y-1'>
                <div className='flex justify-between items-start mb-4'>
                  <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-amber-500 shadow-sm'>
                    <Clock size={20} />
                  </div>
                  <span className='text-xs font-bold text-amber-600 bg-white px-2 py-1 rounded-md'>
                    আসন্ন
                  </span>
                </div>
                <h4 className='text-slate-500 text-sm font-semibold uppercase tracking-wide mb-1'>
                  লাঞ্চ বিরতি
                </h4>
                <p className='text-2xl font-black text-slate-800'>
                  ১:৩০{" "}
                  <span className='text-sm font-bold text-slate-400'>PM</span>
                </p>
              </div>

              {/* Card 2: Next Event */}
              <div className='group p-6 rounded-2xl bg-blue-50 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1'>
                <div className='flex justify-between items-start mb-4'>
                  <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-sm'>
                    <Calendar size={20} />
                  </div>
                  <ArrowUpRight
                    size={20}
                    className='text-blue-300 group-hover:text-blue-600 transition-colors'
                  />
                </div>
                <h4 className='text-slate-500 text-sm font-semibold uppercase tracking-wide mb-1'>
                  পরবর্তী ইভেন্ট
                </h4>
                <p className='text-xl font-black text-slate-800 leading-tight'>
                  বার্ষিক ক্রীড়া প্রতিযোগিতা
                </p>
              </div>

              {/* Card 3: Attendance */}
              <div className='group p-6 rounded-2xl bg-indigo-50 border border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1'>
                <div className='flex justify-between items-start mb-4'>
                  <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-500 shadow-sm'>
                    <Users size={20} />
                  </div>
                  <div className='h-1.5 w-16 bg-white rounded-full overflow-hidden'>
                    <div className='h-full bg-indigo-500 w-[96%]'></div>
                  </div>
                </div>
                <h4 className='text-slate-500 text-sm font-semibold uppercase tracking-wide mb-1'>
                  আজকের উপস্থিতি
                </h4>
                <p className='text-3xl font-black text-slate-800'>
                  ৯৬<span className='text-lg text-indigo-500'>%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
