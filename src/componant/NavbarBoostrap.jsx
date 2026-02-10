
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartArrowDown } from 'react-icons/fa';
import { IoMdSearch } from 'react-icons/io';
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import data from "../ProductData.json"


function NavbarBoostrap() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const handleSearchClick = () => {
    
    let filterData = data.filter((e) => e.brand.toLowerCase() === search.toLowerCase() || e.name.toLowerCase().includes(search.toLowerCase()))
    navigate('/shoppage', {state:filterData})
  }


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{ padding: '15px 50px ', fontSize: "18px" }}>
      {/* <Container> */}
      <Navbar.Brand className='logo' style={{ color: '#f42c37' }}>ESHOP</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto gap-3">
          <Link className='navlink' to="/">Home</Link>
          <Link className='navlink' to="/shoppage">Shop</Link>
          <Link className='navlink' to="/aboutpage">About</Link>
          <Link className='navlink' to="/blogpage">Blog</Link>

        </Nav>
        <Nav className='right'>
          <Nav.Link className='searchInput'>
            <input type="text" name="" id="" className='input'
              onChange={(e) => { setSearch(e.target.value) }} />
            <IoMdSearch onClick={() => { handleSearchClick() }} className='Icon' />
          </Nav.Link>
          <Nav.Link>
            <FaCartArrowDown className='Icon' />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default NavbarBoostrap;