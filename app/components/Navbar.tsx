"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, GraduationCap, ChevronRight } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "হোম", href: "/" },
    { name: "আমাদের সম্পর্কে", href: "/about" },
    { name: "একাডেমিক", href: "/academic" },
    { name: "শিক্ষকবৃন্দ", href: "/teachers" },
    { name: "ফলাফল", href: "/results" },
    { name: "যোগাযোগ", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b
        ${
          scrolled || isOpen
            ? "bg-white/90 backdrop-blur-md shadow-lg border-gray-200 py-3"
            : "bg-white border-transparent py-5"
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center'>
            {/* Logo Section */}
            <Link href='/' className='flex items-center gap-2 group'>
              <div className='w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-900/20 transition-transform group-hover:scale-105 group-hover:rotate-3'>
                <GraduationCap size={24} />
              </div>
              <div className='flex flex-col'>
                <span className='text-xl md:text-2xl font-black text-slate-900 leading-none tracking-tight'>
                  GLOBAL <span className='text-blue-600'>STANDARD</span>
                </span>
                <span className='text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase'>
                  School & College
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className='hidden lg:flex items-center space-x-1'>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className='relative px-4 py-2 font-semibold text-sm text-slate-600 hover:text-blue-700 transition-colors group'
                >
                  {link.name}
                  <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4 opacity-0 group-hover:opacity-100'></span>
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className='hidden lg:flex items-center gap-4'>
              <Link
                href='tel:+8801721126532'
                className='flex items-center gap-2 text-slate-600 font-bold hover:text-blue-700 transition-colors text-sm'
              >
                <Phone size={18} />
                <span>০১৭১১-xxxxxx</span>
              </Link>
              <Link
                href='/admission'
                className='px-6 py-2.5 bg-blue-600 text-white rounded-full font-bold text-sm shadow-md shadow-blue-600/20 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300'
              >
                ভর্তি চলছে
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <div className='lg:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none'
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl transition-all duration-300 origin-top overflow-hidden
          ${
            isOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className='px-4 py-6 space-y-2 h-[calc(100vh-80px)] overflow-y-auto'>
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className='flex items-center justify-between p-4 rounded-xl text-lg font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-all group'
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {link.name}
                <ChevronRight
                  size={18}
                  className='text-slate-300 group-hover:text-blue-500'
                />
              </Link>
            ))}

            <div className='pt-6 space-y-4'>
              <Link
                href='/admission'
                onClick={() => setIsOpen(false)}
                className='flex items-center justify-center w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-600/20 active:scale-95 transition-transform'
              >
                অনলাইনে ভর্তি হন
              </Link>
              <Link
                href='tel:+8801721126532'
                className='flex items-center justify-center gap-2 w-full py-4 bg-slate-100 text-slate-700 rounded-xl font-bold active:scale-95 transition-transform'
              >
                <Phone size={20} /> হেল্পলাইন কল
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap since Nav is fixed */}
      <div className={scrolled ? "h-20" : "h-24"}></div>
    </>
  );
};
