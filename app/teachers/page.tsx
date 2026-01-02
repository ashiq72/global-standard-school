import React from "react";
import { Mail, GraduationCap, Linkedin } from "lucide-react";

// টিচার ডাটার জন্য টাইপ ডিফাইন
interface Teacher {
  id: number;
  name: string;
  designation: string;
  subject: string;
  education: string;
  image: string;
}

const teachers: Teacher[] = [
  {
    id: 1,
    name: "মোঃ ফারুক হোসাইন",
    designation: "প্রধান শিক্ষক",
    subject: "গণিত",
    education: "এম.এ (জবি)",
    image:
      "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/ea170051-a85b-4f6b-ae5a-c102d3c3a03c.jpg", // পাবলিক ফোল্ডারে ছবি থাকলে
  },
  {
    id: 2,
    name: "মোসাম্মাৎ ফাতেমা খাতুন",
    designation: "সহকারী শিক্ষিকা",
    subject: "ইংরেজি",
    education: "বি.এ (সম্মান), ইংরেজি",
    image: "/teacher2.jpg",
  },
  // এখানে আরও শিক্ষকদের ডাটা যোগ করতে পারবেন
];

export default function TeacherPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">আমাদের শিক্ষক মণ্ডলী</h1>
        <p className="text-blue-100 max-w-2xl mx-auto">
          গ্লোবাল স্ট্যান্ডার্ড স্কুলের প্রতিটি শিক্ষক অত্যন্ত দক্ষ, অভিজ্ঞ এবং
          শিক্ষার্থীদের প্রতি যত্নশীল।
        </p>
      </div>

      {/* Teacher Grid */}
      <div className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-64 bg-gray-200 relative">
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 italic">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900">
                  {teacher.name}
                </h3>
                <p className="text-yellow-600 font-medium text-sm mb-3">
                  {teacher.designation}
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
                    <BookOpen size={14} className="text-blue-500" /> বিষয়:{" "}
                    {teacher.subject}
                  </p>
                  <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
                    <GraduationCap size={16} className="text-blue-500" />{" "}
                    {teacher.education}
                  </p>
                </div>

                <div className="flex justify-center gap-4 pt-4 border-t border-gray-100">
                  <button className="text-gray-400 hover:text-blue-600 transition">
                    <Mail size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-blue-700 transition">
                    <Linkedin size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// আইকন ইমপোর্ট (যদি আগে না করা থাকে)
import { BookOpen } from "lucide-react";
import Image from "next/image";
