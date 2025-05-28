import { div } from 'framer-motion/client'
import React from 'react'

const Offers = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
        <div className='flex flex-col'>
            <h2 className='text-center md:text-left mt-30 md:ml-20 text-[22px] font-[Cormorant_Garamond] text-[#daa954]'>Exclusive Offers</h2>
            <h1 className='text-center m-auto md:text-left mt-4 md:ml-20 w-80 text-[21px] font-[now] text-[#000000]'>Unforgetable Memories, Exclusive Offers</h1>
            <p className='text-center m-auto w-93 md:text-left md:w-120 mt-6  md:ml-20 text-[15px] font-[jura] uppercase leading-8'>Make your escape even more unforgettable with curated offers that celebrate the beauty, culture, and serenity of our tropical paradise — where every moment feels timeless.</p>
            <button className='m-auto mt-8 bg-[#daa954] w-35 h-8 pt-0.5 md:ml-20 font-[Cormorant_Garamond] text-[17px] text-[#ffffff] hover:text-[#000000] cursor-pointer transition-colors'>Explore More</button>
        </div>
        <img className='w-140 h-70 m-auto md:w-160 md:h-88 mlg:w-180 lg:h-78 mt-26 lg:ml-22 cursor-pointer' src="src/assets/offers.jpg" alt="offers image" />



    </div>

  )
}

export default Offers
