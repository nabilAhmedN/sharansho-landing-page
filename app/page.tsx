"use client";

import { useState } from "react";
// import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
// import { ArrowDownRight, ArrowDownRightFromCircle } from "lucide-react";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Integrated Navbar */}
      <section
        className="text-white m-4 rounded-2xl relative"
        style={{
          background: `linear-gradient(to top left, rgba(255, 194, 161, 0.92), rgba(255, 107, 96, 0.92)), url(/images/World_map_with_points.svg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-4 md:p-8">
          {/* Navbar */}
          <div className="max-w-[635px] mx-auto">
            <nav className="bg-[#4d4d4d] rounded-[18px] flex items-center justify-between py-1 px-2 shadow-md">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/logo.png"
                  alt="sharanso Logo"
                  width={40}
                  height={40}
                  className="h-12 w-12 rounded-full"
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
              <div className="hidden md:flex items-center space-x-1 text-white font-medium p-1 rounded-[15px] text-sm bg-[#3e3e3e]">
                <Link
                  href="#"
                  className=" px-5 py-1.5 rounded-[12px] border-[#4e4e4e] border-2"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className=" px-5 py-1.5 rounded-[12px] border-[#4e4e4e] border-2"
                >
                  Client
                </Link>
                <Link
                  href="#"
                  className=" px-5 py-1.5 rounded-[12px] border-[#4e4e4e] border-2"
                >
                  Testimonial
                </Link>
                <Link
                  href="#"
                  className=" px-5 py-1.5 rounded-[12px] border-[#4e4e4e] border-2"
                >
                  price
                </Link>
                <Link
                  href="#"
                  className=" px-5 py-1.5 rounded-[12px] border-[#4e4e4e] border-2"
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
                  <button className="px-5 py-3 rounded-[12px] bg-white text-black font-medium text-sm">
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
          <div className="relative text-center mt-16 md:mt-[128px]">
            {/* <div className="flex justify-center space-x-4 md:space-x-0 mb-4 md:mb-0">
              <span className="transform rotate-[-15deg] md:rotate-[-25deg] md:absolute md:left-40 md:top-50 bg-blue-600 text-white px-4 py-1 rounded-full text-xs md:text-sm font-semibold shadow-md">
                #Question
              </span>
              <span className="transform rotate-[15deg] md:rotate-[25deg] md:absolute md:right-40 md:top-50 bg-purple-600 text-white px-4 py-1 rounded-full text-xs md:text-sm font-semibold shadow-md">
                #SAT 1
              </span>
            </div> */}

            <h1 className="text-4xl md:text-[213px] font-bold leading-tight md:leading-[1] text-3d">
              Sharanso
            </h1>

            <p className="mt-16 text-base md:text-4xl max-w-md md:max-w-xl mx-auto text-white">
              Understand the bias. <br />
              <span
                className="text-black font-bold bg-cover bg-center bg-no-repeat px-6 py-2 inline-block"
                style={{ backgroundImage: "url(/images/truth-bg.png)" }}
              >
                Discover the truth.
              </span>
            </p>

            <div className="mt-15 flex flex-col justify-center items-center space-y-12">
              {/* <div className="relative inline-block">
                <Link href="">
                  <button className="group flex items-center justify-evenly bg-white text-black font-medium rounded-2xl pl-6 pr-4 py-3 shadow-lg text-lg">
                    Download app
                    <span className="relative flex items-center justify-center ml-4 w-12 h-12 bg-[#ff8e78] text-white rounded-xl -rotate-45 group-hover:rotate-0 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-45">
                        <path d="M12 15V3" />
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <path d="m7 10 5 5 5-5" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div> */}

              <div className="relative inline-block">
                <Link href="">
                  <button className="group flex items-center justify-evenly bg-white text-black font-medium rounded-2xl pl-6 pr-4 py-3 shadow-lg text-lg">
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
          </div>

          <div className="mx-6 md:mx-[48px] mt-24 md:mt-[140px] flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 pb-4">
            <button className="group flex items-center cursor-pointer bg-black rounded-l-[24px] rounded-r-[16px] gap-4 pr-2 transition-all duration-300">
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

        <div className="relative">
          {/* <div className="circle absolute left-[50%] transform -translate-x-1/2 top-[-4rem] w-[121px] h-[121px] bg-[#c44580] rounded-full flex items-center justify-center">
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
            </svg> */}
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
        </div>
      </section>

      {/* AI Features Section */}
      {/* <section className="bg-[#F7E8F5] flex justify-center m-2 sm:m-4 rounded-2xl">
        <div className="container max-w-6xl px-4 py-8 sm:py-[120px]">
          <div className="flex flex-col items-center text-center mb-8 sm:mb-[40px]">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
              <span className="text-black">Smarter </span>
              <span className="text-gray-500">SAT</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-2 sm:mb-3 flex flex-wrap justify-center items-center gap-1 sm:gap-2">
              <span className="text-black relative inline-block pb-1 sm:pb-2 z-[10]">
                Preparation with
                <svg
                  className="absolute right-0 sm:right-20 bottom-0 w-full h-2 sm:h-[10px] -z-[10] pointer-events-none"
                  viewBox="0 0 200 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5 Q 50 0, 100 5 T 200 5"
                    stroke="#C445A6"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
              <span className="text-purple-600">AI</span>
              <span className="text-purple-600 h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center">
                ✨
              </span>
            </h2>
            <p className="text-sm sm:text-[16px] font-medium text-black mt-2">
              You&apos;ll spend less time guessing and more time mastering the
              SAT.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[1.5fr_2fr] gap-4 sm:gap-6">
            <div className="border-2 border-dashed border-[#D0D5DD] rounded-xl p-4 sm:p-[32px]">
              <div className="flex flex-col h-full">
                <div className="mb-3 sm:mb-[16px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    className="w-6 h-6 sm:w-9 sm:h-9"
                  >
                    <path
                      d="M8.1488 23.0001C7.51812 21.5824 7.1665 20.0052 7.1665 18.3432C7.1665 12.1706 12.0168 7.16675 17.9998 7.16675C23.9829 7.16675 28.8332 12.1706 28.8332 18.3432C28.8332 20.0052 28.4815 21.5824 27.8509 23.0001"
                      stroke="#141B34"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-[36px] font-medium mb-2 leading-tight sm:leading-[44px]">
                  Ask Through <br />
                  <span className="text-[#49066a]">Image or Text</span>
                </h3>
                <p className="text-gray-600 mt-6 sm:mt-[100px] text-sm sm:text-[20px] font-normal">
                  Easily ask questions by uploading an image or typing your
                  query—our AI handles both seamlessly.
                </p>
                <div className="mt-3 sm:mt-[14px]">
                  <button className="flex items-center justify-between w-full text-[#4F46F4] font-medium text-sm sm:text-[18px]">
                    <span>Get started today</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#291548] rounded-xl p-4 sm:p-6 flex items-center justify-center">
              <div className="bg-white rounded-lg w-full max-w-md p-3 sm:p-4">
                <div className="mb-2">
                  <p className="text-base sm:text-lg">
                    Hi <span className="text-pink-500 font-bold">Habiba</span>!
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    What would you like to know?
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                  You&apos;ll spend less time guessing and more time mastering
                  the SAT.
                </p>
                <div className="border border-gray-200 rounded-md p-3 sm:p-4 h-32 sm:h-40 mb-3 sm:mb-4">
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Ask whatever you want...
                  </p>
                  <div className="flex justify-between items-center pt-12 sm:pt-[90px]">
                    <div className="flex gap-1 sm:gap-2">
                      <button className="text-gray-500 text-xs sm:text-sm flex items-center gap-1">
                        📎 Add attachment
                      </button>
                      <button className="text-gray-500 text-xs sm:text-sm flex items-center gap-1">
                        🖼️ Upload image
                      </button>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <span className="text-xs text-gray-400">0/1000</span>
                      <button className="bg-[#671E5A] text-white rounded p-1 sm:p-[6px] flex items-center justify-center">
                        ➤
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* All in One Place Section */}
      {/* <section className="py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-semibold leading-tight text-center">
              <span className="relative inline-block pb-2 z-[10]">
                EVERYTHING
                <svg
                  className="absolute left-0 bottom-0 w-full h-2 sm:h-[10px] -z-[10] pointer-events-none"
                  viewBox="0 0 200 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5 Q 50 0, 100 5 T 200 5"
                    stroke="#C445A6"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>{' '}
              YOU NEED <br />
              <span className="text-gray-500">ALL in ONE PLACE</span>
              <br />
            </h1>
            <p className="text-base text-gray-600 mt-2">
              Comprehensive syllabus covers all three sections of the SAT
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              'Latest EXAM Bank',
              'Tailored Exam',
              'Video Explanation',
              'Benchmark against other student',
              { title: 'Real EXAM Predictions', ai: true },
              { title: 'Full Courses', ai: true },
              { title: '10,000+ Questions Bank with Explanations', ai: true },
              { title: 'Improvement Report', ai: true },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-lg p-5 shadow-md relative min-h-[220px] sm:min-h-[150px]"
              >
                <div className="absolute top-5 left-5 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">
                    {idx === 0 ? '📚' : idx === 1 ? '📝' : idx === 2 ? '🎥' : '📊'}
                  </span>
                </div>
                <div className="absolute top-[132px] left-5 sm:absolute sm:bottom-5 sm:left-5 sm:top-auto sm:pt-6">
                  {typeof item === 'object' && item.ai && (
                    <div className="text-sm text-indigo-500 mb-1">✨ AI POWERED</div>
                  )}
                  <div className="text-lg font-bold text-gray-800">
                    {typeof item === 'string' ? item : item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Pricing Section */}
      {/* <section className="bg-gradient-to-tl from-[#2A056D] to-[#6F0767] flex justify-center m-2 sm:m-4 rounded-2xl">
        <div className="container max-w-6xl px-4 py-12 sm:py-[120px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-semibold text-white leading-tight text-center">
            Flexible
            <span className="relative inline-block pb-2 z-[10] mx-2">
              Pricing
              <svg
                className="absolute left-0 bottom-0 w-full h-2 sm:h-[10px] -z-[10] pointer-events-none"
                viewBox="0 0 200 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 5 Q 50 0, 100 5 T 200 5" stroke="#C445A6" strokeWidth="3" fill="none" />
              </svg>
            </span>
            for
            <br />
            SAT 1 Learners
          </h1>
          <p className="mt-3 sm:mt-[12px] text-white text-center text-sm sm:text-base">
            Choose the plan that fits your budget
          </p>
          <div className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: 'Monthly Plan', price: '99', save: null },
              { name: '3 Months Plan', price: '84', save: 'Save 15%' },
              { name: '6 Months Plan', price: '79', save: 'Save 20%' },
              { name: 'Yearly Plan', price: '74', save: 'Save 25%' },
            ].map((plan, idx) => (
              <div key={idx} className="bg-white text-purple-800 p-4 sm:p-6 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-[18px] text-black font-semibold">
                    {plan.name}
                  </h3>
                  {plan.save && (
                    <div className="text-xs sm:text-[12px] text-white font-semibold bg-[#671E5A] px-2 sm:px-[12px] py-1 rounded-full">
                      {plan.save}
                    </div>
                  )}
                </div>
                <p className="text-sm sm:text-[14px] text-[#667085] font-medium">
                  {idx === 0
                    ? 'Perfect for starting your journey'
                    : idx === 1
                      ? 'Ideal for focused preparation'
                      : idx === 2
                        ? 'Best for comprehensive prep'
                        : 'Maximum value for long-term'}
                </p>
                <p className="text-2xl sm:text-[36px] font-bold mt-2">
                  {plan.price}
                  <span className="text-[#667085] text-xs sm:text-[14px] font-normal">SAR</span>
                </p>
                <p className="text-black text-xs sm:text-[14px]">Per user per month</p>
                <div className="border-b border-[#D0D5DD] pt-3 sm:pt-[14px]"></div>
                <ul className="mt-4 space-y-2 text-black text-xs sm:text-sm">
                  {[
                    'Access SAT 1 and SAT 2 practice questions.',
                    'Weekly progress reports to track improvement.',
                    '24/7 support to answer your questions.',
                    'Personalized study plan based on AI analysis.',
                  ].map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 pt-3">
                      <span className="w-5 h-5 sm:w-[20px] sm:h-[20px] bg-[#671E5A] rounded-full flex items-center justify-center shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2.5 5.99994L5 8.49994L10 3.49994"
                            stroke="white"
                            strokeWidth="1.125"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="https://cms.mubhir.ai/select-package">
                  <button className="mt-8 sm:mt-[64px] border border-[#671E5A] text-[#671E5A] px-4 py-2 rounded-full w-full text-sm sm:text-base hover:bg-[#671E5A] hover:text-white transition">
                    Start {plan.name}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      {/* <section className="bg-[#eaecf0] flex justify-center m-4 rounded-2xl">
        <div className="container max-w-6xl px-4 py-[120px]">
          <h2 className="text-[56px] font-semibold text-center text-black">
            Your
            <span className="text-black relative inline-block pb-2 mx-2">
              Questions
              <svg
                className="absolute right-0 top-16 w-full h-[13px] pointer-events-none"
                viewBox="0 0 200 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 5 Q 50 0, 100 5 T 200 5" stroke="#C445A6" strokeWidth="3" fill="none" />
              </svg>
            </span>
            <br />
            Answered
          </h2>
          <p className="mt-2 text-center text-gray-600">Frequently asked questions</p>
          <div className="mt-10 space-y-4">
            {[
              {
                q: "How does Mubhir's AI personalize my learning experience?",
                a: 'Our AI analyzes your performance, identifies strengths and weaknesses, and tailors a study plan to maximize your score improvement.',
              },
              {
                q: 'How many practice tests are included in the program?',
                a: 'Our program includes over 20 full-length practice tests, covering all subjects and designed to simulate the actual exam environment.',
              },
              {
                q: 'Can I use Mubhir on my phone or tablet?',
                a: 'Yes, Mubhir is fully optimized for mobile devices. You can access all features on your smartphone or tablet through our responsive web app or native mobile apps.',
              },
              {
                q: 'Is there a free trial available?',
                a: 'Yes, we offer a 7-day free trial that gives you access to a limited set of practice questions and features so you can experience the platform before committing.',
              },
              {
                q: "What if I'm not satisfied with the program?",
                a: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your experience, contact our support team for a full refund.",
              },
              {
                q: 'Will I get support during my preparation?',
                a: 'Absolutely! Our team of expert tutors is available 24/7 to answer your questions and provide guidance throughout your preparation journey.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                <button
                  className="w-full flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(idx)}
                >
                  <h3 className="text-xl font-semibold text-[#671E5A]">{faq.q}</h3>
                  <span className="w-9 h-9 bg-[#671E5A] rounded-full flex items-center justify-center text-white">
                    {activeFaq === idx ? '↑' : '↓'}
                  </span>
                </button>
                {activeFaq === idx && <div className="mt-4 text-gray-700">{faq.a}</div>}
              </div>
            ))}
          </div>
          <p className="text-black font-medium mb-[12px] mt-[32px] text-center">
            Still have questions?
          </p>
          <div className="mt-6 flex justify-center items-center space-x-6">
            <button className="flex items-center bg-[#671e5a] text-white font-medium rounded-full pl-5 pr-2 py-2 shadow-lg">
              Contact us
              <span className="flex items-center justify-center ml-6 w-8 h-8 bg-white text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#671e5a"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="bg-[#691d5e] text-white rounded-lg px-4 pt-12 md:pt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
              Get Started
              <span className="relative inline-block pb-2 ml-2">
                Today!
                <svg
                  className="absolute left-0 bottom-0 w-full h-2 -z-10 pointer-events-none"
                  viewBox="0 0 200 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5 Q 50 0, 100 5 T 200 5"
                    stroke="#C445A6"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-base md:text-lg">
              Join thousands of students who are preparing smarter, not harder. Sign up now & take
              your first mock test for FREE!
            </p>

            <button className="bg-white text-[#671E5A] font-semibold py-3 px-6 rounded-full flex items-center justify-center mx-auto md:mx-0 hover:bg-gray-100 transition">
              Get started
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button className="bg-[#8A2879] text-white px-6 py-2 rounded-full flex items-center hover:bg-[#d945b3] w-fit">
              <span className="text-2xl mr-2">⭐</span>
              <span>4.9/5 reviews in Clutch</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="order-last md:order-none flex justify-center items-center">
            <div className="h-[350px] w-[250px] bg-purple-300 rounded-lg"></div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="bg-[#511447] p-6 md:p-8 rounded-lg space-y-4">
              <h2 className="text-2xl font-bold text-white text-center md:text-left">
                What if I don&apos;t like it later?
              </h2>
              <p className="text-sm md:text-base text-center md:text-left">
                If Mubhir isn&apos;t right for you:
              </p>
              <ul className="text-sm md:text-base space-y-2 list-none text-left">
                {[
                  'Cancel anytime within the first 7 days.',
                  'Get a full refund - no questions asked.',
                  'Your satisfaction and success is our priority.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* <Footer /> */}
    </div>
  );
}
