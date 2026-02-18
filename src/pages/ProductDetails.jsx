import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaShoppingBag } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import './ProductDetails.css'
import { FaRegStar } from 'react-icons/fa6'
import AllData from '../ProductData.json'

function ProductDetails() {
  const location = useLocation()
  const data = location.state
  const navigate = useNavigate()

  const [mainImage, setMainImage] = React.useState(data.image)
  const [relatedProduct, setRelatedProduct] = useState([])
  const [clickOnRelatedProd, setClickOnRelatedPro] = useState(false)

  console.log('Product Details-->', data.category)

  const subimageClick = (path) => {
    setMainImage(path)
    setClickOnRelatedPro(true)
  }

  const getRelatedProduct = () => {
    let filterData = AllData.filter((e) => e.category == data.category)
    setRelatedProduct(filterData)
  }

  const navigateToDetails = (data) => {
    navigate('/productdetails', { state: data })
    setClickOnRelatedPro(false)
  }

  useEffect(() => {
    getRelatedProduct()
  }, [])

  return (
    <div>
      <div className='productDetailsPage'>
        <div className="image">
          <div className="subImage">
            <img src={data.subImage1} alt={data.name} onClick={() => { subimageClick(data.subImage1) }} />
            <img src={data.subImage2} alt={data.name} onClick={() => { subimageClick(data.subImage2) }} />
            <img src={data.subImage3} alt={data.name} onClick={() => { subimageClick(data.subImage3) }} />
            <img src={data.subImage4} alt={data.name} onClick={() => { subimageClick(data.subImage4) }} />
          </div>
          <div className="mainImage">
            {clickOnRelatedProd ?
              <img src={mainImage} alt={data.name} /> :
              <img src={data.image} alt={data.name} />}

          </div>
        </div>
        <div className="product_info">
          <h2>{data.name}</h2>
          <p className='description'>{data.description}</p>
          <div className='ratings'>
            <p style={{ marginTop: '3px' }}>{data.rating}<FaStar style={{ color: 'orange', marginBottom: '5px', marginLeft: '5px' }} /> </p>
            <p><span style={{ fontWeight: 700 }}>{data.ratingsCount || 85}</span> Ratings</p>
          </div>
          <div className='price'>
            <p className='actualPrice'><span>MRP</span>  ₹{data.discountPrice || Math.round(data.price * 0.9)} </p>
            <p><del>₹{data.price}</del></p>
            <p>(Rs. {Math.round(data.price * 0.1)} OFF)</p>
          </div>
          <p style={{ margin: 0, padding: 0, color: 'green', fontWeight: 600 }}>inclusive of all taxes</p>
          <div className='Buttons'>
            <button><FaShoppingBag style={{ fontSize: '16px', marginRight: '5px', marginBottom: '5px' }} />Add To Cart</button>
            <button><FaHeart style={{ fontSize: '16px', marginRight: '5px', marginBottom: '5px' }} />Wishlist</button>
          </div>
        </div>
      </div>

      <div className="relatedItems row" >
        {relatedProduct.map((e) => {
          return (
            <div className='p_card col-12 col-md-3 col-lg-2' key={e.id} onClick={() => navigateToDetails(e)}>
              <div className="image">
                <img src={e.image} alt="image" />
              </div>
              <h4>{e.name}</h4>
              <div className="price">
                <h3>₹ {e.price}</h3>
                <h3> <FaRegStar style={{ color: 'orange', margin: ' 0 5px 5px 5px ' }} />{e.rating}</h3>
              </div>
              <button className='cartBtn'>Add to Cart</button>
            </div>
          )
        })}

      </div>


    </div>
  )
}

export default ProductDetails
