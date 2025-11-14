import React,{useState,useEffect} from 'react'
import bg1 from '../assets/bg-1.svg'
import bg2 from '../assets/bg-2.svg'
import stars from '../assets/stars.svg'
import comma from '../assets/comma.svg'
const Testimonials =() => {
    const [testimonials,setTestimonials]=useState([])

    const fetchData= async () =>{
      try{
        const res=await fetch('https://win25-jsf-assignment.azurewebsites.net/api/testimonials')
        const data=await res.json()
        const filtered = data.slice(0, 3).map(item => ({
        id: item.id,
        avatarUrl: item.avatarUrl,
        rating: item.rating
      }));
        console.log(data)
        setTestimonials(filtered)
      }
      catch(error){
        console.log('error')
      }
        
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
      <section className='testimonials'>
        <div className='content'></div>
        <div className='testimonials-1'>
          <h4>Testimonials</h4>
          <h3>See What Our Client Have to Say</h3>
          <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit<br/>nisi non sodales augue. Phasellus eget elit gravida.</p>
        </div>
        <div className='testimonials-2'>
            <div className='customer-1'>
              <div className='bg-2'>
                <img src={bg2} width="437" height="295" alt='bg2'/>
              </div>
              <div className='customer'>
                <div className='stars'>
                  {testimonials[2]?.rating && Array.from({ length: testimonials[2].rating }).map((_, i) => (
                    <img key={i} src={stars} width="19.36" height="19" alt="star"/>
                  ))}
                </div>
                <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur adipis<br/>cing elit. Ut libero lectus, porta nec turpis sit<br/>amet, lobortis fringilla ante.</p>
                <div className='avatar'>
                  {testimonials[1]?.avatarUrl && (
                    <img src={testimonials[1].avatarUrl} alt="Client Avatar"/>
                    )}
                    <div className='avatar-1'>
                      <h6>Aiden Harvey</h6>
                      <p className='paragraph-4'>Customer</p>
                    </div>
                    <div className='comma'>
                      <img src={comma} width="52.52" height="37.33" alt='bg2'/>
                    </div>
                </div>
              </div>
            </div>
            <div className='customer-2'>
              <div className='bg-2'>
                <img src={bg2} width="437" height="295" alt='bg2'/>
              </div>
              <div className='customer'>
                <div className='stars'>
                  {testimonials[1]?.rating && Array.from({ length: testimonials[1].rating }).map((_, i) => (
                    <img key={i} src={stars} width="19.36" height="19" alt="star"/>
                  ))}
                </div>
                <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur adipis<br/>cing elit. Ut libero lectus, porta nec turpis sit<br/>amet, lobortis fringilla ante.</p>
                <div className='avatar'>
                  {testimonials[2]?.avatarUrl &&(
                    <img src={testimonials[2].avatarUrl} alt='Client Avatar'/>
                  )}
                  <div className='avatar-1'>
                    <h6>Carrisa Jocelyn</h6>
                    <p className='paragraph-4'>Customer</p>
                  </div>
                  <div className='comma'>
                    <img src={comma} width="52.52" height="37.33" alt='bg2'/>
                  </div>
                </div>
              </div>
            </div>
            <div className='customer-3'>
              <div className='bg-2'>
                <img src={bg2} width="437" height="295" alt='bg2'/>
              </div>
              <div className='customer'>
                <div className='stars'>
                  {testimonials[0]?.rating && Array.from({length:testimonials[0].rating}).map((_,i)=>(
                    <img key={i} src={stars} width="19.36" height="19" alt='star'/>
                  ))}
                </div>
                <p className='paragraph-4'>Lorem ipsum dolor sit amet, consectetur adipis<br/>cing elit. Ut libero lectus, porta nec turpis sit<br/>amet, lobortis fringilla ante.</p>
                <div className='avatar'>
                  {testimonials[0]?.avatarUrl &&(
                    <img src={testimonials[0].avatarUrl} alt='Client Avatar'/>
                  )}
                  <div className='avatar-1'>
                    <h6>Celvin Gabriel</h6>
                    <p className='paragraph-4'>Customer</p>
                  </div>
                  <div className='comma'>
                    <img src={comma} width="52.52" height="37.33" alt='bg2'/>
                  </div>
                </div>
                
              </div>
            </div>
          
        </div>
      </section>
    )
}

export default Testimonials





