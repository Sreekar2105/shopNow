import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function MensShoes() {

  let shoes = [
    {
        title : "OFF LIMITS",
        img : "https://m.media-amazon.com/images/I/71tyvmPqhUL._SY695_.jpg",
        description : "Men's STUSSYY Running Shoes",
        price: "1,859"
    },
  
    {
        title : "ASIAN",
        img : "https://m.media-amazon.com/images/I/81rgoJlkVEL._SY695_.jpg",
        description : "Men's Casual Sneaker Shoes",
        price: "699"
    },
  
    {
        title : "U.S. POLO ASSN.",
        img : "https://m.media-amazon.com/images/I/81p-CVzadWL._SY675_.jpg",
        description : "Mens Monton 5.0 Sneaker",
        price: "1,919"
    },
  
    {
        title : "SPYKAR",
        img : "https://assets.ajio.com/medias/sys_master/root/20240327/sdX3/66034ac516fd2c6e6a82e215/-473Wx593H-467204776-white-MODEL.jpg",
        description : "Men Chestar Suede Lace-Up Sneakers",
        price: "2,000"
    },
  
    {
        title : "Red Chief",
        img : "https://img.tatacliq.com/images/i13/437Wx649H/MP000000016261235_437Wx649H_202308300505351.jpeg",
        description : "Mens Black Casual Boots",
        price: "2,477"
    },
  
    {
        title : "SPARX",
        img : "https://m.media-amazon.com/images/I/51VjzYAuF6L._SY695_.jpg",
        description : "Men Casual Shoe",
        price: "769"
    },
  
    {
        title : "Bacca Bucci",
        img : "https://m.media-amazon.com/images/I/71g6HFh3g1L._SY675_.jpg",
        description : "Classic Sneakers for Men",
        price: "1,379"
    },
  
    {
        title : "Puma",
        img : "https://m.media-amazon.com/images/I/51tQP3Ha4YL._SY695_.jpg",
        description : "men Propelix Sneaker",
        price: "2,309"
    },

    {
      title : "The Aurous",
      img : "https://m.media-amazon.com/images/I/41834ML+yWL.jpg",
      description : "Owen Laceup Sneakers for Men",
      price: "1,399"
  },

  {
      title : "Wtrizak",
      img : "https://m.media-amazon.com/images/I/81vXX8nNBJL._SY675_.jpg",
      description : "Men's Stylish Synthetic Lace-ups Boots",
      price: "499"
  },

  {
      title : "ASIAN",
      img : "https://m.media-amazon.com/images/I/81EpS49EiXL._SY695_.jpg",
      description : " White Casual Sneaker Hi-Neck Shoes",
      price: "699"
  },

  {
      title : "The Aurous",
      img : "https://m.media-amazon.com/images/I/51557JEiyvL.jpg",
      description : "Raven Ankle High Laceup Sneakers",
      price: "1,399"
  }

  ]


  return (

    <div className='mens-shoes'>

      <p className='title mens-shoes-title display-5 fw-bold text-center mb-3 py-2'>Shoes</p>

      <Row xs={1} md={2} xl={4}className='gx-0' >

      {
             shoes.map((shoe,index)=>
        (
            <Col>
              <Card as={Link} to={`/men's-shoes/${shoe.title}/${shoe.description}`} className='m-3 mens-shoes-card text-decoration-none'>
                <Card.Img className='mens-shoes-card-img img-fluid' variant="top" src={shoe.img} />
                <Card.Body>
                    <Card.Title className='mens-shoes-card-title text-center fs-5 fw-bolder'>{shoe.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>{shoe.description}</p>
                        <p>Price : ₹{shoe.price}</p>
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

export default MensShoes