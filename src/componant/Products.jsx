import React, { useEffect, useState } from 'react'
import './products.css'
import data from '../ProductData.json'
import { FaRegStar } from 'react-icons/fa6';


function Products() {

  const [productData, setProductData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [btnShow, setBtnShow] = useState(true);


  useEffect(() => {
    let filterData = data.filter((e) => e.id < 9)
    setFilterData(filterData);
    setProductData(filterData);
  }, [])

  return (
    <div style={{ padding: '0px 50px ' }} >
      <h1 className='productHeading'>Our Products</h1>
      <p className='productPragraph'>Explore Our Products</p>
      <div className="product_cards">
        {productData.map((e) => {
          return (
            <div className='p_card'>
              <div className="image">
                <img src={e.image} alt="image" />
              </div>
              <h4>{e.name}</h4>
              <div className="price">
                <h3>₹ {e.price}</h3>
                <h3> <FaRegStar style={{ color: 'orange', margin:' 0 5px 5px 5px '  }} />{e.rating}</h3>
              </div>
              <button className='cartBtn'>Add to Cart</button>
            </div>
          )
        })}

      </div>
      {btnShow ?
        <button className='BTN' onClick={() => {
          setProductData(data)
          setBtnShow(false)
        }}>View All Products</button>
        :
        <button className='BTN' onClick={() => {
          setProductData(filterData)
          setBtnShow(true)
        }}>View  Less</button>
      }
    </div>
  )
}

export default Products
