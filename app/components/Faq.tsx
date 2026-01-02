export const FAQ = () => {
  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        সচরাচর জিজ্ঞাসা (FAQ)
      </h2>
      <div className="space-y-4">
        {[
          {
            q: "ভর্তির জন্য কি কি কাগজপত্র লাগবে?",
            a: "জন্ম নিবন্ধন কার্ডের কপি এবং পূর্ববর্তী স্কুলের ছাড়পত্র।",
          },
          {
            q: "ক্লাসের সময়সূচী কি?",
            a: "সকাল ৮:৩০ থেকে দুপুর ২:০০ পর্যন্ত ক্লাস পরিচালিত হয়।",
          },
          {
            q: "পরিবহন সুবিধা আছে কি?",
            a: "হ্যাঁ, নির্দিষ্ট রুটে স্কুল ভ্যান সার্ভিস চালু আছে।",
          },
        ].map((item, i) => (
          <details
            key={i}
            className="group border rounded-xl p-4 bg-white shadow-sm cursor-pointer open:ring-1 open:ring-blue-500 transition-all"
          >
            <summary className="font-bold text-gray-700 flex justify-between items-center list-none">
              {item.q}
              <span className="text-blue-500 group-open:rotate-180 transition-transform">
                ▼
              </span>
            </summary>
            <p className="mt-4 text-gray-600 text-sm border-t pt-4 leading-relaxed">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};
