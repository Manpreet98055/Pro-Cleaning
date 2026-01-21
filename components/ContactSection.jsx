'use client'
import React, { useState } from "react";

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
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT – FIND US */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Find us
          </h2>

          {/* Call */}
          <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-lg mb-4">
            <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl">
              ☎
            </div>
            <div>
              <h4 className="font-semibold">Call Us</h4>
              <p className="text-gray-600">+(08) 255 201 888</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-lg mb-4">
            <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl">
              ✉
            </div>
            <div>
              <h4 className="font-semibold">Email Now</h4>
              <p className="text-gray-600">hello@procleaning.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl">
              📍
            </div>
            <div>
              <h4 className="font-semibold">Address</h4>
              <p className="text-gray-600">
                7510, Brand Tower, New York, USA
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT – CONTACT FORM */}
        <div>
          <p className="text-sm text-gray-500 mb-1">
            Contact info
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Keep In Touch
          </h2>

          <p className="text-gray-600 mt-2 mb-6">
            We prioritize responding to your inquiries promptly to ensure you
            receive the assistance you need in a timely manner.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-green-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-green-500"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-green-500"
            />

            <button
              type="submit"
              className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Sent Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
