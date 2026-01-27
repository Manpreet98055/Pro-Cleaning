'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // store in localStorage
    localStorage.setItem(
      "contactFormData",
      JSON.stringify(formData)
    );

    alert("Message sent successfully ✅");

    // reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

        {/* LEFT – FIND US */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
            Find us
          </h2>

          {/* Call */}
          <motion.div 
            className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-gray-50 rounded-lg mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
              ☎
            </div>
            <div>
              <h4 className="font-semibold text-sm md:text-base">Call Us</h4>
              <p className="text-gray-600 text-xs sm:text-sm">+(08) 255 201 888</p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div 
            className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-gray-50 rounded-lg mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
              ✉
            </div>
            <div>
              <h4 className="font-semibold text-sm md:text-base">Email Now</h4>
              <p className="text-gray-600 text-xs sm:text-sm">hello@procleaning.com</p>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div 
            className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-gray-50 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
              📍
            </div>
            <div>
              <h4 className="font-semibold text-sm md:text-base">Address</h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                7510, Brand Tower, New York, USA
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT – CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xs sm:text-sm text-gray-500 mb-1">
            Contact info
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Keep In Touch
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2 mb-6 leading-relaxed">
            We prioritize responding to your inquiries promptly to ensure you
            receive the assistance you need in a timely manner.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-sm focus:outline-none focus:border-green-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-sm focus:outline-none focus:border-green-500"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-sm focus:outline-none focus:border-green-500"
            />

            <button
              type="submit"
              className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition text-sm md:text-base font-medium"
            >
              Sent Message
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;
