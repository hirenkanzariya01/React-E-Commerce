import React, { useEffect, useState } from 'react'
import data from '../ProductData.json'
import './shopepage.css'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import { CiStar } from 'react-icons/ci'
import { useLocation } from 'react-router-dom'


function ShopPage() {
  const location = useLocation()
  let searchData = location.state || ""

  console.log('In Shope page ', searchData)
  const [filterData, setFilterData] = useState(data)
  const [searchItem, setSearchItem] = useState(searchData)
  const [category, setCategory] = useState([])
  const [filterBy, setFilterBy] = useState('')

  const handleCategory = () => {
    let cat = []
    for (let i in data) {
      cat.push(data[i].category)
    }
    let uniqueCategory = [...new Set(cat)]
    setCategory(uniqueCategory)
  }

  const handleCategoryClick = (a) => {
    setFilterBy(a)
    const filterCtegoryData = a ? data.filter((e) => e.category == a) : data
    setFilterData(filterCtegoryData)
    setSearchItem(filterCtegoryData)
  }

  useEffect(() => {
    setSearchItem(searchData)
  }, [searchData])


  const handlePrice = (min, max) => {
    if (max == 'MAX') {
      let filterPriceData = filterBy ? data.filter((e) => e.price > min && e.category == filterBy) : data.filter((e) => e.price > min)
      setFilterData(filterPriceData)
      setSearchItem(filterPriceData)

    }

    else {
      let filterPriceData = filterBy ? data.filter((e) => e.price > min && e.price < max && e.category == filterBy) : data.filter((e) => e.price > min && e.price < max)
      setFilterData(filterPriceData)
      setSearchItem(filterPriceData)

    }
  }

  const handleReview = (min, max) => {
    let raingFilter = data.filter((e) => e.rating > min && e.rating <= max)
    setFilterData(raingFilter)
    setSearchItem(raingFilter)


  }

  useEffect(() => {
    handleCategory()
    console.log('Function is call ')
  }, [])



  const handleSearch = () => {
    console.log('search is call')
  }



  return (
    <div className='ShopSection'>
      <div className="shopHeading">
        <h1>SHOP</h1>
      </div>
      <div className="ShopBody">
        <div className="filter">
          <h3>Filter Options</h3>
          <div className="category">
            <h4>By Category</h4>
            {
              category.map((e, index) => {
                return (
                  <div className="div" key={index} onClick={() => { handleCategoryClick(e) }}>
                    <p >{e}</p>
                  </div>
                )
              })
            }
          </div>
          <hr />
          <div className="price">
            <h4>By Price</h4>
            <p onClick={() => { handlePrice(0, 10000) }}> 0-10,000</p>
            <p onClick={() => { handlePrice(10000, 20000) }}>10,000 - 20,000</p>
            <p onClick={() => { handlePrice(20000, 40000) }}>20,000 - 40,000</p>
            <p onClick={() => { handlePrice(40000, 60000) }}>40,000 - 60,000</p>
            <p onClick={() => { handlePrice(60000, 'MAX') }}>60,000 ++</p>
          </div>
          <div className="reviews">
            <h4>By Reviews</h4>
            <p onClick={() => { handleReview(4, 5) }} style={{ color: 'orange' }}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <p onClick={() => { handleReview(3, 4) }} style={{ color: 'orange' }}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <p onClick={() => { handleReview(2, 3) }} style={{ color: 'orange' }}>
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <p onClick={() => { handleReview(1, 2) }} style={{ color: 'orange' }}>
              <FaStar />
              <FaStar />
            </p>
            <p onClick={() => { handleReview(0, 1) }} style={{ color: 'orange' }}>
              <FaStar />
            </p>
          </div>
        </div>

        <div className="products">
          <div className="productCArd">
            {
              searchItem ?
                searchItem.map((e) => {
                  return (
                    <div className='p_card' key={e.id}>
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
                })


                :

                filterData.map((e) => {
                  return (
                    <div className='p_card' key={e.id}>
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
                })
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopPage
