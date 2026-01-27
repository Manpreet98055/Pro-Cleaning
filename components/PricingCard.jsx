'use client'
import React from "react";

const PricingCard = ({ item }) => {
  return (
    <div
      className={`
        bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8
        
        h-auto sm:h-[500px] md:h-[550px]
        transition-all duration-300
        hover:-translate-y-2
        ${item.highlighted ? "scale-100 sm:scale-105" : ""}
      `}
    >
      <h3 className="text-center font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
        {item.title.toUpperCase()}
      </h3>

      {/* PRICE */}
      <div className="mt-4 pb-4 sm:pb-5 flex justify-center">
        <div className="bg-green-500 text-white w-full px-4 sm:px-6 py-4 sm:py-6 rounded-lg text-xl sm:text-2xl font-bold">
          ${item.price}.00
          <span className="text-xs sm:text-sm font-normal"> /Monthly</span>
        </div>
      </div>

      {/* FEATURES */}
      <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 pb-4 sm:pb-6">
        {item.features.map((feature, index) => (
          <li key={index} className="flex gap-2 font-sans text-[#666666]">
            <span className="text-[#666666] flex-shrink-0">•</span>
            <span className="text-xs sm:text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <button
        className="
          mt-4 sm:mt-6 md:mt-8 w-full py-3 sm:py-4 md:py-6 rounded-md
          border border-gray-300
          text-xs sm:text-sm text-black bg-white
          hover:bg-green-600
          hover:text-white hover:border-green-600
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
