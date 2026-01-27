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
    <section className="max-w-7xl mx-auto px-20 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

       
        <motion.div 
          className="relative w-full h-[450px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {teamGallery.map((img, index) => (
            <div
              key={img.id}
              className={`
                absolute rounded-3xl overflow-hidden bg-white
                ${index === 0 
                  ? "top-0 left-0 w-[300px] h-[400px] border-[6px] border-green-500"
                  : "bottom-0 left-48 w-[240px] h-[280px] shadow-xl"}
              `}
            >
              <Image
                src={img.src}
                alt="Cleaning team"
                fill
                className="object-cover"
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
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Welcome To Our <br />
            Pro-cleaning Company!
          </h2>

          <p className="text-gray-600 mt-4 max-w-lg">
            We make your space shine! Professional and reliable cleaning
            service company providing top-notch solutions for homes and
            businesses. Satisfaction guaranteed!
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-12">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 font-bold text-1xl text-gray-700 bg-[#F5F4F4]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-500 text-white text-xs">
                  ✓
                </span>
                {item}
              </motion.div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 font-sans  mt-15 ">
          <button
  className="
    px-7 py-3
    border border-gray-400
    rounded-md
    text-black
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
    px-7 py-3
    border border-gray-400
    rounded-md
    text-black
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
