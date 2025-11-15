import React from 'react'
import Navbar from '../components/Navbar'
import Navbar1 from '../components/Navbar1'
import Banner from '../components/Banner'
import ChooseUs from '../components/ChooseUs'
import Looking from '../components/Looking'
import OurSubscribe from '../components/OurSubscribe'
import Fqs from '../components/Fqs'
import BookingUnit from '../components/BookingUnit'


function Booking() {
  return (
    <div className='booking'>
        <Navbar/>
        <Navbar1/>
        <Banner/>
        <BookingUnit/>
        <ChooseUs/>
        <Looking/>
        <Fqs/>
        <OurSubscribe/> 
    </div>
  )
}

export default Booking
