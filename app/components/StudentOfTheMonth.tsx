import { Star, Trophy, Quote } from "lucide-react";

export const StudentOfTheMonth = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Profile Card */}
        <div className="lg:w-1/3 relative">
          <div className="bg-white p-4 rounded-[2.5rem] rotate-3 shadow-2xl relative z-10">
            <div className="aspect-[4/5] bg-gray-200 rounded-[2rem] overflow-hidden flex items-center justify-center">
              <span className="text-gray-400 font-bold uppercase tracking-tighter">
                Student Photo
              </span>
            </div>
          </div>
          {/* Decorative Badges */}
          <div className="absolute -top-6 -left-6 bg-yellow-400 p-4 rounded-full text-blue-900 animate-pulse z-20 shadow-lg">
            <Trophy size={32} />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl text-blue-900 font-bold z-20 shadow-xl border-2 border-yellow-400">
            গৌরব ২০২৬
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-2/3 space-y-6">
          <div className="flex items-center gap-2 text-yellow-400 uppercase tracking-widest font-bold text-sm">
            <Star size={16} fill="currentColor" /> মাসের সেরা শিক্ষার্থী
          </div>
          <h2 className="text-4xl md:text-6xl font-black italic">
            আরিয়ান আহমেদ (আকাশ)
          </h2>
          <p className="text-xl text-blue-200 font-medium">
            শ্রেণি: ৫ম | রোল: ০১
          </p>
          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20 relative">
            <Quote
              className="absolute -top-4 left-6 text-yellow-400 opacity-50"
              size={48}
            />
            <p className="text-lg italic leading-relaxed">
              "গ্লোবাল স্ট্যান্ডার্ড স্কুলের শিক্ষকরা আমাকে শুধু পড়াশোনাই নয়,
              বরং সৃজনশীল কাজ করতে অনেক অনুপ্রাণিত করেন। আমি ভবিষ্যতে একজন
              সফটওয়্যার ইঞ্জিনিয়ার হতে চাই।"
            </p>
          </div>
        </div>
      </div>

      {/* Background Decorative Circles */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2"></div>
    </section>
  );
};
