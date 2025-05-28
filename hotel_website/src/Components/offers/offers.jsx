import { div } from 'framer-motion/client'
import React from 'react'

const Offers = () => {
  return (
    <div className='flex flex-row'>
        <div className='flex flex-col'>
            <h2 className='text-[22px] text-left mt-30 ml-20 font-[Cormorant_Garamond] text-[#daa954]'>Exclusive Offers</h2>
            <h1 className='text-[21px] text-left mt-4 ml-20 w-80 font-[now] text-[#000000]'>Unforgetable Memories, Exclusive Offers</h1>
            <p className='text-[15px] text-left w-120 mt-6  ml-20 font-[jura] uppercase leading-8'>Make your escape even more unforgettable with curated offers that celebrate the beauty, culture, and serenity of our tropical paradise — where every moment feels timeless.</p>
            <button className='mt-8 bg-[#daa954] w-35 h-8 pt-0.5 ml-20 font-[Cormorant_Garamond] text-[17px] text-[#ffffff] hover:text-[#000000] cursor-pointer transition-colors'>Explore More</button>
        </div>
        <img className='w-180 h-78 mt-26 ml-22 cursor-pointer' src="src/assets/offers.jpg" alt="offers image" />



    </div>

  )
}

export default Offers
