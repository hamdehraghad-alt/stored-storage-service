import React from 'react'
import icon6 from '../assets/icon-6.svg'

function Footer() {
  return (
    <div className='footer'>
      <p className='paragraph-4'>© 2025 StorAid, All rights reserved.</p>
      <div className='footer-1'>
        <div className='terms'>
            <img src={icon6} width="15" height="15"/>
            <p className='paragraph-4'>Terms & Conditions</p>
        </div>
        <div className='privacy'>
            <img src={icon6} width="15" height="15"/>
            <p className='paragraph-4'> Privacy Policy</p>
        </div>
        </div>

    </div>
  )
}

export default Footer
