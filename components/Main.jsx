'use client'

import bg from '@/assets/HeroIamge.png';

const btnClass = "border border-black hover:border-green-500 cursor-pointer text-black hover:bg-green-500 hover:text-white px-4 sm:px-6 md:px-12 py-2 sm:py-3 md:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg transition";

const Main = () => {
  return (
    <div>
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
     <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-12 pt-12 sm:pt-20 md:pt-32">
        <div className="flex-1 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans pb-3 md:pb-4 leading-tight">
            Quality cleaning at a fair price.
          </h1>

          <p className="font-bold pb-4 md:pb-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-2 leading-tight">
            <span>Specialized, efficient, and thorough cleaning services</span>
          </p>

          <p className="text-[#666666] text-xs sm:text-sm md:text-base mt-2 md:mt-4 pb-4 md:pb-6 leading-relaxed">
            We provide performing cleaning tasks using the least amount of time, energy, and money.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-5 w-full sm:w-auto">
          <button className={btnClass}>
            Get Started Now
          </button>
          <button className={btnClass}>
            View all Services
          </button>
        </div>
      </div>
      </div>
       <div className="px-4 sm:px-6 md:px-12 lg:px-8 py-8 sm:py-12 md:py-16">
    <div className="max-w-7xl mx-auto">
         {/* Heading Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-12 pb-8 md:pb-10">
        
        {/* Left Heading */}
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            We Always Provide The Best Service
          </h1>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Services</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2 leading-relaxed">
            While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services.
          </p>
        </div>

      </div>
    </div>
    </div>
    </div>
  )
}

export default Main
