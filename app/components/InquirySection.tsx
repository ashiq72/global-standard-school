export const InquirySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gray-50 border-2 border-dashed border-blue-200 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-blue-900 tracking-tight leading-tight">
              ভর্তি বা অন্য কোনো <br /> জিজ্ঞাসা আছে কি?
            </h2>
            <p className="text-gray-500">
              আমাদের দক্ষ টিম আপনাকে সব তথ্য দিয়ে সাহায্য করতে প্রস্তুত।
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <button className="bg-blue-900 text-white px-10 py-4 rounded-2xl font-bold shadow-xl hover:bg-blue-800 transition">
              সরাসরি কল দিন
            </button>
            <div className="flex items-center gap-3 justify-center text-sm font-bold text-blue-900">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>{" "}
              সাপোর্ট টিম অনলাইন
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
