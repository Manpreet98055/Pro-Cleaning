'use client'
import React from "react";
import Image from "next/image";
import { teamGallery } from "@/constants/teamGallery";
import { motion } from "framer-motion";

const features = [
  "Vetted professionals",
  "Affordable Prices",
  "Next day availability",
  "Best Quality",
  "Standard cleaning tasks",
  "Affordable Prices",
];

const WelcomeSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-12 sm:py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

       
        <motion.div 
          className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {teamGallery.map((img, index) => (
            <div
              key={img.id}
              className={`
                absolute rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-white
                ${index === 0 
                  ? "top-0 left-0 w-[140px] h-[180px] sm:w-[200px] sm:h-[260px] md:w-[260px] md:h-[340px] lg:w-[300px] lg:h-[400px] border-[3px] sm:border-[4px] lg:border-[6px] border-green-500"
                  : "bottom-0 left-20 sm:left-24 md:left-32 lg:left-48 w-[110px] h-[150px] sm:w-[160px] sm:h-[210px] md:w-[200px] md:h-[260px] lg:w-[240px] lg:h-[280px] shadow-md sm:shadow-xl"}
              `}
            >
              <Image
                src={img.src}
                alt="Cleaning team"
                fill
                sizes="(max-width: 640px) 140px, (max-width: 768px) 200px, (max-width: 1024px) 260px, 300px"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Welcome To Our <br />
            Pro-cleaning Company!
          </h2>

          <p className="text-gray-600 mt-4 max-w-lg text-sm sm:text-base leading-relaxed">
            We make your space shine! Professional and reliable cleaning
            service company providing top-notch solutions for homes and
            businesses. Satisfaction guaranteed!
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 mt-8 sm:mt-12">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 sm:gap-3 font-semibold text-sm sm:text-base md:text-lg text-gray-700 bg-[#F5F4F4] p-2 sm:p-3 rounded"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full bg-green-500 text-white text-xs flex-shrink-0">
                  ✓
                </span>
                <span className="text-xs sm:text-sm md:text-base">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 font-sans mt-8 sm:mt-12">
          <button
  className="
    px-6 sm:px-7 py-2 sm:py-3
    border border-gray-400
    rounded-md
    text-xs sm:text-sm text-black
    bg-white
    hover:bg-green-500 hover:text-white hover:border-green-500
    transition-all duration-300
    cursor-pointer
  "
>
              Book Now
            </button>

           <button
  className="
    px-6 sm:px-7 py-2 sm:py-3
    border border-gray-400
    rounded-md
    text-xs sm:text-sm text-black
    bg-white
    hover:bg-green-500 hover:text-white hover:border-green-500
    transition-all duration-300
    cursor-pointer
  "
>
  Know More
</button>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WelcomeSection;
