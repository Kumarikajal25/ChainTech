import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Card from '../CardTittle/CardItems';
import "./style.scss"
const Content = () => {
  return (
    <div className='contents'>
      <div className="content-items">
      <div className="top-contents">
      <div className="contents">
      <h1>Services We Offer</h1>
        <p>Discover the digital possibilities for your brand with our comprehensive suite of services.</p>
      </div>
      <div className="icons">
        <div className="left"><IoIosArrowRoundBack/></div>
        <div className="circular-icon"><IoArrowForwardCircleOutline/></div>
        </div>
      </div>
      <div className="card">
      <Card/>
      </div>
      <div className="card" id="second">
      <Card />
      </div>
      
      </div>
    </div>
  )
}

export default Content
