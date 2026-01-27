'use client'
import React from "react";
import { blogData } from "@/constants/blogData";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";

const BlogSection = () => {
  return (
    <div>
      
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">


      {/* HEADER */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-14 items-start"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Stay Updated with Our Tips & Service News!
        </h2>

        <div>
          <h4 className="font-semibold text-gray-900 text-base md:text-lg">
            Our Blog
          </h4>
          <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
            Stay informed with our latest cleaning tips, service updates,
            expert advice on maintaining an immaculate home.
          </p>
        </div>
      </motion.div>
        <div className="w-full h-[2px] bg-gray-300"  />

      {/* BLOG CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8 md:pt-12 gap-4 sm:gap-6 md:gap-8">
        {blogData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <BlogCard item={item} />
          </motion.div>
        ))}
      </div>

    </section>
    </div>
  );
};

export default BlogSection;

