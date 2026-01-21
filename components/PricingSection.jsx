'use client'
import React from "react";
import { pricingData } from "@/constants/pricingData";
import PricingCard from "./PricingCard";

const PricingSection = () => {
  return (
    <section className="bg-[#36B864] pt-10 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center text-white mb-14">
          <p className="text-sm opacity-90">Our Pricing</p>
          <h2 className="text-4xl font-bold mt-2">
            Choose From Our Lowest <br /> Plans and Prices
          </h2>
        </div>
        <div className="flex justify-center">
  <div className="flex gap-6 items-center bg-[#F4F5F8] backdrop-blur-sm p-1 rounded-full">
    
    {/* Monthly (Active) */}
    <button
      className="
        px-6 py-2 rounded-full
        bg-[#FFFFFF]
        text-black text-2xl
        hover:bg-green-500 cursor-pointer
        transition
      "
    >
      Monthly
    </button>

    {/* Yearly */}
   <button
      className="
        px-6 py-2 rounded-full
        bg-[#FFFFFF]
        text-black text-2xl
        hover:bg-green-500 cursor-pointer
        transition
      "
    >
      Yearly
    </button>

  </div>
</div>

        {/* CARDS (OVERLAP MAGIC HERE 👇) */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8
            translate-y-24
          ">
            {pricingData.map((item) => (
              <PricingCard key={item.id} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
