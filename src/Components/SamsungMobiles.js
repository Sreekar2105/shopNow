import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useEffect } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function SamsungMobiles() {
    useEffect(()=>
        {
            window.scrollTo(0,0);
        },[]);

        let samsungMobiles = [
            {
                title : "SAMSUNG Galaxy S24 Ultra 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705640288/Croma%20Assets/Communication/Mobiles/Images/303838_oqpio4.png?tr=w-640",
                specs : "12GB RAM, 256GB",
                price: "1,23,999"
            },

            {
                title : "SAMSUNG Galaxy Z Fold5 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708667175/Croma%20Assets/Communication/Mobiles/Images/275452_0_y1res8.png?tr=w-640",
                specs : "12GB RAM, 256GB",
                price: "1,49,999"
            },

            {
                title : "SAMSUNG Galaxy A34 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708664004/Croma%20Assets/Communication/Mobiles/Images/270269_0_vmrt23.png?tr=w-640",
                specs : "8GB RAM, 128GB",
                price: "24,499"
            },

            {
                title : "SAMSUNG Galaxy M14 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709106312/Croma%20Assets/Communication/Mobiles/Images/305190_kwxdnm.png?tr=w-640",
                specs : "4GB RAM, 64GB",
                price: "13,999"
            },

            {
                title : "SAMSUNG Galaxy A54 5G ",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708677831/Croma%20Assets/Communication/Mobiles/Images/270492_0_iyufdm.png?tr=w-640",
                specs : "8GB RAM, 256GB",
                price: "35,499"
            },

            {
                title : "SAMSUNG Galaxy A05",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708668439/Croma%20Assets/Communication/Mobiles/Images/302226_0_czgzm3.png?tr=w-640",
                specs : "6GB RAM, 128GB",
                price: "10,499"
            },

            {
                title : "SAMSUNG Galaxy S23 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715785384/Croma%20Assets/Communication/Mobiles/Images/268872_0_gmcdgo.png?tr=w-640",
                specs : "8GB RAM, 256GB",
                price: "65,999"
            },

            {
                title : "SAMSUNG Galaxy F55 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1716814524/Croma%20Assets/Communication/Mobiles/Images/306616_0_cyi8gu.png?tr=w-640",
                specs : "8GB RAM, 256GB",
                price: "29,999"
            }
        ]

    return (

        <div className='samsung-mobiles'>

            <p className='title samsung-mobiles-title display-5 fw-bold text-center mb-3 py-2'>Samsung Mobiles</p>

            <Row xs={2} md={3} lg={4} className='gx-0' >

            {
             samsungMobiles.map((samsungMobile,index)=>
        (
            <Col>
              <Card as={Link} to={`/mobiles/samsung/${samsungMobile.title}`} className='m-3 samsung-mobiles-card text-decoration-none'>
                <Card.Img className='samsung-mobiles-card-img img-fluid' variant="top" src={samsungMobile.img} />
                <Card.Body>
                    <Card.Title className='samsung-mobiles-card-title text-center fs-5 fw-bolder'>{samsungMobile.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>({samsungMobile.specs})</p>
                        <p>Price : ₹{samsungMobile.price}</p>
                    </Card.Text>
                </Card.Body>
              </Card>

            </Col>

        ))
    }


            </Row>

            <Footer/>

        </div>)
}

export default SamsungMobiles