import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
        <div>
            <h2>Product</h2>
        </div>
        <div>
            <ul className='list'>
               <li>Home</li>
               <li>About</li>
               <li>Services</li>
               <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header