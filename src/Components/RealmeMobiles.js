import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useEffect } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function RealmeMobiles() 
{
    useEffect(()=>
        {
            window.scrollTo(0,0);
        },[]);

        let realmeMobiles = [
            {
                title : "realme 12 Pro+ 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1706609092/Croma%20Assets/Communication/Mobiles/Images/304495_0_rfqri7.png?tr=w-640",
                specs : "12GB RAM, 256GB",
                price: "30,999"
            },

            {
                title : "realme GT 6 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718990379/Croma%20Assets/Communication/Mobiles/Images/307769_0_cyfqam.png?tr=w-640",
                specs : "8GB RAM, 256GB",
                price: "40,999"
            },

            {
                title : "realme 12x 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1712161197/Croma%20Assets/Communication/Mobiles/Images/305997_0_ojnklw.png?tr=w-640",
                specs : "8GB RAM, 128GB",
                price: "14,999"
            },

            {
                title : "realme C67 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702539370/Croma%20Assets/Communication/Mobiles/Images/303220_dhmtur.png?tr=w-640",
                specs : "4GB RAM, 128GB",
                price: "12,999"
            },

            {
                title : "realme 11 Pro 5G",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708663605/Croma%20Assets/Communication/Mobiles/Images/273448_0_x83vqb.png?tr=w-640",
                specs : "12GB RAM, 256GB",
                price: "27,999"
            },

            {
                title : "realme NARZO N65 5G",
                img : "https://image01.realme.net/general/20240525/1716648996190151df9e83082403b9747f7dfeec42cee.png.webp?width=1440&height=1440&size=485273",
                specs : "6GB RAM, 128GB",
                price: "12,499"
            },

            {
                title : "realme NARZO 70 5G",
                img : "https://image01.realme.net/general/20240418/17134210834336fd18bd119864a1ba4907fc1512daa04.png.webp?width=1440&height=1440&size=425650",
                specs : "8GB RAM, 128GB",
                price: "16,999"
            },

            {
                title : "realme 10 Pro+ 5G",
                img : "https://image01.realme.net/general/20221125/1669370126331.png.webp",
                specs : "8GB RAM, 256GB",
                price: "27,999"
            }
        ]

  return (

    <div className='realme-mobiles'>

    <p className='title realme-mobiles-title display-5 fw-bold text-center mb-3 py-2'>Realme Mobiles</p>

    <Row xs={1} md={2} xl={4} className='gx-0' >

    {
       realmeMobiles.map((realmeMobile,index)=>
        (
            <Col>
              <Card as={Link} to={`/mobiles/realme/${realmeMobile.title}`} className='m-3 realme-mobiles-card text-decoration-none'>
                <Card.Img className='realme-mobiles-card-img img-fluid' variant="top" src={realmeMobile.img} />
                <Card.Body>
                    <Card.Title className='realme-mobiles-card-title text-center fs-5 fw-bolder'>{realmeMobile.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>({realmeMobile.specs})</p>
                        <p>Price : ₹{realmeMobile.price}</p>
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

export default RealmeMobiles