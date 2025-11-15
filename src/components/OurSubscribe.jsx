import React from 'react'
import { useState } from 'react'

function OurSubscribe() {
    const [post,setPost]=useState({email:''})
    const [message,setMessage]=useState('')
    const[errors,setErrors]=useState({})
    const handleChange= (e) =>{
        const{name,value}=e.target
        setPost({...post,[name]:value})
        let errorMsg = ''
        if (value.trim() === '') {
            errorMsg = 'The email field is required'
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(value)) {
                errorMsg = 'Please enter a valid email address'
            }
        }
        setErrors({ ...errors, [name]: errorMsg })
    }

    
    const postadd= async (e)=>{
        e.preventDefault()

        const newErrors={}
        const value=post.email.trim()
        if(value===''){
            newErrors.email=`the email field is required`
        }
        else{
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(value)) {
                newErrors.email= 'Please enter a valid email address.'
            }
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
            return;
        }
        try{
            const res= await fetch('https://win25-jsf-assignment.azurewebsites.net/api/subscribe',{
            method:'post',
            headers:{'Content-Type':'application/json',
                Accept:'*/*' 
            },
            body:JSON.stringify(post)})

            if(!res.ok){
            const error =await res.json()
            console.log(error,'error')
            setMessage('email was failed registered to the newsletter list, try again')
            return
        }
        const data= await res.json()
        console.log(data,'success')
        setMessage('email was successfully registered to the newsletter list.')
        setPost({email:''})
        setErrors({})
    }
        catch(error){
            console.log(error,'error')
            setMessage('there is problem in network, try again')
        }

    }


    return (
    <div className='h-[163px] flex bg-[#FAF8EC] place-items-center px-20 justify-between'>
        <div>
            <h3 className='font-urbanist text-[#12372A] text-[52px] font-bold'>Subscribe Our Newsletter</h3>
            <p className='font-inter text-[16px] text-[#12372A]'>Subscribe to our newsletter to receive early discount offers, updates and info</p>
        </div>
        <form className='flex gap-5'onSubmit={postadd} noValidate>
            <div className='flex flex-col'>
                <input type='email' id='email' name='email' value={post.email} onChange={handleChange} placeholder='Enter your email *' autoComplete='email' required className="w-[540px] h-[60.75px] rounded-[5px] border-2 border-yellow-400 placeholder-yellow-400 px-10 focus:border-[#12372A] valid:border-yellow-400 invalid:border-red-500 outline-none" />
                <span>{errors.email && errors.email}</span>
                <p className='text-green-900 font-inter text-[15px] pl-5 mt-2'>{message}</p>
            </div>
            <div className='flex flex-col'>
                <button type='submit' className='w-[102px] h-[60.75px] bg-yellow-400 border-0 rounded-[5px] font-urbanist text-[15px] font-semibold text-[#12372A] transition-colors duration-150 ease-in-out hover:bg-[#12372A] hover:text-white' >Submit</button>
            </div>
        </form>
       
    </div>
  )
}

export default OurSubscribe
