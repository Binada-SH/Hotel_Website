import React from 'react'
import Navbar from './Components/navbar/navbar'
import Hero from './Components/hero/hero'
import HeroContent from './Components/hero_content/hero_content'
import Rooms from './Components/rooms/rooms'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeroContent/>
      <Rooms/>
    </div>
  )
}

export default App