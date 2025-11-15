import React from 'react'
import icon5 from '../assets/icon-5.svg'
import icon9 from '../assets/icon-9.svg'
import icon7 from '../assets/icon-7.svg'
import icon8 from '../assets/icon-8.svg'
import bg from '../assets/bg.svg'

function ChooseUs1() {
  return (
    <section className='choose-us1'>
            <div className='choose'>
                <h4>Why Choose Us</h4>
                <h3>Choose Us for Exceptional<br/>Storage Solutions</h3>
                <div className='lock'>
                    <img src={icon5} width="83" height="83" alt='icon'/>
                    <div>
                        <h5>Security and Safety</h5>
                        <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br/>luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
                <div className='Money'>
                    <img src={icon9} width="83" height="83" alt='icon'/>
                    <div>
                        <h5>Flexible and Affordable</h5>
                        <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br/>luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
                <div className='clean'>
                    <img src={icon7} width="83" height="83" alt='icon'/>
                    <div>
                        <h5>Clean and Well-Maintained Facilities</h5>
                        <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br/>luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
                <div className='clock'>
                    <img src={icon8} width="83" height="83" alt='icon'/>
                    <div>
                        <h5>24/7 and Convenient Access</h5>
                        <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br/>luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
    
    
            </div>
            <div className='choose-1'>
                <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui<br/>lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus<br/>eget elit gravida.</p>
                <img src={bg} width="659" height="424" alt='icon'/>
            </div>
          
        </section>
  )
}

export default ChooseUs1

