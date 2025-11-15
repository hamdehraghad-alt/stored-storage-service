import React from 'react'
import bg from '../assets/bg.svg';
import Numbers from './number.jsx';
import Discover from './Discover.jsx';
import icon from '../assets/icon-2.svg';

function Aboutus() {
  return (
    <div className='about-us'>
      <div className='about'>
        <div className='bg'>
          <img src={bg} width="673px" height="441px" alt='bg'></img>
        </div>
        <Numbers/>
      </div>
      <div className='about-1'>
        <h4>About Us</h4>
        <h3>Providing a Safe Space for<br/> Your Treasured Items</h3>
        <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui<br/> lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue.<br/> Phasellus eget elit gravida.</p>
        <div className='vision-1'>
          <div className='vision'>
            <h5>Vision</h5>
            <p className='paragraph-4'>Sed ut perspiciatis unde omnis iste<br/> natus error sit voluptatem accusan<br/> tium doloremque laudantium.</p>
          </div>
          <div className='Mission'>
            <h5>Mission</h5>
            <p className='paragraph-4'>Sed ut perspiciatis unde omnis iste<br/> natus error sit voluptatem accusan<br/> tium doloremque laudantium.</p>
          </div>
        </div>
        <div className='icon'>
          <Discover/>
          <div className='icon-1'>
            <img src={icon} width="60" height="60" alt='bg'/>
          </div>
          <div className='information'>
            <h5>More Information</h5>
            <h6>+46 8 123 122 44</h6>
          </div>
        </div>

      </div>
      


    </div>
  )
}

export default Aboutus
