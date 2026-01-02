export const CurriculumJourney = () => {
  const steps = [
    {
      grade: "প্লে - নার্সারি",
      title: "ভিত্তি তৈরি",
      desc: "খেলাধুলার মাধ্যমে অক্ষর চেনা ও সৃজনশীলতার বিকাশ।",
    },
    {
      grade: "১ম - ৫মি শ্রেণি",
      title: "প্রাথমিক ধাপ",
      desc: "গণিত, বিজ্ঞান ও ভাষার ওপর শক্তিশালী দক্ষতা অর্জন।",
    },
    {
      grade: "৬ষ্ঠ - ১০ম শ্রেণি",
      title: "ভবিষ্যৎ প্রস্তুতি",
      desc: "ডিজিটাল ল্যাব ও সৃজনশীল পদ্ধতিতে বোর্ড পরীক্ষার পূর্ণাঙ্গ প্রস্তুতি।",
    },
  ];

  return (
    <section className="py-24 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center text-blue-900 mb-20">
          শিক্ষার্থীর সফলতার যাত্রা
        </h2>
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 text-center md:text-right px-4">
                  <div
                    className={i % 2 !== 0 ? "md:text-left" : "md:text-right"}
                  >
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">
                      {step.grade}
                    </h3>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 max-w-sm mx-auto md:ml-auto">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="relative z-10 w-12 h-12 bg-yellow-500 border-4 border-white rounded-full shadow-xl flex items-center justify-center font-bold text-blue-900">
                  {i + 1}
                </div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
