import React from "react";
import { Target, Eye, Heart, ShieldCheck, MapPin, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-blue-900 py-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            আমাদের সম্পর্কে
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            গ্লোবাল স্ট্যান্ডার্ড স্কুল দক্ষিণ কেরাণীগঞ্জের একটি শীর্ষস্থানীয়
            শিক্ষা প্রতিষ্ঠান, যেখানে প্রতিটি শিক্ষার্থীর সুপ্ত মেধা বিকাশে আমরা
            অঙ্গীকারবদ্ধ।
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                {/* School Image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400 italic">
                  স্কুল বিল্ডিং ফটো
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-8 rounded-2xl hidden lg:block">
                <p className="text-blue-900 font-black text-3xl italic underline underline-offset-4">
                  স্থাপিত: ২০২৫
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">
              আমাদের লক্ষ্য ও উদ্দেশ্য
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              দক্ষিণ কেরাণীগঞ্জের পশ্চিম আগানগর এলাকায় শিক্ষার মানোন্নয়নের লক্ষে{" "}
              <b>গ্লোবাল স্ট্যান্ডার্ড স্কুল</b> প্রতিষ্ঠিত হয়েছে। আমরা বিশ্বাস
              করি কেবল পুঁথিগত বিদ্যা নয়, বরং নৈতিকতা এবং সৃজনশীলতার সমন্বয়েই
              একজন শিক্ষার্থী সত্যিকারের মানুষ হয়ে ওঠে।
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              বিগত কয়েক বছরে আমাদের সুদক্ষ শিক্ষক মণ্ডলী এবং আধুনিক পাঠদান
              পদ্ধতির মাধ্যমে আমরা স্থানীয় অভিভাবকদের আস্থার প্রতীকে পরিণত
              হয়েছি।
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <AboutCard
            icon={<Target className="text-red-500" size={32} />}
            title="আমাদের লক্ষ্য (Mission)"
            desc="ডিজিটাল কারিকুলাম এবং আধুনিক শিক্ষার মাধ্যমে প্রতিটি শিক্ষার্থীকে বিশ্বমানের প্রতিযোগিতার জন্য গড়ে তোলা।"
          />
          <AboutCard
            icon={<Eye className="text-blue-500" size={32} />}
            title="আমাদের ভিশন (Vision)"
            desc="একটি সৃজনশীল সমাজ বিনির্মাণ করা যেখানে প্রতিটি শিশু নৈতিক মূল্যবোধ এবং প্রযুক্তিতে দক্ষ হবে।"
          />
          <AboutCard
            icon={<Heart className="text-pink-500" size={32} />}
            title="আমাদের মূল্যবোধ (Values)"
            desc="সততা, শৃঙ্খলা এবং সহমর্মিতা—এই তিনটি মূলনীতির ওপর ভিত্তি করেই আমাদের শিক্ষা ব্যবস্থা পরিচালিত।"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-16">
            কেন আমাদের স্কুল আলাদা?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex gap-4">
              <ShieldCheck className="text-green-600 shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-lg mb-1">
                  নিরাপদ ও সিসিটিভি নিয়ন্ত্রিত
                </h4>
                <p className="text-sm text-gray-600 italic">
                  সম্পূর্ণ ক্যাম্পাস এবং ক্লাসরুম আধুনিক ক্যামেরা দ্বারা
                  সার্বক্ষণিক পর্যবেক্ষণ করা হয়।
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="text-blue-600 shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-lg mb-1">যাতায়াত সুবিধা</h4>
                <p className="text-sm text-gray-600 italic">
                  কেরাণীগঞ্জের যেকোনো প্রান্ত থেকে শিক্ষার্থীদের আনা-নেওয়ার জন্য
                  রয়েছে নিরাপদ স্কুল ভ্যান।
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Award className="text-yellow-600 shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-lg mb-1">বিশেষ বৃত্তি সুবিধা</h4>
                <p className="text-sm text-gray-600 italic">
                  মেধাবী এবং দরিদ্র শিক্ষার্থীদের জন্য বিশেষ টিউশন ফি মওকুফ ও
                  বৃত্তির ব্যবস্থা রয়েছে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-component for About Cards
function AboutCard({
  icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition text-center group">
      <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}
