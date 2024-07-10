import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../App.css'
import file from '../images/file.png'
import Footer from './Footer';
import { Link } from 'react-router-dom';

function NewArrivals() {

  let newArrivals = [
    {
        title : "Realme Narzo N65 5G",
        img : "https://image01.realme.net/general/20240525/1716648996190151df9e83082403b9747f7dfeec42cee.png.webp?width=1440&height=1440&size=485273",
        processor : "",
        specs : "(6GB RAM,128GB)",
        description : "",
        price: "12,499"
    },

    {
        title : "OnePlus Nord CE4 Lite 5G",
        img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1719316048/Croma%20Assets/Communication/Mobiles/Images/307505_0_tqvevo.png?tr=w-640",
        processor : "",
        specs : "(8GB RAM, 256GB)",
        description : "",
        price: "22,999"
    },

    {
        title : "iQOO Z9x 5G",
        img : "https://asia-exshopstatic-vivofs.vivo.com/KuCZNhz3cVxH4yrP/my/1712640554781/ca3d5e8709fd4d21a47988c68b0d9336.png.webp",
        processor : "",
        specs : "(6GB RAM,128GB)",
        description : "",
        price: "14,499"
    },

    {
        title : "Samsung Galaxy F55 5G",
        img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1716814524/Croma%20Assets/Communication/Mobiles/Images/306616_0_cyi8gu.png?tr=w-640",
        processor : "",
        specs : "(8GB RAM,256GB)",
        description : "",
        price: "29,999"
    },

    {
        title : "acer Aspire ALG",
        img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718093583/Croma%20Assets/Computers%20Peripherals/Laptop/Images/307139_pksilm.png?tr=w-640",
        processor : "Intel core i5,12th Gen",
        specs : "(16GB RAM, 512GB SSD)",
        description : "",
        price: "64,999"
    },

    {
        title : "ASUS Vivobook S14 ",
        img : "https://dlcdnwebimgs.asus.com/gain/c6a3f3a4-a06b-4ff0-8d6e-48598f97ede2/w800",
        processor : "AMD Ryzen 5",
        specs : "(16GB RAM, 1TB SSD)",
        description : "",
        price: "89,990"
    },

    {
        title : "CASIO",
        img : "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/A/A1/A16/a168xes-1b/assets/A168XES-1B.png.transform/main-visual-pc/image.png",
        processor : "",
        specs : "",
        description : "Vintage Unisex Digital Stainless Steel Watch",
        price: "1,695"
    },

    {
        title : "Sonata",
        img : "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa931c91c/images/Sonata/Catalog/77105NM09W_1.jpg?sw=800&sh=800",
        processor : "",
        specs : "",
        description : "Aspire Quartz Analog Stainless Steel Strap Watch for Men",
        price: "1,795"
    }
]


  return (
    <>

      <p className='title new-arrivals fs-1 fw-bold text-center mt-5 mb-3 mx-3 py-2 rounded-3 overflow-x-auto'>New Arrivals</p>

      <Row xs={2} md={3} lg={4} className='gx-0' >

      {
        newArrivals.map((newArrival,index)=>
        (
            <Col>
              <Card as={Link} to={`/new-arrivals/${newArrival.title}/${newArrival.description}`} className='m-3 new-arrivals-card text-decoration-none'>
                <Card.Img className='new-arrivals-card-img img-fluid' variant="top" src={newArrival.img} />
                <Card.Body>
                    <Card.Title className='new-arrivals-card-title text-center fs-5 fw-bolder'>{newArrival.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>{newArrival.description}</p>
                        <p>{newArrival.processor}</p>
                        <p>{newArrival.specs}</p>
                        <p>Price : ₹{newArrival.price}</p>
                    </Card.Text>
                </Card.Body>
              </Card>

            </Col>

        ))
    }


      </Row>

      <Footer/>
      
      </>
  )
}

export default NewArrivals;