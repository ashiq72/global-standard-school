export const Testimonials = () => (
  <section className="py-20 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-16 underline decoration-yellow-400">
        অভিভাবকদের মতামত
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            name: "আব্দুল্লাহ আল মামুন",
            comment:
              "এই স্কুলের শিক্ষার পরিবেশ এবং শিক্ষকদের ব্যবহার সত্যিই প্রশংসনীয়। আমার ছেলে খুব দ্রুত নিজেকে মানিয়ে নিয়েছে।",
          },
          {
            name: "রাবেয়া আক্তার",
            comment:
              "কেরাণীগঞ্জের মধ্যে এরকম আধুনিক কারিকুলাম এবং নিরাপদ ডিজিটাল ক্যাম্পাস আগে দেখিনি। আমি অত্যন্ত সন্তুষ্ট।",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-8 bg-blue-50 rounded-br-[50px] rounded-tl-[50px] border-l-8 border-blue-600 relative"
          >
            <span className="text-6xl text-blue-200 absolute top-4 right-8 select-none">
              "
            </span>
            <p className="text-gray-700 italic mb-6 relative z-10">
              {item.comment}
            </p>
            <h4 className="font-bold text-blue-900">— {item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);
