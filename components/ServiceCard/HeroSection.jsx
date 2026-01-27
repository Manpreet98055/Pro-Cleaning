'use client'
import Image from "next/image";
import { heroImages } from "@/constants/heroImages";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 lg:gap-12">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            Affordable cleaning solutions
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            High-Quality and Friendly <br />
            Services at Fair Prices
          </h1>

          <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4 max-w-lg">
            We provide comprehensive cleaning services tailored to your needs.
            From residential cleaning services.
          </p>

          <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white text-sm sm:text-base rounded-md hover:bg-green-600 transition">
            Get a quote
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[420px] w-full">
          {heroImages.map((img) => (
            <div
              key={img.id}
              className={`absolute ${img.className} 
                w-[180px] h-[240px] sm:w-[220px] sm:h-[290px] md:w-[260px] md:h-[340px] 
                rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden 
                border-3 sm:border-4 bg-white`}
            >
              <Image
                src={img.src}
                alt="Cleaning Service"
                fill
                sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, (max-width: 1024px) 260px, 260px"
                className="object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
