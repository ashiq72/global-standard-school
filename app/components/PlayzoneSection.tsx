import { FerrisWheel, Baby, Map, Puzzle, Ghost } from "lucide-react";

export const PlayzoneSection = () => {
  const activities = [
    {
      icon: <FerrisWheel size={32} />,
      title: "আধুনিক রাইড",
      desc: "শিশুদের জন্য নিরাপদ দোলনা, স্লাইড এবং সি-স।",
    },
    {
      icon: <Puzzle size={32} />,
      title: "সৃজনশীল খেলা",
      desc: "মেধা বিকাশের জন্য ইনডোর পাজল ও ব্লক গেমস।",
    },
    {
      icon: <Ghost size={32} />,
      title: "সফট প্লে-জোন",
      desc: "সম্পূর্ণ ফ্লোর ম্যাট দিয়ে ঘেরা চোটমুক্ত খেলার জায়গা।",
    },
  ];

  return (
    <section className="py-24 bg-[#fffaf0] relative overflow-hidden">
      {/* Decorative Floating Shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-30 blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-30 blur-xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Images Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="h-64 bg-orange-100 rounded-[3rem] border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
                {/* Image placeholder */}
                <div className="text-orange-300 font-bold rotate-12 uppercase">
                  Fun Rides
                </div>
              </div>
              <div className="h-48 bg-blue-100 rounded-[2rem] border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
                <div className="text-blue-300 font-bold -rotate-12 uppercase tracking-tighter">
                  Kids Area
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-48 bg-green-100 rounded-[2rem] border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
                <div className="text-green-300 font-bold uppercase tracking-tighter">
                  Indoor
                </div>
              </div>
              <div className="h-64 bg-pink-100 rounded-[3rem] border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
                <div className="text-pink-300 font-bold rotate-6 uppercase tracking-tighter">
                  Happiness
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-yellow-100 text-yellow-700 px-6 py-2 rounded-full font-bold text-sm mb-6 border border-yellow-200">
              🎈 কিডস জোন ও প্লে-গ্রাউন্ড
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight mb-8">
              খেলার ছলে <span className="text-pink-600">শেখার</span> এক আনন্দময়
              ভুবন!
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed italic">
              "গ্লোবাল স্ট্যান্ডার্ড স্কুলে আমরা বিশ্বাস করি প্রতিটি শিশুর শৈশব
              হওয়া উচিত রঙিন। আমাদের সুরক্ষিত প্লে-জোনে শিক্ষার্থীরা পড়াশোনার
              পাশাপাশি শারীরিক কসরত ও সামাজিক মেলামেশার সুযোগ পায়।"
            </p>

            <div className="space-y-6">
              {activities.map((act, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                    {act.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">
                      {act.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {act.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ground Decoration - Svg Curve */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
          className="relative block w-full h-[60px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.43,147.3,126,214.34,108.33c67.04-17.67,114.16-41.1,172.05-51.89Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
};
