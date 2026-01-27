'use client'
import React from "react";
import Image from "next/image";
import { testimonialData } from "@/constants/testimonialData";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-20 md:py-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Feedback About Their Experience With Us
          </h2>

          <p className="text-gray-600 mt-3 md:mt-4 text-sm md:text-base leading-relaxed">
            Read testimonials from our satisfied clients. See how our
            cleaning services have made a difference in their lives and homes.
          </p>

          {/* ARROWS */}
          <div className="flex gap-3 mt-6 md:mt-8">
            <button className="w-10 h-10 sm:w-11 sm:h-11 rounded-md border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition cursor-pointer text-sm sm:text-base">
              ←
            </button>
         <button className="w-10 h-10 sm:w-11 sm:h-11 rounded-md border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition cursor-pointer text-sm sm:text-base">
              →
            </button>
          </div>
        </motion.div>

     {/* RIGHT CARD */}
{testimonialData.map((item) => (
  <motion.div
    key={item.id}
    className="relative bg-white rounded-2xl p-8 shadow-lg border-r-[6px] border-green-500"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {/* QUOTE ICON */}
    <div className="absolute top-3 right-3 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-md flex items-center justify-center text-white text-3xl sm:text-5xl">
      “
    </div>

    {/* MAIN CONTENT */}
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
      
      {/* IMAGE – full height feel */}
      <div className="w-20 h-24 sm:w-24 sm:h-28 md:w-28 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          width={200}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT CONTENT – RIGHT SIDE */}
      <div className="flex flex-col">
        <h4 className="font-semibold text-gray-900 text-sm md:text-base">
          {item.name}
        </h4>

        <p className="text-xs sm:text-sm text-gray-500">
          {item.role}
        </p>

        {/* STARS */}
        <div className="flex text-orange-400 mt-1 text-sm">
          {"★".repeat(item.rating)}
        </div>

        {/* MESSAGE – stays on right */}
        <p className="text-gray-600 mt-2 sm:mt-4 text-xs sm:text-sm leading-relaxed">
          {item.message}
        </p>
      </div>

    </div>
  </motion.div>
))}

      </div>
    </section>
  );
};

export default TestimonialSection;
