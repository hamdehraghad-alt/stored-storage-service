import React, { useState } from 'react'
import bg from '../assets/bg.svg'
import { useForm } from 'react-hook-form'

function GetInTouch() {
    const [message,setMessage]=useState('')
    const{register,handleSubmit,formState:{errors},reset}=useForm()
    const postContact= async (data)=>{
    try{
        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact',{
        method:'post',
        headers:{'Content-Type':'application/json',
            Accept:'*/*' },
        body:JSON.stringify(data)
    });
    if(!res.ok){
            const error=await res.json()
            console.log(error,'error')
            setMessage(error.message ||'Sorry,We have not received your message, try again')
            return      
    }
    const result =await res.json()
    console.log(result,'success')
    setMessage(result.message||'Thank you for contacting us. We have received your message and will respond to you within 1-2 business days.')
    reset()
           
        
    }
    catch(error){
        console.log(error,'error')
        setMessage('there is problem in network, try again')
    }
} 
  return (
    <div className='h-[824px] flex items-center justify-center gap-7'>
        <div className='flex flex-col'>
            <h4 className='font-urbanist text-[25px] font-bold text-[#F1C30C]'>Get in Touch</h4>
            <h3 className='font-urbanist font-bold text-[52px] text-[#12372A] '>Get Personalized Assistance<br/>-Contact Us</h3>
            <p className='font-inter text-[16px] text-[#12372A]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec<br/>ullamcorper mattis, pulvinar dapibus leo</p>
            <img src={bg} width="664" height="367" alt='bg-img'/>
        </div>
        <div className='border w-[666px] h-[641px] bg-[#FAF8EC] rounded-[10px] px-5 py-[27px]'>
            <form className='flex flex-col gap-2'>
                <label className='font-inter text-[#12372A] text-[16px]' htmlFor="name">Your Name *</label>
                <input id='name' type='text' placeholder='Your name'  autoComplete='name' {...register('name',{required:'the name field is required',pattern: {value: /^[A-Za-z\s]{2,30}$/,message: 'Please enter a valid name (letters only)'}})} className={`border w-[600px] h-[58px] border-[#F1C30C] placeholder-[#F1C30C] font-inter rounded-[5px] px-5 focus:border-[#12372A] ${errors.name? 'border-red-500': 'border-[#F1C30C]'} outline-none`}/>
                <span>{errors.name && errors.name.message}</span>
                <div className='flex gap-4'>
                    <div className='flex flex-col'>
                        <label className='font-inter text-[#12372A] text-[16px]' htmlFor="email">Email *</label>
                        <input id='email' type='email' placeholder='Email' autoComplete='email'{...register('email',{required:'the email field is required',pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,message: 'Please enter a valid email address'}})} className={`border w-[290px] h-[59px] border-[#F1C30C] font-inter placeholder-[#F1C30C] rounded-[5px] px-5 focus:border-[#12372A] ${errors.email? 'border-red-500': 'border-[#F1C30C]'} outline-none`}/>
                        <span>{errors.email && errors.email.message}</span>
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-inter text-[#12372A] text-[16px]' htmlFor="phoneNumber">Telephone</label>
                        <input id='phoneNumber' type='number' placeholder='Telephone' autoComplete='phoneNumber' {...register('phoneNumber',{required:'the phoneNumber field is required', pattern: {value: /^[0-9]{8,15}$/,message: 'Please enter a valid phone number (8-15 digits)'}})} className={`border w-[290px] h-[59px] border-[#F1C30C] font-inter placeholder-[#F1C30C] rounded-[5px] px-5 focus:border-[#12372A] ${errors.phoneNumber? 'border-red-500': 'border-[#F1C30C]'} outline-none`}/>
                        <span>{errors.phoneNumber && errors.phoneNumber.message}</span>
                    </div>
                </div>
                <label className='font-inter text-[#12372A] text-[16px]'htmlFor="subject">Subject *</label>
                <input id='subject' type='text' placeholder='How can we help you' autoComplete='subject' {...register('subject',{required:'the subject field is required'})} className={`border w-[600px] h-[58px] border-[#F1C30C] font-inter placeholder-[#F1C30C] rounded-[5px] px-5 focus:border-[#12372A] ${errors.subject? 'border-red-500': 'border-[#F1C30C]'} outline-none`}/>
                <span>{errors.subject && errors.subject.message}</span>
                <label className='font-inter text-[#12372A] text-[16px]' htmlFor="comment">Comments / Questions *</label>
                <textarea id='comment' placeholder='Comment' autoComplete='comment'{...register('comment',{required:'the comment field is required'})} className={`border w-[600px] h-[150px] border-[#F1C30C] font-inter placeholder-[#F1C30C] rounded-[5px] px-5 align-top focus:border-[#12372A] ${errors.comment? 'border-red-500': 'border-[#F1C30C]'} outline-none`}/>
                <span>{errors.comment && errors.comment.message}</span> 
                <button type='submit' className='w-[156px] h-[46px] bg-yellow-400 border-0 rounded-[5px] font-urbanist text-[15px] font-semibold text-[#12372A] transition-colors duration-150 ease-in-out hover:bg-[#12372A] hover:text-white mt-3'onClick={handleSubmit(postContact)}>Submit</button>
            </form>
            <p className='text-green-900 font-inter text-[15px] pl-5'>{message}</p>
        </div>
    </div>
  )
}

export default GetInTouch

