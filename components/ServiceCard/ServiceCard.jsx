'use client'
import Image from "next/image";
import { motion } from 'framer-motion';
import { useState } from "react";

const ServiceCard = ({ item }) => {
  const [rotated, setRotated] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-2xl p-4 hover:shadow-lg transition"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >

      {/* Image */}
      <motion.div
        onHoverStart={() => setRotated(true)}
        animate={rotated ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden"
      >
        <Image
          src={item.image}
          alt={item.title}
          width={500}
          height={250}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[270px] object-cover"
          priority={false}
        />
      </motion.div>
<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      >
      <motion.h3 
       initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, ease: "easeInOut", delay: 0.2 }}
     
      className="text-xl font-semibold mt-4">
        {item.title}
      </motion.h3>

      <p className="text-gray-600 text-sm mt-2 leading-relaxed">
        {item.desc}
      </p>
      </motion.div>

      <button className="mt-4 px-5 py-2 rounded-md border flex items-center gap-2
        bg-white text-black border-gray-400
        hover:bg-green-500 hover:text-white hover:border-green-500
        transition-all duration-300 cursor-pointer">
        Book Now <span>↗</span>
      </button>

    </motion.div>
  );
};

export default ServiceCard;
