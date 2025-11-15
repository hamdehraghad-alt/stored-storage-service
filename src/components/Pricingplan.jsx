import React from 'react'
import dollar from '../assets/dollar.svg';
import Rent from './Rent.jsx'

function PricingPlan() {
  return (
    <section className='bg-white h-[884px] flex flex-col items-start ml-[100px]'>
      <h4 className='text-yellow-400 font-urbanist text-[25px] font-bold mt-[90px]'>Pricing Plan</h4>
      <h3 className='text-green-900 text-[52px] font-urbanist font-bold'>Find the Perfect Plan for<br/>Your Storage Needs</h3>
      <div className='grid grid-cols-4 gap-7'>
        <div className='group border w-[321px] h-[519px] rounded-[10px] text-green-900 bg-[#F1FFEA] place-items-center px-10 py-10 hover:bg-[#12372A]'>
            <h5 className='font-urbanist text-[24px] font-semibold group-hover:text-white'>Small Unit</h5>
            <div className='flex gap-5 '>
                <img className='mb-7' src={dollar} width="13" height="21" alt='dollar'/>
                <h3 className='font-urbanist text-[52px] font-bold text-yellow-400'>50</h3>
                <h6 className='font-urbanist text-[20px] font-bold mt-9 group-hover:text-white'>/month</h6>
            </div>
            <p className='font-inter text-[16px] text-center group-hover:text-white'>Phasellus sollicitudin sapien eu<br/>massa accumsan, quis semper<br/>odio suscipit.</p>
            <hr className='border-t-2 w-[248px] border-green-900 my-5 group-hover:border-white'/>
            <ul>
                <li className='flex gap-2'>
                    <i className='bi bi-check-circle-fill group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Nam nec ipsum in dolor</span>
                </li>
                <li className='flex gap-2'>
                    <i className='bi bi-check-circle-fill group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Fusce nec ligula ut arcu</span> 
                </li>
                <li className='flex gap-2'>
                    <i className='bi bi-check-circle-fill group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Aliquam pulvinar arcu in</span> 
                </li>
                <li className='flex gap-2'>
                    <i className='bi bi-check-circle-fill group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Duis gravida enim porta</span> 
                </li>
                <li className='flex gap-2'>
                    <i className='bi bi-check-circle-fill group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Etiam eget libero non ligula</span> 
                </li>
            </ul>
            <Rent/>
        </div>
        <div className='group border w-[321px] h-[519px] rounded-[10px]  bg-[#F1FFEA] text-green-900 place-items-center px-10 py-10  hover:bg-[#12372A]'>
            <h5 className='font-urbanist text-[24px] font-semibold group-hover:text-white'>Medium Unit</h5>
            <div className='flex gap-5 '>
                <img className='mb-7' src={dollar} width="13" height="21" alt='dollar'/>
                <h3 className='font-urbanist text-[52px] font-bold text-yellow-400'>100</h3>
                <h6 className='font-urbanist text-[20px] font-bold mt-9 group-hover:text-white'>/month</h6>
            </div>
            <p className='font-inter text-[16px] text-center group-hover:text-white'>Phasellus sollicitudin sapien eu<br/>massa accumsan, quis semper<br/>odio suscipit.</p>
            <hr className='border-t-2 border-green-900 w-[248px] my-5 group-hover:border-white'/>
            <ul>
                <li className='flex gap-2'>
                     <i className='bi bi-check-circle-fill group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Nam nec ipsum in dolor</span>
                </li>
                <li className='flex gap-2'>
                    <i className='bi bi-check-circle-fill group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Fusce nec ligula ut arcu</span> 
                </li>
                <li className='flex gap-2'>
                    <i className='bi bi-check-circle-fill group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Aliquam pulvinar arcu in</span> 
                </li>
                <li className='flex gap-2'>
                    <i className='bi bi-check-circle-fill group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Duis gravida enim porta</span> 
                </li>
                <li className='flex gap-2'>
                     <i className='bi bi-check-circle-fill group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Etiam eget libero non ligula</span> 
                </li>
            </ul>
            <Rent/>
           
        </div>
        <div className='group border w-[321px] h-[519px] rounded-[10px] bg-[#F1FFEA] text-green-900 place-items-center px-10 py-10  hover:bg-[#12372A]'>
            <h5 className='font-urbanist text-[24px] font-semibold group-hover:text-white'>Large Unit</h5>
            <div className='flex gap-5 '>
                <img className='mb-7' src={dollar} width="13" height="21" alt='dollar'/>
                <h3 className='font-urbanist text-[52px] font-bold text-yellow-400'>150</h3>
                <h6 className='font-urbanist text-[20px] font-bold mt-9 group-hover:text-white'>/month</h6>
            </div>
            <p className='font-inter text-[16px] text-center group-hover:text-white'>Phasellus sollicitudin sapien eu<br/>massa accumsan, quis semper<br/>odio suscipit.</p>
            <hr className='border-t-2 border-green-900 w-[248px] my-5 group-hover:border-white'/>
            <ul>
                <li className='flex gap-2'>
                     <i className='bi bi-check-circle-fill group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Nam nec ipsum in dolor</span>
                </li>
                <li className='flex gap-2'>
                    <i className='bi bi-check-circle-fill group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Fusce nec ligula ut arcu</span> 
                </li>
                <li className='flex gap-2'>
                    <i className='bi bi-check-circle-fill group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Aliquam pulvinar arcu in</span> 
                </li>
                <li className='flex gap-2'>
                    <i className='bi bi-check-circle-fill group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Duis gravida enim porta</span> 
                </li>
                <li className='flex gap-2'>
                    <i className='bi bi-check-circle-fill group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Etiam eget libero non ligula</span> 
                </li>
            </ul>
            <Rent/>
        </div>
        <div className='group border w-[321px] h-[519px] rounded-[10px] text-green-900 bg-[#F1FFEA] place-items-center px-10 py-10 hover:bg-[#12372A]'>
            <h5 className='font-urbanist text-[24px] font-semibold group-hover:text-white'>Executive Unit</h5>
            <div className='flex gap-5 '>
                <img className='mb-7' src={dollar} width="13" height="21" alt='dollar'/>
                <h3 className='font-urbanist text-[52px] font-bold text-yellow-400'>200</h3>
                <h6 className='font-urbanist text-[20px] font-bold mt-9 group-hover:text-white'>/month</h6>
            </div>
            <p className='font-inter text-[16px] text-center group-hover:text-white'>Phasellus sollicitudin sapien eu<br/>massa accumsan, quis semper<br/>odio suscipit.</p>
            <hr className='border-t-2 border-green-900 w-[248px] my-5 group-hover:border-white'/>
            <ul>
                <li className='flex gap-2'>
                     <i className='bi bi-check-circle-fill group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Nam nec ipsum in dolor</span>
                </li>
                <li className='flex gap-2'>
                   <i className='bi bi-check-circle-fill group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Fusce nec ligula ut arcu</span> 
                </li>
                <li className='flex gap-2'>
                   <i className='bi bi-check-circle-fill group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Aliquam pulvinar arcu in</span> 
                </li>
                <li className='flex gap-2'>
                   <i className='bi bi-check-circle-fill group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Duis gravida enim porta</span> 
                </li>
                <li className='flex gap-2'>
                   <i className='bi bi-check-circle-fill fill-green-900 group-hover:text-yellow-400'></i>
                    <span className='font-inter text-[16px] group-hover:text-white'>Etiam eget libero non ligula</span> 
                </li>
            </ul>
            <Rent/>
        </div>
      </div>
    </section>
  )
}

export default PricingPlan



