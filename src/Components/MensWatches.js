import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function MensWatches() {

  let watches = [
    {
        title : "NAVIFORCE",
        img : "https://m.media-amazon.com/images/I/41l3RGAxa1L.jpg",
        description : "Analog-Digital Black Dial Men's Watch",
        price: "1,899"
    },
  
    {
        title : "Sonata",
        img : "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwcfdebbd1/images/Sonata/Catalog/77105NM09W_2.jpg?sw=800&sh=800",
        description : "Aspire Quartz Analog Stainless Steel Strap Watch for Men",
        price: "1,795"
    },
  
    {
        title : "Titan",
        img : "https://m.media-amazon.com/images/I/51z58xyb64L._SX679_.jpg",
        description : "Analog Men's Stainless Steel Watch",
        price: "2,919"
    },
  
    {
        title : "V2A",
        img : "https://m.media-amazon.com/images/I/71Sk2OJHKdL._SX569_.jpg",
        description : "Military Green Chronograph Analogue Watch",
        price: "749"
    },
  
    {
        title : "jainx",
        img : "https://m.media-amazon.com/images/I/711myJ1QSVL._SX679_.jpg",
        description : "Premium Golden Metal Chain Analog Wrist Watch",
        price: "579"
    },
  
    {
        title : "CURREN",
        img : "https://m.media-amazon.com/images/I/61vOz3Op+KL._SX679_.jpg",
        description : "Fashion Digital Men's Watch",
        price: "2,590"
    },
  
    {
        title : "Relish",
        img : "https://m.media-amazon.com/images/I/81C2annjaSL._SX679_.jpg",
        description : "Silver Stainless Steel Case  Analog Watch",
        price: "379"
    },
  
    {
        title : "Fastrack",
        img : "https://m.media-amazon.com/images/I/61P+PcM1zDL._SX679_.jpg",
        description : "Men Leather Analog Black Dial Watch",
        price: "2,129"
    },

    {
      title : "CURREN",
      img : "https://m.media-amazon.com/images/I/714dig4zfNL._SX679_.jpg",
      description : "Analogue - Digital Men's Watch",
      price: "1,389"
  },

  {
      title : "SKMEI",
      img : "https://m.media-amazon.com/images/I/71v3CiM2TGL._SX679_.jpg",
      description : "New Wheels Rolling Creative Fashion Wristwatch",
      price: "1,790"
  },

  {
      title : "Sonata",
      img : "https://m.media-amazon.com/images/I/51LUPfkcMsL._SX679_.jpg",
      description : "Men Stainless Steel Silver Analog Watch",
      price: "1,099"
  },

  {
      title : "CASIO",
      img : "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/A/A1/A15/A158WA-1/assets/A158WA-1_Seq1.jpg.transform/main-visual-pc/image.jpg",
      description : "Vintage Unisex Digital Stainless Steel Watch",
      price: "1,695"
  }

  ]

  return (

    <div className='mens-watches'>

      <p className='title mens-watches-title display-5 fw-bold text-center mb-3 py-2'>Watches</p>

      <Row xs={1} md={2} xl={4} className='gx-0' >

      {
             watches.map((watch,index)=>
        (
            <Col>
              <Card as={Link} to={`/men's-watches/${watch.title}/${watch.description}`} className='m-3 mens-watches-card text-decoration-none'>
                <Card.Img className='mens-watches-card-img img-fluid' variant="top" src={watch.img} />
                <Card.Body>
                    <Card.Title className='mens-watches-card-title text-center fs-5 fw-bolder'>{watch.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>{watch.description}</p>
                        <p>Price : ₹{watch.price}</p>
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

export default MensWatches