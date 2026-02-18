import React from 'react'
import image1 from '../images/g1.png'
import image2 from '../images/g2.png'
import image3 from '../images/g3.png'
import './Aboutpage.css'

function AboutPage() {
  return (
    <div className='AboutPage'>
      <div className="aboutHerosection">
        <div className="left">
          <h1>About Our Shope</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum esse eligendi quod minima assumenda incidunt, accusamus dolorem mollitia dolore harum est inventore eveniet consectetur quia ratione cum voluptatib Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus itaque hic ut cupiditate molestiae in explicabo repellendus dignissimos minus qui quia consequatur veritatis nisi a dolorum laudantium, iure odit sit? s. Repudiandae.</p>
          <button className='contactBtn'>Contact Us</button>
        </div>
        <div className="right">
          <img src={image3} alt="" />
        </div>
      </div>

      <div className="location">
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976.9725254294007!2d71.62830472112486!3d22.73075667344734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x72a8ffd2b5247a5%3A0x839b2d28e8a78f01!2sShakti%20Education%20Institute!5e0!3m2!1sen!2sus!4v1770876343389!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="info">
          <h1>About Our Shope</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum esse eligendi quod minima assumenda incidunt, accusamus dolorem mollitia dolore harum est inventore eveniet consectetur quia ratione cum voluptatib Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus itaque hic ut cupiditate molestiae in explicabo repellendus dignissimos minus qui quia consequatur veritatis nisi a dolorum laudantium, iure odit sit? s. Repudiandae.</p>
          <button className='contactBtn'>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
