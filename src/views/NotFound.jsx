import React from 'react'
import Navbar from '../components/Navbar'
import Navbar1 from '../components/Navbar1'
import OurSubscribe from '../components/OurSubscribe'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <Navbar/>
        <Navbar1/>
        <div className='bg-[#12372A] h-[1013px] flex flex-col justify-center items-center'>
            <h5 className='font-urbanist text-[24px] text-white font-semibold'>Oops!</h5>
            <h1 className='font-inter text-[80px] font-bold text-[#F1C30C]'>Page Not Found</h1>
            <p className='font-inter text-[16px] text-white text-center'>Sorry, the page you are looking for does not exist. It may have been moved, removed<br/>altogether or is temporarily unavailable.</p>
            <Link to="/home">
            <button className='w-[154px] h-[47px] border-none rounded-[5px] bg-[#F1C30C] text-[#12372A] font-urbanist font-semibold text-[15px] mt-5 cursor-pointer transition-colors duration-150 ease-in-out hover:bg-white hover:text-[#12372A]'>Back To home</button>
            </Link>
        </div>
        <OurSubscribe/>
      
    </div>
  )
}

export default NotFound
