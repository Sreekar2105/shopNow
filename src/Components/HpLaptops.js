import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useEffect } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function HpLaptops() 
{
    useEffect(()=>
        {
            window.scrollTo(0,0);
        },[]);

        let hpLaptops = [
            {
                title : "HP Victus",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701616609/Croma%20Assets/Computers%20Peripherals/Laptop/Images/301167_0_ww3nld.png?tr=w-640",
                processor : "Intel Core i5, 12th Gen",
                specs : "8GB RAM, 512GB SSD",
                price: "56,999"
            },
    
            {
                title : "HP Victus Fa0998TX",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715931910/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272249_0_oojjvz.png?tr=w-640",
                processor : "Intel Core i5, 12th Gen ",
                specs : "16GB RAM, 512GB SSD",
                price: "69,399"
            },
    
            {
                title : "HP 15s-fq5112TU",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715940769/Croma%20Assets/Computers%20Peripherals/Laptop/Images/259476_0_pggwua.png?tr=w-640",
                processor : "Intel Core i5, 12th Gen",
                specs : "16GB RAM, 512GB SSD",
                price: "59,994"
            },
    
            {
                title : "HP Envy 13 x360-bf0078TU",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1668662663/Croma%20Assets/Computers%20Peripherals/Laptop/Images/261100_0_zbl1wh.png?tr=w-640",
                processor : "Intel Core i5, 12th Gen",
                specs : "8GB RAM, 512GB SSD",
                price: "79,990"
            },
    
            {
                title : "HP Pavilion DV2014TU",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715937707/Croma%20Assets/Computers%20Peripherals/Laptop/Images/259500_0_feuupr.png?tr=w-640",
                processor : "Intel Core i5, 12th Gen",
                specs : "16GB RAM, 512GB SSD",
                price: "66,990"
            },
    
            {
                title : "HP Pavilion Plus EH0025TU",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715940733/Croma%20Assets/Computers%20Peripherals/Laptop/Images/259478_0_lolu3v.png?tr=w-640",
                processor : "Intel Core i5, 12th Gen",
                specs : "16GB RAM, 512GB SSD",
                price: "71,994"
            },
    
            {
                title : "HP x2 11 Chromebook",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637664628/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245652_vlzjip.png?tr=w-640",
                processor : "Qualcomm Snapdragon 7c",
                specs : "8GB RAM, 128GB SSD",
                price: "39,990"
            },
    
            {
                title : "HP Victus 15",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1719385336/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306408_0_kywqlm.png?tr=w-640",
                processor : "Intel Core i5, 13th Gen",
                specs : "16GB RAM, 512GB SSD",
                price: "78,999"
            }
        ]

  return (

    <div className='hp-laptops'>

    <p className='title hp-laptops-title display-5 fw-bold text-center mb-3 py-2'>HP Laptops</p>

    <Row xs={1} md={2} xl={4} className='gx-0' >

    {
        hpLaptops.map((hpLaptop,index)=>
        (
            <Col>
              <Card as={Link} to={`/laptops/hp/${hpLaptop.title}`} className='m-3 hp-laptops-card text-decoration-none'>
                <Card.Img className='hp-laptops-card-img img-fluid' variant="top" src={hpLaptop.img} />
                <Card.Body>
                    <Card.Title className='hp-laptops-card-title text-center fs-5 fw-bolder'>{hpLaptop.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>{hpLaptop.processor}</p>
                        <p>({hpLaptop.specs})</p>
                        <p>Price : ₹{hpLaptop.price}</p>
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

export default HpLaptops