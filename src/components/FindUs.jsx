import React from 'react'
import rectangle3 from '../assets/rectangle3.svg'
import icon from '../assets/icon-2.svg'
import bg from '../assets/bg-3.svg'
import email from '../assets/email.svg'
import location from '../assets/location.svg'
import facebook from '../assets/facebook.svg'
import Instagram from '../assets/Instagram.svg'
import Humble from '../assets/Humble.svg'
import Youtube from '../assets/Youtube.svg'

function FindUs() {
  return (
    <div className='h-[601px] bg-[#12372A] flex justify-center mt-5'>
        <img className="self-end"src={rectangle3} width="485.56" height="506" alt='rec-img'/>
        <div className='border w-[664px] h-[599px] bg-[rgba(244,251,240,0.56)] px-10 py-5 flex flex-col gap-4'>
            <h3 className='font-urbanist font-bold text-[52px] text-[#12372A]'>Find Us On:</h3>
            <p className='font-inter text-[16px] text-[#12372A]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br/>luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className='flex gap-4'>
                <img src={icon} width="60px" height="60px" alt="bg-img"/>
                <div>
                    <h5 className='font-urbanist font-semibold text-[24px] text-[#12372A]'>Call Center</h5>
                    <p className='font-urbanist font-semibold text-[17px] text[#12372A]'>+46 8 123 122 44</p>
                </div>
            </div>
            <div className='flex gap-4'>
                <div className='inline-block relative'>
                    <img className="bg-3"src={bg} width="60px" height="60px" alt="bg-img"/>
                    <img className="email"src={email} width="32px" height="21px" alt="email-img"/> 
                </div>
                <div>
                    <h5 className='font-urbanist font-semibold text-[24px] text-[#12372A]'>Email Address</h5>
                    <p className='font-urbanist font-semibold text-[17px] text[#12372A]'>contact@domain.com</p>
                </div>
            </div>
             <div className='flex gap-4'>
                <div className='inline-block relative'>
                    <img className="bg-3"src={bg} width="60px" height="60px" alt="bg-img"/>
                    <img className="location"src={location} width="32px" height="21px" alt="location-img"/> 
                </div>
                <div>
                    <h5 className='font-urbanist font-semibold text-[24px] text-[#12372A]'>Location</h5>
                    <p className='font-urbanist font-semibold text-[17px] text[#12372A]'>Klarabergsviadukten 90, Stockholm</p>
                </div>
                
            </div>
            <div className='flex gap-3'>
                    <h5 className='font-urbanist font-semibold text-[24px] text-[#12372A]'>Our Social Media</h5>
                    <hr className='w-[175px] border-2 border-[#12372A] mt-5'/>
                    <img src={facebook} width="30" height="30" alt="facebook"/>
                    <img src={Humble} width="30" height="30" alt="humble"/>
                    <img src={Instagram} width="30" height="30" alt="instagram"/>
                    <img src={Youtube} width="30" height="30" alt="Youtube"/>
                </div>



        </div>
      
    </div>
  )
}

export default FindUs

