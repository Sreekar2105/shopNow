import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useEffect } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function DellLaptops() 
{
    useEffect(()=>
        {
            window.scrollTo(0,0);
        },[]);

        let dellLaptops = [
            {
                title : "DELL Inspiron 15 3520",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715941440/Croma%20Assets/Computers%20Peripherals/Laptop/Images/269367_0_mtjdjs.png?tr=w-640",
                processor : "Intel Core i3, 12th Gen",
                specs : "8GB RAM, 512GB SSD",
                price: "37,990"
            },
    
            {
                title : "DELL G15-5530",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715929043/Croma%20Assets/Computers%20Peripherals/Laptop/Images/273309_0_p2sxfd.png?tr=w-640",
                processor : "Intel Core i5, 13th Gen",
                specs : "16GB RAM, 512GB SSD",
                price: "77,499"
            },
    
            {
                title : "DELL Inspiron 5330",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718356796/Croma%20Assets/Computers%20Peripherals/Laptop/Images/305864_0_n4bnoh.png?tr=w-640",
                processor : "Intel Core Ultra 7, 14th Gen",
                specs : "16GB RAM, 1TB SSD",
                price: "99,990"
            },
    
            {
                title : "DELL Inspiron 7430 ",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710426649/Croma%20Assets/Computers%20Peripherals/Laptop/Images/304179_kw5ntp.png?tr=w-640",
                processor : "Intel Core i3, 13th Gen ",
                specs : "8GB RAM, 512GB SSD",
                price: "59,990"
            },
    
            {
                title : "DELL Inspiron 5445",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718356780/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306599_0_c35rna.png?tr=w-640",
                processor : "AMD Ryzen 5, 8th Gen",
                specs : "16GB RAM, 1TB SSD",
                price: "68,999"
            },
    
            {
                title : "DELL Inspiron 14 Plus",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718356853/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306649_0_kynepv.png?tr=w-640",
                processor : "Intel Core Ultra 7",
                specs : "16GB RAM, 1TB SSD",
                price: "1,05,599"
            },
    
            {
                title : "DELL Vostro 3425",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718604702/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274073_0_n3hur8.png?tr=w-640",
                processor : "AMD Ryzen 5, 5th Gen",
                specs : "16GB RAM, 512GB SSD",
                price: "63,990"
            },
    
            {
                title : "DELL Alienware M15",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1672939468/Croma%20Assets/Computers%20Peripherals/Laptop/Images/267508_vhpw9j.png?tr=w-640",
                processor : "AMD Ryzen 7",
                specs : "16GB RAM, 1TB SSD",
                price: "1,93,699"
            }
        ]

  return (
  
    <div className='dell-laptops'>

    <p className='title dell-laptops-title display-5 fw-bold text-center mb-3 py-2'>Dell Laptops</p>

    <Row xs={1} md={2} xl={4} className='gx-0' >

    {
        dellLaptops.map((dellLaptop,index)=>
        (
            <Col>
              <Card as={Link} to={`/laptops/dell/${dellLaptop.title}`} className='m-3 dell-laptops-card text-decoration-none'>
                <Card.Img className='dell-laptops-card-img img-fluid' variant="top" src={dellLaptop.img} />
                <Card.Body>
                    <Card.Title className='dell-laptops-card-title text-center fs-5 fw-bolder'>{dellLaptop.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>{dellLaptop.processor}</p>
                        <p>({dellLaptop.specs})</p>
                        <p>Price : ₹{dellLaptop.price}</p>
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

export default DellLaptops