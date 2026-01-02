import { Bell, ArrowRight } from "lucide-react";

export const NoticeSection = () => {
  const notices = [
    {
      id: 1,
      date: "০৫ জানু",
      text: "২০২৬ শিক্ষাবর্ষের নতুন বই বিতরণ কার্যক্রম শুরু।",
    },
    {
      id: 2,
      date: "১০ জানু",
      text: "অভিভাবক সমাবেশ ও বার্ষিক পরিকল্পনা আলোচনা।",
    },
    { id: 3, date: "১৫ জানু", text: "প্রথম সাময়িক পরীক্ষার সিলেবাস প্রকাশ।" },
  ];

  return (
    <section className="py-12 bg-white max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Important Notice List */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6 border-l-4 border-blue-600 pl-4">
            <h2 className="text-2xl font-bold text-gray-800">সর্বশেষ নোটিশ</h2>
          </div>
          <div className="space-y-4">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition border border-transparent hover:border-blue-200 group"
              >
                <div className="bg-blue-600 text-white p-3 rounded-lg text-center min-w-[70px]">
                  <span className="text-xs block">জানু</span>
                  <span className="text-xl font-bold">
                    {notice.date.split(" ")[0]}
                  </span>
                </div>
                <p className="flex-1 text-gray-700 font-medium group-hover:text-blue-900">
                  {notice.text}
                </p>
                <ArrowRight
                  className="text-gray-300 group-hover:text-blue-600"
                  size={20}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Quick Links / Video */}
        <div className="bg-blue-900 rounded-3xl p-8 text-white flex flex-col justify-center items-center text-center">
          <div className="bg-white/20 p-4 rounded-full mb-4">
            <Bell className="text-yellow-400 animate-bounce" size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">জরুরি ঘোষণা</h3>
          <p className="text-sm text-blue-200 mb-6">
            ভর্তি সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি আমাদের হেল্পলাইনে কল করুন।
          </p>
          <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-bold text-sm">
            কল করুন
          </button>
        </div>
      </div>
    </section>
  );
};
