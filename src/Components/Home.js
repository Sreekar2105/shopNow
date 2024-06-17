import React from 'react'
import { Container, Nav, Row ,Col, Navbar, NavDropdown} from 'react-bootstrap';
import '../style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


function Home() {
  return (
    <>
    <Navbar expand="lg" className="nav-bar">
      <Navbar.Brand as={Link} to={"/Home"} className='brand-logo'><img className="img-fluid ms-2" src='../public/images/shopNow.png'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle-menu me-2' />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto fs-5">
          <Nav.Link as={Link} to={"/Home"} className='nav-items'>Home</Nav.Link>
          <Nav.Link as={Link} to={"/Mobiles"} className='nav-items'>Mobiles</Nav.Link>
          <Nav.Link as={Link} to={"/Laptops"} className='nav-items'>Laptops</Nav.Link>
          <NavDropdown title="Fashion" id="basic-nav-dropdown" 
          className='nav-items'>
            <NavDropdown.Item as={Link} to={"/Men's-Fashion"} className='dropdown-items'>Men's Fashion</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/Female's-Fashion"} className='dropdown-items'>Female's Fashion</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/cart-details" className='nav-items'>
            <FontAwesomeIcon icon={faCartShopping} className='cart-icon'/><span className='cart'>Cart</span>
          </Nav.Link>
          <Nav.Link as={Link} to={"/orders"} className='nav-items'>Your Orders</Nav.Link>
        </Nav>
      </Navbar.Collapse>
   </Navbar>
   <div className='about'>
   </div>
   </>
  )
}

export default Home;