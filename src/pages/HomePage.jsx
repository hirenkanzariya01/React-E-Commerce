import React, { useEffect } from 'react'
import Herosection from '../componant/Herosection'
import Category from '../componant/Catrgory'
import Sale from '../componant/Sale'
import Products from '../componant/Products'
import News from '../componant/News'
import image1 from '../images/main_image.png'
import image2 from '../images/watch.png'
import AOS from "aos";
import "aos/dist/aos.css";


function HomePage() {

  let headphoneData = {
    heading: "Fine Smile",
    date: "10 Jan to 28 Jan",
    off: '30%',
    imagePath: image1,
    subtitle: 'Air Solo Bass',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis',
    bgColor: 'rgb(244 44 55)'
  }

  let watchData = {
    heading: "Happy Hours",
    date: "20 Jan to 30 Jan",
    off: '40%',
    imagePath: image2,
    subtitle: 'Smart Solo ',
    bgColor: 'rgb(44, 244, 164)',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis'
  }


  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration (ms)
      once: false,       // animation only once on scroll
    });
  }, []);

  return (
    <div>
      <Herosection />
      <Category />
      <Sale data={headphoneData} />
      <Products />
      <Sale data={watchData} />
      <News />
    </div>
  )
}

export default HomePage
