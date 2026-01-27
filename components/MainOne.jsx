'use client'
import ServiceCard from "./ServiceCard/ServiceCard";
import { servicesData } from "@/constants/servicesData";
import { heroImages } from "@/constants/heroImages";
import Image from "next/image";
import React from "react";

const MainOne = () => {
  return (
    <div>
      {/* Divider */}
      <div className="w-full h-[2px] bg-gray-300" />

      {/* SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {servicesData.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 md:gap-12">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs sm:text-sm text-black font-bold mb-4 md:mb-7">
              Affordable cleaning solutions
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              High-Quality and Friendly Services at Fair Prices
            </h1>

            <p className="text-[#666666] font-sans mt-4 md:mt-7 text-sm md:text-base leading-relaxed">
              We provide comprehensive cleaning services tailored to your needs.
              From residential cleaning services.
            </p>

            <button className="mt-8 md:mt-14 px-4 md:px-6 py-2 md:py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition text-sm md:text-base">
              Get a quote
            </button>
          </div>

          {/* RIGHT IMAGES - RESPONSIVE */}
          <div className="relative w-full h-[280px] sm:h-[350px] md:h-[420px]">
            {heroImages.map((img) => (
              <div
                key={img.id}
                className={`absolute ${img.className}
                  w-[180px] h-[240px] sm:w-[220px] sm:h-[300px] md:w-[260px] md:h-[340px]
                  rounded-lg sm:rounded-2xl overflow-hidden
                  `}
              >
                <Image
                  src={img.src}
                  alt="Cleaning Service"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </section>
      <div>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-start">
    
    {/* LEFT BIG HEADING */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
      Effective Cleaning Requires an Expert Cleaning Team
    </h2>

    {/* RIGHT CONTENT */}
    <div>
      <h4 className="text-base md:text-lg font-semibold text-gray-900">
        Expert Team
      </h4>

      <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
        We have professional expert cleaning staff ensuring top-notch
        cleanliness and hygiene for your space.
      </p>
    </div>

  </div>
</section>

      </div>
    </div>
  );
};

export default MainOne;
