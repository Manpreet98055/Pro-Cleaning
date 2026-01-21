'use client';
import React from 'react'

const maintwo = () => {
  return (
    <>
    <div className='p-30'>

   <div className="flex flex-col sm:flex-row justify-between items-start gap-13 pb-10 ">
  {/* Left Heading */}
  <div className="flex-1">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
      We Always Provide The <br /> Best Service
    </h1>
  </div>

  {/* Right Content */}
  <div className="flex-1 pl-30">
    <h1 className="text-2xl sm:text-2xl font-semibold">
      Services
    </h1>
    <p className="text-base sm:text-lg text-gray-600 mt-2 leading-relaxed">
      While we can customize your cleaning plan to suit your <br />
      needs, most clients schedule regular cleaning services:
    </p>
  </div>
</div>

  <div className="w-full h-[2px] bg-gray-300"></div>

      <div>
        map over cards
      </div>
    </div>
    </>
  )
}

export default maintwo