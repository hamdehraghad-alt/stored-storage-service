import React from 'react'
import Navbar from '../components/Navbar'
import Navbar1 from '../components/Navbar1'
import Banner from '../components/Banner'
import OurServices from '../components/OurServices'
import Testimonials1 from '../components/Testimonials1'
import Looking from '../components/Looking'
import OurSubscribe from '../components/OurSubscribe'
import Fqs from '../components/Fqs'


function Services() {
  return (
    <div className='services'>
      <Navbar/>
      <Navbar1/>
      <Banner/>
      <OurServices/>
      <Testimonials1/>
      <Fqs/>
      <Looking/>
      <OurSubscribe/>
    </div>
  )
}

export default Services
