import React from 'react'
import { useState } from 'react'

function Accordion({item}) {
    const [isOpen,setIsOpen] = useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)

    }
    return (
    <div className={`${isOpen?'active':''}`} onClick={toggle}>
        <div className={`border w-[673px] h-[50px] bg-[#ECECEC] rounded-[5px] py-3 px-2 flex justify-between mt-4 cursor-pointer ${isOpen ? 'bg-yellow-400' : 'bg-[#ECECEC]'}`}>
                <p className= {`font-urbanist text-[17px] text-[#12372A] font-semibold ${isOpen ? 'text-white' : 'text-[#12372A]'}`}>{item.title}</p>
                <i className={`bi  text-[#12372A] ${isOpen?'bi-chevron-up':'bi-chevron-down'}`}></i>
        </div>
        <div>
            {
            isOpen &&(
                <p className={`font-inter text-[16px] text-[#12372A] mt-4 ml-6 leading-[20px] ${isOpen?'active':''}`}>{item.description}</p>
            )

            }
        </div>
            
        
    </div> 
  )
}

export default Accordion
