import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useEffect } from 'react'
import Footer from './Footer';
import { Link } from 'react-router-dom';


function Adidas() 
{
    useEffect(()=>
        {
            window.scrollTo(0,0);
        },[]);

        let adidasProducts = [
            {
                title : "Adidas",
                img : "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/44e00bce0bd04b518e5fb1bf477f3cf1_9366/RUN_LASKA_SHOES_Black_IQ9121_01_standard.jpg",
                description : "RUN LASKA SHOES (Men)",
                price: "2,649"
            },

            {
                title : "Adidas",
                img : "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f853c7074fb24d019a8ac3b5677c38f6_9366/VL_Court_Base_Shoes_Black_ID3715_04_standard.jpg",
                description : "VL COURT BASE SHOES (Women)",
                price: "3,599"
            },

            {
                title : "Adidas",
                img : "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/499400378423403ebc1faebb0157f55a_9366/BRANDLOVE_TEE_White_HT3391_21_model.jpg",
                description : "BRANDLOVE TEE",
                price: "899"
            },

            {
                title : "Adidas",
                img : "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/caa41031e98c4c6daba3c07f201cebd0_9366/3_STRIPES_FRENCH_TERRY_HOODED_SWEATSHIRT_Black_IT5572_21_model.jpg",
                description : "3 STRIPES FRENCH TERRY HOODED SWEATSHIRT",
                price: "1,999"
            },

            {
                title : "Adidas",
                img : "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/a9540ecaf9194c3bba9c31763c7ccec3_9366/FUTURE_ICONS_BADGE_OF_SPORT_SWEATSHIRT_Green_IN5743_21_model.jpg",
                description : "FUTURE ICONS BADGE OF SPORT SWEATSHIRT",
                price: "2,499"
            },

            {
                title : "Adidas",
                img : "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/8bbf5225b6064bffb5492617a1616e27_9366/CLUB_3_STRIPES_POLO_TEE_Orange_IV7644_21_model.jpg",
                description : "CLUB 3 STRIPES POLO TEE",
                price: "1,399"
            },

            {
                title : "Adidas",
                img : "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/15be63d25428442ca71eafa800a51beb_9366/City_Escape_Loose_Crew_Sweatshirt_Brown_HZ7300_01_laydown.jpg",
                description : "CITY ESCAPE LOOSE CREW SWEATSHIRT (Women)",
                price: "3,299"
            },

            {
                title : "Adidas",
                img : "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c955ac71fee43b1908caf070116e81f_9366/Future_Icons_3-Stripes_Regular_Pants_Grey_IB8531_01_laydown.jpg",
                description : "FUTURE ICONS 3-STRIPES REGULAR PANTS (Women)",
                price: "2,499"
            }
        ]

  return (

    <div className='adidas'>

    <p className='title adidas-title display-5 fw-bold text-center mb-3 py-2'>Adidas Products</p>

    <Row xs={1} md={2} xl={4} className='gx-0' >

    {
             adidasProducts.map((adidasProduct,index)=>
        (
            <Col>
              <Card as={Link} to={`/adidas-products/${adidasProduct.description}`} className='m-3 adidas-card text-decoration-none'>
                <Card.Img className='adidas-card-img img-fluid' variant="top" src={adidasProduct.img} />
                <Card.Body>
                    <Card.Title className='adidas-card-title text-center fs-5 fw-bolder'>{adidasProduct.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>{adidasProduct.description}</p>
                        <p>Price : ₹{adidasProduct.price}</p>
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

export default Adidas