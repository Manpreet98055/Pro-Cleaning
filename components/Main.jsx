'use client'
import React from 'react'
import bg from '@/assets/HeroIamge.png';

const btnClass = "border border-black hover:border-green-500 cursor-pointer text-black hover:bg-green-500 hover:text-white px-12 py-4 rounded-xl font-bold text-lg";

const Main = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
     <div className="flex flex-row items-center justify-between gap-6 p-12 sm:flex-col sm:items-start">
        <div className="flex-1 ">
          <h1 className="text-3xl font-sans sm:text-4xl lg:text-5xl pb-4">
            Quality cleaning at a fair price.
          </h1>

          <p className="hidden sm:block font-bold pb-6 text-5xl mt-2 lg:text-7xl">
            <span> Specialized, efficient,<br />
                and thorough cleaning<br /> services</span>
          </p>

          <p className="hidden sm:block text-[#666666] text-2xl mt-1 pb-6">
            We provide performing cleaning tasks using the least amount<br /> of time, energy, and money.
          </p>
        </div>

        <div className="flex gap-5">
          <button className={btnClass}>
            Get Started Now
          </button>
          <button className={btnClass}>
            View all Services
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main
