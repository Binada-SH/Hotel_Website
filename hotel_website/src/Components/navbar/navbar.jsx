import React from 'react'

const navbar = () => {
  return (
    <div className=' flex items-center font-[times]'>
      <div className='w-30 mt-5 ml-15'>
        <img src="src/assets/logo.png" alt="site_logo" />
      </div>
      <div className='mt-5 ml-80'>
        <ul className='flex gap-10'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Rooms</a></li>
          <li><a href="">Dining</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
      </div>
      <div className='flex mt-5 ml-70 w-38 h-8 pt-1 pl-6 outline-1 outline-[#daa954] cursor-pointer'>Book your stay</div>
      
    </div>
  )
}

export default navbar
