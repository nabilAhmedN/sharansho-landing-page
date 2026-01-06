"use client";

import { useState } from "react";
// import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/Marquee";
// import { ArrowDownRight, ArrowDownRightFromCircle } from "lucide-react";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Integrated Navbar */}
      <section
        className="text-white m-4 rounded-2xl relative overflow-hidden"
        style={{
          background: `linear-gradient(to top left, rgba(255, 194, 161, 0.92), rgba(255, 107, 96, 0.92)), url(/images/World_map_with_points.svg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-4 md:p-8">
          {/* Navbar */}
          <div className="max-w-[800px] mx-auto">
            <nav className="bg-[#4d4d4d] rounded-[18px] flex items-center justify-between py-2 px-3 shadow-md">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/logo.png"
                  alt="sharanso Logo"
                  width={50}
                  height={50}
                  className="h-14 w-14 rounded-full"
                />
              </div>

              {/* Hamburger Menu (Mobile) */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="text-[#1c164e] focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
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
              <div className="hidden md:flex items-center space-x-2 text-white font-medium p-2 rounded-[15px] text-base bg-[#3e3e3e]">
                <Link
                  href="#"
                  className=" px-6 py-2.5 rounded-[12px] border-[#4e4e4e] border-2"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className=" px-6 py-2.5 rounded-[12px] border-[#4e4e4e] border-2"
                >
                  Client
                </Link>
                <Link
                  href="#"
                  className=" px-6 py-2.5 rounded-[12px] border-[#4e4e4e] border-2"
                >
                  Testimonial
                </Link>
                <Link
                  href="#"
                  className=" px-6 py-2.5 rounded-[12px] border-[#4e4e4e] border-2"
                >
                  price
                </Link>
                <Link
                  href="#"
                  className=" px-6 py-2.5 rounded-[12px] border-[#4e4e4e] border-2"
                >
                  Work
                </Link>
              </div>

              {/* Buttons (Desktop) */}
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  href="https://apps.apple.com/us/iphone/today"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-6 py-3.5 rounded-[12px] bg-white text-black font-medium text-base">
                    Get the app
                  </button>
                </Link>
              </div>
            </nav>
          </div>

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
              <div className="hidden md:flex items-center space-x-6 text-black font-medium text-sm">
                <Link href="#" className="hover:text-[#671E5A] transition">
                  About
                </Link>
                <Link href="#" className="hover:text-[#671E5A] transition">
                  Client
                </Link>
                <Link href="#" className="hover:text-[#671E5A] transition">
                  Testimonial
                </Link>
                <Link href="#" className="hover:text-[#671E5A] transition">
                  price
                </Link>
                <Link href="#" className="hover:text-[#671E5A] transition">
                  Work
                </Link>
              </div>
            </div>
          )}

          {/* Hero Content */}
          <div className="mx-6 md:mx-[48px] mt-16 md:mt-[128px]">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
              {/* Left Side - Text and Button */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-[200px] font-bold leading-tight md:leading-none text-3d">
                  Sharansho
                </h1>

                <p className="mt-8 md:mt-16 text-base md:text-4xl text-white">
                  Understand the bias. <br />
                  <span
                    className="text-black font-bold bg-cover bg-center bg-no-repeat px-6 py-2 inline-block"
                    style={{ backgroundImage: "url(/images/truth-bg.png)" }}
                  >
                    Discover the truth.
                  </span>
                </p>

                <div className="mt-8 md:mt-28 flex justify-center md:justify-start">
                  <Link href="">
                    <button className="group flex items-center justify-evenly bg-white text-black font-medium rounded-2xl pl-6 pr-4 py-2 shadow-lg text-lg">
                      Download app
                      <span className="relative flex items-center justify-center ml-4 w-12 h-12 bg-[#ff8e78] text-white rounded-xl -rotate-45 group-hover:rotate-0 transition-all duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="rotate-45 group-hover:rotate-0 transition-all duration-300"
                        >
                          <path d="M12 15V3" />
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <path d="m7 10 5 5 5-5" />
                        </svg>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Side - iPhone Image */}
              <div className="shrink-0 hidden md:block">
                <Image
                  src="/images/iPhone 13.png"
                  alt="iPhone mockup"
                  width={450}
                  height={900}
                  className="w-auto h-auto max-h-[700px]"
                />
              </div>
            </div>

            <div className="mt-24 md:mt-[80px] flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 pb-4">
              <button
                onClick={handleScrollToAbout}
                className="group flex items-center cursor-pointer bg-black rounded-l-[24px] rounded-r-[16px] gap-4 pr-2 transition-all duration-300 "
              >
                <div className="bg-[#4a4a4a] rounded-[24px] p-[4px] transition-all duration-300">
                  <div className="px-8 py-3 rounded-[20px] border border-white/10 transition-all duration-300 text-xl flex items-center">
                    Discovery
                  </div>
                </div>
                <span className="bg-[#ff8e78] p-[9px] rounded-[12px] transition-all duration-300 group-hover:rotate-45 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white w-8 h-8"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </span>
              </button>
            </div>

          </div>
        </div>

        {/* <div className="relative">
          <div className="circle absolute left-[50%] transform -translate-x-1/2 top-[-4rem] w-[121px] h-[121px] bg-[#c44580] rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="40"
              viewBox="0 0 32 40"
              fill="none"
            >
              <path
                d="M0.135922 28.788C8.6934 23.8473 10.6449 11.2066 4.49468 0.554143C10.6449 11.2066 22.5678 15.8369 31.1253 10.8963C22.5678 15.8369 20.6163 28.4777 26.7665 39.1301C20.6163 28.4777 8.6934 23.8473 0.135922 28.788Z"
                fill="white"
              />
            </svg>
          <div className="absolute left-[50%] transform -translate-x-1/2 -top-20 w-[160px] h-[160px]">
            <Image
              src="/gif/news.gif"
              alt="News animation"
              width={121}
              height={121}
              className="w-full h-full object-cover rounded-full"
              unoptimized
            />
          </div>
        </div> */}
      </section>

      {/* Marquee Section */}
      <Marquee />

      {/* about Section */}
      <div id="about-section" className="bg-[#ffc6a8] flex justify-center m-4 rounded-2xl overflow-hidden p-4 md:p-8">
        <div className="m-6 md:m-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Side - Phone Mockups with Purple Background */}
            <div className="flex-1 relative">
              <div className="bg-linear-to-br from-[#ffffff] to-[#f3f0ff] rounded-3xl p-12 lg:p-16 relative">
                {/* Decorative circle with arrow */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-l-20 border-l-transparent border-r-20 border-r-transparent border-b-30 border-b-black" />
                </div>

                {/* Phone image */}
                <div className="relative flex justify-center">
                  <img
                    src="/images/iPhone 16 1.png"
                    alt="Task Manager App Screens"
                    className="w-full h-auto max-w-[600px]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 space-y-6 lg:space-y-8 px-4 lg:px-0">
              <p className="text-sm lg:text-base uppercase tracking-[0.2em] opacity-60 font-medium">
                About App
              </p>

              <h2 className="text-4xl lg:text-6xl xl:text-[55px] font-bold leading-[70px]">
                Stay informed, clearly and quickly
              </h2>

              <p className="text-lg lg:text-[18px] xl:text-[20px] leading-[28px] opacity-80">
                Sharansho brings together headlines from multiple newspapers in one place, giving you a complete view of every important story. Instead of reading long articles from different sources, you get clear, concise summaries that save time and reduce information overload. By showing how different outlets cover the same news, Sharansho helps you understand the full picture and stay informed with confidence—anytime, anywhere.
              </p>

              <button className="bg-white text-black font-semibold px-10 py-4 rounded-[15px] text-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 shadow-lg active:scale-95">
                Try for Free
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Pricing Section */}
      <section className="bg-[#ff796e] text-white m-4 rounded-2xl overflow-hidden">
        <div className="p-8 md:p-16">
          {/* Pricing Header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Choose your favorite plan
          </h2>

          {/* Pricing Table */}
          <div className="overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#ffc6a8] ">
                <tr className="">
                  <th className="text-left text-xl p-6 font-medium text-white">Subscription level</th>
                  <th className="p-6">
                    <div className="bg-[#a8e6a1] text-black px-6 py-2 rounded-full inline-flex items-center gap-2 font-semibold">
                      <span>Basic</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="p-6">
                    <div className="bg-[#b8a3e8] text-black px-6 py-2 rounded-full inline-flex items-center gap-2 font-semibold">
                      <span>Monthly</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                  </th>
                  <th className="p-6">
                    <div className="bg-[#ffd89c] text-black px-6 py-2 rounded-full inline-flex items-center gap-2 font-semibold">
                      <span>Yearly</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                        <path d="M4 22h16" />
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                      </svg>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white">
                  <td className="p-6 text-white">News Details</td>
                  <td className="p-6 text-center">5 Pre Day</td>
                  <td className="p-6 text-center">Unlimited</td>
                  <td className="p-6 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="p-6 text-white">Opinions</td>
                  <td className="p-6 text-center">0</td>
                  <td className="p-6 text-center">Unlimited</td>
                  <td className="p-6 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="p-6 text-white">Content Save</td>
                  <td className="p-6 text-center">N/A</td>
                  <td className="p-6 text-center">N/A</td>
                  <td className="p-6 text-center">N/A</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="p-6 text-white">Profile Access</td>
                  <td className="p-6 text-center">N/A</td>
                  <td className="p-6 text-center">N/A</td>
                  <td className="p-6 text-center">N/A</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="p-6 text-white">N/A</td>
                  <td className="p-6 text-center">N/A</td>
                  <td className="p-6 text-center">N/A</td>
                  <td className="p-6 text-center">N/A</td>
                </tr>
              </tbody>
            </table>

          </div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 mt-16">
            {/* Left Side - Text and Buttons */}
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Try it right now
              </h2>
              <p className="text-lg text-white leading-relaxed">
                Download Sharansho on the App Store and discover a smarter way to read the news. Get multiple perspectives and easy-to-read summaries—all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                  <button className="bg-black hover:bg-gray-900 transition-colors px-6 py-3 rounded-xl flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </button>
                </Link>
                {/* <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                  <button className="bg-black hover:bg-gray-900 transition-colors px-6 py-3 rounded-xl flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-lg font-semibold">Google Play</div>
                    </div>
                  </button>
                </Link> */}
              </div>
            </div>

            {/* Right Side - Phone Mockup */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <Image
                  src="/images/iPhone 13.png"
                  alt="App Preview"
                  width={400}
                  height={800}
                  className="w-auto h-auto max-h-[600px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-white m-4 rounded-2xl overflow-hidden">
        <div className="p-8 md:p-12">
          {/* Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              {/* <Image
                  src="/images/logo.png"
                  alt="Sharansho Logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                /> */}
              <span className="text-2xl font-bold text-black">Sharansho</span>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-8 text-black">
              <Link href="#" className="hover:text-[#ff8e78] transition">
                Home
              </Link>
              <Link href="#" className="hover:text-[#ff8e78] transition">
                About
              </Link>
              <Link href="#" className="hover:text-[#ff8e78] transition">
                Pricing
              </Link>
              {/* <Link href="#" className="hover:text-[#ff8e78] transition">
                Testimonials
              </Link> */}
            </nav>

            {/* Social Links */}
            <div className="flex gap-4">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#ff8e78] transition">
                Instagram
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#ff8e78] transition">
                Facebook
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#ff8e78] transition">
                Twitter
              </Link>
            </div>
          </div>
          {/* Copyright */}
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>Copyright © 2025 Sharansho</p>
            <Link href="#" className="hover:text-[#ff8e78] transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>

      {/* <Footer /> */}
    </div>
  );
}
