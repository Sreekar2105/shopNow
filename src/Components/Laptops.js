import React from 'react'
import { Row,Col,Card } from 'react-bootstrap';
import lenovo from '../images/lenovo.avif'
import dell from '../images/dell.jpg'
import hp from '../images/hp.jpg'
import acer from '../images/acer.jpg'

function Laptops()
{
  return (
    <div className='laptops-div'>
      <p className='laptop-brands-title display-5 text-center py-2 fw-bold'>Top Laptop Brands</p>

      <Row className='gx-0 d-flex flex-column justify-content-center align-items-center'>

        <Col className='col-10 laptop-brands-col m-4'>
        <Card className='laptop-brands-card text-center rounded-4'>
        <Card.Img fluid className='laptop-brands-card-img opacity-50' variant="top" src={lenovo} />
        <Card.ImgOverlay className='d-flex flex-column justify-content-center'>
          <Card.Title className='laptop-brands-card-title display-5 fw-bold'>Lenovo</Card.Title>
          <Card.Text className='laptop-brands-card-text text-wrap fw-bold'>
          Innovation for everyone, with features that defy expectations.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
        </Col>


        <Col className='col-10 laptop-brands-col m-4'>
        <Card className='laptop-brands-card text-center rounded-4'>
        <Card.Img fluid className='laptop-brands-card-img opacity-50 px-3' variant="top" src={dell} />
        <Card.ImgOverlay className='d-flex flex-column justify-content-between'>
          <Card.Title className='laptop-brands-card-title display-5 fw-bold'>Dell</Card.Title>
          <Card.Text className='laptop-brands-card-text text-wrap fw-bold'>
          Experience the freedom of a seamless user experience.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
        </Col>

        <Col className='col-10 laptop-brands-col m-4'>
        <Card className='laptop-brands-card text-center rounded-4'>
        <Card.Img fluid className='laptop-brands-card-img opacity-50 p-3' variant="top" src={hp} />
        <Card.ImgOverlay className='d-flex flex-column justify-content-center'>
          <Card.Title className='laptop-brands-card-title display-5 fw-bold'>HP</Card.Title>
          <Card.Text className='laptop-brands-card-text text-wrap fw-bold'>
          All-day battery life and lightweight design for effortless mobility.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
        </Col>


        <Col className='col-10 laptop-brands-col m-4'>
        <Card className='laptop-brands-card text-center rounded-4'>
        <Card.Img fluid className='laptop-brands-card-img opacity-75 p-3' variant="top" src="https://dlcdnwebimgs.asus.com/gain/1184b48b-1b10-462f-a4c1-d43852a64163/" />
        <Card.ImgOverlay className='d-flex flex-column justify-content-between'>
          <Card.Title className='laptop-brands-card-title display-5 fw-bold'>ASUS</Card.Title>
          <Card.Text className='laptop-brands-card-text text-wrap fw-bold'>
          Dominate the competition with industry-leading graphics and innovative cooling technology. 
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
        </Col>


        <Col className='col-10 laptop-brands-col m-4'>
        <Card className='laptop-brands-card text-center rounded-4'>
        <Card.Img fluid className='laptop-brands-card-img opacity-50 p-5' variant="top" src={acer} />
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