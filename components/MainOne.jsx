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
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm text-black font-bold mb-7">
              Affordable cleaning solutions
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              High-Quality and Friendly <br />
              Services at Fair Prices
            </h1>

            <p className="text-[#666666] font-sans mt-7 max-w-lg">
              We provide comprehensive cleaning services tailored to your needs.
              From residential cleaning services.
            </p>

            <button className="mt-14 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
              Get a quote
            </button>
          </div>

          {/* RIGHT IMAGES (MAP SE) */}
          <div className="relative h-[420px] w-full">
            {heroImages.map((img) => (
              <div
                key={img.id}
                className={`absolute ${img.className}
                  w-[260px] h-[340px]
                  rounded-2xl overflow-hidden
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
        <section className="max-w-7xl mx-auto px-6 py-16">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
    
    {/* LEFT BIG HEADING */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
      Effective Cleaning Requires <br />
      an Expert Cleaning Team
    </h2>

    {/* RIGHT CONTENT */}
    <div>
      <h4 className="text-lg font-semibold text-gray-900">
        Expert Team
      </h4>

      <p className="text-gray-600 mt-2 max-w-md">
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
