import { Play, Map } from "lucide-react";

export const CampusExperience = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-blue-900 mb-6 leading-tight">
              আমাদের ক্যাম্পাসের <br />{" "}
              <span className="text-yellow-500 underline decoration-blue-900 underline-offset-8">
                ডিজিটাল অভিজ্ঞতা
              </span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  t: "স্মার্ট ক্লাসরুম",
                  d: "প্রতিটি ক্লাসে মাল্টিমিডিয়া প্রজেক্টর এবং হাই-স্পিড ওয়াইফাই সুবিধা।",
                },
                {
                  t: "আধুনিক বিজ্ঞান ল্যাব",
                  d: "হাতে-কলমে পরীক্ষার মাধ্যমে শিক্ষার পূর্ণতা।",
                },
                {
                  t: "নিরাপদ জোন",
                  d: "আগানগর পশ্চিম এলাকার সবচেয়ে নিরাপদ এবং নিরিবিলি ক্যাম্পাস।",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                    <Map size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.t}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Placeholder with Play Button Animation */}
          <div className="relative group cursor-pointer">
            <div className="aspect-video bg-blue-950 rounded-[3rem] overflow-hidden border-[12px] border-gray-100 shadow-2xl flex items-center justify-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-blue-900 shadow-2xl group-hover:scale-110 transition-transform">
                <Play size={32} fill="currentColor" />
              </div>
            </div>
            {/* Floating Info */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-full shadow-lg border font-bold text-blue-900 whitespace-nowrap">
              ভিডিও ট্যুর দেখুন (২:৩০ মিনিট)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
