'use client'
import React from 'react'
import { teamData } from '@/constants/expDoc'
import TeamCard from '@/components/TeamCard'

const MainTwo = () => {
  return (
    <div className="px-6 py-16">

      {/* Heading Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-12 pb-10">
        
        {/* Left Heading */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            We Always Provide The <br /> Best Service
          </h1>
        </div>

        {/* Right Content */}
        <div className="flex-1 sm:pl-16">
          <h2 className="text-2xl font-semibold">Services</h2>
          <p className="text-base sm:text-lg text-gray-600 mt-2 leading-relaxed">
            While we can customize your cleaning plan to suit your <br />
            needs, most clients schedule regular cleaning services:
          </p>
        </div>

      </div>

      <div className="w-full h-[2px] bg-gray-300" />

     
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamData.map((item) => (
            <TeamCard key={item.id} item={item} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default MainTwo
