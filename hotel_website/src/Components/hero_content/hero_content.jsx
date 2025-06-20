import React from 'react'

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className='text-[22px] text-center mt-30 font-[Cormorant_Garamond] text-[#daa954]'>The Luma Beach Resort</h2>
      <h1 className='text-[21px] text-center mt-4 font-[now] text-[#000000]'>A Hidden Coastal Sanctuary Where Minimalism Meets Nature</h1>
      <p className='w-96 sm:w-150 text-[15px] text-center m-auto mt-11 font-[jura] uppercase leading-8'>A serene escape on Sri Lanka’s southern coast, The Luma blends minimalist design with the natural beauty of the ocean. With panoramic sea views, private villas, and curated local experiences, it’s a peaceful retreat where simplicity meets coastal charm.</p>
      <button className='mt-15 bg-[#daa954] w-35 h-10 m-auto font-[Cormorant_Garamond] text-[17px] text-[#ffffff] hover:text-[#000000] cursor-pointer transition-colors'>Explore More</button>
    </div>
  
  )
}

export default HeroContent
