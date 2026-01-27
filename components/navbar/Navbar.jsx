'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Navlogo from '@/assets/Navlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex justify-between items-center bg-white shadow-md p-4 md:p-6 md:px-12 relative'>
      <div className='flex-shrink-0'>
        <Image src={Navlogo} width={120} alt="Logo" height={40} className='md:w-[150px]' />
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className='md:hidden text-2xl font-bold z-50'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>
      
      {/* Navigation Links - Hidden on mobile, visible on md+ */}
      <div className={`${isOpen ? 'flex flex-col absolute top-16 left-0 right-0 bg-white shadow-lg p-4 gap-3' : 'hidden md:flex'} md:gap-6 font-mono md:items-center md:relative md:shadow-none md:bg-white md:p-0`}>
        <a href="#" className='hover:text-green-500 cursor-pointer text-sm md:text-base py-2 md:py-0 block md:inline'>Home</a>
        <a href="#" className='hover:text-green-500 cursor-pointer text-sm md:text-base py-2 md:py-0 block md:inline'>About us</a>
        <a href="#" className='hover:text-green-500 cursor-pointer text-sm md:text-base py-2 md:py-0 block md:inline'>Service</a>
        <a href="#" className='hover:text-green-500 cursor-pointer text-sm md:text-base py-2 md:py-0 block md:inline'>Blog</a>
        <a href="#" className='hover:text-green-500 cursor-pointer text-sm md:text-base py-2 md:py-0 block md:inline'>Contact</a>
      </div>
      
      {/* Get Quote Button - Hidden on small mobile, visible on md+ */}
      <button className="hidden md:block bg-[#36B864] text-white px-5 md:px-7 py-2 md:py-3 rounded-md transition duration-300 hover:bg-green-600 font-bold cursor-pointer text-sm md:text-base">
        Get a Quote
      </button>
    </div>
  )
}

export default Navbar