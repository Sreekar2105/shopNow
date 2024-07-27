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
                img : "https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/0/c08403046_1_4.png",
                processor : "Intel Core i5, 12th Gen",
                specs : "8GB RAM, 512GB SSD",
                price: "56,999"
            },
    
            {
                title : "HP Spectre x360",
                img : "https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/2/3/23c2_spectre_herbie_16_nightfall_black_t_9mp_ir_cam_fpr_win11_core_set_front_whitebg_2.png",
                processor : "Intel Core Ultra 7",
                specs : "16GB RAM, 1TB SSD",
                price: "1,59,999"
            },
    
            {
                title : "HP Pavilion Plus 14",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1719385355/Croma%20Assets/Computers%20Peripherals/Laptop/Images/304952_0_rbsgkf.png?tr=w-640",
                processor : "Intel Core i5, 13th Gen",
                specs : "16GB RAM, 512GB SSD",
                price: "72,999"
            },
    
            {
                title : "HP Envy x360 14",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1719374388/Croma%20Assets/Gaming/Laptop/Images/307697_3_xitu9f.png?tr=w-640",
                processor : "AMD Ryzen 5",
                specs : "16GB RAM, 512GB SSD",
                price: "89,999"
            },
    
            {
                title : "HP 15s",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718881754/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306835_0_k8cpkd.png?tr=w-640",
                processor : "Intel Core i5, 12th Gen",
                specs : "16GB RAM, 512GB SSD",
                price: "66,990"
            },
    
            {
                title : "HP OMEN 16",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701615819/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275634_0_k6bc67.png?tr=w-640",
                processor : "Intel Core i7, 13th Gen",
                specs : "16GB RAM, 1TB SSD",
                price: "1,19,999"
            },
    
            {
                title : "HP 14a Chromebook",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715937431/Croma%20Assets/Computers%20Peripherals/Laptop/Images/244320_0_ujivux.png?tr=w-640",
                processor : "Intel Celeron",
                specs : "4GB RAM, 64GB",
                price: "26,999"
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
            <Col className='mb-3'>
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


</div>

)
}

export default HpLaptops