'use client'
import Image from 'next/image'
import React from 'react'
import Navlogo from '@/assets/Navlogo.png';

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between p-6 px-10 items-center pl-30 pr-30 bg-white shadow-md'>
            <div>
                <Image src={Navlogo} width={150} alt="Logo" height={50} className='w-full h-15'/>
            </div>
             <div className='flex gap-5 font-mono '>
                <button className='hover:text-green-500 cursor-pointer'>Home</button>
                 <button className='hover:text-green-500 cursor-pointer'>About us</button>
                  <button className='hover:text-green-500 cursor-pointer'>Service</button>
                   <button className='hover:text-green-500 cursor-pointer'>Blog</button>
                    <button className='hover:text-green-500 cursor-pointer'>Contact</button>
             </div>
              <div className=" bg-[#36B864] text-white px-7 py-3 rounded-md transition duration-300 hover:bg-blue-500 font-bold hover:text-black cursor-pointer">
  Get a Quote
</div>

        </div>
    </div>
  )
}

export default Navbar