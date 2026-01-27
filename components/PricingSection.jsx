'use client'
import React, { useRef } from "react";
import { pricingData } from "@/constants/pricingData";
import PricingCard from "./PricingCard";
import { motion, useViewportScroll, useTransform } from 'framer-motion'

const PricingSection = () => {
  const sectionRef = useRef(null);
  const { scrollY } = useViewportScroll();

  // Animation for header - fade in and slide down
  const headerOpacity = useTransform(
    scrollY,
    [0, 300],
    [0.3, 1],
    { clamp: true }
  );

  const headerY = useTransform(
    scrollY,
    [0, 300],
    [50, 0],
    { clamp: true }
  );

  return (
    <section className="bg-[#36B864] pt-8 sm:pt-10 md:pt-12 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* HEADER */}
        <motion.div 
          className="text-center text-white mb-8 sm:mb-10 md:mb-14"
          style={{
            opacity: headerOpacity,
            y: headerY
          }}
        >
          <p className="text-xs sm:text-sm opacity-90">Our Pricing</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
            Choose From Our Lowest Plans and Prices
          </h2>
        </motion.div>
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
  <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-6 items-center bg-[#F4F5F8] backdrop-blur-sm p-2 rounded-full w-full sm:w-auto">
    
    {/* Monthly (Active) */}
    <motion.button
     initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      className="
        px-3 sm:px-6 py-2
        bg-[#FFFFFF]
        text-black text-xs sm:text-sm md:text-lg
        hover:bg-green-500 cursor-pointer
        transition
        rounded-full
        w-full sm:w-auto
        hover:text-white
        hover:font-sans
      "
    >
      Monthly
    </motion.button>

    {/* Yearly */}
   <button
      className="
       hover:font-sans
        px-3 sm:px-6 py-2
        bg-[#FFFFFF]
        text-black text-xs sm:text-sm md:text-lg
        hover:bg-green-500 
        hover:text-white
         cursor-pointer
        transition
        rounded-full
        w-full sm:w-auto
      "
    >
      Yearly
    </button>

  </div>
</div>

        {/* CARDS (OVERLAP MAGIC HERE 👇) */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8
            translate-y-0 sm:translate-y-16 md:translate-y-24
          ">
            {pricingData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeInOut"
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <PricingCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
