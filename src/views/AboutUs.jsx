import React from 'react'
import Navbar from '../components/Navbar'
import Navbar1 from '../components/Navbar1'
import Aboutus from '../components/Aboutus'
import Logoipsum from '../components/Logoipsum'
import Banner from '../components/Banner'
import ChooseUs1 from '../components/ChooseUs1'
import Testimonials1 from '../components/Testimonials1'
import OurSubscribe from '../components/OurSubscribe'

function AboutUs() {
  return (
    <div>
      <Navbar/>
      <Navbar1/>
      <Banner/>
      <Aboutus/>
      <Logoipsum/>
      <Testimonials1/>
      <ChooseUs1/>
      <OurSubscribe/>
    </div>
  )
}

export default AboutUs
