'use client'
import Image from "next/image";
import React from "react";

const BlogCard = ({ item }) => {
  return (
    <div
      className="
        group
        rounded-2xl overflow-hidden bg-white
         hover:border border-green-500
        transition-all duration-300
      "
    >
      {/* IMAGE */}
      <div className="relative">
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={250}
          className="
            w-full h-[220px] object-cover
            transition duration-300
          "
        />

        {/* HOVER GREEN OVERLAY (ALL CARDS) */}
        <div className="
          absolute inset-0
          bg-green-500/0
          group-hover:bg-green-500/20
          transition duration-300
        " />
      </div>

      {/* CONTENT */}
      <div className="p-6 text-center">
        <p className="text-xs text-gray-500 uppercase">
          {item.author} &nbsp; {item.date}
        </p>

        <h3 className="mt-2 font-semibold text-gray-900">
          {item.title}
        </h3>

        <p className="text-sm text-gray-600 mt-3">
          {item.desc}
        </p>

        {/* BUTTON – SAME FOR ALL */}
        <button
          className="
            mt-6 px-6 py-4 rounded-md text-sm
         w-full 
            bg-white text-black
            hover:bg-green-500 hover:text-white hover:border-green-500
            transition-all duration-300 cursor-pointer
          "
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
