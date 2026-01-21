'use client'
import React, { useState } from "react";

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

    alert("Email subscribed successfully ✅");
    setEmail("");
  };

  return (
    <footer className="bg-[#0F1A14] text-white pt-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-14 border-b border-white/10">

          {/* LOGO + DESC */}
          <div>
            <h3 className="text-2xl font-bold text-green-500">
              ProCleaning
            </h3>
            <p className="text-sm text-white/70 mt-1">
              Cleaning Services company
            </p>

            <p className="text-sm text-white/60 mt-4 max-w-xs">
              Stay updated with our latest cleaning tips, service updates,
              and helpful articles on maintaining a spotless home.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="cursor-pointer hover:text-green-500">About Us</li>
              <li className="cursor-pointer hover:text-green-500">Services</li>
              <li className="cursor-pointer hover:text-green-500">Our Team</li>
            </ul>
          </div>

          {/* KNOW MORE */}
          <div>
            <h4 className="font-semibold mb-4">Know More</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="cursor-pointer hover:text-green-500">Support</li>
              <li className="cursor-pointer hover:text-green-500">Privacy Policy</li>
              <li className="cursor-pointer hover:text-green-500">
                Terms & conditions
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Email Goes here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full px-4 py-2 rounded-md
                  bg-transparent border border-white/30
                  text-sm text-white
                  placeholder:text-white/50
                  focus:outline-none focus:border-green-500
                "
              />

              <button
                type="submit"
                className="
                  px-6 py-2 rounded-md
                  bg-green-500 text-white
                  hover:bg-green-600
                  transition
                "
              >
                Send
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="text-center text-sm text-white/60 py-6">
          2024 “ProCleaning”. All Rights Received.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
