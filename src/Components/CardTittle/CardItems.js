import React from 'react'
import "./style.scss"
import img2 from "../../assest/logotitle.png"
import { IoIosArrowRoundBack } from "react-icons/io";
import api from "./api"
const CardItems = () => {
  return (
    <div className="card-items">
    {api.map((item, index) => (
    <div className='card-item' key={index} style={{ backgroundColor: item.color }}>
      <div className="card-tittle-top">
        <img src={img2}></img>
        <p>Join Development</p>
      </div>
      <div className="border-1"></div>
      <div className="card-content">
        <div className="tittle">{item.name1}
        <br></br>{item.name2}</div>
        <img src={item.image}></img>
      </div>
      <div className="border-2"></div>
      <div className="card-footer">
      <button style={{ background: index === 2? `${item.color1} !important`:item.color1 }}>
          <div className="inner-content">
          <p style={{ color: index === 1 ? "white" : "inherit" }}>Explore</p>
            <div className="forward-icon">
            <IoIosArrowRoundBack/>
            </div>
          </div>
        </button>
      </div>
    </div>
))}
</div>
  )
}

export default CardItems;
