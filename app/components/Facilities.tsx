import {
  Monitor,
  Bus,
  ShieldCheck,
  HeartPulse,
  Palette,
  Microscope,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const facilities = [
  {
    icon: Monitor,
    title: "কম্পিউটার ল্যাব",
    desc: "উচ্চ গতির ইন্টারনেট ও আধুনিক প্রজেক্টর সমৃদ্ধ ডিজিটাল ল্যাব।",
    theme: "blue",
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "group-hover:border-blue-200",
    hoverBg: "group-hover:bg-blue-50/50",
  },
  {
    icon: Bus,
    title: "পরিবহন সুবিধা",
    desc: "সারা কেরাণীগঞ্জ ও পার্শ্ববর্তী এলাকা জুড়ে নিজস্ব নিরাপদ ভ্যান সার্ভিস।",
    theme: "orange",
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "group-hover:border-orange-200",
    hoverBg: "group-hover:bg-orange-50/50",
  },
  {
    icon: ShieldCheck,
    title: "সিসিটিভি সুরক্ষা",
    desc: "২৪/৭ সিসিটিভি মনিটরিং ও প্রশিক্ষিত নিরাপত্তা কর্মী দ্বারা নিয়ন্ত্রিত।",
    theme: "emerald",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "group-hover:border-emerald-200",
    hoverBg: "group-hover:bg-emerald-50/50",
  },
  {
    icon: Microscope,
    title: "বিজ্ঞানাগার",
    desc: "পদার্থ, রসায়ন ও জীববিজ্ঞানের জন্য আলাদা জোন ও আধুনিক যন্ত্রপাতি।",
    theme: "violet",
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "group-hover:border-violet-200",
    hoverBg: "group-hover:bg-violet-50/50",
  },
  {
    icon: HeartPulse,
    title: "প্রাথমিক চিকিৎসা",
    desc: "সার্বক্ষণিক ফার্স্ট-এইড কর্নার এবং বার্ষিক স্বাস্থ্য পরীক্ষা।",
    theme: "rose",
    bg: "bg-rose-50",
    text: "text-rose-600",
    border: "group-hover:border-rose-200",
    hoverBg: "group-hover:bg-rose-50/50",
  },
  {
    icon: Palette,
    title: "সাংস্কৃতিক চর্চা",
    desc: "গান, আবৃত্তি, চিত্রাঙ্কন ও ডিবেট ক্লাবের মাধ্যমে মেধার বিকাশ।",
    theme: "amber",
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "group-hover:border-amber-200",
    hoverBg: "group-hover:bg-amber-50/50",
  },
];

export const Facilities = () => (
  <section className='py-24 bg-white relative overflow-hidden'>
    {/* Background Pattern */}
    <div className='absolute inset-0 opacity-[0.4] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]'></div>

    <div className='max-w-7xl mx-auto px-6 relative z-10'>
      {/* Header */}
      <div className='text-center mb-16 max-w-2xl mx-auto'>
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4'>
          <Sparkles size={14} className='text-yellow-500' />
          কেন আমরা সেরা?
        </div>
        <h2 className='text-3xl md:text-5xl font-black text-slate-900 mb-6'>
          আমাদের{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600'>
            বিশেষ সুবিধাসমূহ
          </span>
        </h2>
        <p className='text-slate-600 text-lg'>
          পুথিগত শিক্ষার বাইরেও আমরা নিশ্চিত করি এমন একটি পরিবেশ, যা শিক্ষার্থীর
          মানসিক ও শারীরিক বিকাশে সহায়ক।
        </p>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {facilities.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`group relative p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 ${item.border} ${item.hoverBg}`}
            >
              <div className='flex items-start justify-between mb-6'>
                <div
                  className={`w-16 h-16 ${item.bg} ${item.text} rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <Icon size={32} strokeWidth={1.5} />
                </div>

                {/* Hover Arrow */}
                <div
                  className={`w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-300 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-blue-600 shadow-sm`}
                >
                  <ArrowRight size={20} />
                </div>
              </div>

              <h3 className='text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-900 transition-colors'>
                {item.title}
              </h3>
              <p className='text-slate-500 text-sm leading-relaxed font-medium'>
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
