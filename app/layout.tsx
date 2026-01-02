import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Phone, Mail, Facebook, Youtube } from "lucide-react";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global Standard School | কেরাণীগঞ্জ, ঢাকা - প্লে থেকে ১০ম শ্রেণি",
  description:
    "এ টি ম্যানসন, হাজী আঃ বারেক রোড, দক্ষিণ কেরাণীগঞ্জ। আধুনিক ও প্রযুক্তি নির্ভর বিশ্বমানের শিক্ষা প্রতিষ্ঠান।",
  keywords: [
    "Global Standard School",
    "School in Keraniganj",
    "Best School Dhaka",
    "কেরাণীগঞ্জ স্কুল",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation Bar */}

        <Navbar />
        {/* Page Content */}
        {children}

        {/* Footer Section */}
        <footer className="bg-blue-950 text-white pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">
                গ্লোবাল স্ট্যান্ডার্ড স্কুল
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                দক্ষিণ কেরাণীগঞ্জের একটি অগ্রগামী শিক্ষা প্রতিষ্ঠান যেখানে
                নৈতিকতা ও আধুনিক শিক্ষার সমন্বয় ঘটে।
              </p>
              <div className="flex gap-4 mt-6">
                <Facebook className="hover:text-yellow-400 cursor-pointer" />
                <Youtube className="hover:text-yellow-400 cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">দ্রুত লিঙ্ক</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <Link href="/notices">নোটিশ বোর্ড</Link>
                </li>
                <li>
                  <Link href="/gallery">ফটো গ্যালারি</Link>
                </li>
                <li>
                  <Link href="/teachers">শিক্ষক তালিকা</Link>
                </li>
                <li>
                  <Link href="/contact">ম্যাপ লোকেশন</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">যোগাযোগ</h3>
              <div className="space-y-3 text-sm text-blue-200">
                <p className="flex items-center gap-2">
                  <Phone size={16} /> 01721-126532
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} /> info@gss.edu.bd
                </p>
                <p className="leading-tight">
                  এ টি ম্যানসন, হাজী আঃ বারেক রোড, পশ্চিম আগানগর, ঢাকা-১৩১০
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-900 mt-12 pt-8 text-center text-xs text-blue-400">
            © ২০২৬ গ্লোবাল স্ট্যান্ডার্ড স্কুল। সর্বস্বত্ব সংরক্ষিত।
          </div>
        </footer>
      </body>
    </html>
  );
}
