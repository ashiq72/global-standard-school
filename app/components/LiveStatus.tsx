export const LiveStatus = () => {
  return (
    <section className="py-16 bg-blue-50 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-blue-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-950">
              আজকের বিশেষ কার্যক্রম
            </h3>
            <p className="text-gray-500">
              Global Standard School | শুক্রবার বন্ধ ছাড়া প্রতিদিন আপডেট হয়
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-2 bg-green-100 text-green-700 rounded-full font-bold text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>{" "}
              স্কুল খোলা
            </div>
            <div className="px-6 py-2 bg-blue-900 text-white rounded-full font-bold text-sm">
              পিরিয়ড: ৩য়
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-yellow-500">
            <h4 className="font-bold text-gray-400 text-xs uppercase mb-2">
              লাঞ্চ বিরতি
            </h4>
            <p className="font-bold text-gray-800 uppercase tracking-wide">
              ১:৩০ PM - ২:০০ PM
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-400 text-xs uppercase mb-2">
              পরবর্তী ইভেন্ট
            </h4>
            <p className="font-bold text-gray-800 uppercase tracking-wide">
              বার্ষিক ক্রীড়া প্রতিযোগিতা
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-indigo-500">
            <h4 className="font-bold text-gray-400 text-xs uppercase mb-2">
              আজকের উপস্থিতি
            </h4>
            <p className="font-bold text-gray-800 uppercase tracking-wide">
              ৯৬% শিক্ষার্থী উপস্থিত
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
