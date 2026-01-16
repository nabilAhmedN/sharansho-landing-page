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
            <nav className="bg-[#4d4d4d] rounded-[18px] flex items-center justify-between py-1.5 md:py-2 px-2 md:px-3 shadow-md">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/logo.png"
                  alt="sharanso Logo"
                  width={50}
                  height={50}
                  className="h-10 w-10 md:h-14 md:w-14 rounded-full"
                />
              </div>

              {/* Hamburger Menu (Mobile) */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="text-white focus:outline-none p-1"
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
                className="absolute top-6 right-6 text-[#1c164e] p-2"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex flex-col items-center space-y-6 text-black font-medium text-xl">
                <Link
                  href="#"
                  className="hover:text-[#ff8e78] transition py-3 px-6 min-h-[44px] flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#ff8e78] transition py-3 px-6 min-h-[44px] flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Client
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#ff8e78] transition py-3 px-6 min-h-[44px] flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonial
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#ff8e78] transition py-3 px-6 min-h-[44px] flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Price
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#ff8e78] transition py-3 px-6 min-h-[44px] flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Work
                </Link>
                <Link
                  href="https://apps.apple.com/us/iphone/today"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <button className="px-8 py-4 rounded-xl bg-[#ff8e78] text-white font-semibold text-lg min-h-[44px]">
                    Get the app
                  </button>
                </Link>
              </div>
            </div>
          )}

          {/* Hero Content */}
          <div className="mx-4 md:mx-[48px] mt-8 md:mt-16 lg:mt-[128px]">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
              {/* Left Side - Text and Button */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[140px] xl:text-[200px] font-bold leading-tight md:leading-none text-3d">
                  Sharansho
                </h1>

                <p className="mt-6 md:mt-12 lg:mt-16 text-lg sm:text-xl md:text-2xl lg:text-4xl text-white">
                  Understand the bias. <br />
                  <span
                    className="text-black font-bold bg-cover bg-center bg-no-repeat px-4 py-1 md:px-6 md:py-2 inline-block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
                    style={{ backgroundImage: "url(/images/truth-bg.png)" }}
                  >
                    Discover the truth.
                  </span>
                </p>

                <div className="mt-6 md:mt-16 lg:mt-28 flex justify-center md:justify-start">
                  <Link href="">
                    <button className="group flex items-center justify-evenly bg-white text-black font-medium rounded-2xl pl-4 pr-3 py-2 md:pl-6 md:pr-4 shadow-lg text-base md:text-lg">
                      Download app
                      <span className="relative flex items-center justify-center ml-3 md:ml-4 w-10 h-10 md:w-12 md:h-12 bg-[#ff8e78] text-white rounded-xl -rotate-45 group-hover:rotate-0 transition-all duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="rotate-45 group-hover:rotate-0 transition-all duration-300 md:w-6 md:h-6"
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
                  className="w-auto h-auto max-h-[500px] lg:max-h-[700px]"
                />
              </div>
            </div>

            <div className="mt-12 md:mt-16 lg:mt-[80px] flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 pb-4">
              <button
                onClick={handleScrollToAbout}
                className="group flex items-center cursor-pointer bg-black rounded-l-[24px] rounded-r-[16px] gap-3 md:gap-4 pr-2 transition-all duration-300"
              >
                <div className="bg-[#4a4a4a] rounded-[24px] p-[4px] transition-all duration-300">
                  <div className="px-6 py-2 md:px-8 md:py-3 rounded-[20px] border border-white/10 transition-all duration-300 text-lg md:text-xl flex items-center">
                    Discovery
                  </div>
                </div>
                <span className="bg-[#ff8e78] p-[9px] rounded-[12px] transition-all duration-300 group-hover:rotate-45 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white w-7 h-7 md:w-8 md:h-8"
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
        <div className="m-3 md:m-6 lg:m-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-20">
            {/* Left Side - Phone Mockups with Purple Background */}
            <div className="flex-1 lg:flex-none lg:w-[45%] relative w-full max-w-lg lg:max-w-md">
              <div className="bg-linear-to-br from-[#ffffff] to-[#f3f0ff] rounded-3xl p-6 md:p-8 lg:p-10 relative">
                {/* Decorative circle with arrow */}
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-12 border-b-black md:border-l-15 md:border-r-15 md:border-b-22" />
                </div>

                {/* Phone image */}
                <div className="relative flex justify-center">
                  <img
                    src="/images/iPhone 16 1.png"
                    alt="Task Manager App Screens"
                    className="w-full h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[400px]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 space-y-4 md:space-y-6 lg:space-y-8 px-2 md:px-4 lg:px-0">
              <p className="text-xs md:text-sm lg:text-base uppercase tracking-[0.2em] opacity-60 font-medium">
                About App
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[55px] font-bold leading-tight md:leading-[1.3] lg:leading-[70px]">
                Stay informed, clearly and quickly
              </h2>

              <p className="text-base md:text-lg lg:text-[18px] xl:text-[20px] leading-relaxed md:leading-[28px] opacity-80">
                Sharansho brings together headlines from multiple newspapers in one place, giving you a complete view of every important story. Instead of reading long articles from different sources, you get clear, concise summaries that save time and reduce information overload. By showing how different outlets cover the same news, Sharansho helps you understand the full picture and stay informed with confidence—anytime, anywhere.
              </p>

              <button className="bg-white text-black font-semibold px-8 md:px-10 py-3 md:py-4 rounded-[15px] text-base md:text-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 shadow-lg active:scale-95 min-h-[44px]">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">
            Choose your favorite plan
          </h2>

          {/* Pricing Cards - All Devices */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Basic Plan Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="bg-[#a8e6a1] text-black px-6 py-2 rounded-full inline-flex items-center gap-2 font-semibold mb-6">
                <span>Basic</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/30">
                  <span className="font-medium">News Details</span>
                  <span className="font-semibold">5 Per Day</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/30">
                  <span className="font-medium">Opinions</span>
                  <span className="font-semibold">No</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/30">
                  <span className="font-medium">Content Save</span>
                  <span className="font-semibold">No</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/30">
                  <span className="font-medium">Profile Access</span>
                  <span className="font-semibold">No</span>
                </div>
              </div>
            </div>

            {/* Monthly Plan Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="bg-[#b8a3e8] text-black px-6 py-2 rounded-full inline-flex items-center gap-2 font-semibold mb-6">
                <span>Monthly</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/30">
                  <span className="font-medium">News Details</span>
                  <span className="font-semibold">Unlimited</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/30">
                  <span className="font-medium">Opinions</span>
                  <span className="font-semibold">Unlimited</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/30">
                  <span className="font-medium">Content Save</span>
                  <span className="font-semibold">Unlimited</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/30">
                  <span className="font-medium">Profile Access</span>
                  <span className="font-semibold">Unlimited</span>
                </div>
              </div>
            </div>

            {/* Yearly Plan Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="bg-[#ffd89c] text-black px-6 py-2 rounded-full inline-flex items-center gap-2 font-semibold mb-6">
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
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/30">
                  <span className="font-medium">News Details</span>
                  <span className="font-semibold">Unlimited</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/30">
                  <span className="font-medium">Opinions</span>
                  <span className="font-semibold">Unlimited</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/30">
                  <span className="font-medium">Content Save</span>
                  <span className="font-semibold">Unlimited</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/30">
                  <span className="font-medium">Profile Access</span>
                  <span className="font-semibold">Unlimited</span>
                </div>
              </div>
            </div>
          </div>


          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 mt-8 md:mt-16">
            {/* Left Side - Text and Buttons */}
            <div className="flex-1 space-y-6 md:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Try it right now
              </h2>
              <p className="text-base md:text-lg text-white leading-relaxed">
                Download Sharansho on the App Store and discover a smarter way to read the news. Get multiple perspectives and easy-to-read summaries—all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                  <button className="bg-black hover:bg-gray-900 transition-colors px-6 py-3 rounded-xl flex items-center gap-3 w-full sm:w-auto min-h-[44px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" className="md:w-8 md:h-8">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-base md:text-lg font-semibold">App Store</div>
                    </div>
                  </button>
                </Link>
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
                  className="w-auto h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-white m-4 rounded-2xl overflow-hidden">
        <div className="p-6 md:p-8 lg:p-12">
          {/* Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="text-xl md:text-2xl font-bold text-black">Sharansho</span>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-black">
              <Link href="#" className="hover:text-[#ff8e78] transition py-2 min-h-[44px] flex items-center">
                Home
              </Link>
              <Link href="#" className="hover:text-[#ff8e78] transition py-2 min-h-[44px] flex items-center">
                About
              </Link>
              <Link href="#" className="hover:text-[#ff8e78] transition py-2 min-h-[44px] flex items-center">
                Pricing
              </Link>
            </nav>

            {/* Social Links */}
            <div className="flex gap-6 md:gap-4">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#ff8e78] transition py-2 min-h-[44px] flex items-center">
                Instagram
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#ff8e78] transition py-2 min-h-[44px] flex items-center">
                Facebook
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#ff8e78] transition py-2 min-h-[44px] flex items-center">
                Twitter
              </Link>
            </div>
          </div>
          {/* Copyright */}
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>Copyright © 2025 Sharansho</p>
            <Link href="#" className="hover:text-[#ff8e78] transition py-2 min-h-[44px] flex items-center">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>

      {/* <Footer /> */}
    </div>
  );
}
