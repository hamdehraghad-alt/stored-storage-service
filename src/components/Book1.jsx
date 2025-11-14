import React, { useState } from 'react'
import { Link} from 'react-router-dom';
import Booking from '../views/Booking';


function Book1() {
    const handleClick=()=>{
        console.log('clicked')

    }
  return (
    <div>
       <Link to="/Booking">
       <button className="submit1" onClick={handleClick}>Book Now</button>
       </Link>
    </div>
  )
}

export default Book1
