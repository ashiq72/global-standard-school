"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "হোম", href: "/" },
    { name: "আমাদের সম্পর্কে", href: "/about" },
    { name: "একাডেমিক", href: "/academic" },
    { name: "শিক্ষকবৃন্দ", href: "/teachers" },
    { name: "ভর্তি ফরম", href: "/admission" },
    { name: "যোগাযোগ", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="text-xl md:text-2xl font-black text-blue-900 group-hover:text-blue-700 transition">
              GLOBAL <span className="text-yellow-500">STANDARD</span>
            </span>
            <span className="text-[10px] font-bold text-gray-500 tracking-[0.3em] uppercase">
              School & College
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 font-bold text-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-blue-600 transition text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="tel:+8801721126532"
              className="flex items-center gap-2 bg-blue-900 text-white px-5 py-2.5 rounded-full font-bold hover:bg-yellow-500 hover:text-blue-900 transition shadow-md"
            >
              <Phone size={18} /> ০১৭২১-১২৬৫৩২
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900 p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t absolute w-full shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-2 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-4 text-lg font-bold text-gray-800 border-b border-gray-50 last:border-none hover:bg-blue-50"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/admission"
                className="block bg-yellow-500 text-blue-900 py-4 rounded-xl font-black text-lg"
              >
                ভর্তি আবেদন করুন
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
