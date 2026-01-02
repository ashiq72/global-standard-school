import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Camera,
  User,
  MessageSquare,
  Smartphone,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  // আপনার দেওয়া ইমেজ লিঙ্কগুলোর অ্যারে
  const galleryImages = [
    "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/786294b7-d873-42a7-a0de-4bd4174fd4db.jpg",
    "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/81ad4c86-587c-4671-9d04-ef5c365ca30e.jpg",
    "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/8313a317-9da6-4c73-829f-c58bd7e00aa8.jpg",
    "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/9662e172-e6ed-4dcb-af2b-c6e03cd01ff7.jpg",
    "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/12f502f4-2dba-404c-81db-3939822af0a3.jpg",
    "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/3a4d45bf-53bc-4ac4-9b64-f633d2ab37ee.jpg",
    "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/87f07537-48b3-4663-a112-ab9ce274eec5.jpg",
    "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/d9a320ea-2bc8-4f5a-bba5-0683ba7eee88.jpg",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* --- Photo Gallery Section --- */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Camera className="text-blue-600" size={32} />
            </div>
            <h2 className="text-4xl font-black text-blue-900 text-center uppercase tracking-tight">
              স্কুল গ্যালারি
            </h2>
            <div className="w-20 h-1.5 bg-yellow-500 mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="group relative h-64 bg-gray-200 rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={src}
                  alt={`School Event ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                  <span className="text-white font-bold border-2 border-white px-6 py-2 rounded-full text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    ছবি দেখুন
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Enhanced Contact Section --- */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-48 -mt-48"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          {/* Left Column: Contact Info (5 Columns) */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                Contact Us
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-blue-900 mt-6 leading-tight">
                আপনার সাথে কথা বলতে <br />{" "}
                <span className="text-blue-600">আমরা আগ্রহী</span>
              </h2>
              <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                আপনার সন্তানের শিক্ষা নিয়ে যেকোনো পরামর্শ বা স্কুলের কার্যক্রম
                সম্পর্কে জানতে আমাদের সরাসরি মেসেজ করুন।
              </p>
            </div>

            <div className="space-y-6">
              <ContactInfoCard
                icon={<MapPin size={24} />}
                title="ঠিকানা"
                detail="এ টি ম্যানসন, হাজী আঃ বারেক রোড, পশ্চিম আগানগর, দক্ষিণ কেরাণীগঞ্জ।"
                color="bg-blue-100 text-blue-600"
              />
              <ContactInfoCard
                icon={<Smartphone size={24} />}
                title="ফোন করুন"
                detail="০১৭২১-১২৬৫৩২, ০১৭১২-১২৯৭৬৮"
                color="bg-green-100 text-green-600"
              />
              <ContactInfoCard
                icon={<Clock size={24} />}
                title="অফিস সময়"
                detail="শনি - বৃহস্পতি (সকাল ৮:০০ - বিকাল ৪:০০)"
                color="bg-orange-100 text-orange-600"
              />
            </div>
          </div>

          {/* Right Column: Premium Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-100 rounded-[3rem] p-8 md:p-12 shadow-2xl relative">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      আপনার নাম
                    </label>
                    <div className="relative group">
                      <User
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition"
                        size={20}
                      />
                      <input
                        type="text"
                        placeholder="উদা: আরিয়ান আহমেদ"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition duration-300"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      ফোন নম্বর
                    </label>
                    <div className="relative group">
                      <Smartphone
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition"
                        size={20}
                      />
                      <input
                        type="text"
                        placeholder="০১৭XX-XXXXXX"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    ইমেইল অ্যাড্রেস
                  </label>
                  <div className="relative group">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition"
                      size={20}
                    />
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition duration-300"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    আপনার বার্তা
                  </label>
                  <div className="relative group">
                    <MessageSquare
                      className="absolute left-4 top-4 text-gray-400 group-focus-within:text-blue-600 transition"
                      size={20}
                    />
                    <textarea
                      rows={4}
                      placeholder="আপনার প্রশ্ন বা মতামত এখানে লিখুন..."
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition duration-300"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-blue-900 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-yellow-500 hover:text-blue-900 transition-all duration-300 shadow-xl group">
                  বার্তা পাঠান
                  <Send
                    size={20}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable Contact Info Card Component
function ContactInfoCard({ icon, title, detail, color }: any) {
  return (
    <div className="flex items-center gap-5 p-4 rounded-[1.5rem] hover:bg-gray-50 transition duration-300 border border-transparent hover:border-gray-100">
      <div className={`p-4 ${color} rounded-2xl shadow-sm shrink-0`}>
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-gray-800 text-lg">{title}</h4>
        <p className="text-gray-600 text-sm leading-tight">{detail}</p>
      </div>
    </div>
  );
}
