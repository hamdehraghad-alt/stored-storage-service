import React from 'react'
import Logoipsum1 from '../assets/Logoipsum-1.svg';
import Logoipsum2 from '../assets/Logoipsum-2.svg';
import Logoipsum3 from '../assets/Logoipsum-3.svg';
import Logoipsum4 from '../assets/Logoipsum-4.svg';
import Logoipsum5 from '../assets/Logoipsum-5.svg';

function Logoipsum() {
  return (
    <div className='logoipsum'>
      <img src={Logoipsum1} width="220" height="71" alt='logoipsum'/>
      <img src={Logoipsum2} width="220" height="71" alt='logoipsum'/>
      <img src={Logoipsum3} width="220" height="71" alt='logoipsum'/>
      <img src={Logoipsum4} width="220" height="71" alt='logoipsum'/>
      <img src={Logoipsum5} width="220" height="71" alt='logoipsum'/>
    </div>
  )
}

export default Logoipsum
