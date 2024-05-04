import React from 'react'
import "./Hero.css"





const Hero = ({title , img , price}) => {
  
  return (
      
    <div className='hero'>
        
          <div className='box'>
          <h2 style={{margin :"3px"}}>{title}</h2>
          <div>
             <img src = {img} />
          </div>
          <p style={{padding: " 0 0 10px 0"}}>Price :  ₹ {price}</p>
 
          </div>
    
    </div>

   
  )
}

export default Hero