'use client'
import React from "react";

const PricingCard = ({ item }) => {
  return (
    <div
      className={`
        bg-white rounded-2xl p-8
        
        h-[550px]
        transition-all duration-300
        hover:-translate-y-2
        ${item.highlighted ? "scale-105" : ""}
      `}
    >
      <h3 className="text-center font-semibold text-gray-900">
        {item.title.toUpperCase()}
      </h3>

      {/* PRICE */}
      <div className="mt-4 pb-5 flex justify-center">
        <div className="bg-green-500 text-white w-full px-6 py-6 rounded-lg text-2xl font-bold">
          ${item.price}.00
          <span className="text-sm font-normal"> /Monthly</span>
        </div>
      </div>

      {/* FEATURES */}
      <ul className="mt-6 space-y-3 text-sm text-gray-600 pb-6">
        {item.features.map((feature, index) => (
          <li key={index} className="flex gap-2 font-sans text-[#666666]">
            <span className="text-[#666666]">•</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <button
        className="
          mt-8 w-full py-6 rounded-md
          boder border
         text-black
          hover:bg-green-600
          hover:text-white
          transition
          cursor-pointer
          hover:font-mono
        "
      >
        Book Now
      </button>
    </div>
  );
};

export default PricingCard;
