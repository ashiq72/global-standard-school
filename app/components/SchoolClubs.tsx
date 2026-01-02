import { Music, Trophy, Tent, Mic2 } from "lucide-react";

export const SchoolClubs = () => {
  const clubs = [
    {
      name: "ডিবেটিং ক্লাব",
      icon: <Mic2 />,
      color: "bg-purple-100 text-purple-600",
      desc: "যুক্তি ও তর্কের মাধ্যমে মেধা বিকাশ।",
    },
    {
      name: "স্কাউট দল",
      icon: <Tent />,
      color: "bg-green-100 text-green-600",
      desc: "শৃঙ্খলার সাথে সমাজসেবার শিক্ষা।",
    },
    {
      name: "ক্রীড়া ক্লাব",
      icon: <Trophy />,
      color: "bg-blue-100 text-blue-600",
      desc: "সুস্থ দেহে সুন্দর মন ও প্রতিযোগিতার স্পৃহা।",
    },
    {
      name: "সাংস্কৃতিক ক্লাব",
      icon: <Music />,
      color: "bg-pink-100 text-pink-600",
      desc: "গান, আবৃত্তি ও নাচের বিশেষ প্রশিক্ষণ।",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-blue-900 mb-16 border-l-8 border-yellow-500 pl-6">
          সহ-শিক্ষা কার্যক্রম (Clubs)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clubs.map((club, i) => (
            <div
              key={i}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all group"
            >
              <div
                className={`w-16 h-16 ${club.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                {club.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {club.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {club.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
