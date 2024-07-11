import { useEffect } from 'react';
import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import Footer from './Footer';
import { Link } from 'react-router-dom';


function AsusLaptops() 
{
    useEffect(()=>
        {
            window.scrollTo(0,0);
        },[]);

        let asusLaptops = [
            {
                title : "ASUS ROG Strix G16",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717510242/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306349_0_ujisxn.png?tr=w-640",
                processor : "Intel Core i7, 13th Gen",
                specs : "16GB RAM, 1TB SSD",
                price: "1,25,990"
            },
    
            {
                title : "ASUS ROG Strix G17",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705066189/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303511_oudgiy.png?tr=w-640",
                processor : "AMD Ryzen 7",
                specs : "16GB RAM, 512GB SSD",
                price: "78,990"
            },
    
            {
                title : "ASUS Vivobook 16X ",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715935296/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256967_0_gysso9.png?tr=w-640",
                processor : "AMD Ryzen 5",
                specs : "16GB RAM, 512GB SSD",
                price: "74,990"
            },
    
            {
                title : "ASUS Zenbook 14 ",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717401683/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306624_q93a3v.png?tr=w-640",
                processor : "Intel Evo Core Ultra 5",
                specs : "16GB RAM, 1TB SSD",
                price: "1,05,990"
            },
    
            {
                title : "ASUS Vivobook 15 ",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715935045/Croma%20Assets/Computers%20Peripherals/Laptop/Images/266653_0_tutsez.png?tr=w-640",
                processor : "Intel Core i3, 11th Gen",
                specs : "8GB RAM, 512GB SSD",
                price: "34,990"
            },
    
            {
                title : "ASUS TUF Gaming F15 ",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715929653/Croma%20Assets/Computers%20Peripherals/Laptop/Images/273491_0_xvztn7.png?tr=w-640",
                processor : "Intel Core i7, 12th Gen",
                specs : "16GB RAM, 512GB SSD",
                price: "99,990"
            },
    
            {
                title : "ASUS Vivobook S14",
                img : "https://dlcdnwebimgs.asus.com/gain/c6a3f3a4-a06b-4ff0-8d6e-48598f97ede2/w800",
                processor : "AMD Ryzen 5",
                specs : "16GB RAM, 1TB SSD",
                price: "89,990"
            },
    
            {
                title : "ASUS Vivobook S14 Flip",
                img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718604702/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272243_0_dze1yg.png?tr=w-640",
                processor : "Intel Core i5, 13th Gen ",
                specs : "16GB RAM, 512GB SSD",
                price: "72,990"
            }
        ]


  return (

    <div className='asus-laptops'>

    <p className='title asus-laptops-title display-5 fw-bold text-center mb-3 py-2'>Asus Laptops</p>

    <Row xs={1} md={2} xl={4}className='gx-0' >

    {
        asusLaptops.map((asusLaptop,index)=>
        (
            <Col>
              <Card as={Link} to={`/laptops/asus/${asusLaptop.title}`} className='m-3 asus-laptops-card text-decoration-none'>
                <Card.Img className='asus-laptops-card-img img-fluid' variant="top" src={asusLaptop.img} />
                <Card.Body>
                    <Card.Title className='asus-laptops-card-title text-center fs-5 fw-bolder'>{asusLaptop.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>{asusLaptop.processor}</p>
                        <p>({asusLaptop.specs})</p>
                        <p>Price : ₹{asusLaptop.price}</p>
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

export default AsusLaptops