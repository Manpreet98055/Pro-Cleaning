'use client'
import React from "react";
import { pricingData } from "@/constants/pricingData";
import PricingCard from "./PricingCard";

const PricingSection = () => {
  return (
    <section className="bg-[#36B864] pt-20 pb-40 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center text-white mb-24">
          <p className="text-sm opacity-90">Our Pricing</p>
          <h2 className="text-4xl font-bold mt-2">
            Choose From Our Lowest <br /> Plans and Prices
          </h2>
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
