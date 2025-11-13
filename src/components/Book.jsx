import React from 'react'
import { Link} from 'react-router-dom';
import Booking from '../views/Booking';


function Book() {
  const handleClick=()=>{
    console.log('clicked')
    }
  return (
    <div>
      <Link to="/Booking">
      <button className="submit" onClick={handleClick}>Book Now</button>
      </Link>
    </div>
  )
}

export default Book
