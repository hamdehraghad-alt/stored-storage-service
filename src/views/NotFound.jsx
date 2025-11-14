import React from 'react'
import Navbar from './Navbar'
import Navbar1 from './Navbar1'
import OurSubscribe from './OurSubscribe'

function NotFound() {
  return (
    <div>
        <Navbar/>
        <Navbar1/>
        <div className='bg-green-900 h-[1013px] flex flex-col justify-center'>
            <h5>Oops!</h5>
            <h1>Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist. It may have been moved, removed<br/>altogether or is temporarily unavailable.</p>
            <button>Back To home</button>
        </div>
        <OurSubscribe/>
      
    </div>
  )
}

export default NotFound

