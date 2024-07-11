import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap'
import '../App.css'


function TopBrands() {
   return (
      <>
         <p className='title top-brands fs-1 fw-bold text-center mt-5 mb-3 mx-3 py-2 rounded-3 overflow-x-auto'>Top Brands</p>

         <Row xs={1} md={2} xl={4} className='gx-0'>
            <Col className='top-brands-col'>
               <Card as={Link} to={'/mobiles/apple'} className='top-brands-list-items'>
                  <Card.Img className='brand-logo' fluid variant="top" src="https://www.logo.wine/a/logo/Apple_Inc./Apple_Inc.-Logo.wine.svg" />
               </Card>
            </Col>

            <Col className='top-brands-col'>
               <Card as={Link} to={'/mobiles/samsung'} className='top-brands-list-items'>
                  <Card.Img className='brand-logo' fluid variant="top" src="https://www.logo.wine/a/logo/Samsung/Samsung-Logo.wine.svg" />
               </Card>
            </Col>

            <Col className='top-brands-col'>
               <Card as={Link} to={'/mobiles/oppo'} className='top-brands-list-items'>
                  <Card.Img className='brand-logo' fluid variant="top" src="https://www.logo.wine/a/logo/Oppo/Oppo-Logo.wine.svg" />
               </Card>
            </Col>


            <Col className='top-brands-col'>
               <Card as={Link} to={'/laptops/lenovo'} className='top-brands-list-items'>
                  <Card.Img className='brand-logo' fluid variant="top" src="https://www.logo.wine/a/logo/Lenovo_Vibe_K4_Note/Lenovo_Vibe_K4_Note-Logo.wine.svg" />
               </Card>
            </Col>


            <Col className='top-brands-col'>
               <Card as={Link} to={'/laptops/dell'} className='top-brands-list-items'>
                  <Card.Img className='brand-logo' fluid variant="top" src="https://www.logo.wine/a/logo/Dell/Dell-Logo.wine.svg" />
               </Card>
            </Col>

            <Col className='top-brands-col'>
               <Card as={Link} to={'/laptops/asus'} className='top-brands-list-items'>
                  <Card.Img className='brand-logo' fluid variant="top" src="https://www.logo.wine/a/logo/Asus/Asus-Logo.wine.svg" />
               </Card>
            </Col>

            <Col className='top-brands-col'>
               <Card as={Link} to={'/adidas-products'} className='top-brands-list-items'>
                  <Card.Img className='brand-logo' fluid variant="top" src="https://www.logo.wine/a/logo/Adidas/Adidas-Logo.wine.svg" />
               </Card>
            </Col>

            <Col className='top-brands-col'>
               <Card as={Link} to={'/nike-products'} className='top-brands-list-items'>
                  <Card.Img className='brand-logo' fluid variant="top" src="https://www.logo.wine/a/logo/Nike%2C_Inc./Nike%2C_Inc.-Logo.wine.svg" />
               </Card>
            </Col>

         </Row>
      </>
   )
}

export default TopBrands;