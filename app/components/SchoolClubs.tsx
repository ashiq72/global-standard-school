import { Music, Trophy, Tent, Mic2, ArrowRight, Sparkles } from "lucide-react";

export const SchoolClubs = () => {
  const clubs = [
    {
      name: "ডিবেটিং ক্লাব",
      icon: Mic2,
      theme: "purple",
      desc: "যুক্তি ও তর্কের মাধ্যমে মেধা বিকাশ এবং নেতৃত্বের গুণাবলী অর্জন।",
    },
    {
      name: "স্কাউট দল",
      icon: Tent,
      theme: "emerald",
      desc: "আত্মনির্ভরশীলতা, শৃঙ্খলা এবং সমাজসেবার মহান ব্রত নিয়ে গঠিত।",
    },
    {
      name: "ক্রীড়া ক্লাব",
      icon: Trophy,
      theme: "blue",
      desc: "ফুটবল, ক্রিকেট ও ইনডোর গেমসের মাধ্যমে সুস্থ শরীর ও মন গঠন।",
    },
    {
      name: "সাংস্কৃতিক ক্লাব",
      icon: Music,
      theme: "rose",
      desc: "গান, আবৃত্তি, নাচ ও নাটকের মাধ্যমে বাঙালি সংস্কৃতির চর্চা।",
    },
  ];

  // Helper to get color styles
  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case "purple":
        return {
          bg: "bg-purple-50",
          text: "text-purple-600",
          hoverBorder: "hover:border-purple-200",
          iconBg: "bg-purple-100",
        };
      case "emerald":
        return {
          bg: "bg-emerald-50",
          text: "text-emerald-600",
          hoverBorder: "hover:border-emerald-200",
          iconBg: "bg-emerald-100",
        };
      case "blue":
        return {
          bg: "bg-blue-50",
          text: "text-blue-600",
          hoverBorder: "hover:border-blue-200",
          iconBg: "bg-blue-100",
        };
      case "rose":
        return {
          bg: "bg-rose-50",
          text: "text-rose-600",
          hoverBorder: "hover:border-rose-200",
          iconBg: "bg-rose-100",
        };
      default:
        return {
          bg: "bg-gray-50",
          text: "text-gray-600",
          hoverBorder: "hover:border-gray-200",
          iconBg: "bg-gray-100",
        };
    }
  };

  return (
    <section className='py-24 bg-white relative overflow-hidden'>
      {/* Background Decor */}
      <div className='absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px]'></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        {/* Header */}
        <div className='mb-16 md:text-center max-w-3xl mx-auto'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4'>
            <Sparkles size={14} className='text-yellow-500' />
            Co-Curricular Activities
          </div>
          <h2 className='text-3xl md:text-5xl font-black text-slate-900 mb-6'>
            পুথিগত বিদ্যার বাইরে <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
              প্রতিভার বিকাশ
            </span>
          </h2>
          <p className='text-slate-600 text-lg'>
            শিক্ষার্থীদের সুপ্ত প্রতিভা বিকশিত করতে এবং তাদের আত্মবিশ্বাসী করে
            গড়ে তুলতে আমাদের রয়েছে সক্রিয় ক্লাব কার্যক্রম।
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {clubs.map((club, i) => {
            const styles = getThemeStyles(club.theme);
            const Icon = club.icon;

            return (
              <div
                key={i}
                className={`group relative p-8 rounded-[2rem] bg-white border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 ${styles.hoverBorder}`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${styles.iconBg} ${styles.text} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <Icon size={32} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className='text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors'>
                  {club.name}
                </h3>
                <p className='text-slate-500 text-sm leading-relaxed mb-6'>
                  {club.desc}
                </p>

                {/* Footer / Action */}
                <div className='flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors cursor-pointer'>
                  বিস্তারিত
                  <ArrowRight
                    size={16}
                    className='transition-transform duration-300 group-hover:translate-x-1'
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
