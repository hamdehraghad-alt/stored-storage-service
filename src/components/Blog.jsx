import React, { useState,useEffect } from 'react'
import date from '../assets/data.svg'

const Blog = () => {
    const [blogs,setBlogs]=useState([])
    const fetchData= async () =>{
        try{
            const res=await fetch('https://win25-jsf-assignment.azurewebsites.net/api/blogs')
            const data=await res.json()
            const filtered = data.slice(0, 3).map(item => ({
            id: item.id,
            created: item.created,
            title: item.title,
            imageUrl:item.imageUrl
          }));
            console.log(data)
            setBlogs(filtered)
          }
          catch(error){
            console.log('error')
          }
            
        }
        useEffect(()=>{
            fetchData()
        },[])

  return (
    <div className='blog'>
        <div className='blog-3'>
            <div className='blog-1'>
                <h4>Latest Blog and News</h4>
                <h3>Check Out Our Latest Blog<br/>and News Update</h3>
            </div>
            <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui<br/>lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus<br/>eget elit gravida.</p>
        </div>
        <div className='blog-2'>
            <div className='border'>
                <div>
                    {blogs[2]?.imageUrl && (
                        <img src={blogs[2].imageUrl} alt="Blog image"/>
                    )}
                    <img src={date} width="16.11" height="18"/>
                    {blogs[0]?.created &&(
                        <p> {new Date(blogs[0].created).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</p>
                        
                    )}
                    {blogs[2]?.title &&(
                        <h6>{blogs[2].title}</h6>
                    )}
                    <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Aenean a sem magna. Etiam<br/>/ac odio sit amet lorem…</p>
                    <p>read more</p>
                    <i className="bi bi-arrow-right-short"></i>
                </div>
            </div>
            <div className='border-1'>
                <div>
                    {blogs[1]?.imageUrl && (
                        <img src={blogs[1].imageUrl} alt="Blog image"/>
                    )}
                    <img src={date} width="16.11" height="18"/>
                    {blogs[1]?.created &&(
                        <p> {new Date(blogs[1].created).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</p>
                    )}
                    {blogs[1]?.title &&(
                        <h6>{blogs[1].title}</h6>
                    )}
                    <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Aenean a sem magna. Etiam<br/>/ac odio sit amet lorem…</p>
                    <p>read more</p>
                    <i className="bi bi-arrow-right-short"></i>
                </div>

            </div>
            <div className='border-2'>
                <div>
                    {blogs[0]?.imageUrl && (
                        <img src={blogs[0].imageUrl} alt="Blog image"/>
                    )}
                    <img src={date} width="16.11" height="18"/>
                    {blogs[2]?.created &&(
                        <p> {new Date(blogs[2].created).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</p>
                    )}
                    {blogs[0]?.title &&(
                        <h6>{blogs[0].title}</h6>
                    )}
                    <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Aenean a sem magna. Etiam<br/>/ac odio sit amet lorem…</p>
                    <p>read more</p>
                    <i className="bi bi-arrow-right-short"></i>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Blog
