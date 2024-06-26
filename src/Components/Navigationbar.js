import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar,Nav, NavDropdown, } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import img1 from '../images/img1.png';
import '../App.css' 

function Navigationbar() {
    return (
        <>
            <Navbar expand="lg" className="nav-bar border-danger">
                <Navbar.Brand as={Link} to={"#"} className='brand-logo'><img src={img1} className='img-fluid ms-3' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle-menu me-3 fs-4' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-center">
                        <Nav.Link as={Link} to={"/shopNow"} className='nav-items'>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/mobiles"} className='nav-items'>Mobiles</Nav.Link>
                        <Nav.Link as={Link} to={"/laptops"} className='nav-items'>Laptops</Nav.Link>
                        <NavDropdown title="Men's Fashion" id="basic-nav-dropdown"
                            className='nav-items'>
                            <NavDropdown.Item as={Link} to={"/men's-clothing"} className='dropdown-items'>Clothing</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/men's-watches"} className='dropdown-items'>Watches</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/men's-footwear"} className='dropdown-items'>Footwear</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Women's Fashion" id="basic-nav-dropdown"
                            className='nav-items'>
                            <NavDropdown.Item as={Link} to={"/women's-clothing"} className='dropdown-items'>Clothing</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/handbags"} className='dropdown-items'>Handbags</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/women's-footwear"} className='dropdown-items'>Footwear</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/cart-details" className='nav-items'>
                            <FontAwesomeIcon icon={faCartShopping} className='cart-icon' /><span className='cart'>Cart</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/orders"} className='nav-items'>Your Orders</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigationbar;