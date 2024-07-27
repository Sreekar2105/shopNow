import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useEffect } from 'react'
import Footer from './Footer';


function AppleProducts() {
    useEffect(()=>
        {
            window.scrollTo(0,0);
        },[]);
    return (

        <div className='apple-products'>
            <p className='apple-products-title display-5 fw-bold text-center mb-3 py-2'>Apple Products</p>

            <Row xs={2} md={3} lg={4} className='gx-0' >
                <Col>
                    <Card className='m-3 apple-products-card'>
                        <Card.Img className='apple-products-card-img img-fluid' variant="top" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708678829/Croma%20Assets/Communication/Mobiles/Images/300822_0_vy3iid.png?tr=w-640" />
                        <Card.Body>
                            <Card.Title className='apple-products-card-title text-center fs-5 fw-bolder'>Apple iPhone 15 Pro Max</Card.Title>
                            <Card.Text className='fs-6 fw-bold'>
                                <p> (256GB Storage)</p>
                                <p>Price : ₹1,50,090</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col>
                    <Card className='m-3 apple-products-card'>
                        <Card.Img className='apple-products-card-img img-fluid' variant="top" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708676318/Croma%20Assets/Communication/Mobiles/Images/300738_0_kw3zyu.png?tr=w-640" />
                        <Card.Body>
                            <Card.Title className='apple-products-card-title text-center fs-5 fw-bolder'>Apple iPhone 15</Card.Title>
                            <Card.Text className='fs-6 fw-bold'>
                                <p>(256GB Storage)</p>
                                <p>Price : ₹80,590</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col>
                    <Card className='m-3 apple-products-card'>
                        <Card.Img className='apple-products-card-img img-fluid' variant="top" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708672728/Croma%20Assets/Communication/Mobiles/Images/261934_0_kukyat.png?tr=w-640" />
                        <Card.Body>
                            <Card.Title className='apple-products-card-title text-center fs-5 fw-bolder'>Apple iPhone 14</Card.Title>
                            <Card.Text className='fs-6 fw-bold'>
                                <p>(128GB Storage)</p>
                                <p>Price : ₹61,790</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col>
                    <Card className='m-3 apple-products-card'>
                        <Card.Img className='apple-products-card-img img-fluid' variant="top" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708670560/Croma%20Assets/Communication/Mobiles/Images/243459_0_cvj2b5.png?tr=w-640" />
                        <Card.Body>
                            <Card.Title className='apple-products-card-title text-center fs-5 fw-bolder'>Apple iPhone 13</Card.Title>
                            <Card.Text className='fs-6 fw-bold'>
                                <p>(128GB Storage)</p>
                                <p>Price : ₹52,090</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className='m-3 apple-products-card'>
                        <Card.Img className='apple-products-card-img img-fluid' variant="top" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715758647/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/301933_1_owmwwu.png?tr=w-640" />
                        <Card.Body>
                            <Card.Title className='apple-products-card-title text-center fs-5 fw-bolder'>Apple iPad Pro 5th Generation Wi-Fi</Card.Title>
                            <Card.Text className='fs-6 fw-bold'>
                                <p>(256GB Storage)</p>
                                <p>Price : ₹99,900</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col>
                    <Card className='m-3 apple-products-card'>
                        <Card.Img className='apple-products-card-img img-fluid' variant="top" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715758718/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/301947_1_xnetzp.png?tr=w-640" />
                        <Card.Body>
                            <Card.Title className='apple-products-card-title text-center fs-5 fw-bolder'>Apple iPad Air 4th Generation Wi-Fi</Card.Title>
                            <Card.Text className='fs-6 fw-bold'>
                                <p>(256GB Storage)</p>
                                <p>Price : ₹69,900</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col>
                    <Card className='m-3 apple-products-card'>
                        <Card.Img className='apple-products-card-img img-fluid' variant="top" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709727304/Croma%20Assets/Computers%20Peripherals/Laptop/Images/305382_uvrdrb.png?tr=w-640" />
                        <Card.Body>
                            <Card.Title className='apple-products-card-title text-center fs-5 fw-bolder'>Apple MacBook Air 2024</Card.Title>
                            <Card.Text className='fs-6 fw-bold'>
                                <p> ( M3, 8GB RAM, 256GB Storage)</p>
                                <p>Price : ₹1,07,990</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col>
                    <Card className='m-3 apple-products-card'>
                        <Card.Img className='apple-products-card-img img-fluid' variant="top" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698817030/Croma%20Assets/Computers%20Peripherals/Laptop/Images/302731_7_nlgyk2.png?tr=w-640" />
                        <Card.Body>
                            <Card.Title className='apple-products-card-title text-center fs-5 fw-bolder'>Apple MacBook Pro 2023</Card.Title>
                            <Card.Text className='fs-6 fw-bold'>
                                <p> (M3 Pro, 36GB RAM, 512GB Storage)</p>
                                <p>Price : ₹2,79,490</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>


        </div>

    )
}

export default AppleProducts