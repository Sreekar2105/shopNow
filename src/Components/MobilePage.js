import React from 'react'
import { Button, Row, Col, Offcanvas } from 'react-bootstrap'
import { Carousel } from 'antd';
import {  Stack, Rating } from '@mui/material';
import { Card, Heading, CardBody, Box, Text } from '@chakra-ui/react';
import display from '../images/display-gif.gif'
import camera from '../images/camera.gif'
import chip from '../images/chip.png'
import storage from '../images/storage.png'
import battery from '../images/battery.gif'
import Footer from './Footer';
import userProfile from '../images/userProfile.png'
import { useDispatch } from 'react-redux';
import { addToCart, cartTotalAmount } from './cartSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import success from '../images/success.png'
import order from '../images/ordered.gif'



function MobilePage(props) {

  window.scrollTo(0, 0);

  let dispatch = useDispatch();

  const [cartShow, setCartShow] = useState(false);

  const [orderShow, setOrderShow] = useState(false);


  const handleCartClose = () => setCartShow(false);

  const handleOrderClose = () => setOrderShow(false);


  function handleCartShow()
  {
    setCartShow(true);
    setTimeout(()=>{
      setCartShow(false)
    },2000)
  }

  function handleOrderShow()
  {
    setOrderShow(true);
    setTimeout(()=>{
      setOrderShow(false)
    },2000)
  }


  return (

    <div className='product-page'>

      <Row className='gx-0'>

        <div className='product-img-and-description d-flex'>

          <Col xs={12} lg={5}>

            <Carousel autoplay arrows infinite={true} className='product-images'>

              <div>
                <img className='img-fluid carousel-image' src={props.img1} />
              </div>

              <div>
                <img className='img-fluid carousel-image' src={props.img2} />
              </div>

              <div>
                <img className='img-fluid carousel-image' src={props.img3} />
              </div>

              <div>
                <img className='img-fluid carousel-image' src={props.img4} />
              </div>

            </Carousel>

          </Col>

          <Col xs={12} lg={7}>

            <div className="product-description card" >
              <div className="card-body">

                <p className="card-title product-title display-5 fw-semibold mt-4">{props.title}</p>
                <p className="card-text product-text pt-3">{props.description}</p>

                <Stack spacing={1} className="d-inline-block">
                  <Rating name="half-rating-read" defaultValue={props.rating} precision={0.5} readOnly /><span className='fs-5'>{props.rating}</span>
                </Stack>
                <hr className='product-line'/>

                <p className="card-text product-price pt-lg-2 fw-semibold">₹{props.price}</p>

                <div className='add-to-cart-and-order d-flex'>



                  <Button variant="warning" className="add-to-cart fs-5" onClick={() => {
                    dispatch(addToCart(props))
                    dispatch(cartTotalAmount(props))
                    handleCartShow()
                  }}> Add to Cart </Button>

                  <Offcanvas show={cartShow} onHide={handleCartClose} placement='end' className="offcanvas">
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title className='fs-4'><img src={success}/><span className='ms-2 mt-1'>Added to Cart</span></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='d-flex fw-semibold'>
                      <img src={props.img1} height={"100px"} width={"100px"}></img>
                      <div className='items-description'>
                        <p className='cart-item-title ms-4'>{props.title}</p>
                        <p className='fs-5 ms-4'>Price : {props.price}</p>
                      </div>
                    </Offcanvas.Body>
                    <div className="cart&orders d-flex justify-content-around mb-3">
                      <Button as={Link} to={"/cart-details"} variant="dark" className='px-3 w-50'>Cart</Button>
                    </div>
                  </Offcanvas>


                  <Button variant="success" className="place-order fs-5 px-lg-4" onClick={()=>{handleOrderShow()}}>Buy</Button>

                  <Offcanvas show={orderShow} onHide={handleOrderClose} placement='end' className="order-offcanvas">
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title className='fs-4 order-offcanvas-title'><img src={order} className='ordered-img'/><span className='mt-2 successful-order'>Ordered Successfully.</span></Offcanvas.Title>
                    </Offcanvas.Header>
                  </Offcanvas>


                </div>

              </div>
            </div>

          </Col>

        </div>


        <Col xs={12}>

          <Card className='display-card'>


            <CardBody className='text-center'>
              <Box>
                <Heading textTransform='uppercase' className='display-title pt-2'>
                  <img src={display} className='animated-img' />Display
                </Heading>
                <Text className='pt-2 px-2'>{props.display}</Text>
              </Box>
            </CardBody>

          </Card>

          <Card className='camera-card'>

            <CardBody className='text-center'>
              <Box>
                <Heading textTransform='uppercase' className='display-title pt-2'>
                  <img src={camera} height={"40px"} width={"40px"} className='animated-img' /><span className='ps-2'>Camera</span>
                </Heading>
                <Text className='pt-2 px-2'>{props.camera}</Text>
              </Box>
            </CardBody>

          </Card>

          <Card className='processor-card'>
            <CardBody className='text-center'>
              <Box>
                <Heading textTransform='uppercase' className='display-title pt-2'>
                  <img src={chip} height={"30px"} width={"30px"} className='animated-img' /><span className='ps-2'>processor</span>
                </Heading>
                <Text className='pt-2 px-2'>{props.processor}</Text>
              </Box>
            </CardBody>
          </Card>

          <Card className='storage-card'>
            <CardBody className='text-center'>
              <Box>
                <Heading textTransform='uppercase' className='display-title pt-2'>
                  <img src={storage} height={"30px"} width={"30px"} className='animated-img' /><span className='ps-2'>Storage</span>
                </Heading>
                <Text className='pt-2 px-2'>{props.storage}</Text>
              </Box>
            </CardBody>
          </Card>

          <Card className='battery-card'>
            <CardBody className='text-center'>
              <Box>
                <Heading textTransform='uppercase' className='display-title pt-2'>
                  <img src={battery} height={"30px"} width={"30px"} className='animated-img' /><span className='ps-2'>Battery</span>
                </Heading>
                <Text className='pt-2 px-2'>{props.battery}</Text>
              </Box>
            </CardBody>
          </Card>

        </Col>


        <Col className='user-reviews'>

          <h2>Top User Reviews :</h2>
          <hr />
          <div className='review d-flex'>
            <img src={userProfile} height={"50px"} width={"50px"} className='mt-2' />
            <div className='d-flex flex-column ms-3 mt-2'>
              <p className='mb-0 fw-semibold username'>{props.user1}</p>
              <p className='review'>{props.review1}</p>
            </div>
          </div>

          <hr />
          <div className='review d-flex'>
            <img src={userProfile} height={"50px"} width={"50px"} className='mt-2' />
            <div className='d-flex flex-column ms-3 mt-2'>
              <p className='mb-0 fw-semibold username'>{props.user2}</p>
              <p className='review'>{props.review2}</p>
            </div>
          </div>

          <hr />
          <div className='review d-flex'>
            <img src={userProfile} height={"50px"} width={"50px"} className='mt-2' />
            <div className='d-flex flex-column ms-3 mt-2'>
              <p className='mb-0 fw-semibold username'>{props.user3}</p>
              <p className='review'>{props.review3}</p>
            </div>
          </div>

          <hr />
          <div className='review d-flex'>
            <img src={userProfile} height={"50px"} width={"50px"} className='mt-2' />
            <div className='d-flex flex-column ms-3 mt-2'>
              <p className='mb-0 fw-semibold username'>{props.user4}</p>
              <p className='review'>{props.review4}</p>
            </div>
          </div>

        </Col>

      </Row>


    </div >


  )
}




export default MobilePage