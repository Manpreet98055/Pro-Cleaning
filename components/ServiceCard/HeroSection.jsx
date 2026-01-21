'use client'
import Image from "next/image";
import { heroImages } from "@/constants/heroImages";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm text-gray-500 mb-2">
            Affordable cleaning solutions
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            High-Quality and Friendly <br />
            Services at Fair Prices
          </h1>

          <p className="text-gray-600 mt-4 max-w-lg">
            We provide comprehensive cleaning services tailored to your needs.
            From residential cleaning services.
          </p>

          <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
            Get a quote
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative h-[420px] w-full">
          {heroImages.map((img) => (
            <div
              key={img.id}
              className={`absolute ${img.className} 
                w-[260px] h-[340px] 
                rounded-2xl overflow-hidden 
                border-4 bg-white`}
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
  );
};

export default HeroSection;
