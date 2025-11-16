import React from 'react'
import Logo from '../assets/Logo.svg'
import {Link,NavLink} from 'react-router-dom'
import Book from './Book'

function Navbar1() {
  return (
    <div className="navbar-1">
      <Link className='logo' to="/home">
      <img src={Logo} width="181px" height="59px" alt='logo'></img> 
      </Link>
      <nav>
        <NavLink className='nav-link' to="/home">Home</NavLink>
        <NavLink className='nav-link' to="/about">About</NavLink>
        <NavLink className='nav-link' to="/services">Services</NavLink>
        <NavLink className='nav-link' to="/contactus">Contact Us</NavLink>
      </nav>
      <Book/>
      
    </div>
  )
}

export default Navbar1
