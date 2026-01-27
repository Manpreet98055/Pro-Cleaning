'use client'
import React from 'react'
import { teamData } from '@/constants/expDoc'
import { teamGallery } from '@/constants/teamGallery'
import TeamCard from '@/components/TeamCard'
import WelcomeSection from '@/components/WelcomeSection'
import PricingSection from '@/components/PricingSection'
import Image from 'next/image'
import { easeIn, easeInOut, motion } from 'framer-motion'

const MainTwo = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">

      {/* TEAM CARDS */}
      <div className="w-full h-[2px] bg-gray-300" />

      <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        initial={{ opacity: 0 , y: 40}}
        animate={{ opacity: 1 , y: 0}}
transition={{ duration: 2, ease:easeInOut }}
whileTap={{scale:0.2}}
        whileHover={{ scale: 1.02 }}>
          {teamData.map((item) => (
            <TeamCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>

<WelcomeSection />
<PricingSection />


    </div>
  )
}

export default MainTwo
