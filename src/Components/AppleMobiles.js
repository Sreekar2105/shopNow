import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useEffect } from 'react'
import Footer from './Footer';
import { Link } from 'react-router-dom';


function AppleMobiles() 
{
    useEffect(()=>
        {
            window.scrollTo(0,0);
        },[]);

        let appleMobiles = [
            {
                title : "Apple iPhone 15 Pro Max",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708678829/Croma%20Assets/Communication/Mobiles/Images/300822_0_vy3iid.png?tr=w-640",
                specs : "256GB Storage",
                price: "1,50,090"
            },

            {
                title : "Apple iPhone 15",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708678993/Croma%20Assets/Communication/Mobiles/Images/300825_0_z8d8lq.png?tr=w-640",
                specs : "128GB Storage",
                price: "71,290"
            },

            {
                title : "Apple iPhone 15 Plus",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708673964/Croma%20Assets/Communication/Mobiles/Images/300780_0_puippj.png?tr=w-640",
                specs : "256GB Storage",
                price: "89,990"
            },

            {
                title : "Apple iPhone 14",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708672703/Croma%20Assets/Communication/Mobiles/Images/261933_0_cvlbab.png?tr=w-640",
                specs : "128GB Storage",
                price: "61,790"
            },

            {
                title : "Apple iPhone 13",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708671239/Croma%20Assets/Communication/Mobiles/Images/243466_0_jepbxv.png?tr=w-640",
                specs : "256GB Storage",
                price: "61,490"
            },

            {
                title : "Apple iPhone 14 Plus",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708677210/Croma%20Assets/Communication/Mobiles/Images/261955_0_t6gltc.png?tr=w-640",
                specs : "512GB Storage",
                price: "96,994"
            },

            {
                title : "Apple iPhone 12 Mini",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688730635/Croma%20Assets/Communication/Mobiles/Images/234255_qkyqry.png?tr=w-640",
                specs : "64GB Storage",
                price: "59,900"
            },

            {
                title : "Apple iPhone 14 Pro Max",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662703416/Croma%20Assets/Communication/Mobiles/Images/261991_hhfa33.png?tr=w-640",
                specs : "512GB Storage",
                price: "1,50,994"
            }
        ]

  return (

    <div className='apple-mobiles'>

    <p className='title apple-mobiles-title display-5 fw-bold text-center mb-3 py-2'>Apple Iphone Mobiles</p>

    <Row xs={1} md={2} xl={4}className='gx-0' >

    {
        appleMobiles.map((appleMobile,index)=>
        (
            <Col className='mb-3'>
              <Card as={Link} to={`/mobiles/apple/${appleMobile.title}`} className='m-3 apple-mobiles-card text-decoration-none'>
                <Card.Img className='apple-mobiles-card-img img-fluid' variant="top" src={appleMobile.img} />
                <Card.Body>
                    <Card.Title className='apple-mobiles-card-title text-center fs-5 fw-bolder'>{appleMobile.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>({appleMobile.specs})</p>
                        <p>Price : ₹{appleMobile.price}</p>
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

export default AppleMobiles