import React, { useState } from 'react'
import './BlogPage.css'


function BlogPage() {

  const [first, setFirst] = useState(false)


  return (
    <div className='bologPage'>
      <div className="blogHeading">
        <h2> Bolog Page</h2>
      </div>
      <div className="bologList">
        <div className="bolog1">
          <img src="https://img.freepik.com/free-photo/online-purchasing-payment-e-commerce-banking_53876-127604.jpg?semt=ais_user_personalization&w=740&q=80" alt="" />
          <div className="description">
            <h2>heading</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas, voluptatibus reiciendis aperiam magnam aspernatur ipsam at quia voluptatum explicabo nostrum, velit dolore eligendi corrupti tenetur, doloribus molestiae iste minus. </p>

            {first ? <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat mollitia magni impedit saepe consequatur numquam maxime, sapiente natus iure voluptate asperiores obcaecati esse ducimus sequi vero corrupti quod aliquam
            </p> : null}

            <button className='readmore_button' onClick={() => setFirst(true)}>Read More</button>
          </div>

        </div>
        <div className="bolog1">
          <img src="https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=612x612&w=0&k=20&c=ROAncmFL4lbSQdU4VOhyXu-43ngzfEqHE5ZZAw5FtYk=" alt="" />
          <div className="description">
            <h2>heading</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas, voluptatibus reiciendis aperiam magnam aspernatur ipsam at quia voluptatum explicabo nostrum, velit dolore eligendi corrupti tenetur, doloribus molestiae iste minus.</p>
            <button className='readmore_button'>Read More</button>

          </div>

        </div>
        <div className="bolog1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_IlbwEXOERxV0b9cjhZsg0m-_84Zrc25np7ZYG935MlcPZSnhC-YwHHBk7c1j-tLEws&usqp=CAU" alt="" />
          <div className="description">
            <h2>heading</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas, voluptatibus reiciendis aperiam magnam aspernatur ipsam at quia voluptatum explicabo nostrum, velit dolore eligendi corrupti tenetur, doloribus molestiae iste minus.</p>
            <button className='readmore_button'>Read More</button>

          </div>

        </div>
      </div>

    </div>
  )
}

export default BlogPage
