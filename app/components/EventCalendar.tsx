export const EventCalendar = () => {
  const events = [
    {
      date: "২৬",
      month: "মার্চ",
      title: "স্বাধীনতা দিবস উদযাপন",
      time: "সকাল ৯:০০",
    },
    {
      date: "১৪",
      month: "এপ্রিল",
      title: "বাংলা নববর্ষ উৎসব",
      time: "সকাল ১০:৩০",
    },
    { date: "০১", month: "মে", title: "মে দিবস (স্কুল ছুটি)", time: "সারাদিন" },
  ];

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 tracking-tighter">
            আসন্ন ইভেন্টসমূহ
          </h2>
          <p className="text-gray-600 leading-relaxed">
            গ্লোবাল স্ট্যান্ডার্ড স্কুলের বার্ষিক একাডেমিক ক্যালেন্ডারের
            গুরুত্বপূর্ণ তারিখগুলো দেখে নিন।
          </p>
        </div>
        <div className="lg:w-2/3 space-y-4">
          {events.map((ev, i) => (
            <div
              key={i}
              className="flex gap-6 items-center p-6 border-b border-gray-100 hover:bg-gray-50 transition rounded-2xl group"
            >
              <div className="text-center min-w-[80px]">
                <span className="block text-3xl font-black text-blue-600 group-hover:scale-110 transition-transform">
                  {ev.date}
                </span>
                <span className="text-sm font-bold text-gray-500 uppercase">
                  {ev.month}
                </span>
              </div>
              <div className="h-12 w-[2px] bg-yellow-400"></div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">{ev.title}</h4>
                <p className="text-sm text-gray-500">{ev.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
