'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    // store email in localStorage
    const storedEmails =
      JSON.parse(localStorage.getItem("newsletterEmails")) || [];

    localStorage.setItem(
      "newsletterEmails",
      JSON.stringify([...storedEmails, email])
    );

    alert("Email subscribed successfully ");
    setEmail("");
  };

  return (
    <footer className="bg-[#0F1A14] text-white pt-8 sm:pt-12 md:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* TOP FOOTER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 pb-8 sm:pb-10 md:pb-14 border-b border-white/10">

          {/* LOGO + DESC */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-green-500">
              ProCleaning
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1">
              Cleaning Services company
            </p>

            <p className="text-xs sm:text-sm text-white/60 mt-4 leading-relaxed">
              Stay updated with our latest cleaning tips, service updates,
              and helpful articles on maintaining a spotless home.
            </p>
          </motion.div>

          {/* COMPANY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm md:text-base">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li className="cursor-pointer hover:text-green-500 transition">About Us</li>
              <li className="cursor-pointer hover:text-green-500 transition">Services</li>
              <li className="cursor-pointer hover:text-green-500 transition">Our Team</li>
            </ul>
          </motion.div>

          {/* KNOW MORE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm md:text-base">Know More</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li className="cursor-pointer hover:text-green-500 transition">Support</li>
              <li className="cursor-pointer hover:text-green-500 transition">Privacy Policy</li>
              <li className="cursor-pointer hover:text-green-500 transition">
                Terms & conditions
              </li>
            </ul>
          </motion.div>

          {/* NEWSLETTER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm md:text-base">Newsletter</h4>

            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                placeholder="Email Goes here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full px-3 sm:px-4 py-2
                  rounded-md text-xs sm:text-sm
                  bg-transparent border border-white/30
                  text-white
                  placeholder:text-white/50
                  focus:outline-none focus:border-green-500
                "
              />

              <button
                type="submit"
                className="
                  w-full px-4 py-2 rounded-md text-sm
                  bg-green-500 text-white
                  hover:bg-green-600
                  transition
                "
              >
                Send
              </button>
            </form>
          </motion.div>

        </div>

        {/* BOTTOM FOOTER */}
        <motion.div 
          className="text-center text-xs sm:text-sm text-white/60 py-4 sm:py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          2024 "ProCleaning". All Rights Received.
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
