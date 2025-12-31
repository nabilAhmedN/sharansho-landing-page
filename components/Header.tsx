"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-linear-to-tl from-[#2A056D] to-[#6F0767] text-white m-4 rounded-2xl">
      <div className="p-4">
        <nav className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-[#671E5A] rounded-full"></div>
            <Link href="/" className="text-xl font-semibold text-white">
              مبهر
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-6 text-white font-medium text-sm">
            <Link href="#" className="hover:text-gray-200 transition">
              دورات التحصيلي الرقمية
            </Link>
            <Link href="#" className="hover:text-gray-200 transition">
              دورات القدرات
            </Link>
            <Link href="#" className="hover:text-gray-200 transition">
              من نحن
            </Link>
            <Link href="#" className="hover:text-gray-200 transition">
              اتصل بنا
            </Link>
            <Link href="#" className="hover:text-gray-200 transition">
              المدونة
            </Link>
          </div>

          {/* Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://cms.mubhir.ai/login">
              <button className="px-5 py-1.5 rounded-full border border-white text-white font-medium text-sm hover:bg-white hover:text-[#671E5A] transition">
                الدخول
              </button>
            </Link>
            <Link href="https://cms.mubhir.ai/signup">
              <button className="px-5 py-1.5 rounded-full bg-white text-[#671E5A] font-medium text-sm hover:bg-gray-100 transition">
                تسجيل الدخول
              </button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center mobile-menu overflow-y-auto">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-[#1c164e]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col items-center space-y-6 text-[#1c164e] font-medium text-lg">
              <Link href="#" className="hover:text-[#91288c]">
                دورات التحصيلي الرقمية
              </Link>
              <Link href="#" className="hover:text-[#91288c]">
                دورات القدرات
              </Link>
              <Link href="#" className="hover:text-[#91288c]">
                من نحن
              </Link>
              <Link href="#" className="hover:text-[#91288c]">
                اتصل بنا
              </Link>
              <Link href="#" className="hover:text-[#91288c]">
                المدونة
              </Link>
              <Link href="https://cms.mubhir.ai/login">
                <button className="px-6 py-2 rounded-full border border-[#91288c] text-[#91288c] font-medium hover:bg-[#f7ecf9] transition">
                  الدخول
                </button>
              </Link>
              <Link href="https://cms.mubhir.ai/signup">
                <button className="px-6 py-2 rounded-full bg-[#91288c] text-white font-medium hover:bg-[#7d1c79] transition">
                  تسجيل الدخول
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
