import React from 'react'
import Navbar from '../components/Navbar'
import Navbar1 from '../components/Navbar1'
import Banner from '../components/Banner'
import ChooseUs from '../components/ChooseUs'
import Looking from '../components/Looking'

function Booking() {
  return (
    <div className='booking'>
        <Navbar/>
        <Navbar1/>
        <Banner/>
        <ChooseUs/>
        <Looking/>
      
    </div>
  )
}

export default Booking
