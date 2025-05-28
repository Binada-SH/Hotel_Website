import React from 'react'
import Navbar from './Components/navbar/navbar'
import Hero from './Components/hero/hero'
import HeroContent from './Components/hero_content/hero_content'
import Rooms from './Components/rooms/rooms'
import Offers from './Components/offers/offers'
const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <HeroContent/>
      <Rooms/>
      <Offers/>
    </div>
  )
}

export default App