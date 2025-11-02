import React from 'react'
import bg from '../assets/bg.svg'

function OurServices() {
  return (
    <section className='our-services'>
        <div className='our-services-1'>
            <div className='our-services-4'>
                <h4>Our Services</h4>
                <h3>Specialized Storage for<br/> Every Special Item</h3>
            </div>
            <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui<br/>lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus<br/>eget elit gravida.</p>
        </div>
        <div className='our-services-2'>
            <div className='diverse'>
                <h4>Diverse Unit Sizes</h4>
                <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Ut elit tellus, luctus nec<br/>ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className='moving'>
                <h4>Moving Assistance</h4>
                <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Ut elit tellus, luctus nec<br/>ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </div>
        
        <div className='bg-1'>
            <img src={bg} width="519" height="327"/>
        </div>
        <div className='our-services-3'>
            <div className='storage'>
                <h4>Vehicle Storage</h4>
                <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Ut elit tellus, luctus nec<br/>ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className='Security'>
                <h4>Top-Notch Security</h4>
                <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Ut elit tellus, luctus nec<br/>ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </div>
        
      
    </section>
  )
}

export default OurServices
