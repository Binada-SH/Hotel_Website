import React from 'react'

const room= [
  {
    src: 'src/assets/suite.jpg', 
    title: 'Suite Rooms', 
    description: 'Spacious and serene, our Suites offer refined luxury with sweeping views, curated interiors, and elevated comfort for an indulgent escape.'
  },
  {
    src: 'src/assets/supirior.jpg', 
    title: 'Supirior Rooms', 
    description: 'A blend of natural textures and modern simplicity, the Superior Rooms provide a peaceful space to unwind, with views of lush greenery.'
  },
  {
    src: 'src/assets/deluxe.jpg', 
    title: 'Deluxe Rooms', 
    description: 'Cozy yet sophisticated, our Deluxe Rooms feature minimalist design, ambient light, and all the essentials for a relaxed coastal stay.'
  }
];

const Rooms = () => {
  return (
    <div className='bg-[#F8F0E5]'>
      <h1 className='text-[22px] text-center mt-30 pt-10 font-[Cormorant_Garamond] text-[#daa954]'>Living Spaces</h1>
      <h3 className='text-[21px] text-center mt-4 font-[now] text-[#000000]'>Naturally Inspired Spaces, Defined by Minimalist Comfort</h3>
      <p className='text-[15px] text-center w-190 m-auto mt-11 font-[jura] uppercase leading-8 text-[#000000]'>Each room reflects the calm, open spirit of the coast, with clean lines, earthy tones, and natural textures. Whether it’s a garden-view room or an ocean-facing villa, you’ll enjoy warm light, soft linens, and a peaceful space designed for rest and renewal.</p>
      <div className='grid grid-cols-3 mt-40 gap-6 px-20'>
        {room.map((room,index) => (
          <div key = {index}>
            <img src = {room.src}/>
            <h1 className=' mt-4 text-[24px] font-[now] text-center text-[#000000]'>{room.title}</h1>
            <p className='mt-6 w-85 text-center text-[18px] m-auto font-[Cormorant_Garamond]'>{room.description}</p>
          </div>
        ))}      
      </div>
    </div>
    );
};

export default Rooms
