import React from 'react'
import {useLocation} from 'react-router-dom'

function Banner() {
  const location=useLocation();
  const pathnames=location.pathname.split('/').filter((x => x));
  const currentTitle=pathnames[pathnames.length-1]?.replace(/-/g," ")|| "Home";
  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);
  return (
    <div className='banner'>
        <h1>
          {capitalize(currentTitle)}
        </h1>
        <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec<br/>ullamcorper mattis, pulvinar dapibus leo.</p>
      
    </div>
  )
}

export default Banner
