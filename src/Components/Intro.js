import React from 'react'
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import { Card } from 'react-bootstrap';
import '../style.css'

function Intro() {
    return (
        <div>
            <Card className="bg-secondary">
                <Card.Img src={img2} alt="Card image" className='shop-img opacity-50' />
                <Card.ImgOverlay className='card-text text-center overflow-x-hidden d-flex flex-column justify-content-center align-items-center'>
                    <Card.Title className='card-title1 fw-bold display-3'>Welcome to $hopNow</Card.Title>
                    <Card.Text className='card-para1 fw-bold fs-5'>
                        Discover a world of quality products at unbeatable prices. 
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>

            <Card className="bg-success mt-3">
                <Card.Img src={img3} alt="Card image" className='shop-img2 opacity-50' />
                <Card.ImgOverlay className='card-text2 text-center overflow-x-hidden d-flex flex-column justify-content-center align-items-center'>
                    <Card.Title className='card-title2 fw-bold display-5'>Your One-Stop Shop</Card.Title>
                    <Card.Text className='card-para2 fw-bold fs-5'>
                        Everything you need, just a click away.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default Intro;