import React from 'react'
import Discover1 from './Discover1.jsx';
import Rectangle from '../assets/Rectangle 2.svg';

function Hero() {
    
  return (
    <div className='hero'>
        <div className='hero-1'>
            <h4>Welcome to StorAid</h4>
            <h1>Space Simplified,<br/>Storage Perfected</h1>
            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit<br/> amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi,<br/> at euismod sem ipsum ac dolor.</p>
            <Discover1/>
        </div>
        <div className='rectangle'>
            <img src={Rectangle} width="462px" height="534px" alt='rec-img'></img>
        </div>
        
      
    </div>
  )
}

export default Hero
