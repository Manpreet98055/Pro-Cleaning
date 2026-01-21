'use client'
import React from "react";
import { blogData } from "@/constants/blogData";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <div>
      
    <section className="max-w-7xl mx-auto px-6 py-20">


      {/* HEADER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 items-start">
        <h2 className="text-4xl font-bold text-gray-900">
          Stay Updated with Our <br />
          Tips & Service News!
        </h2>

        <div>
          <h4 className="font-semibold text-gray-900">
            Our Blog
          </h4>
          <p className="text-gray-600 mt-2 max-w-md">
            Stay informed with our latest cleaning tips, service updates,
            expert advice on maintaining an immaculate home.
          </p>
        </div>
      </div>
        <div className="w-full h-[2px] bg-gray-300"  />

      {/* BLOG CARDS */}
      <div className="grid grid-cols-1 pt-12 md:grid-cols-3 gap-8">
        {blogData.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </div>

    </section>
    </div>
  );
};

export default BlogSection;

