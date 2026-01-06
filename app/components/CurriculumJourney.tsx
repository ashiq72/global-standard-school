import { BookOpen, Rocket, Shapes, CheckCircle2 } from "lucide-react";

export const CurriculumJourney = () => {
  const steps = [
    {
      grade: "প্লে - নার্সারি",
      title: "ভিত্তি তৈরি",
      desc: "আনন্দময় খেলাধুলার মাধ্যমে অক্ষর চেনা, ছড়া ও সৃজনশীলতার প্রাথমিক বিকাশ।",
      icon: Shapes,
      color: "bg-pink-500",
      lightColor: "bg-pink-50 text-pink-600",
    },
    {
      grade: "১ম - ৫ম শ্রেণি",
      title: "প্রাথমিক ধাপ",
      desc: "গণিত, বিজ্ঞান ও ভাষার ওপর শক্তিশালী দক্ষতা অর্জন এবং নৈতিক শিক্ষার সূচনা।",
      icon: BookOpen,
      color: "bg-cyan-500",
      lightColor: "bg-cyan-50 text-cyan-600",
    },
    {
      grade: "৬ষ্ঠ - ১০ম শ্রেণি",
      title: "ভবিষ্যৎ প্রস্তুতি",
      desc: "ডিজিটাল ল্যাব, রোবোটিক্স ও সৃজনশীল পদ্ধতিতে বোর্ড পরীক্ষার পূর্ণাঙ্গ প্রস্তুতি।",
      icon: Rocket,
      color: "bg-violet-500",
      lightColor: "bg-violet-50 text-violet-600",
    },
  ];

  return (
    <section className='py-24 bg-slate-50 relative overflow-hidden'>
      {/* Background Patterns */}
      <div className='absolute inset-0 opacity-[0.03] bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]'></div>

      <div className='max-w-6xl mx-auto px-6 relative z-10'>
        <div className='text-center mb-20'>
          <span className='text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block'>
            একাডেমিক রোডম্যাপ
          </span>
          <h2 className='text-4xl md:text-5xl font-black text-slate-900'>
            শিক্ষার্থীর{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600'>
              সফলতার যাত্রা
            </span>
          </h2>
        </div>

        <div className='relative'>
          {/* Central Line (Desktop) */}
          <div className='absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-violet-200 to-transparent -translate-x-1/2 hidden md:block rounded-full'></div>

          {/* Mobile Line */}
          <div className='absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-violet-200 to-transparent block md:hidden rounded-full'></div>

          <div className='space-y-12'>
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className='flex-1 w-full md:w-auto pl-16 md:pl-0'>
                  <div
                    className={`relative bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group
                    ${
                      i % 2 === 0
                        ? "md:text-right md:pr-10"
                        : "md:text-left md:pl-10"
                    }
                  `}
                  >
                    {/* Connector Line (Desktop) */}
                    <div
                      className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-10 h-[2px] bg-slate-200 
                      ${i % 2 === 0 ? "-right-10" : "-left-10"}
                    `}
                    ></div>

                    {/* Badge */}
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${step.lightColor}`}
                    >
                      {step.grade}
                    </span>

                    <h3 className='text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors'>
                      {step.title}
                    </h3>
                    <p className='text-slate-500 text-sm leading-relaxed'>
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Center Node (Icon) */}
                <div className='absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center z-10'>
                  <div
                    className={`w-full h-full rounded-full ${step.color} flex items-center justify-center text-white`}
                  >
                    <step.icon size={20} />
                  </div>
                </div>

                {/* Empty Spacer for Layout Balance */}
                <div className='flex-1 hidden md:block'></div>
              </div>
            ))}

            {/* Success Endpoint */}
            <div className='flex justify-center pt-8'>
              <div className='relative z-10 flex flex-col items-center gap-3'>
                <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-xl shadow-green-200 flex items-center justify-center text-white ring-8 ring-white'>
                  <CheckCircle2 size={32} />
                </div>
                <span className='font-bold text-slate-400 text-sm uppercase tracking-widest'>
                  সাফল্য
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
