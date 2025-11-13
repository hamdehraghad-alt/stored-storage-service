import React from 'react'
import icon1 from '../assets/icon-1.svg'
import Humble from '../assets/Humble.svg'
import Facebook from '../assets/Facebook.svg'
import Instagram from '../assets/Instagram.svg'
import Youtube from '../assets/Youtube.svg'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='domain'>
            <i className="bi bi-telephone-fill"></i>
            <p>+46 8 123 122 44</p>
            <img src={icon1} width="20px" height="19.36px" alt='icon'></img>
            <p>contact@domain.com</p>
        </div>
        <div className='logos'>
          <img src={Facebook} width="30px" height="30px" alt='facebook'></img>
          <img src={Humble} width="30px" height="30px" alt='humble'></img>
          <img src={Instagram} width="30px" height="30px" alt='instagram'></img>
          <img src={Youtube} width="30px" height="30px" alt='youtube'></img>
          
        </div>
    </div>
  )
}

export default Navbar
