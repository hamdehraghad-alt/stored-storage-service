import React from 'react'
import Navbar from '../components/Navbar'
import Navbar1 from '../components/Navbar1'
import Banner from '../components/Banner'
import OurSubscribe from '../components/OurSubscribe'
import Fqs from '../components/Fqs'
import FindUs from '../components/FindUs'
import GetInTouch from '../components/GetInTouch'

function ContactUs() {
  return (
    <div className='contact-us'>
      <Navbar/>
      <Navbar1/>
      <Banner/>
      <GetInTouch/>
      <FindUs/>
      <Fqs/>
      <OurSubscribe/>
    </div>
  )
}

export default ContactUs
