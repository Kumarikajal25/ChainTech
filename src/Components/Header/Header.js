import React from 'react'
import image from "../../assest/logo.png"
import "./style.scss"
const Header = () => {
  return (
    <header>

   
      <nav>
      <img src={image} className="logo" alt="Company Logo" />
      <ul>
        <li><a href="#" className='company'>Company</a></li>
        <li ><a href="#">Services</a></li>
        <li><a  href="#">Business Models</a></li>
        <li><a  href="#">Blogs</a></li>
        <li><a  href="#">Contact Us</a></li>
      </ul>
      </nav>
      <div className="line"></div>
      </header>
  
  )
}

export default Header
