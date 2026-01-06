import {
  Star,
  Trophy,
  Quote,
  Sparkles,
  GraduationCap,
  CalendarCheck,
  Award,
} from "lucide-react";
import Image from "next/image"; // Assuming Next.js, or use <img />

export const StudentOfTheMonth = () => {
  return (
    <section className='py-24 bg-[#0f172a] relative overflow-hidden'>
      {/* Dynamic Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900'></div>

      {/* Background Texture/Confetti */}
      <div className='absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent'></div>
      <div className='absolute top-10 right-10 text-yellow-400 opacity-20 animate-pulse'>
        <Star size={48} fill='currentColor' />
      </div>
      <div className='absolute bottom-10 left-10 text-blue-400 opacity-20 animate-bounce'>
        <Sparkles size={64} />
      </div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-24'>
          {/* Left Column: Image Composition */}
          <div className='w-full lg:w-5/12 relative group'>
            {/* Rotating Glow Effect behind card */}
            <div className='absolute inset-0 bg-gradient-to-tr from-yellow-400 to-amber-600 rounded-[2.5rem] rotate-6 opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500'></div>

            {/* Main Card Frame */}
            <div className='relative bg-white p-3 rounded-[2.5rem] shadow-2xl rotate-3 transition-transform duration-500 group-hover:rotate-1'>
              <div className='aspect-[3/4] bg-slate-100 rounded-[2rem] overflow-hidden relative'>
                {/* Placeholder for Image - Replace src with actual image */}
                <div className='w-full h-full flex items-center justify-center bg-slate-200 text-slate-400'>
                  {/* <Image src="/path/to/student.jpg" fill className="object-cover" /> */}
                  <span className='font-bold uppercase tracking-widest text-sm'>
                    Student Photo
                  </span>
                </div>

                {/* Overlay Gradient */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>

                {/* Name on Image (Mobile/Design Choice) */}
                <div className='absolute bottom-6 left-6 text-white'>
                  <p className='text-sm font-medium opacity-80 uppercase tracking-wider'>
                    Class 5 • Roll 01
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Trophy Badge */}
            <div className='absolute -top-6 -left-6 bg-gradient-to-br from-yellow-300 to-amber-500 p-4 rounded-2xl text-blue-950 shadow-lg shadow-amber-500/30 animate-[bounce_3s_infinite]'>
              <Trophy size={36} fill='white' className='text-white' />
            </div>

            {/* Month Badge */}
            <div className='absolute -bottom-8 -right-4 bg-white px-6 py-3 rounded-xl shadow-xl border-l-4 border-yellow-500 flex flex-col items-center'>
              <span className='text-xs font-bold text-slate-400 uppercase tracking-widest'>
                January
              </span>
              <span className='text-xl font-black text-slate-900'>2026</span>
            </div>
          </div>

          {/* Right Column: Content & Stats */}
          <div className='w-full lg:w-7/12 space-y-8'>
            {/* Header */}
            <div>
              <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-sm font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_-3px_rgba(250,204,21,0.3)]'>
                <Award size={16} /> স্টুডেন্ট অফ দ্য মান্থ
              </div>
              <h2 className='text-4xl md:text-6xl font-black text-white leading-none mb-2'>
                আরিয়ান আহমেদ <br />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500'>
                  (আকাশ)
                </span>
              </h2>
              <p className='text-blue-200 text-lg'>
                ৫ম শ্রেণি, সায়েন্স বিভাগ | রোল নং: ০১
              </p>
            </div>

            {/* Stats Grid */}
            <div className='grid grid-cols-3 gap-4'>
              {[
                {
                  label: "উপস্থিতি",
                  val: "১০০%",
                  icon: CalendarCheck,
                  color: "text-emerald-400",
                },
                {
                  label: "গড় নম্বর",
                  val: "৯৮%",
                  icon: GraduationCap,
                  color: "text-blue-400",
                },
                {
                  label: "আচরণ",
                  val: "A+",
                  icon: Star,
                  color: "text-yellow-400",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className='bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl text-center hover:bg-white/10 transition-colors'
                >
                  <stat.icon
                    className={`mx-auto mb-2 ${stat.color}`}
                    size={20}
                  />
                  <h4 className='text-2xl font-bold text-white mb-1'>
                    {stat.val}
                  </h4>
                  <p className='text-xs text-slate-400 uppercase font-medium'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote Section */}
            <div className='relative bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-8 rounded-3xl border border-white/10 backdrop-blur-md'>
              <Quote className='absolute -top-5 left-8 bg-slate-900 text-yellow-400 p-2 rounded-lg border border-white/10 w-10 h-10' />
              <p className='text-lg text-blue-50 italic leading-relaxed font-light opacity-90'>
                "গ্লোবাল স্ট্যান্ডার্ড স্কুলের শিক্ষকরা আমাকে শুধু পাঠ্যবই নয়,
                বরং সৃজনশীল চিন্তাভাবনা করতে শিখিয়েছেন। আমি ভবিষ্যতে একজন
                সফটওয়্যার ইঞ্জিনিয়ার হয়ে দেশের সেবা করতে চাই।"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
