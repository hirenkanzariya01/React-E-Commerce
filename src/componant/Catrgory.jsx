import React from 'react'
import './category.css'
import product1 from '../images/product1.png'
import product2 from '../images/product2.png'
import product3 from '../images/product3.png'
import { FaCarSide } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import 'animate.css'

function Catrgory() {
  return (
    <div className='mainCategorySection' style={{ padding: '0px 50px ' }}>

      <div className="firstRow" >
        <div className="product_card small black " data-aos="fade-up"  data-aos-delay="100" >
          <div className="content">
            <p>Enjoy</p>
            <h3>With</h3>
            <h1>Earphone</h1>
            <button>Browse</button>
          </div>
          <div className="product_image ">
            <img src={product1} alt="" className='earphone' />
          </div>
        </div>
        <div className="product_card small yellow" data-aos="fade-up"  data-aos-delay="300">
          <div className="content">
            <p>Enjoy</p>
            <h3>With</h3>
            <h1>Earphone</h1>
            <button>Browse</button>
          </div>
          <div className="product_image">
            <img src={product2} alt="" className='watch' />
          </div>
        </div>
        <div className="product_card large pink" data-aos="fade-up"  data-aos-delay="500">
          <div className="content">
            <p>Enjoy</p>
            <h3>With</h3>
            <h1>Earphone</h1>
            <button>Browse</button>
          </div>
          <div className="product_image">
            <img src={product3} alt="" className='leptop' />
          </div>
        </div>

      </div>
      <div className="firstRow">
        <div className="product_card large pink">
          <div className="content">
            <p>Enjoy</p>
            <h3>With</h3>
            <h1>Earphone</h1>
            <button>Browse</button>
          </div>
          <div className="product_image">
            <img src={product3} alt="" className='leptop' />
          </div>
        </div>

        <div className="product_card small black">
          <div className="content">
            <p>Enjoy</p>
            <h3>With</h3>
            <h1>Earphone</h1>
            <button>Browse</button>
          </div>
          <div className="product_image ">
            <img src={product1} alt="" className='earphone' />
          </div>
        </div>
        <div className="product_card small yellow">
          <div className="content">
            <p>Enjoy</p>
            <h3>With</h3>
            <h1>Earphone</h1>
            <button>Browse</button>
          </div>
          <div className="product_image">
            <img src={product2} alt="" className='watch' />
          </div>
        </div>

      </div>


      <div className="services">
        <div className="service">
          <div className="icon"><FaCarSide /></div>
          <div className="title">
            <h3>Free Shipping</h3>
            <p>Free Shipping On All Order</p>
          </div>
        </div>
        <div className="service">
          <div className="icon"><FaCheckCircle /></div>
          <div className="title">
            <h3>Safe Money</h3>
            <p>30 Days Money Back</p>
          </div>
        </div>
        <div className="service">
          <div className="icon"><FaWallet /></div>
          <div className="title">
            <h3>Secure Payment</h3>
            <p>All Payment Secure</p>
          </div>
        </div>
        <div className="service">
          <div className="icon"><FaHeadphonesAlt /></div>
          <div className="title">
            <h3>Online Supoort 24/7</h3>
            <p>Technical Support 24/7</p>
          </div>
        </div>

      </div>


    </div>

  )
}

export default Catrgory
