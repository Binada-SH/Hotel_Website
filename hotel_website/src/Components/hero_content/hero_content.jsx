import React from 'react'

const hero_content = () => {
  return (
    <div>
        <h1 className='text-[70px] text-[#ffffff] font-[times] text-center mt-60'>The Luma - Beach Resort</h1>
        <div className='text-[20px] text-[#000000] font-[lato] text-center m-auto w-300 h-20 mt-30 bg-[#d0d0d0] rounded-lg flex flex-wrap items-center justify-center'>
            <form action="" className='flex flex-wrap items-center justify-center'>
                <label>Check In :</label>
                <input type="date" className='pl-8' />
                <label className='ml-8'>Check Out :</label>
                <input type="date" className='pl-8' />
                <label className='ml-8'>Adults :</label>
                <input type="number" className='w-30 h-6 outline-1 outline-[#daa954] ml-5 rounded-sm pl-8' placeholder='Guests' />
                <label className='ml-8'>Rooms :</label>
                <input type="number" className='w-30 h-6 outline-1 outline-[#daa954] ml-5 rounded-sm pl-8' placeholder='Rooms'/>
            </form>
        </div>
        <div className='w-30 h-8 bg-[#daa954] rounded-md text-[#ffffff] font-[times] text-center flex flex-wrap items-center justify-center m-auto mt-8 scale-135 cursor-pointer'>
            <button className='cursor-pointer'>Reserve Stay</button>
        </div>
      
    </div>
  )
}

export default hero_content
