import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useEffect } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import pic1 from '../images/download.png'
import pic2 from '../images/pro5.png'

function XiaomiMobiles() 
{
    useEffect(()=>
        {
            window.scrollTo(0,0);
        },[]);

        let xiaomiMobiles = [
            {
                title : "Xiaomi 14 CIVI 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718891338/Croma%20Assets/Communication/Mobiles/Images/307339_0_ioldto.png?tr=w-640",
                specs : "8GB RAM, 256GB",
                price: "42,999"
            },

            {
                title : "Xiaomi 14 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713460754/Croma%20Assets/Communication/Mobiles/Images/305330_0_xiugyy.png?tr=w-640",
                specs : "12GB RAM, 512GB",
                price: "79,999"
            },

            {
                title : "Xiaomi 11i HyperCharge 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662443887/Croma%20Assets/Communication/Mobiles/Images/247121_knf8lh.png?tr=w-640",
                specs : "6GB RAM, 128GB",
                price: "29,990"
            },

            {
                title : "Xiaomi 11 Lite NE 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662440359/Croma%20Assets/Communication/Mobiles/Images/244380_ozkoan.png?tr=w-640",
                specs : "6GB RAM, 128GB",
                price: "31,999"
            },

            {
                title : "Xiaomi 14 Ultra 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1712665285/Croma%20Assets/Communication/Mobiles/Images/306083_rglnk9.png?tr=w-640",
                specs : "16GB RAM, 512GB",
                price: "99,999"
            },

            {
                title : "Xiaomi 11X Pro 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708673791/Croma%20Assets/Communication/Mobiles/Images/234456_0_amwyyc.png?tr=w-640",
                specs : "8GB RAM, 128GB",
                price: "47,999"
            },

            {
                title : "Xiaomi 12 Pro 5G",
                img :pic1,
                specs : "12GB RAM, 256GB",
                price: "51,990"
            },

            {
                title : "Xiaomi 11T Pro 5G",
                img : pic2,
                specs : "8GB RAM, 256GB",
                price: "31,999"
            }
        ]

  return (

    <div className='xiaomi-mobiles'>

    <p className='title xiaomi-mobiles-title display-5 fw-bold text-center mb-3 py-2'>Xiaomi Mobiles</p>

    <Row xs={1} md={2} xl={4} className='gx-0' >

    {
             xiaomiMobiles.map((xiaomiMobile,index)=>
        (
            <Col>
              <Card as={Link} to={`/mobiles/xiaomi/${xiaomiMobile.title}`} className='m-3 xiaomi-mobiles-card text-decoration-none'>
                <Card.Img className='xiaomi-mobiles-card-img img-fluid' variant="top" src={xiaomiMobile.img} />
                <Card.Body>
                    <Card.Title className='xiaomi-mobiles-card-title text-center fs-5 fw-bolder'>{xiaomiMobile.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>({xiaomiMobile.specs})</p>
                        <p>Price : ₹{xiaomiMobile.price}</p>
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

export default XiaomiMobiles