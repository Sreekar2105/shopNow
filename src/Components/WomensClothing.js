import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function WomensClothing() {

  let sarees = [
    {
        title : "MISS BEELEE",
        img : "https://assets.ajio.com/medias/sys_master/root/20230522/8nnZ/646ac29842f9e729d79f7cd8/-1117Wx1400H-466045347-aqua-MODEL.jpg",
        description : "Kanjeevaram Saree with Contrast Border",
        price: "735"
    },

    {
        title : "SATRANI",
        img : "https://assets.ajio.com/medias/sys_master/root/20240423/FGRJ/6627e19a05ac7d77bb21b289/-1117Wx1400H-467272221-pink-MODEL.jpg",
        description : "Women Floral Woven Saree with Tassels",
        price: "1,906"
    },

    {
        title : "Taneira",
        img : "https://img.tatacliq.com/images/i18//437Wx649H/MP000000022601976_437Wx649H_202406132235301.jpeg",
        description : "Grey Printed Saree",
        price: "4,999"
    },

    {
        title : "SIRIL",
        img : "https://m.media-amazon.com/images/I/518MMn14IQL._SX569_.jpg",
        description : "Jacquard Woven Zari Stripe Saree",
        price: "649"
    },

    {
        title : "TRENDMALLS",
        img : "https://m.media-amazon.com/images/I/81P6AnYZ3bL._SX569_.jpg",
        description : "Women's Silk Embroidery Saree",
        price: "1,899"
    },

    {
        title : "SIRIL",
        img : "https://m.media-amazon.com/images/I/81Pqi2NMg3L._SX569_.jpg",
        description : "Women's Georgette Printed Saree",
        price: "1,199"
    },

    {
        title : "AKHILAM",
        img : "https://m.media-amazon.com/images/I/716yXiN2cyL._SY741_.jpg",
        description : "Satin Silk Botanical Printed Saree",
        price: "2,399"
    },

    {
        title : "SWORNOF",
        img : "https://m.media-amazon.com/images/I/91Lp0gzvZVL._SY741_.jpg",
        description : "kanjivaram banarasi silk saree",
        price: "1,449"
    }
]


let tops = [
  {
      title : "rytras",
      img : "https://m.media-amazon.com/images/I/7187Z6yb6nL._SY741_.jpg",
      description : "Women's Cotton Printed Regular Fit top",
      price: "499"
  },

  {
      title : "Azira",
      img : "https://m.media-amazon.com/images/I/81IX4BbsfSL._SX679_.jpg",
      description : "Floral Printed Top",
      price: "669"
  },

  {
      title : "Leriya Fashion",
      img : "https://m.media-amazon.com/images/I/71ptNQgpGhL._SY741_.jpg",
      description : "Women's Regular Fit Fancy Tops",
      price: "389"
  },

  {
      title : "GRECIILOOKS",
      img : "https://m.media-amazon.com/images/I/619+j2SMQ9L._SY741_.jpg",
      description : "Women's Regular Fit Top",
      price: "379"
  },

  {
      title : "9 Impression",
      img : "https://m.media-amazon.com/images/I/713i1TMUcHL._SY741_.jpg",
      description : "Women All-Over Print Mandarin Collar Longline Plus Size Tops",
      price: "849"
  },

  {
      title : "REUT",
      img : "https://m.media-amazon.com/images/I/61wymLSS0kL._SX679_.jpg",
      description : "Apparel Womens Stripe Casual top",
      price: "899"
  },

  {
      title : "W for Woman",
      img : "https://m.media-amazon.com/images/I/61RgcDWSD8L._SY741_.jpg",
      description : "Women's Regular Fit Scalloped Embellished Hemline Top",
      price: "1,299"
  },

  {
      title : "FableStreet",
      img : "https://m.media-amazon.com/images/I/61zpCHjp2EL._SY741_.jpg",
      description : "Women's Polyester Solid Long Sleeve Regular Fit Top",
      price: "1,389"
  }
]


let kurtis = [
  {
      title : "Aurelia",
      img : "https://m.media-amazon.com/images/I/71FZgBZeJGL._SY741_.jpg",
      description : "Women Kurta & Cullote",
      price: "1,399"
  },

  {
      title : "rangita",
      img : "https://m.media-amazon.com/images/I/61k-TO6UAcL._SY741_.jpg",
      description : "Rayon Calf Length Embroidered Flared Kurti for Women",
      price: "549"
  },

  {
      title : "GoSriKi",
      img : "https://m.media-amazon.com/images/I/81s6r1g+A+L._SY741_.jpg",
      description : "Women Kurta with Pant & Dupatta",
      price: "849"
  },

  {
      title : "INDO ERA",
      img : "https://m.media-amazon.com/images/I/71WErTQ9nJL._SY741_.jpg",
      description : "Teal Embroidered Straight Kurta Trouser With Dupatta Set",
      price: "1,499"
  },

  {
      title : "Janasya",
      img : "https://m.media-amazon.com/images/I/91BX6gD3-mL._SY741_.jpg",
      description : "Georgette Digital Floral Printed Kurta with Palazzo and Dupatta",
      price: "2,249"
  },

  {
      title : "KLOSIA",
      img : "https://m.media-amazon.com/images/I/81SBbYMfmpL._SY741_.jpg",
      description : "Women Black Printed Kurta and pant set with Dupatta",
      price: "749"
  },

  {
      title : "NEW4U",
      img : "https://m.media-amazon.com/images/I/81eHk+lvHmL._SY741_.jpg",
      description : "Women's Sequin Zari Embroidery Printed Naira Cut Kurti",
      price: "649"
  },

  {
      title : "FELISIA",
      img : "https://m.media-amazon.com/images/I/71NmNWMSjNL._SY741_.jpg",
      description : "Women's Rayon Printed Straight Kurta with Pant",
      price: "429"
  }
]

  return (

    <div className='womens-clothing'>


      {/*******************************************  SAREES  *********************************************************/}

      <div className='womens-clothing-sarees'>

        <p className='title womens-clothing-sarees-title display-5 fw-bold text-center mb-3 mx-3 py-2 rounded-3' >Sarees</p>

        <Row xs={1} md={2} xl={4} className='gx-0' >

        {
             sarees.map((saree,index)=>
        (
            <Col>
              <Card as={Link} to={`/women's-clothing/sarees/${saree.title}/${saree.description}`} className='m-3 womens-clothing-card text-decoration-none'>
                <Card.Img className='womens-clothing-card-img img-fluid' variant="top" src={saree.img} />
                <Card.Body>
                    <Card.Title className='womens-clothing-card-title text-center fs-5 fw-bolder'>{saree.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>{saree.description}</p>
                        <p>Price : ₹{saree.price}</p>
                    </Card.Text>
                </Card.Body>
              </Card>

            </Col>

        ))
    }

        </Row>

      </div>



      {/*******************************************  TOPS  *********************************************************/}

      <div className='womens-clothing-tops'>

        <p className='title womens-clothing-tops-title display-5 fw-bold text-center mt-4 mb-3 mx-3 py-2 rounded-3'>Tops</p>

        <Row xs={1} md={2} xl={4}className='gx-0' >

        {
             tops.map((top,index)=>
        (
            <Col>
              <Card as={Link} to={`/women's-clothing/tops/${top.title}/${top.description}`} className='m-3 womens-clothing-card text-decoration-none'>
                <Card.Img className='womens-clothing-card-img img-fluid' variant="top" src={top.img} />
                <Card.Body>
                    <Card.Title className='womens-clothing-card-title text-center fs-5 fw-bolder'>{top.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>{top.description}</p>
                        <p>Price : ₹{top.price}</p>
                    </Card.Text>
                </Card.Body>
              </Card>

            </Col>

        ))
    }

        </Row>

      </div>



      {/*******************************************  KURTAS AND KURTIS  *********************************************************/}

      <div className='womens-clothing-kurtis'>
        
        <p className='title womens-clothing-kurtis-title display-5 fw-bold text-center mt-4 mb-3 mx-3 py-2 rounded-3'>Kurtas & Kurtis</p>

        <Row xs={1} md={2} xl={4} className='gx-0' >

        {
             kurtis.map((kurti,index)=>
        (
            <Col>
              <Card as={Link} to={`/women's-clothing/kurtis/${kurti.title}/${kurti.description}`} className='m-3 womens-clothing-card text-decoration-none'>
                <Card.Img className='womens-clothing-card-img img-fluid' variant="top" src={kurti.img} />
                <Card.Body>
                    <Card.Title className='womens-clothing-card-title text-center fs-5 fw-bolder'>{kurti.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>{kurti.description}</p>
                        <p>Price : ₹{kurti.price}</p>
                    </Card.Text>
                </Card.Body>
              </Card>

            </Col>

        ))
    }
          
        </Row>

      </div>

      <Footer/>

    </div>

  )
}

export default WomensClothing