import {
  Monitor,
  Bus,
  ShieldCheck,
  HeartPulse,
  Palette,
  Microscope,
} from "lucide-react";

const facilities = [
  {
    icon: <Monitor className="text-blue-600" />,
    title: "কম্পিউটার ল্যাব",
    desc: "শিক্ষার্থীদের জন্য আধুনিক আইসিটি ল্যাব।",
  },
  {
    icon: <Bus className="text-red-600" />,
    title: "পরিবহন সুবিধা",
    desc: "সারা কেরাণীগঞ্জ জুড়ে নিরাপদ ভ্যান সার্ভিস।",
  },
  {
    icon: <ShieldCheck className="text-green-600" />,
    title: "সিসিটিভি সুরক্ষা",
    desc: "সম্পূর্ণ ক্যাম্পাস ২৪/৭ ক্যামেরা দ্বারা নিয়ন্ত্রিত।",
  },
  {
    icon: <Microscope className="text-purple-600" />,
    title: "বিজ্ঞানাগার",
    desc: "হাতে কলমে শেখার জন্য সমৃদ্ধ ল্যাব।",
  },
  {
    icon: <HeartPulse className="text-pink-600" />,
    title: "প্রাথমিক চিকিৎসা",
    desc: "জরুরি প্রয়োজনে প্রাথমিক চিকিৎসার ব্যবস্থা।",
  },
  {
    icon: <Palette className="text-yellow-600" />,
    title: "সাংস্কৃতিক চর্চা",
    desc: "ছবি আঁকা ও গান শেখার বিশেষ ক্লাস।",
  },
];

export const Facilities = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          আমাদের বিশেষ সুবিধাসমূহ
        </h2>
        <p className="text-gray-600">
          গ্লোবাল স্ট্যান্ডার্ড স্কুলে আমরা শিক্ষার পাশাপাশি উন্নত পরিবেশ
          নিশ্চিত করি।
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
          >
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
