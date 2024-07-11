import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useEffect } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function LenovoLaptops() 
{
    useEffect(()=>
        {
            window.scrollTo(0,0);
        },[]);

        let lenovoLaptops = [
            {
                title : "Lenovo IdeaPad Slim 3",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718028177/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303421_0_xa8tdy.png?tr=w-640",
                processor : "Intel Core i5, 12th Gen",
                specs : "16GB RAM, 512GB SSD",
                price: "54,390"
            },
    
            {
                title : "Lenovo IdeaPad Slim 5",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718028151/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275679_0_cbxchx.png?tr=w-640",
                processor : "Intel Core i5, 12th Gen  ",
                specs : "16GB RAM, 1TB SSD",
                price: "64,990"
            },
    
            {
                title : "Lenovo IdeaPad Gaming 3",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715941421/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272402_0_bskukm.png?tr=w-640",
                processor : " AMD Ryzen 7",
                specs : "8GB RAM, 512GB SSD",
                price: "66,290"
            },
    
            {
                title : "Lenovo Yoga Slim 7 ",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1720075433/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306014_0_ppacea.png?tr=w-640",
                processor : "Intel Core Ultra 7",
                specs : "32GB RAM, 1TB SSD",
                price: "1,07,990"
            },
    
            {
                title : "Lenovo Legion 5i",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717510271/Croma%20Assets/Computers%20Peripherals/Laptop/Images/305720_0_ohvqhp.png?tr=w-640",
                processor : "Intel Core i7, 14th Gen",
                specs : "16GB RAM, 1TB SSD",
                price: "1,67,990"
            },
    
            {
                title : "Lenovo IdeaPad Flex 5i",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715932939/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274250_0_hsgi8j.png?tr=w-640",
                processor : "Intel Core i3, 12th Gen",
                specs : " 8GB RAM, 512GB SSD",
                price: "54,190"
            },
    
            {
                title : "Lenovo Yoga 9",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715937238/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275398_0_rjyzeq.png?tr=w-640",
                processor : "Intel Core i7, 13th Gen",
                specs : "16GB RAM, 1TB SSD",
                price: "1,65,990"
            },
    
            {
                title : "Lenovo IdeaPad 3",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715936757/Croma%20Assets/Computers%20Peripherals/Laptop/Images/268511_0_d05yxx.png?tr=w-640",
                processor : "Intel Core i3, 12th Gen",
                specs : "8GB RAM, 512GB SSD",
                price: "43,990"
            }
        ]

  return (
   
    <div className='lenovo-laptops'>

    <p className='title lenovo-laptops-title display-5 fw-bold text-center mb-3 py-2'>Lenovo Laptops</p>

    <Row xs={1} md={2} xl={4} className='gx-0' >

    {
        lenovoLaptops.map((lenovoLaptop,index)=>
        (
            <Col>
              <Card as={Link} to={`/laptops/lenovo/${lenovoLaptop.title}`} className='m-3 lenovo-laptops-card text-decoration-none'>
                <Card.Img className='lenovo-laptops-card-img img-fluid' variant="top" src={lenovoLaptop.img} />
                <Card.Body>
                    <Card.Title className='lenovo-laptops-card-title text-center fs-5 fw-bolder'>{lenovoLaptop.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>{lenovoLaptop.processor}</p>
                        <p>({lenovoLaptop.specs})</p>
                        <p>Price : ₹{lenovoLaptop.price}</p>
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

export default LenovoLaptops