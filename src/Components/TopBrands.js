import React from 'react';
import { Link } from 'react-router-dom';
import {Button,Card,CardGroup,Row,Col} from 'react-bootstrap'
import '../style.css';

function TopBrands() {
    return (
         <>
          <p className='top-brands fs-1 fw-bold text-center mt-5 mb-3 mx-3 bg-light text-danger'>Top Brands</p>

          <Row xs={1} sm={2} md={3} lg={4} className='gx-0'>
          <Col className='top-brands-col'>  
            <Card as={Link} to={'/mobiles/apple'} className='top-brands-list-items'>
               <Card.Img className='brand-logo' fluid variant="top" src="https://www.logo.wine/a/logo/Apple_Inc./Apple_Inc.-Logo.wine.svg" />
            </Card>
            </Col>
       
            <Col className='top-brands-col'>
            <Card  as={Link} to={'/mobiles/samsung'} className='top-brands-list-items'>
               <Card.Img className='brand-logo' fluid variant="top" src="https://www.logo.wine/a/logo/Samsung/Samsung-Logo.wine.svg"/>
            </Card>
            </Col>
      
            <Col className='top-brands-col'>
            <Card  as={Link} to={'/mobiles/oppo'} className='top-brands-list-items'>
               <Card.Img className='brand-logo' fluid variant="top" src="https://www.logo.wine/a/logo/Oppo/Oppo-Logo.wine.svg" />
            </Card>
            </Col>


            <Col className='top-brands-col'>
            <Card  as={Link} to={'/laptops/lenovo'} className='top-brands-list-items'>
               <Card.Img  className='brand-logo' fluid variant="top" src="https://www.logo.wine/a/logo/Lenovo_Vibe_K4_Note/Lenovo_Vibe_K4_Note-Logo.wine.svg" />
            </Card>
            </Col>


            <Col className='top-brands-col'>   
            <Card  as={Link} to={'/laptops/dell'} className='top-brands-list-items'>
               <Card.Img className='brand-logo' fluid variant="top" src="https://www.logo.wine/a/logo/Dell/Dell-Logo.wine.svg"/>
            </Card>
            </Col>  
      
            <Col className='top-brands-col'>
            <Card  as={Link} to={'/laptops/asus'} className='top-brands-list-items'>
               <Card.Img className='brand-logo' fluid variant="top" src="https://www.logo.wine/a/logo/Asus/Asus-Logo.wine.svg" />
            </Card>
            </Col>

            <Col className='top-brands-col'>
            <Card  as={Link} to={'/shoes/adidas'} className='top-brands-list-items'>
               <Card.Img  className='brand-logo' fluid variant="top" src="https://www.logo.wine/a/logo/Adidas/Adidas-Logo.wine.svg" />
            </Card>
            </Col>
       
            <Col className='top-brands-col'>
            <Card  as={Link} to={'/shoes/nike'} className='top-brands-list-items'>
               <Card.Img className='brand-logo' fluid variant="top" src="https://www.logo.wine/a/logo/Nike%2C_Inc./Nike%2C_Inc.-Logo.wine.svg"/>
            </Card>
            </Col>


            <Col className='top-brands-col'>
            <Card  as={Link} to={'/watches/fastrack'} className='top-brands-list-items'>
               <Card.Img className='brand-logo' fluid variant="top" src="https://www.freepngdesign.com/content/uploads/images/p19-19-fastrack-1461198656.png" />
            </Card>
            </Col>

            <Col className='top-brands-col'>
            <Card  as={Link} to={'/clothing/calvin-klein'} className='top-brands-list-items'>
               <Card.Img  className='brand-logo' fluid variant="top" src="https://logowik.com/content/uploads/images/t_calvin-klein5506.jpg"/>
            </Card>
            </Col>
       
            <Col className='top-brands-col'>
            <Card  as={Link} to={'/clothing/wrangler'} className='top-brands-list-items'>
               <Card.Img className='brand-logo' fluid variant="top" src="https://1000logos.net/wp-content/uploads/2021/06/Wrangler-logo-768x432.png"/>
            </Card>
            </Col>

            <Col className='top-brands-col'>
            <Card  as={Link} to={'/clothing/levis'} className='top-brands-list-items'>
               <Card.Img className='brand-logo' fluid variant="top" src="https://logowik.com/content/uploads/images/t_254_levis.jpg"/>
            </Card>
            </Col>
      
      </Row>
    </>
    )
}

export default TopBrands;