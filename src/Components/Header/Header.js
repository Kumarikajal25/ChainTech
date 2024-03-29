import React,{useState} from 'react'
import image from "../../assest/logo.png"
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import "./style.scss"
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [icon, setIcon] = useState(false);
  const openMobileMenu = () => {
    setMobileMenu(true);
};
  return (
    <header className={`${mobileMenu ? "mobileView" : ""}`}>
      <nav>
      <img src={image} className="logo" alt="Company Logo" />
      <ul className={`${icon ? "icon-display":""}`}>
        <li><a href="#" className='company'>Company</a></li>
        <li ><a href="#">Services</a></li>
        <li><a  href="#">Business Models</a></li>
        <li><a  href="#">Blogs</a></li>
        <li><a  href="#">Contact Us</a></li>
      </ul>
      <div className="mobileMenuItems">
                  
                  {mobileMenu ? (
                    
                      <VscChromeClose onClick={() => {setMobileMenu(false)
                      setIcon(false)}} />
                  ) : (
                      <SlMenu onClick={()=>{
                        openMobileMenu()
                        setIcon(true)}} />
                  )}
              </div>
      </nav>
      <div className="line"></div>
      </header>
  
  )
}

export default Header
