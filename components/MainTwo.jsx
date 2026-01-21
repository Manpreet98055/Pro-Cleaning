'use client'
import React from 'react'
import { teamData } from '@/constants/expDoc'
import { teamGallery } from '@/constants/teamGallery'
import TeamCard from '@/components/TeamCard'
import WelcomeSection from '@/components/WelcomeSection'
import PricingSection from '@/components/PricingSection'
import Image from 'next/image'

const MainTwo = () => {
  return (
    <div className="px-6 py-16">

      {/* TEAM CARDS */}
      <div className="w-full h-[2px] bg-gray-300" />

      <div className="max-w-6xl mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamData.map((item) => (
            <TeamCard key={item.id} item={item} />
          ))}
        </div>
      </div>

<WelcomeSection />
<PricingSection />


    </div>
  )
}

export default MainTwo
