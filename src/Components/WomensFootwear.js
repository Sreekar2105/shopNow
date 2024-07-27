import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import Footer from './Footer'
import { Link } from 'react-router-dom'


function WomensFootwear() {

    let footwears = [
        {
            title : "Right Steps",
            img : "https://m.media-amazon.com/images/I/61XHpcOnrDL._SY675_.jpg",
            description : "Women's Sandals",
            price: "899"
        },
      
        {
            title : "Mochi",
            img : "https://m.media-amazon.com/images/I/613GWQ9-WRL._SY675_.jpg",
            description : "Faux Leather Gold Toned Sandals",
            price: "839"
        },
      
        {
            title : "Marc Loire",
            img : "https://m.media-amazon.com/images/I/51yjtHf3j7L._SY675_.jpg",
            description : "Women's Pointed Toe Block Heel Pumps",
            price: "769"
        },
      
        {
            title : "Liberty",
            img : "https://m.media-amazon.com/images/I/518fX1+C1VL._SY575_.jpg",
            description : "Casual Sandal For Women",
            price: "749"
        },
      
        {
            title : "YOHO",
            img : "https://m.media-amazon.com/images/I/611BUnbH8bL._SY575_.jpg",
            description : "Comfortable Women Slides",
            price: "699"
        },
      
        {
            title : "Crocs",
            img : "https://m.media-amazon.com/images/I/61mvdyhEk0L._SX695_.jpg",
            description : "womens Swiftwater Sandal W Sandal",
            price: "1,699"
        },
      
        {
            title : "BELLA",
            img : "https://m.media-amazon.com/images/I/61CRpW-ilbL._SY675_.jpg",
            description : "Women Fashion Wedge Slip On Sandal",
            price: "1,149"
        },
      
        {
            title : "Campus",
            img : "https://m.media-amazon.com/images/I/71CbxzDHidL._SY675_.jpg",
            description : "Casual Slip-On Shoes for Women",
            price: "999"
        },
    
        {
          title : "Marc Loire",
          img : "https://m.media-amazon.com/images/I/61iwf5x4I4L._SY695_.jpg",
          description : "Women's Embroidered and Embellished Sandals",
          price: "849"
      },
    
      {
          title : "FAUSTO",
          img : "https://m.media-amazon.com/images/I/41vH8EgUJ4L._SY675_.jpg",
          description : "Women's Outdoor Fashion Hook and Loop Platform Heel Wedges",
          price: "959"
      },
    
      {
          title : "XE Looks",
          img : "https://m.media-amazon.com/images/I/61vEFbGvpEL._SY675_.jpg",
          description : "CFancy & Comfortable Block Heel Sandal with Ankle Strap",
          price: "999"
      },
    
      {
          title : "Khadim's",
          img : "https://m.media-amazon.com/images/I/61left+Bu7L._SY675_.jpg",
          description : "Cleo High Heel Cone Slip On Sandal",
          price: "1,299"
      }
    
      ]
    
    return (

        <div className='womens-footwear'>

            <p className='title womens-footwear-title display-5 fw-bold text-center mb-3 py-2'>Footwear</p>

            <Row xs={1} md={2} xl={4} className='gx-0' >

            {

                   footwears.map((footwear, index) =>
                    (
                        <Col className='mb-3'>
                            <Card as={Link} to={`/women's-footwear/${footwear.title}/${footwear.description}`} className='m-3 womens-footwear-card text-decoration-none'>
                                <Card.Img className='womens-footwear-card-img img-fluid' variant="top" src={footwear.img} />
                                <Card.Body>
                                    <Card.Title className='womens-footwear-card-title text-center fs-5 fw-bolder'>{footwear.title}</Card.Title>
                                    <Card.Text className='fs-6 fw-bold'>
                                        <p>{footwear.description}</p>
                                        <p>Price : ₹{footwear.price}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    ))
                }

            </Row>
        


        </div>)
}

export default WomensFootwear