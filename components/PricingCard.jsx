'use client'
import React from "react";

const PricingCard = ({ item }) => {
  return (
    <div
      className={`
        bg-white rounded-2xl p-8
        shadow-xl
        transition-all duration-300
        hover:-translate-y-2
        ${item.highlighted ? "scale-105" : ""}
      `}
    >
      <h3 className="text-center font-semibold text-gray-900">
        {item.title.toUpperCase()}
      </h3>

      {/* PRICE */}
      <div className="mt-4 flex justify-center">
        <div className="bg-green-500 text-white px-6 py-3 rounded-lg text-xl font-bold">
          ${item.price}.00
          <span className="text-sm font-normal"> /Monthly</span>
        </div>
      </div>

      {/* FEATURES */}
      <ul className="mt-6 space-y-3 text-sm text-gray-600">
        {item.features.map((feature, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-green-500">•</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <button
        className="
          mt-8 w-full py-3 rounded-md
          bg-green-500 text-white
          hover:bg-green-600
          transition
        "
      >
        Book Now
      </button>
    </div>
  );
};

export default PricingCard;
