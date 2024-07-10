import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useEffect } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Nike() 
{
    useEffect(()=>
        {
            window.scrollTo(0,0);
        },[]);

        let nikeProducts = [
            {
                title : "Nike",
                img : "https://assets.ajio.com/medias/sys_master/root/20240506/O3L0/6638ed2f16fd2c6e6aed0650/-473Wx593H-469034062-black-MODEL.jpg",
                description : "Men Court Royale 2 NN Sneakers",
                price: "2,996"
            },

            {
                title : "Nike",
                img : "https://assets.ajio.com/medias/sys_master/root/20230417/RMXl/643d5e1c711cf97ba72e0854/-473Wx593H-469473060-white-MODEL3.jpg",
                description : "Women Gamma Force Lace-Up Sneaker",
                price: "5,352"
            },

            {
                title : "Nike",
                img : "https://assets.ajio.com/medias/sys_master/root/20240311/B0Rr/65eef70a05ac7d77bba89bbb/-1117Wx1400H-469564481-blue-MODEL.jpg",
                description : "Men Regular Fit Hooded Jacket",
                price: "2,473"
            },

            {
                title : "Nike",
                img : "https://assets.ajio.com/medias/sys_master/root/20240610/CYXH/6666f44f05ac7d77bbbdecca/-1117Wx1400H-469582400-white-MODEL.jpg",
                description : "Men Swoosh Logo Print Crew-Neck T-Shirt",
                price: "1,185"
            },

            {
                title : "Nike",
                img : "https://assets.ajio.com/medias/sys_master/root/20230518/y2rl/64663d18d55b7d0c63c3c006/-1117Wx1400H-469381083-brown-MODEL2.jpg",
                description : "Logo Print Round-Neck Top (Women)",
                price: "1,158"
            },

            {
                title : "Nike",
                img : "https://assets.ajio.com/medias/sys_master/root/20240604/f027/665ed1b016fd2c6e6a4980cd/-1117Wx1400H-469381135-red-MODEL.jpg",
                description : "Women AS DF Swrn Fitted Track Pants with Logo",
                price: "1,598"
            },

            {
                title : "Nike",
                img : "https://assets.ajio.com/medias/sys_master/root/20240611/agYK/666837c416fd2c6e6a8e3745/-1117Wx1400H-469381097-blue-MODEL.jpg",
                description : "Jacket with Logo Print",
                price: "1,878"
            },

            {
                title : "Nike",
                img : "https://assets.ajio.com/medias/sys_master/root/20240309/X4AU/65ec48d216fd2c6e6a48e7b7/-1117Wx1400H-469533797-blackgrey-MODEL.jpg",
                description : "Men Heathered Regular Fit Joggers",
                price: "3,428"
            }
        ]

  return (

    <div className='nike'>

    <p className='title nike-title display-5 fw-bold text-center mb-3 py-2'>Nike Products</p>

    <Row xs={2} md={3} lg={4} className='gx-0' >

    {
             nikeProducts.map((nikeProduct,index)=>
        (
            <Col>
              <Card as={Link} to={`/nike-products/${nikeProduct.description}`} className='m-3 nike-card text-decoration-none'>
                <Card.Img className='nike-card-img img-fluid' variant="top" src={nikeProduct.img} />
                <Card.Body>
                    <Card.Title className='nike-card-title text-center fs-5 fw-bolder'>{nikeProduct.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>{nikeProduct.description}</p>
                        <p>Price : ₹{nikeProduct.price}</p>
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

export default Nike