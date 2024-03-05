import React from 'react'
import "./Hero.css"
import img from "../Assets/img.png"




const Hero = () => {
    
  return (
  
    <div className='hero'>
        <div className='box'>
            <img src = {img} />
        </div>
        <div className='box' > <img src = {img} /></div>
        <div  className='box'> <img src = {img} /></div>
        <div  className='box'> <img src = {img} /></div>
        <div  className='box'> <img src = {img} /></div>
      

        
    </div>
    
   
  )
}

export default Hero