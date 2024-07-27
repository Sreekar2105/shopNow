import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap';
import img1 from '../images/img1.png';
import '../App.css'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';

function Navigationbar() {

  let itemsCount = useSelector((state) => {return state.Cart.itemsCount});

    return (
        <>
            <Navbar expand="lg" className="nav-bar border-danger" collapseOnSelect>

            <LinkContainer to="/shopNow">
                <Navbar.Brand className='brand-logo'> <img className='img-fluid ms-3' src={img1} alt="Brand"/></Navbar.Brand>
            </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle-menu me-3 fs-4' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto text-center">
                       <LinkContainer to={"/shopNow"}>
                          <Nav.Link className='nav-items'>Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={"/mobiles"}>
                          <Nav.Link className='nav-items'>Mobiles</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={"/laptops"}>
                           <Nav.Link className='nav-items'>Laptops</Nav.Link>
                        </LinkContainer>


                        <NavDropdown title="Men's Fashion" id="collapsible-nav-dropdown" className='nav-items navbar-dropdown'>

                            <LinkContainer to={"/men's-clothing"}>
                              <NavDropdown.Item className='dropdown-items'>Clothing</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to={"/men's-watches"}>
                              <NavDropdown.Item className='dropdown-items'>Watches</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to={"/men's-shoes"}>
                              <NavDropdown.Item className='dropdown-items'>Shoes</NavDropdown.Item>
                            </LinkContainer>
                           
                        </NavDropdown>
                        
                        
                        
                        <NavDropdown title="Women's Fashion" id="collapsible-nav-dropdown" className='nav-items navbar-dropdown'>

                            <LinkContainer to={"/women's-clothing"}>
                              <NavDropdown.Item className='dropdown-items'>Clothing</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to={"/handbags"}>
                              <NavDropdown.Item className='dropdown-items'>Handbags</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to={"/women's-footwear"}>
                               <NavDropdown.Item className='dropdown-items'>Footwear</NavDropdown.Item>
                            </LinkContainer>
                            
                        </NavDropdown>

                        <LinkContainer to="/cart-details">
                           <Nav.Link className='nav-items'>
                              <FontAwesomeIcon icon={faCartShopping} className='cart-icon' /><span className='cart'>Cart</span>
                                 <sup className='ps-1 fs-6 cart-items-count'>{itemsCount}</sup>
                            </Nav.Link>
                        </LinkContainer>
                        
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

    

export default Navigationbar;