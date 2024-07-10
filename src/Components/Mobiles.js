import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import apple from '../images/apple.jpg'
import samsung from '../images/samsung.jpg'
import oppo from '../images/oppo.jpg'
import xiaomi from '../images/xiaomi.png'
import iqoo from '../images/iqoo.jpg'
import oneplus from '../images/oneplus.jpg'
import realme from '../images/realme.jpg'
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Mobiles() {
  return (
    <div className='mobiles-div'>

      <p className='title mobile-brands-title display-5 text-center py-2 fw-bold'>Top Mobile Brands</p>

      <Row className='gx-0 d-flex flex-column justify-content-center align-items-center'>
        <Col className='col-10 mobile-brands-col m-4'>
          <Card as={Link} to={"/mobiles/apple"} className='mobile-brands-card text-center rounded-4'>
            <Card.Img fluid className='mobile-brands-card-img opacity-50' variant="top" src={apple} />
            <Card.ImgOverlay className='d-flex flex-column justify-content-between'>
              <Card.Title className='mobile-brands-card-title display-5 fw-bold'>Apple iPhone</Card.Title>
              <Card.Text className='mobile-brands-card-text text-wrap fw-bold'>
                Explore the latest iPhones. From powerful pros to feature-rich flagships, find the perfect iPhone for your lifestyle.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>

        <Col className='col-10 mobile-brands-col m-4'>
          <Card as={Link} to={"/mobiles/samsung"} className='mobile-brands-card text-center rounded-4'>
            <Card.Img fluid className='mobile-brands-card-img opacity-50' variant="top" src={samsung} />
            <Card.ImgOverlay className='d-flex flex-column justify-content-between'>
              <Card.Title className='mobile-brands-card-title display-5 fw-bold'>Samsung</Card.Title>
              <Card.Text className='mobile-brands-card-text text-wrap fw-bold'>
                Innovation at your fingertips. Experience powerful performance and cutting-edge features.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>


        <Col className='col-10 mobile-brands-col m-4'>
          <Card as={Link} to={"/mobiles/oppo"} className='mobile-brands-card text-center rounded-4'>
            <Card.Img fluid className='mobile-brands-card-img opacity-50' variant="top" src={oppo} />
            <Card.ImgOverlay className='d-flex flex-column justify-content-between'>
              <Card.Title className='mobile-brands-card-title display-5 fw-bold'>OPPO</Card.Title>
              <Card.Text className='mobile-brands-card-text text-wrap fw-bold'>
                The perfect blend of sleek design, long-lasting battery life, and amazing cameras.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>


        <Col className='col-10 mobile-brands-col m-4'>
          <Card as={Link} to={"/mobiles/xiaomi"} className='mobile-brands-card text-center rounded-4'>
            <Card.Img fluid className='mobile-brands-card-img opacity-50' variant="top" src={xiaomi} />
            <Card.ImgOverlay className='d-flex flex-column justify-content-between'>
              <Card.Title className='mobile-brands-card-title display-5 fw-bold'>Xiaomi</Card.Title>
              <Card.Text className='mobile-brands-card-text text-wrap fw-bold'>
                Flagship specs, budget-friendly prices. Experience Xiaomi - Smarter Technology for Everyone.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>



        <Col className='col-10 mobile-brands-col m-4'>
          <Card as={Link} to={"/mobiles/oneplus"} className='mobile-brands-card text-center rounded-4'>
            <Card.Img fluid className='mobile-brands-card-img opacity-50' variant="top" src={oneplus} />
            <Card.ImgOverlay className='d-flex flex-column justify-content-between'>
              <Card.Title className='mobile-brands-card-title display-5 fw-bold'>OnePlus</Card.Title>
              <Card.Text className='mobile-brands-card-text text-wrap fw-bold'>
                Blazing-fast performance, buttery smooth display, all wrapped in a stunning design.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>



        <Col className='col-10 mobile-brands-col m-4'>
          <Card as={Link} to={"/mobiles/iqoo"} className='mobile-brands-card text-center rounded-4'>
            <Card.Img fluid className='mobile-brands-card-img opacity-50' variant="top" src={iqoo} />
            <Card.ImgOverlay className='d-flex flex-column justify-content-between'>
              <Card.Title className='mobile-brands-card-title display-5 fw-bold'>iQOO</Card.Title>
              <Card.Text className='mobile-brands-card-text text-wrap fw-bold'>
                Lightning-fast display, smooth graphics. Experience iQOO - Built for the ultimate mobile gameplay.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>



        <Col className='col-10 mobile-brands-col m-4'>
          <Card as={Link} to={"/mobiles/realme"} className='mobile-brands-card text-center rounded-4'>
            <Card.Img fluid className='mobile-brands-card-img opacity-50' variant="top" src={realme} />
            <Card.ImgOverlay className='d-flex flex-column justify-content-between'>
              <Card.Title className='mobile-brands-card-title display-5 fw-bold'>realme</Card.Title>
              <Card.Text className='mobile-brands-card-text text-wrap fw-bold'>
                Unleash the power within and experience game-changing performance at a disruptive price.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>

      <Footer/>

    </div>
  )
}

export default Mobiles;