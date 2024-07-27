import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useEffect } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function IqooMobiles() 
{
    useEffect(()=>
        {
            window.scrollTo(0,0);
        },[]);

        let iqooMobiles = [
            {
                title : "iQOO Neo9 Pro",
                img : "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1710914304146/9ee4b1ba938e86740fd238ae6c827e2c.png.webp",
                specs : "8GB RAM, 128GB",
                price: "34,999"
            },

            {
                title : "iQOO Z9x 5G",
                img : "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1715752204692/6f2ef7da5209099adaafc8fa091138f4.png.webp",
                specs : "6GB RAM, 128GB",
                price: "14,499"
            },

            {
                title : "iQOO 12 5G",
                img : "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1708057292093/ef19efd1e312e226df58706560764236.png.webp",
                specs : "12GB RAM, 256GB",
                price: "52,999"
            },

            {
                title : "iQOO Neo7 Pro 5G",
                img : "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1688111444535/7e45e02141fa274a045850aa01bfe097.png.webp",
                specs : "8GB RAM, 128GB",
                price: "39,999"
            },

            {
                title : "iQOO Z9 5G",
                img : "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1710219236598/fb6ae2f748dd7e0de70b02f5a34b06db.png.webp",
                specs : "8GB RAM, 128GB",
                price: "19,999"
            },

            {
                title : "iQOO Z6 Lite 5G",
                img : "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1675770571235/7f3d777b4ee81c2b3886ba1bcd356c89.png.webp",
                specs : "6GB RAM, 128GB",
                price: "12,999"
            },

            {
                title : "iQOO Z7 Pro 5G",
                img : "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1693289522913/c5501c4e67f4d78415056f80497be52b.png.webp",
                specs : "8GB RAM, 256GB",
                price: "23,999"
            },

            {
                title : "iQOO Z7s 5G",
                img : "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1684491613392/47568f266a54bdd9385caf0426a22645.png.webp",
                specs : "6GB RAM, 128GB",
                price: "15,999"
            }
        ]

  return (

    <div className='iqoo-mobiles'>

    <p className='title iqoo-mobiles-title display-5 fw-bold text-center mb-3 py-2'>iQOO Mobiles</p>

    <Row xs={1} md={2} xl={4} className='gx-0' >

    {
       iqooMobiles.map((iqooMobile,index)=>
        (
            <Col className='mb-3'>
              <Card as={Link} to={`/mobiles/iqoo/${iqooMobile.title}`} className='m-3 iqoo-mobiles-card text-decoration-none'>
                <Card.Img className='iqoo-mobiles-card-img img-fluid' variant="top" src={iqooMobile.img} />
                <Card.Body>
                    <Card.Title className='iqoo-mobiles-card-title text-center fs-5 fw-bolder'>{iqooMobile.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>({iqooMobile.specs})</p>
                        <p>Price : ₹{iqooMobile.price}</p>
                    </Card.Text>
                </Card.Body>
              </Card>

            </Col>

        ))
    }


    </Row>


</div>

)
}

export default IqooMobiles