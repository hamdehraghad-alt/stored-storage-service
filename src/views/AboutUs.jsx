import React from 'react'
import Navbar from '../components/Navbar'
import Navbar1 from '../components/Navbar1'
import Aboutus from '../components/Aboutus'
import Logoipsum from '../components/Logoipsum'
import Banner from '../components/Banner'
import ChooseUs from '../components/ChooseUs'
import Testimonials from '../components/Testimonials'

function AboutUs() {
  return (
    <div>
      <Navbar/>
      <Navbar1/>
      <Banner/>
      <Aboutus/>
      <Logoipsum/>
      <Testimonials/>
      <ChooseUs/>
    </div>
  )
}

export default AboutUs
