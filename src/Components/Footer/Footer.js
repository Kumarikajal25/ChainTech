import React from 'react'
import "./style.scss"
import logo from "../../assest/logo.png"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
       <img src={logo}></img>
       <div className='line'></div>
       <div className='copywright'>
       © 2024 All Rights Reserved -  Chaintech Network
       </div>
      </div>
    </div>
  )
}

export default Footer
