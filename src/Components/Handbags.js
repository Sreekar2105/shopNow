import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Handbags() {

    let handbags = [
        {
            title : "EVEDA",
            img : "https://m.media-amazon.com/images/I/81mlQ7YVBlL._SY575_.jpg",
            description : "Synthetic Leather Embroidery Women Handbag",
            price: "1,299"
        },
      
        {
            title : "Lavie",
            img : "https://m.media-amazon.com/images/I/81STi5Wt7hL._SY575_.jpg",
            description : "Women's Ushawu Medium Satchel Bag",
            price: "1,399"
        },
      
        {
            title : "Fostelo",
            img : "https://m.media-amazon.com/images/I/61Fa7wW9FvL._SY695_.jpg",
            description : "Women's Diva Faux Leather Handbag",
            price: "569"
        },
      
        {
            title : "ADISA",
            img : "https://m.media-amazon.com/images/I/81qk2FSIVhL._SY575_.jpg",
            description : "handbag for women with sling belt",
            price: "949"
        },
      
        {
            title : "TEAL BY CHUMBAK",
            img : "https://m.media-amazon.com/images/I/81PlyA-rnJL._SY675_.jpg",
            description : "Ladies Satchel Bag with Printed Canvas",
            price: "1,349"
        },
      
        {
            title : "PALAY",
            img : "https://m.media-amazon.com/images/I/71xTLnJ7D0L._SY500_.jpg",
            description : "Large Capacity Hobo Bags For Women With Detachable Shoulder Strap",
            price: "1,299"
        },
      
        {
            title : "Keywest",
            img : "https://m.media-amazon.com/images/I/71QO4UK+ybL._SY695_.jpg",
            description : "Vegan Leather Penguin Handbag",
            price: "679"
        },
      
        {
            title : "Carrylux",
            img : "https://m.media-amazon.com/images/I/71xfJBW1WLL._SY575_.jpg",
            description : "Croco Pattern Tote Handbags",
            price: "560"
        },
    
        {
          title : "Generic",
          img : "https://m.media-amazon.com/images/I/41wUABdWUnL.jpg",
          description : "Fashion Handbags Top Handle Satchel Purse",
          price: "599"
      },
    
      {
          title : "Miraggio",
          img : "https://m.media-amazon.com/images/I/61kBlhGF54L._SY675_.jpg",
          description : "Satchel Handbag with Adjustable & Detachable Sling Strap",
          price: "2,277"
      },
    
      {
          title : "Caprese",
          img : "https://m.media-amazon.com/images/I/51Y+S3Dt8NL._SY675_.jpg",
          description : "CAPRI FAUX LEATHER LARGE SATCHEL HANDBAG",
          price: "3,999"
      },
    
      {
          title : "Speed X Fashion",
          img : "https://m.media-amazon.com/images/I/81-i8zMUzvL._SY675_.jpg",
          description : "Women's Handbag",
          price: "999"
      }
    
      ]
    

    return (

        <div className='handbags'>

            <p className='title handbags-title display-5 fw-bold text-center mb-3 py-2'>Handbags</p>

            <Row xs={1} md={2} xl={4}className='gx-0' >

            {

             handbags.map((handbag,index)=>
        (
            <Col>
              <Card as={Link} to={`/handbags/${handbag.title}/${handbag.description}`} className='m-3 handbags-card text-decoration-none'>
                <Card.Img className='handbags-card-img img-fluid' variant="top" src={handbag.img} />
                <Card.Body>
                    <Card.Title className='handbags-card-title text-center fs-5 fw-bolder'>{handbag.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>{handbag.description}</p>
                        <p>Price : ₹{handbag.price}</p>
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>

        ))
    }

            </Row>

            <Footer/>

        </div>
    )
}

export default Handbags