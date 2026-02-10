import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { CiMobile4 } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import './Footer.css'
function Footer() {
  return (
    <div>
      <div className="footerLinks">
        <h3>E SHOP</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, ab?</p>
        <p>Made with 💖 by The Coding Journey</p>
        <button>Visit Out YouTube Channel</button>
      </div>
      <div className="footerLinks">
        <h4>Important Links</h4>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
      </div>
      <div className="footerLinks">
        <h4>Important Links</h4>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
      </div>
      <div className="footerLinks">
        <h4>Address</h4>
        <p><FaLocationArrow /> Surendranagar , Gujarat</p>
        <p><CiMobile4 />
          +91 1234567890</p>
        <p className='icons'>
          <FaInstagram />
          <FaFacebook />
          <FaLinkedin />
        </p>
      </div>
    </div>
  )
}

export default Footer
