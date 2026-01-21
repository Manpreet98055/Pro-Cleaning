'use client'
import React from "react";
import Image from "next/image";
import { testimonialData } from "@/constants/testimonialData";

const TestimonialSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Feedback About Their <br />
            Experience With Us
          </h2>

          <p className="text-gray-600 mt-4 max-w-md">
            Read testimonials from our satisfied clients. See how our
            cleaning services have made a difference in their lives and homes.
          </p>

          {/* ARROWS */}
          <div className="flex gap-3 mt-6">
            <button className="w-11 h-11 rounded-md border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition cursor-pointer">
              ←
            </button>
         <button className="w-11 h-11 rounded-md border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition cursor-pointer">
              →
            </button>
          </div>
        </div>

     {/* RIGHT CARD */}
{testimonialData.map((item) => (
  <div
    key={item.id}
    className="relative bg-white rounded-2xl p-8 shadow-lg border-r-[6px] border-green-500"
  >
    {/* QUOTE ICON */}
    <div className="absolute top-6 right-6 w-12 h-12 bg-green-500 rounded-md flex items-center justify-center text-white text-5xl">
      “
    </div>

    {/* MAIN CONTENT */}
    <div className="flex gap-6 items-stretch">
      
      {/* IMAGE – full height feel */}
      <div className="w-28 rounded-xl overflow-hidden flex-shrink-0">
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
        <h4 className="font-semibold text-gray-900">
          {item.name}
        </h4>

        <p className="text-sm text-gray-500">
          {item.role}
        </p>

        {/* STARS */}
        <div className="flex text-orange-400 mt-1">
          {"★".repeat(item.rating)}
        </div>

        {/* MESSAGE – stays on right */}
        <p className="text-gray-600 mt-4 text-sm leading-relaxed">
          {item.message}
        </p>
      </div>

    </div>
  </div>
))}

      </div>
    </section>
  );
};

export default TestimonialSection;
