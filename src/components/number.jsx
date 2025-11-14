import React from 'react'
import Rectangle1 from '../assets/Rectangle1.svg';

function Numbers() {
    return(
    <div className='Rectangle-1'>
        <img src={Rectangle1} width="615" height="149" alt='rec-img'/>
        <h2 className='experience'>12+</h2>
        <p className='paragraph-1'>Years of Experience</p>
        <h2 className='clients'>150K+</h2>
        <p className='paragraph-2'>Satisfied Clients</p>
        <h2 className='house'>35+</h2>
        <p className='paragraph-3'>Warehouse</p>
    </div>
    )
}

export default Numbers
