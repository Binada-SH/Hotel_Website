import React from 'react'

const room= [
  {
    src: 'src/assets/suite.jpg', 
    title: 'Suite Rooms', 
    description: 'Spacious and serene, our Suites offer refined luxury with sweeping views, curated interiors, and elevated comfort for an indulgent escape.',
    number: 10,
    view: 'Ocean'
  },
  {
    src: 'src/assets/supirior.jpg', 
    title: 'Superior Rooms', 
    description: 'A blend of natural textures and modern simplicity, the Superior Rooms provide a peaceful space to unwind, with views greenery.',
    number: 20,
    view: 'Pool'
  },
  {
    src: 'src/assets/deluxe.jpg', 
    title: 'Deluxe Rooms', 
    description: 'Cozy yet sophisticated, our Deluxe Rooms feature minimalist design, ambient light, and all the essentials for a relaxed coastal stay.',
    number: 30,
    view: 'Lake'
  }
];

const Rooms = () => {
  return (
    <div className='bg-[#F8F0E5]'>
      <h1 className='text-[22px] text-center mt-30 pt-30 font-[Cormorant_Garamond] text-[#daa954]'>Living Spaces</h1>
      <h3 className='text-[21px] text-center mt-4 font-[now] text-[#000000]'>Naturally Inspired Spaces, Defined by Minimalist Comfort</h3>
      <p className='text-[15px] text-center w-190 m-auto mt-11 font-[jura] uppercase leading-8 text-[#000000]'>Each room reflects the calm, open spirit of the coast, with clean lines, earthy tones, and natural textures. Whether it’s a garden-view room or an ocean-facing villa, you’ll enjoy warm light, soft linens, and a peaceful space designed for rest and renewal.</p>
      <div className='grid grid-cols-3 mt-40 gap-6 px-20'>
        {room.map((room,index) => (
          <div key = {index}>
            <img  className='cursor-pointer hover:scale-101 transition-all ' src = {room.src} alt={room.title}/>
            <h1 className=' mt-4 text-[24px] font-[now] text-center text-[#000000]'><a href="" className='cursor-pointer'>{room.title}</a></h1>
            <hr className='text-[#daa954] w-30 m-auto mt-3'/>
            <p className='mt-6 w-85 text-center text-[18px] m-auto font-[jura]'>{room.description}</p>  
            <div className='flex items-center px-10 justify-center text-[18px] font-[now] text-center'>
              <p className='mt-16 w-85'>{room.number} Rooms</p>
              <div className="w-[3px] mt-16 h-6 bg-[#daa954]"></div>
              <p className='mt-16 w-85'>{room.view} View</p>
            </div> 
            <div className='mt-20 flex gap-5 px-15 text-center justify-center font-[Cormorant_Garamond] text-[19px] pb-30'>
              <h3 className='w-40 h-10 border-2 border-[#daa954] pt-1.5 hover:text-[#daa954] transition-colors'><a href="">More Info</a></h3>        
              <h3 className='bg-[#daa954] w-40 pt-1.5 text-[#ffffff] hover:text-[#000000] transition-colors'><a href="">Book Now</a></h3> 
            </div>    
          </div>
        ))}      
      </div>
    </div>
    );
};

export default Rooms
