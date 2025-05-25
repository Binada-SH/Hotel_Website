import React from 'react'

const navbar = () => {
  return (
    <div className=' flex items-center font-[times] z-10 text-[#ffffff] text-[18px] fixed'>
      <div className='w-30 mt-5 ml-15'>
        <img className='cursor-pointer' src="src/assets/logo.png" alt="site_logo"/>
      </div>
      <div className='mt-5 ml-80'>
        <ul className='flex gap-10'>
          <li><a href="" className='hover:text-[#daa954] transition-colors'>Home</a></li>
          <li><a href="" className='hover:text-[#daa954] transition-colors'>About</a></li>
          <li><a href="" className='hover:text-[#daa954] transition-colors'>Rooms</a></li>
          <li><a href="" className='hover:text-[#daa954] transition-colors'>Dining</a></li>
          <li><a href="" className='hover:text-[#daa954] transition-colors'>Contact Us</a></li>
        </ul>
      </div>
      <div className='flex mt-5 ml-70 w-38 h-10 pt-1.5 pl-5 outline-1 outline-[#daa954] cursor-pointer hover:bg-[#daa954] transition-colors'>Book your stay</div>
      
    </div>
  )
}

export default navbar
