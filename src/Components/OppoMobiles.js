import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useEffect } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function OppoMobiles() 
{
    useEffect(()=>
        {
            window.scrollTo(0,0);
        },[]);

        let oppoMobiles = [
            {
                title : "Oppo F27 Pro+ 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718286623/Croma%20Assets/Communication/Mobiles/Images/307373_0_sa0jpq.png?tr=w-640",
                specs : "8GB RAM, 128GB",
                price: "27,999"
            },

            {
                title : "Oppo Reno 10 Pro 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708665559/Croma%20Assets/Communication/Mobiles/Images/274550_0_ow83jw.png?tr=w-640",
                specs : "12GB RAM, 256GB",
                price: "34,199"
            },

            {
                title : "Oppo A59 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703302054/Croma%20Assets/Communication/Mobiles/Images/303142_lwvrwm.png?tr=w-640",
                specs : "6GB RAM, 128GB",
                price: "15,499"
            },

            {
                title : "Oppo F25 Pro 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709122942/Croma%20Assets/Communication/Mobiles/Images/305038_i2brcq.png?tr=w-640",
                specs : "8GB RAM, 128GB",
                price: "23,999"
            },

            {
                title : "Oppo A3 Pro 5G ",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718966572/Croma%20Assets/Communication/Mobiles/Images/307491_0_uhzzqx.png?tr=w-640",
                specs : "8GB RAM, 128GB",
                price: "17,999"
            },

            {
                title : "Oppo Find N3 Flip 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697519915/Croma%20Assets/Communication/Mobiles/Images/301750_kywods.png?tr=w-640",
                specs : "12GB RAM, 256GB",
                price: "74,999"
            },

            {
                title : "Oppo A78 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683557701/Croma%20Assets/Communication/Mobiles/Images/267795_0_bvlmaa.png?tr=w-640",
                specs : "8GB RAM, 128GB",
                price: "14,399"
            },

            {
                title : "OPPO F21s Pro 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708667455/Croma%20Assets/Communication/Mobiles/Images/261168_0_paum6e.png?tr=w-640",
                specs : "8GB RAM, 128GB",
                price: "36,999"
            }
        ]

  return (

    <div className='oppo-mobiles'>
        
        <p className='title oppo-mobiles-title display-5 fw-bold text-center mb-3 py-2'>OPPO Mobiles</p>
        
        <Row xs={1} md={2} xl={4} className='gx-0' >


    {
        oppoMobiles.map((oppoMobile,index)=>
        (
            <Col>
              <Card as={Link} to={`/mobiles/oppo/${oppoMobile.title}`} className='m-3 oppo-mobiles-card text-decoration-none'>
                <Card.Img className='oppo-mobiles-card-img img-fluid' variant="top" src={oppoMobile.img} />
                <Card.Body>
                    <Card.Title className='oppo-mobiles-card-title text-center fs-5 fw-bolder'>{oppoMobile.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>({oppoMobile.specs})</p>
                        <p>Price : ₹{oppoMobile.price}</p>
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

export default OppoMobiles