import { ClipboardList, BellRing, PieChart, ShieldCheck } from "lucide-react";

export const SchoolingFlow = () => {
  const flows = [
    { icon: <ClipboardList />, text: "ডিজিটাল হাজিরা" },
    { icon: <BellRing />, text: "এসএমএস এলার্ট" },
    { icon: <PieChart />, text: "প্রগ্রেস রিপোর্ট" },
    { icon: <ShieldCheck />, text: "নিরাপদ ক্যাম্পাস" },
  ];

  return (
    <section className="py-20 bg-blue-950 text-white rounded-[4rem] mx-6 my-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-16 underline decoration-yellow-500 underline-offset-8 italic">
          স্মার্ট স্কুলিং যেভাবে কাজ করে
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {flows.map((f, i) => (
            <div key={i} className="group cursor-default">
              <div className="w-20 h-20 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-blue-950 transition-all duration-500 shadow-2xl">
                {f.icon}
              </div>
              <p className="font-bold text-lg tracking-wide">{f.text}</p>
              <div className="w-10 h-1 bg-yellow-500 mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
