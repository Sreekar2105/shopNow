import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useEffect } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function OneplusMobiles() 
{
    useEffect(()=>
        {
            window.scrollTo(0,0);
        },[]);

        let oneplusMobiles = [
            {
                title : "OnePlus Nord CE4 Lite 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1719316048/Croma%20Assets/Communication/Mobiles/Images/307505_0_tqvevo.png?tr=w-640",
                specs : "8GB RAM, 256GB",
                price: "22,999"
            },

            {
                title : "OnePlus 12R 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1706790957/Croma%20Assets/Communication/Mobiles/Images/304699_c7shme.png?tr=w-640",
                specs : "16GB RAM, 256GB",
                price: "43,999"
            },

            {
                title : "OnePlus 12 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1706175967/Croma%20Assets/Communication/Mobiles/Images/304449_pd5m7u.png?tr=w-640",
                specs : "12GB RAM, 256GB",
                price: "64,999"
            },

            {
                title : "OnePlus 10 Pro 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1666992010/Croma%20Assets/Communication/Mobiles/Images/250719_t2svgl.png?tr=w-640",
                specs : "8GB RAM, 128GB",
                price: "43,194"
            },

            {
                title : "OnePlus Open 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705481567/Croma%20Assets/Communication/Mobiles/Images/304139_bssd58.png?tr=w-640",
                specs : "16GB RAM, 512GB",
                price: "1,39,999"
            },

            {
                title : "OnePlus Nord CE 3 Lite 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697017827/Croma%20Assets/Communication/Mobiles/Images/270657_0_ywfphh.png?tr=w-640",
                specs : "8GB RAM, 256GB",
                price: "21,999"
            },

            {
                title : "OnePlus 10R 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662436197/Croma%20Assets/Communication/Mobiles/Images/252418_hz8qqi.png?tr=w-640",
                specs : "8GB RAM, 128GB",
                price: "34,999"
            },

            {
                title : "OnePlus Nord CE2 Lite 5G ",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708677455/Croma%20Assets/Communication/Mobiles/Images/251803_0_ngbkx9.png?tr=w-640",
                specs : "6GB RAM, 128GB",
                price: "17,999"
            }
        ]

  return (

    <div className='oneplus-mobiles'>

    <p className='title oneplus-mobiles-title display-5 fw-bold text-center mb-3 py-2'>OnePlus Mobiles</p>

    <Row xs={1} md={2} xl={4} className='gx-0' >

    {
       oneplusMobiles.map((oneplusMobile,index)=>
        (
            <Col>
              <Card as={Link} to={`/mobiles/oneplus/${oneplusMobile.title}`} className='m-3 oneplus-mobiles-card text-decoration-none'>
                <Card.Img className='oneplus-mobiles-card-img img-fluid' variant="top" src={oneplusMobile.img} />
                <Card.Body>
                    <Card.Title className='oneplus-mobiles-card-title text-center fs-5 fw-bolder'>{oneplusMobile.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>({oneplusMobile.specs})</p>
                        <p>Price : ₹{oneplusMobile.price}</p>
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

export default OneplusMobiles