import React from 'react'
import Navbar from '../components/Navbar'
import Navbar1 from '../components/Navbar1'
import Hero from '../components/Hero'
import Aboutus from '../components/Aboutus'
import Logoipsum from '../components/Logoipsum'
import OurServices from '../components/OurServices'
import Testimonials from '../components/Testimonials'
import ChooseUs from '../components/ChooseUs'
import Looking from '../components/Looking'
import Blog from '../components/Blog'


function Home() {
  return (
    <div>
      <Navbar/>
      <Navbar1/>
      <Hero/>
      <Aboutus/>
      <Logoipsum/>
      <OurServices/>
      <Testimonials/>
      <ChooseUs/>
      <Looking/>
      <Blog/>
    </div>
  )
}

export default Home
