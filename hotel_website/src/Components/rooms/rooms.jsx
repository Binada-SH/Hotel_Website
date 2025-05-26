import { img } from 'framer-motion/client';
import React from 'react'

const images = [
  'src/assets/suite.jpg',
  'src/assets/deluxe.jpg',
  'src/assets/supirior.jpg',
];

const rooms = () => {
  return (
    <div className='bg-[#F8F0E5]'>
      <h1 className='text-[22px] text-center mt-30 pt-10 font-[Cormorant_Garamond] text-[#daa954]'>Living Spaces</h1>
      <h3 className='text-[21px] text-center mt-4 font-[now] text-[#000000]'>Naturally Inspired Spaces, Defined by Minimalist Comfort</h3>
      <p className='text-[15px] text-center w-190 m-auto mt-11 font-[jura] uppercase leading-8 text-[#000000]'>Each room reflects the calm, open spirit of the coast, with clean lines, earthy tones, and natural textures. Whether it’s a garden-view room or an ocean-facing villa, you’ll enjoy warm light, soft linens, and a peaceful space designed for rest and renewal.</p>
      <div className='grid grid-cols-3 mt-10 px-4'>
        {images.map((src,index) => (
          <img
            key = {index} 
            src = {src} 
            className='w-full h-auto object-cover'   />
        ))}
      </div>      
    </div>
  )
}

export default rooms
