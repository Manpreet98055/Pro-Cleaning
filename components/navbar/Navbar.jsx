'use client'
import Image from 'next/image'
import React from 'react'
import Navlogo from '@/assets/Navlogo.png';

const Navbar = () => {
  return (
    <div className='flex justify-between p-6 px-30 items-center bg-white shadow-md'>
            <div>
                <Image src={Navlogo} width={150} alt="Logo" height={50} />
            </div>
             <div className='flex gap-5 font-mono '>
                <a href="#" className='hover:text-green-500 cursor-pointer'>Home</a>
                <a href="#" className='hover:text-green-500 cursor-pointer'>About us</a>
                <a href="#" className='hover:text-green-500 cursor-pointer'>Service</a>
                <a href="#" className='hover:text-green-500 cursor-pointer'>Blog</a>
                <a href="#" className='hover:text-green-500 cursor-pointer'>Contact</a>
             </div>
              <button className=" bg-[#36B864] text-white px-7 py-3 rounded-md transition duration-300 hover:bg-blue-500 font-bold hover:text-black cursor-pointer">
                Get a Quote
              </button>

        </div>
  )
}

export default Navbar