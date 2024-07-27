import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import lenovo from '../images/lenovo.avif'
import dell from '../images/dell.jpg'
import hp from '../images/hp.jpg'
import acer from '../images/acer.jpg'
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Laptops() {
  return (
    <div className='laptops-div'>

      <p className='title laptop-brands-title display-5 text-center py-2 fw-bold'>Top Laptop Brands</p>

      <Row className='gx-0 d-flex flex-column justify-content-center align-items-center'>

        <Col className='col-10 laptop-brands-col m-4'>
          <Card as={Link} to={"/laptops/lenovo"} className='laptop-brands-card text-center rounded-4'>
            <Card.Img fluid className='laptop-brands-card-img' variant="top" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715941432/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272402_14_gmbfpe.png?tr=w-640" />
            <Card.ImgOverlay className='d-flex flex-column justify-content-center'>
              <Card.Title className='laptop-brands-card-title display-5 fw-bold'>Lenovo</Card.Title>
              <Card.Text className='laptop-brands-card-text text-wrap fw-bold'>
                Innovation for everyone, with features that defy expectations.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>


        <Col className='col-10 laptop-brands-col m-4'>
          <Card as={Link} to={"/laptops/dell"}  className='laptop-brands-card text-center rounded-4'>
            <Card.Img fluid className='laptop-brands-card-img' variant="top" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715929053/Croma%20Assets/Computers%20Peripherals/Laptop/Images/273309_11_yfnw7s.png?tr=w-640" />
            <Card.ImgOverlay className='d-flex flex-column justify-content-center'>
              <Card.Title className='laptop-brands-card-title display-5 fw-bold'>Dell</Card.Title>
              <Card.Text className='laptop-brands-card-text text-wrap fw-bold'>
                Experience the freedom of a seamless user experience.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>

        <Col className='col-10 laptop-brands-col m-4'>
          <Card as={Link} to={"/laptops/hp"}  className='laptop-brands-card text-center rounded-4'>
            <Card.Img fluid className='laptop-brands-card-img' variant="top" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715932538/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272077_6_ejfzqr.png?tr=w-640"/>
            <Card.ImgOverlay className='d-flex flex-column justify-content-center'>
              <Card.Title className='laptop-brands-card-title display-5 fw-bold'>HP</Card.Title>
              <Card.Text className='laptop-brands-card-text text-wrap fw-bold'>
                All-day battery life and lightweight design for effortless mobility.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>


        <Col className='col-10 laptop-brands-col m-4'>
          <Card as={Link} to={"/laptops/asus"}  className='laptop-brands-card text-center rounded-4'>
            <Card.Img fluid className='laptop-brands-card-img' variant="top" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713858134/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306349_6_buqtpm.png?tr=w-640" />
            <Card.ImgOverlay className='d-flex flex-column justify-content-center'>
              <Card.Title className='laptop-brands-card-title display-5 fw-bold'>ASUS</Card.Title>
              <Card.Text className='laptop-brands-card-text text-wrap fw-bold'>
                Dominate the competition with industry-leading graphics and innovative cooling technology.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>


        <Col className='col-10 laptop-brands-col m-4'>
          <Card as={Link} to={"/laptops/acer"}  className='laptop-brands-card text-center rounded-4'>
            <Card.Img fluid className='laptop-brands-card-img' variant="top" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683563411/Croma%20Assets/Computers%20Peripherals/Laptop/Images/270356_6_g05rsp.png?tr=w-640" />
            <Card.ImgOverlay className='d-flex flex-column justify-content-center'>
              <Card.Title className='laptop-brands-card-title display-5 fw-bold'>Acer</Card.Title>
              <Card.Text className='laptop-brands-card-text text-wrap fw-bold'>
                Powerhouse performance, budget-friendly price.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>

      </Row>


    </div>
  )
}

export default Laptops;