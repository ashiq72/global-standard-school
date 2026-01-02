import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  BookOpen,
  Users,
  Award,
} from "lucide-react";
import { NoticeSection } from "./components/NoticeSection";
import { PrincipalMessage } from "./components/PrincipalMessage";
import { FAQ } from "./components/Faq";
import { Facilities } from "./components/Facilities";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { DownloadCenter } from "./components/DownloadCenter";
import { EventCalendar } from "./components/EventCalendar";
import { FinalCTA } from "./components/FinalCTA";
import { CampusExperience } from "./components/CampusExperience";
import { LiveStatus } from "./components/LiveStatus";
import { StudentOfTheMonth } from "./components/StudentOfTheMonth";
import { InquirySection } from "./components/InquirySection";
import { SchoolingFlow } from "./components/SchoolingFlow";
import { CurriculumJourney } from "./components/CurriculumJourney";
import { SchoolClubs } from "./components/SchoolClubs";
import { ResourceHub } from "./components/ResourceHub";
import { PlayzoneSection } from "./components/PlayzoneSection";

// Feature Card এর জন্য টাইপ ডিফাইন করা
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center border-b-4 border-blue-600 group">
    <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="font-bold text-xl mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Top Bar for Contact & EMIS */}
      <div className="bg-blue-950 text-white py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs lg:text-sm">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-yellow-400" /> 01721-126532
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-yellow-400" />{" "}
              globalstandardschool25@gmail.com
            </span>
          </div>
          <div className="font-semibold tracking-wider">
            EMIS CODE: 310130920
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#1e3a8a] text-white py-24 px-6 overflow-hidden">
        {/* Background Pattern (Optional) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-yellow-400 font-medium mb-4 tracking-[0.2em] text-sm md:text-base">
            বিসমিল্লাহির রাহমানির রাহিম
          </h2>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">
            গ্লোবাল স্ট্যান্ডার্ড <span className="text-yellow-400">স্কুল</span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            একটি আধুনিক, সৃজনশীল এবং প্রযুক্তি নির্ভর বিশ্বমানের শিক্ষা
            প্রতিষ্ঠান। <br />
            <span className="font-semibold">প্লে থেকে ১০ম শ্রেণি</span> পর্যন্ত
            ভর্তি চলছে!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-950 px-10 py-4 rounded-full font-extrabold text-lg shadow-2xl hover:-translate-y-1 transition-all">
              অনলাইনে ভর্তি ফরম
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 px-10 py-4 rounded-full font-bold text-lg transition-all">
              বিস্তারিত জানুন
            </button>
          </div>
        </div>
      </section>
      <NoticeSection />
      <PrincipalMessage />
      <FAQ />

      <Facilities />
      <Stats />
      <Testimonials />

      <DownloadCenter />
      <EventCalendar />

      <FinalCTA />

      <StudentOfTheMonth />
      <CampusExperience />
      <LiveStatus />

      <InquirySection />
      {/* <SchoolingFlow /> */}
      <CurriculumJourney />

      <SchoolClubs />
      <ResourceHub />
      <PlayzoneSection />
      {/* Stats/Highlights */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <FeatureCard
            icon={<GraduationCap size={48} />}
            title="অভিজ্ঞ শিক্ষক"
            desc="দক্ষ ও অভিজ্ঞ শিক্ষক মন্ডলী দ্বারা প্রতিটি শিক্ষার্থীর যত্ন নেওয়া হয়।"
          />
          <FeatureCard
            icon={<BookOpen size={48} />}
            title="আধুনিক কারিকুলাম"
            desc="ডিজিটাল কন্টেন্ট ও প্রজেক্টরের মাধ্যমে আনন্দদায়ক পাঠদান।"
          />
          <FeatureCard
            icon={<Users size={48} />}
            title="নিরাপদ ক্যাম্পাস"
            desc="সম্পূর্ণ ক্যাম্পাস সিসিটিভি ক্যামেরা দ্বারা নিয়ন্ত্রিত ও নিরাপদ।"
          />
          <FeatureCard
            icon={<Award size={48} />}
            title="বিশেষ অফার"
            desc="ভর্তির সাথে স্কুল ব্যাগ ও আকর্ষণীয় ইউনিফর্ম একদম ফ্রি!"
          />
        </div>
      </section>

      {/* Map & Address Footer Preview */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-6 text-blue-900">
              আমাদের অবস্থান
            </h3>
            <div className="space-y-4">
              <p className="flex items-start gap-3 text-lg">
                <MapPin className="text-red-600 mt-1 shrink-0" />
                <span>
                  এ টি ম্যানসন, হাজী আঃ বারেক রোড, পশ্চিম আগানগর, দক্ষিণ
                  কেরাণীগঞ্জ, ঢাকা-১৩১০
                </span>
              </p>
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <p className="font-bold text-blue-900 text-sm italic">
                  "আপনার সন্তানের উজ্জ্বল ভবিষ্যতের স্বপ্ন সারথি আমরা"
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center">
            <span className="text-gray-400 font-medium">
              Google Map Placeholder
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
