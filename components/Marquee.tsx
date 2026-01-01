"use client";

import Image from "next/image";

export default function Marquee() {
    const categories = [
        "#Arts & Culture",
        "#Opinion / Editorial",
        "#Travel & Tourism",
        "#Sports",
        "#Lifestyle",
        "#Entertainment",
        "#Disasters & Accidents",
        "#Education",
        "#Health",
        "#Science & Technology",
        "#Crime & Security",
        "#Business & Finance",
        "#World / International News",
        "#National News",
        "#Politics",
    ];

    return (
        <div className="overflow-hidden border-3 border-black rounded-2xl m-4 py-4">
            <style dangerouslySetInnerHTML={{
                __html: `
          @keyframes marqueeScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          .marquee-animate {
            animation: marqueeScroll 30s linear infinite;
          }
        `
            }} />
            <div className="flex whitespace-nowrap marquee-animate">
                {/* Repeat the content multiple times for seamless loop */}
                {[...Array(3)].map((_, setIndex) => (
                    <div key={setIndex} className="flex">
                        {categories.map((category, index) => (
                            <div key={`${setIndex}-${index}`} className="inline-flex items-center mx-6">
                                <span className="text-black text-2xl font-extrabold uppercase tracking-wide">
                                    {category}
                                </span>
                                <Image
                                    src="/images/marquee logo.png"
                                    alt="separator"
                                    width={24}
                                    height={24}
                                    className="mx-6"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
