import React from 'react'
import "./style.scss"
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Description = () => {
  return (
    <div className='description'>
   <div className="headings">
    <div className='head'>
    WELCOME</div>
    <div className="content">
    <p className='To'>TO</p>
   <p className='tech'>CHAINTECH</p>
    </div>
    <p className='last'>
    From square one to engineering excellence!
     PixelPlex assists in full-cycle software <br></br>development,
      jumps in to take it over, or brings dedicated top-demanded skills.
    </p>
    <div className="btn-class">
      <button>
        <div className="inside-btn">
        <p>Get Started</p>
        <BsFillArrowRightCircleFill />
        </div>
      </button>
    </div>
   </div>
    </div>
  )
}

export default Description
