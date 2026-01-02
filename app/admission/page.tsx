"use client"; // যেহেতু আমরা ফরম হ্যান্ডেল করব, তাই এটি ক্লায়েন্ট কম্পোনেন্ট হতে হবে

import React, { useState } from "react";

// স্টুডেন্ট ডাটার জন্য টাইপ ইন্টারফেস
interface AdmissionData {
  studentName: string;
  targetClass: string;
  fatherName: string;
  phone: string;
  address: string;
}

export default function AdmissionPage() {
  const [formData, setFormData] = useState<AdmissionData>({
    studentName: "",
    targetClass: "",
    fatherName: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("আবেদনটি গ্রহণ করা হয়েছে! আমরা শীঘ্রই যোগাযোগ করব।");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Form Header */}
        <div className="bg-blue-700 text-white py-8 px-10 text-center">
          <h1 className="text-3xl font-bold">অনলাইন ভর্তি ফরম</h1>
          <p className="text-blue-100 mt-2">
            গ্লোবাল স্ট্যান্ডার্ড স্কুল - সেশন ২০২৬
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                শিক্ষার্থীর পূর্ণ নাম *
              </label>
              <input
                required
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="উদা: আরিয়ান আহমেদ"
                onChange={(e) =>
                  setFormData({ ...formData, studentName: e.target.value })
                }
              />
            </div>

            {/* Target Class */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ভর্তির শ্রেণি *
              </label>
              <select
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, targetClass: e.target.value })
                }
              >
                <option value="">শ্রেণি নির্বাচন করুন</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    ক্লাস {i + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Father's Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                পিতার নাম *
              </label>
              <input
                required
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, fatherName: e.target.value })
                }
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ফোন নম্বর *
              </label>
              <input
                required
                type="tel"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="017XXXXXXXX"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              বর্তমান ঠিকানা *
            </label>
            <textarea
              required
              rows={3}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 rounded-xl transition-all shadow-lg text-lg"
          >
            আবেদন জমা দিন
          </button>
        </form>
      </div>
    </div>
  );
}
