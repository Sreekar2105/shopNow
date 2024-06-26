import React from 'react'
import { Card ,Row,Col} from 'react-bootstrap'


function MensClothing()
{
  return (
  <>
    <p className='mens-clothing fs-1 fw-bold text-center mt-3 mb-3 mx-3 overflow-x-auto'>Formal Shirts</p>

    <div className='mens-clothing-div'>
<Row xs={1} sm={2} md={3} lg={4} className='gx-0' >
 <Col>
   <Card className='m-3 mens-clothing-card'>
     <Card.Img className='mens-clothing-card-img formal-shirts img-fluid' variant="top" src="https://m.media-amazon.com/images/I/51K7WkEi-JL._SY741_.jpg" />
     <Card.Body>
         <Card.Title className='mens-clothing-card-title text-center fs-4 fw-bold'>Majestic Man</Card.Title>
         <Card.Text className='fs-5 fw-bold'>
            <p>Slim Fit Satin Cotton Formal Shirt for Men</p>
            <p>Price : ₹639</p>
         </Card.Text>
     </Card.Body>        
   </Card>
   </Col>

    
    <Col>
   <Card className='m-3 mens-clothing-card'>
     <Card.Img className='mens-clothing-card-img formal-shirts img-fluid p-3' variant="top" src="https://m.media-amazon.com/images/I/51NRVpug91L._AC_UL480_FMwebp_QL65_.jpg" />
     <Card.Body>
         <Card.Title className='mens-clothing-card-title text-center fs-4 fw-bold'>Van Heusen</Card.Title>
         <Card.Text className='fs-5 fw-bold'>
            <p>Men's Regular fit Formal Shirt</p>
            <p>Price : ₹1,189</p>
         </Card.Text>
     </Card.Body>        
   </Card>
   </Col>


   <Col>
   <Card className='m-3 mens-clothing-card'>
     <Card.Img className='mens-clothing-card-img formal-shirts img-fluid' variant="top" src="https://m.media-amazon.com/images/I/71nPjVvQYZL._AC_UL480_FMwebp_QL65_.jpg" />
     <Card.Body>
         <Card.Title className='mens-clothing-card-title text-center fs-4 fw-bold'>Peter England</Card.Title>
         <Card.Text className='fs-5 fw-bold'>
            <p>Men's Regular Fit Shirt</p>
            <p>Price : ₹839</p>
         </Card.Text>
     </Card.Body>        
   </Card>
   </Col>


   <Col>
   <Card className='m-3 mens-clothing-card'>
     <Card.Img className='mens-clothing-card-img formal-shirts img-fluid' variant="top" src="https://m.media-amazon.com/images/I/71Jwe2kb5pL._SX569_.jpg" />
     <Card.Body>
         <Card.Title className='mens-clothing-card-title text-center fs-4 fw-bold'>Symbol Premium </Card.Title>
         <Card.Text className='fs-5 fw-bold'>
            <p>Men's Wrinkle-Resistant Regular Fit Cotton Formal Shirt</p>
            <p>Price : ₹1,249</p>
         </Card.Text>
     </Card.Body>        
   </Card>
 </Col>

 <Col>
   <Card className='m-3 mens-clothing-card'>
     <Card.Img className='mens-clothing-card-img formal-shirts img-fluid' variant="top" src="https://m.media-amazon.com/images/I/71VeHC9nOFL._SX679_.jpg" />
     <Card.Body>
         <Card.Title className='mens-clothing-card-title text-center fs-4 fw-bold'>Park Avenue</Card.Title>
         <Card.Text className='fs-5 fw-bold'>
            <p>Men's Full Sleeve Slim Fit Dark Yellow Formal Shirt</p>
            <p>Price : ₹1,059</p>
         </Card.Text>
     </Card.Body>        
   </Card>
 </Col>


 <Col>
   <Card className='m-3 mens-clothing-card'>
     <Card.Img className='mens-clothing-card-img formal-shirts img-fluid' variant="top" src="https://m.media-amazon.com/images/I/91uxHoeqepL._SY879_.jpg" />
     <Card.Body>
         <Card.Title className='mens-clothing-card-title text-center fs-4 fw-bold'>Diverse</Card.Title>
         <Card.Text className='fs-5 fw-bold'>
            <p> Men's Regular Fit Formal Shirt</p>
            <p>Price : ₹589</p>
         </Card.Text>
     </Card.Body>        
   </Card>
 </Col>


 <Col>
   <Card className='m-3 mens-clothing-card'>
     <Card.Img className='mens-clothing-card-img formal-shirts img-fluid' variant="top" src="https://m.media-amazon.com/images/I/51yzoftb5oL._SY741_.jpg" />
     <Card.Body>
         <Card.Title className='mens-clothing-card-title text-center fs-4 fw-bold'>Van Heusen</Card.Title>
         <Card.Text className='fs-5 fw-bold'>
            <p>Men's Slim Fit Formal Shirt</p>
            <p>Price : ₹999</p>
         </Card.Text>
     </Card.Body>        
   </Card>
 </Col>


 <Col>
   <Card className='m-3 mens-clothing-card'>
     <Card.Img className='mens-clothing-card-img formal-shirts img-fluid' variant="top" src="https://m.media-amazon.com/images/I/61QOgQtmkFL._SX679_.jpg" />
     <Card.Body>
         <Card.Title className='mens-clothing-card-title text-center fs-4 fw-bold'>Park Avenue</Card.Title>
         <Card.Text className='fs-5 fw-bold'>
            <p>Men's Regular Fit Solid Pattern Cotton Blend Semi Cut Away Collar Full Sleeve Formal Shirt</p>
            <p>Price : ₹849</p>
         </Card.Text>
     </Card.Body>        
   </Card>
 </Col>



 </Row>
</div>
</>
  )
}

export default MensClothing