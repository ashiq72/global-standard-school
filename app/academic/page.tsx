import React from "react";
import { Book, Calendar, ClipboardList, Download, Search } from "lucide-react";

export default function AcademicPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-blue-50 py-16 px-6 border-b">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
            একাডেমিক কার্যক্রম
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            গ্লোবাল স্ট্যান্ডার্ড স্কুলে আমরা আধুনিক কারিকুলাম অনুসরণ করি যা
            শিক্ষার্থীদের মেধা বিকাশে সহায়ক।
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* 1. Result Check UI (The Interactive Part) */}
        <section className="bg-blue-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4 italic">
                অনলাইন রেজাল্ট দেখুন
              </h2>
              <p className="text-blue-100">
                আপনার রোল এবং রেজিস্ট্রেশন নম্বর দিয়ে সাময়িক পরীক্ষার ফলাফল
                সংগ্রহ করুন।
              </p>
            </div>
            <div className="w-full md:w-auto bg-white/10 p-2 rounded-2xl backdrop-blur-sm flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="রোল নম্বর"
                className="bg-white text-gray-900 px-6 py-3 rounded-xl focus:outline-none w-full sm:w-40"
              />
              <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-xl flex items-center justify-center gap-2 transition">
                <Search size={20} /> সার্চ করুন
              </button>
            </div>
          </div>
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        </section>

        {/* 2. Syllabus Section */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <Book className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-800">
              সিলেবাস ও বইয়ের তালিকা
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((cls) => (
              <div
                key={cls}
                className="group p-6 border rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-700">
                    ক্লাস {cls}
                  </h3>
                  <p className="text-sm text-gray-500">শিক্ষাবর্ষ ২০২৬</p>
                </div>
                <button className="p-3 bg-gray-100 group-hover:bg-blue-600 group-hover:text-white rounded-full transition">
                  <Download size={20} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Class Routine Table Preview */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <Calendar className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-800">
              সাপ্তাহিক ক্লাস রুটিন
            </h2>
          </div>
          <div className="overflow-x-auto border rounded-2xl shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="p-4 font-bold text-blue-900">সময় / দিন</th>
                  <th className="p-4 font-bold text-blue-900">শনিবার</th>
                  <th className="p-4 font-bold text-blue-900">রবিবার</th>
                  <th className="p-4 font-bold text-blue-900">সোমবার</th>
                  <th className="p-4 font-bold text-blue-900">মঙ্গলবার</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-4 bg-gray-50 font-medium">০৮:০০ - ০৮:৪৫</td>
                  <td className="p-4 italic">গণিত</td>
                  <td className="p-4 italic">ইংরেজি</td>
                  <td className="p-4 italic">বাংলা</td>
                  <td className="p-4 italic">বিজ্ঞান</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 bg-gray-50 font-medium">০৮:৪৫ - ০৯:৩০</td>
                  <td className="p-4 italic">ধর্ম</td>
                  <td className="p-4 italic">গণিত</td>
                  <td className="p-4 italic">বিজ্ঞান</td>
                  <td className="p-4 italic">ইংরেজি</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            * এটি একটি ডামি রুটিন, পূর্ণাঙ্গ রুটিন ড্যাশবোর্ড থেকে ডাউনলোড করা
            যাবে।
          </p>
        </section>
      </div>
    </div>
  );
}
