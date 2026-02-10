import React from 'react'
import NavbarBoostrap from './componant/NavbarBoostrap'
import Footer from './componant/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ShopPage from './pages/ShopPage'
import BlogPage from './pages/BlogPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarBoostrap />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/aboutpage' element={<AboutPage />} ></Route>
          <Route path='/shoppage' element={<ShopPage />} ></Route>
          <Route path='/blogpage' element={<BlogPage />} ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App
