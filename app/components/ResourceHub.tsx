import { DownloadCloud } from "lucide-react";

export const ResourceHub = () => {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-5xl mx-auto bg-blue-900 rounded-3xl p-10 md:p-16 text-white text-center shadow-2xl">
        <h2 className="text-3xl font-bold mb-4 italic">প্রয়োজনীয় তথ্য ও ফরম</h2>
        <p className="text-blue-200 mb-10">
          অনলাইনে ভর্তি ফরম থেকে শুরু করে একাডেমিক ক্যালেন্ডার—সবকিছুই এখানে
          পাবেন।
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {["ছুটির তালিকা", "সিলেবাস", "বেতন কাঠামো"].map((item, i) => (
            <button
              key={i}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-2xl flex flex-col items-center gap-3 transition-all border border-white/10 group"
            >
              <DownloadCloud className="text-yellow-400 group-hover:scale-125 transition-transform" />
              <span className="font-bold text-sm">{item}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
