import React from 'react'
import image1 from '../images/blog1.jpg'
import image2 from '../images/blog2.jpg'
import image3 from '../images/blog3.jpg'
import brand1 from '../images/brand1.png'
import brand2 from '../images/brand2.png'
import brand3 from '../images/brand3.png'
import brand4 from '../images/brand4.png'
import brand5 from '../images/brand5.png'
import './News.css'

function News() {
  return (
    <div className='newsSection'>
      <h1 className='newsHeading'>Recent News</h1>
      <p className='newsParagraph'>Explore Our Blogs</p>

      <div className="news" style={{ padding: '0px 50px ' }}>
        <div className="news_card">
          <img src={image1} alt="image" />
          <p>Jan 20, 2024 by Dilshad</p>
          <h5>How to choose perfect smartwatch</h5>
          <p>minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro</p>
        </div>

        <div className="news_card">
          <img src={image2} alt="image" />
          <p>Jan 20, 2024 by Dilshad</p>
          <h5>How to choose perfect smartwatch</h5>
          <p>minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro</p>
        </div>

        <div className="news_card">
          <img src={image3} alt="image" />
          <p>Jan 20, 2024 by Dilshad</p>
          <h5>How to choose perfect smartwatch</h5>
          <p>minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro</p>
        </div>

      </div>

      <div className="brands">
        <img src={brand1} alt="brand logo" />
        <img src={brand2} alt="brand logo" />
        <img src={brand3} alt="brand logo" />
        <img src={brand4} alt="brand logo" />
        <img src={brand5} alt="brand logo" />

      </div>
    </div>
  )
}

export default News
