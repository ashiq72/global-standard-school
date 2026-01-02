import Link from "next/link";

export const FinalCTA = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-blue-900 to-blue-700 rounded-[2rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ শুরু হোক এখানে!
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            ২০২৬ শিক্ষাবর্ষে প্লে থেকে ১০ম শ্রেণি পর্যন্ত ভর্তি চলছে। সীমিত
            আসনের জন্য আজই আপনার আবেদন সম্পন্ন করুন।
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/admission"
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-black text-lg hover:bg-yellow-400 hover:scale-105 transition"
            >
              ভর্তি ফরম পূরণ করুন
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/30 backdrop-blur-sm px-10 py-4 rounded-full font-black text-lg hover:bg-white/10 transition"
            >
              যোগাযোগ করুন
            </Link>
          </div>
        </div>
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      </div>
    </section>
  );
};
