import React from 'react'

const HeroContent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white">
      <h1 className='text-[70px] font-[times] text-center mt-20'>The Luma - Beach Resort</h1>

      {/* Form container */}
      <div className='mt-10 bg-white/20 backdrop-blur-md rounded-xl p-6 w-[90%] max-w-5xl shadow-lg'>
        <form className='grid grid-cols-1 md:grid-cols-4 gap-4 items-center'>
          <div className='flex flex-col'>
            <label className='mb-1 font-semibold'>Check In</label>
            <input type="date" className='p-2 rounded-md outline-none bg-white/80 text-gray-500' />
          </div>

          <div className='flex flex-col'>
            <label className='mb-1 font-semibold'>Check Out</label>
            <input type="date" className='p-2 rounded-md outline-none bg-white/80 text-gray-500' />
          </div>

          <div className='flex flex-col'>
            <label className='mb-1 font-semibold'>Adults</label>
            <input type="number" className='p-2 rounded-md outline-none bg-white/80 text-gray-500' placeholder='Guests' />
          </div>

          <div className='flex flex-col'>
            <label className='mb-1 font-semibold'>Rooms</label>
            <input type="number" className='p-2 rounded-md outline-none bg-white/80 text-gray-500' placeholder='Rooms' />
          </div>
        </form>

        {/* Button */}
        <div className='mt-6 flex justify-center'>
          <button className='bg-[#daa954] text-white px-6 py-2.5 rounded-md text-lg font-[lato] hover:bg-[#c99742] transition duration-300 cursor-pointer hover:text-[#000000] transform'>
            Reserve Stay
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroContent
