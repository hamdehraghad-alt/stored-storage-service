import React from 'react'
import Navbar from '../components/Navbar'
import Navbar1 from '../components/Navbar1'
import Banner from '../components/Banner'
import OurServices from '../components/OurServices'
import Testimonials from '../components/Testimonials'
import Looking from '../components/Looking'

function Services() {
  return (
    <div className='services'>
      <Navbar/>
      <Navbar1/>
      <Banner/>
      <OurServices/>
      <Testimonials/>
      <Looking/>
    </div>
  )
}

export default Services
