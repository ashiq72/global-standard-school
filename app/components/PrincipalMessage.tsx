import Image from "next/image";

export const PrincipalMessage = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3 relative">
          <div className="aspect-[3/4] bg-gray-300 rounded-2xl overflow-hidden border-8 border-white shadow-xl">
            {/* Principal Image */}
            <div className="w-full h-full flex items-center justify-center text-gray-500 italic">
              <Image
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/ea170051-a85b-4f6b-ae5a-c102d3c3a03c.jpg"
                alt="Faruk Hossain"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-6 rounded-2xl hidden md:block">
            <p className="text-blue-900 font-bold text-xl uppercase tracking-tighter">
              10+ Years
            </p>
            <p className="text-blue-900 text-xs font-medium">
              Experience in Education
            </p>
          </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-2 border-yellow-500 inline-block pb-2">
            প্রধান শিক্ষকের বাণী
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
            "আমাদের লক্ষ্য কেবল পাঠ্যপুস্তকের জ্ঞান নয়, বরং প্রতিটি শিক্ষার্থীকে
            একজন সুনাগরিক হিসেবে গড়ে তোলা। দক্ষিণ কেরাণীগঞ্জে আধুনিক শিক্ষার আলো
            ছড়িয়ে দিতে আমরা বদ্ধপরিকর।"
          </p>
          <h4 className="font-bold text-xl text-gray-800 underline">
            মোঃ ফারুক হোসাইন
          </h4>
          <p className="text-blue-600">
            প্রধান শিক্ষক, গ্লোবাল স্ট্যান্ডার্ড স্কুল
          </p>
        </div>
      </div>
    </section>
  );
};
