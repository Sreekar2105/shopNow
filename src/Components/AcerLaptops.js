import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useEffect } from 'react'
import Footer from './Footer';
import { Link } from 'react-router-dom';


function AcerLaptops() 
{
    useEffect(()=>
    {
        window.scrollTo(0,0);
    },[]);

    let acerLaptops = [
        {
            title : "acer Aspire 3",
            img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689335006/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272799_0_udmotm.png?tr=w-640",
            processor : "Intel Core i3",
            specs : "8GB RAM, 512GB SSD",
            price: "31,490"
        },

        {
            title : "acer Aspire 5 A515-57G",
            img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715933383/Croma%20Assets/Computers%20Peripherals/Laptop/Images/261170_0_sbpbsx.png?tr=w-640",
            processor : "Intel Core i5, 12th Gen",
            specs : "16GB RAM, 512GB SSD",
            price: "56,999"
        },

        {
            title : "acer Predator Helios Neo 16",
            img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715935621/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272085_0_p80sj6.png?tr=w-640",
            processor : "Intel Core i7, 13th Gen",
            specs : "16GB RAM, 512GB SSD",
            price: "1,14,990"
        },

        {
            title : "acer Swift Go 14",
            img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715594284/Croma%20Assets/Computers%20Peripherals/Laptop/Images/304458_0_ujzbaw.png?tr=w-640",
            processor : "Intel Core Ultra 5 ",
            specs : "16GB RAM, 512GB SSD",
            price: "77,990"
        },

        {
            title : "acer Aspire ALG",
            img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718093583/Croma%20Assets/Computers%20Peripherals/Laptop/Images/307139_pksilm.png?tr=w-640",
            processor : "Intel Core i5, 12th Gen",
            specs : "16GB RAM, 512GB SSD",
            price: "64,999"
        },

        {
            title : "acer AL1541",
            img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717068665/Croma%20Assets/Computers%20Peripherals/Laptop/Images/304898_0_gybfpq.png?tr=w-640",
            processor : "AMD Ryzen 7 ",
            specs : "16GB RAM, 512GB SSD",
            price: "42,990"
        },

        {
            title : "acer Nitro 5",
            img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696518375/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275083_0_uoc0c6.png?tr=w-640",
            processor : "Intel Core i7, 12th Gen ",
            specs : "16GB RAM, 1TB SSD",
            price: "1,81,999"
        },

        {
            title : "acer SFG14-73 ",
            img : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718356857/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306053_0_ybhbff.png?tr=w-640",
            processor : "Intel Core Ultra 5",
            specs : "16GB RAM, 512GB SSD",
            price: "77,990"
        }
    ]


  return (

    <div className='acer-laptops'>

    <p className='title acer-laptops-title display-5 fw-bold text-center mb-3 py-2'>Acer Laptops</p>

    <Row xs={1} md={2} xl={4} className='gx-0' >

    {
        acerLaptops.map((acerLaptop,index)=>
        (
            <Col>
              <Card as={Link} to={`/laptops/acer/${acerLaptop.title}`} className='m-3 acer-laptops-card text-decoration-none'>
                <Card.Img className='acer-laptops-card-img img-fluid' variant="top" src={acerLaptop.img} />
                <Card.Body>
                    <Card.Title className='acer-laptops-card-title text-center fs-5 fw-bolder'>{acerLaptop.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>{acerLaptop.processor}</p>
                        <p>({acerLaptop.specs})</p>
                        <p>Price : ₹{acerLaptop.price}</p>
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

export default AcerLaptops