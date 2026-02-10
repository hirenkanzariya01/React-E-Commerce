import React from 'react'
import './Sale.css'
import 'animate.css'
function Sale(props) {
  console.log(props);
  return (
    <div className='sale' style={{ backgroundColor: props.data.bgColor, padding: '0px 50px ' }} >
      <div className="left">
        <p>{props.data.off} OFF</p>
        <h1>{props.data.heading}</h1>
        <p>{props.data.date}</p>
      </div>
      <div className="image">
        <img src={props.data.imagePath} data-aos="zoom-in" alt="image" />
      </div>
      <div className="right">
        <h4>{props.data.subtitle}</h4>
        <h2>Winter Sale</h2>
        <p>{props.data.description} </p>
        <button>Shop Now</button>
      </div>
    </div>
  )
}

export default Sale
