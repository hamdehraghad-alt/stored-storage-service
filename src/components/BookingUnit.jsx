import React from 'react'
import bg from '../assets/bg.svg'
import { useState } from 'react'

function BookingUnit() {
    const [book,setBook]=useState({name:'',email:'',selectedUnit:'',purpose:'',})
    const [message,setMessage]=useState('')
    const [errors,setErrors]=useState({})
    const handleChange= (e) =>{
        const{name,value}=e.target
        setBook({...book,[name]:value})
        
    }
    const postBook= async (e)=>{
        e.preventDefault()
            
        const newErrors={}
        Object.keys(book).forEach(field => {
            const value=book[field].trim()
            if(value===''){
                newErrors[field]=`the ${field} is required`
            }
            else{
                if (field === 'name') {
                    const nameRegex = /^[A-Za-z\s]{3,}$/
                    if (!nameRegex.test(value)) {
                        newErrors[field] = 'Name must contain only letters and spaces (min 3 characters).'
                    }
                }
                if (field === 'email') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    if (!emailRegex.test(value)) {
                        newErrors[field]= 'Please enter a valid email address.'
                    }
                }
            }
        });
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        } 
        try{
            const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/booking',{
                method:'post',
                headers:{'Content-Type':'application/json',
                    Accept:'*/*' },
                    body:JSON.stringify(book)
                });
                if(!res.ok){
                    const error =await res.json()
                    console.log(error,'error')
                    setMessage('Sorry,We have not received your message, try again')
                    return
                }
                else{
                    const data =await res.json()
                    console.log(data,'success')
                    setMessage('We have received your booking request and will respond to you within 1-2 business days.')
                    setBook({name:'',email:'',selectedUnit:'',purpose:''}) 
                } 
        }    
        catch(error){
            console.log(error,'error')
            setMessage('there is problem in network, try again')
        }
    }
    return (
    <div className='h-[909px] grid grid-cols-2 items-center'>
        <div>
            <h4 className='font-urbanist text-[25px] font-bold text-[#F1C30C]'>Booking Unit</h4>
            <h3 className='font-urbanist font-bold text-[52px] text-[#12372A] '>Book Your Storage Unit Now<br/>& Simplify Your Life!</h3>
            <img src={bg} width="673" height="545" alt='bg-img'/>
        </div>
        <div className='mt-[200px] flex flex-col gap-2' >
            <p className='font-inter text-[16px] text-[#12372A]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui<br/>lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus<br/>eget elit gravida.</p>
            <div className='border w-[666px] h-[546px] bg-[#FAF8EC] rounded-[10px] px-5 py-[27px]'>
                <form className='flex flex-col gap-2'onSubmit={postBook} noValidate >
                    <div className='flex gap-4'>
                        <div className='flex flex-col'>
                            <label className='font-inter text-[#12372A] text-[16px]' htmlFor="name">Your Name *</label>
                            <input id='name' name='name' type='text' placeholder='Your name' value={book.name}  onChange={handleChange} required autoComplete='name' className={`border w-[288px] h-[58px] border-[#F1C30C] placeholder-[#F1C30C] font-inter rounded-[5px] px-5 focus:border-[#12372A] ${errors.name? 'border-red-500': 'border-[#F1C30C]'} outline-none `}/>
                            <span>{errors.name && errors.name}</span>
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-inter text-[#12372A] text-[16px]' htmlFor="email">Email *</label>
                            <input id='email' name='email' type='email' value={book.email} onChange={handleChange} required placeholder='Email' autoComplete='email' className={`border w-[288px] h-[58px] border-[#F1C30C] font-inter placeholder-[#F1C30C] rounded-[5px] px-5 focus:border-[#12372A] ${errors.email? 'border-red-500': 'border-[#F1C30C]'} outline-none`}/>
                            <span>{errors.email && errors.email}</span>
                        </div>
                    </div>
                    <label className='font-inter text-[#12372A] text-[16px]'htmlFor="selectedUnit">Choose Unit*</label>
                    <input id='selectedUnit'name='selectedUnit' type='text' placeholder='Choose Unit' value={book.selectedUnit} onChange={handleChange} autoComplete='selectedUnit'  required className={`border w-[600px] h-[58px] border-[#F1C30C] font-inter placeholder-[#F1C30C] rounded-[5px] px-5 focus:border-[#12372A] ${errors.selectedUnit? 'border-red-500': 'border-[#F1C30C]'} outline-none`}/>
                    <span>{errors.selectedUnit && errors.selectedUnit}</span>
                    <label className='font-inter text-[#12372A] text-[16px]' htmlFor="purpose">Storage purpose *</label>
                    <textarea id='purpose'name='purpose' value={book.purpose} onChange={handleChange} placeholder='Describe your storage purpose so that we can match your request' autoComplete='purpose'required className={`border w-[600px] h-[150px] border-[#F1C30C] font-inter placeholder-[#F1C30C] rounded-[5px] px-5 pt-5 focus:border-[#12372A] ${errors.purpose? 'border-red-500': 'border-[#F1C30C]'} outline-none`}/>
                    <span>{errors.purpose && errors.purpose}</span>
                    <button type='submit' className='w-[156px] h-[46px] bg-yellow-400 border-0 rounded-[5px] font-urbanist text-[15px] font-semibold text-[#12372A] transition-colors duration-150 ease-in-out hover:bg-[#12372A] hover:text-white '>Book Unit</button>
                </form>
                <p className='text-green-900 font-inter text-[15px] pl-5'>{message}</p>   
            </div>
        </div>
      
    </div>
  )
}

export default BookingUnit


