import React, { useEffect, useState } from 'react'
import Accordion from './Accordion'

function Fqs() {
    const [fqs,setFqs] = useState([])

    const fetchData=async ()=>{
        try{
            const res=await fetch('https://win25-jsf-assignment.azurewebsites.net/api/faqs')
            const data=await res.json()
            const filteredData = data.filter(item => item.id >= 1)
            console.log(data)
            setFqs(filteredData)
        }
        catch(error){
            console.log('error');
            
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='h-[617px] flex gap-[80px] justify-center mt-[50px]'>
        <div>
            <h4 className='font-urbanist font-bold text-[25px] text-[#F1C30C]'>FAQs</h4>
            <h3 className='font-urbanist font-bold text-[52px] text-[#12372A]'>Frequently Ask Questions</h3>
            <p className='font-inter text-[16px] text-[#12372A]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec<br/>ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div>   
                {
                fqs.map(item => (
                <Accordion key={item.id} item={item}/> 
            ))}
        </div>
    </div>
    
      
   
  )
}

export default Fqs


