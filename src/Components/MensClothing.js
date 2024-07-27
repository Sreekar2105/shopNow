import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Footer from './Footer'
import { Link } from 'react-router-dom'


function MensClothing() {

  let formalShirts = [
    {
        title : "Stop",
        img : "https://sslimages.shoppersstop.com/sys-master/images/h00/h9c/31461567234078/A23SHSLDDBY_BEIGE.jpg_2000Wx3000H",
        description : "Dobby Cotton Slim Fit Men's Shirt",
        price: "749"
    },

    {
        title : "Van Heusen",
        img : "https://sslimages.shoppersstop.com/sys-master/images/h8f/ha2/31505157062686/A23SFBCUPO69814_NAVY.jpg_2000Wx3000H",
        description : "Men's Regular fit Formal Shirt",
        price: "2,079"
    },

    {
        title : "Majestic Man",
        img : "https://m.media-amazon.com/images/I/61RQs6tFaHL._SY741_.jpg",
        description : "Cotton Formal Shirt for Men",
        price: "639"
    },

    {
        title : "Louis Philippe",
        img : "https://sslimages.shoppersstop.com/sys-master/images/h0b/h06/31307070963742/A23SFMSLP822642_BLACK.jpg_2000Wx3000H",
        description : "Textured Cotton Formal Shirt",
        price: "2,399"
    },

    {
        title : "ARROW",
        img : "https://assets.ajio.com/medias/sys_master/root/20240522/Rdv1/664d026516fd2c6e6a18f9eb/-1117Wx1400H-469621217-ltblue-MODEL.jpg",
        description : "Men Slim Fit Formal Shirt",
        price: "1,540"
    },

    {
        title : "JOHN PLAYERS",
        img : "https://assets.ajio.com/medias/sys_master/root/20240116/6SCT/65a695628cdf1e0df5b9f674/-1117Wx1400H-443034285-maroon-MODEL.jpg",
        description : "Men's Regular Fit Formal Shirt",
        price: "600"
    },

    {
        title : "THE INDIAN GARAGE CO",
        img : "https://assets.ajio.com/medias/sys_master/root/20240603/Pj7s/665ddec916fd2c6e6a47aaac/-1117Wx1400H-469545305-pink-MODEL2.jpg",
        description : "Men's Slim Fit Formal Shirt",
        price: "624"
    },

    {
        title : "JAINISH",
        img : "https://assets.ajio.com/medias/sys_master/root/20230623/Ld0E/6494d39c42f9e729d77f87ef/-1117Wx1400H-464476528-grey-MODEL.jpg",
        description : "Men's Regular Fit Formal Shirt",
        price: "468"
    }
]


let casualShirts = [
  {
      title : "CB-COLEBROOK",
      img : "https://m.media-amazon.com/images/I/415gBxXNM4L._SX679_.jpg",
      description : "Men's Regular Fit Solid Soft Touch Cotton Casual Shirt",
      price: "499"
  },

  {
      title : "INDIAN NEEDLE",
      img : "https://assets.ajio.com/medias/sys_master/root/20240211/S8kN/65c8f97105ac7d77bb4f3dfa/-473Wx593H-467065035-olive-MODEL3.jpg",
      description : "Men Striped Regular Fit Shirt",
      price: "585"
  },

  {
      title : "KETCH",
      img : "https://assets.ajio.com/medias/sys_master/root/20211123/GApl/619d1362aeb2690110d34392/-473Wx593H-469034752-navymulti-MODEL.jpg",
      description : "Checked Slim Fit Shirt",
      price: "387"
  },

  {
      title : "Lymio",
      img : "https://m.media-amazon.com/images/I/8180RL08mqL._SY741_.jpg",
      description : "Casual Shirt for Men",
      price: "379"
  },

  {
      title : "Dennis Lingo",
      img : "https://m.media-amazon.com/images/I/61UO+FOQNWL._SY741_.jpg",
      description : "Men's Slim Fit Casual Shirt",
      price: "499"
  },

  {
      title : "LEVIS",
      img : "https://assets.ajio.com/medias/sys_master/root/20240415/xKGi/661d45b005ac7d77bb0a84ad/-473Wx593H-442399612-indigo-MODEL.jpg",
      description : "Men Slim Fit Shirt with Flap Pockets",
      price: "2,599"
  },

  {
      title : "The Indian Garage Co",
      img : "https://m.media-amazon.com/images/I/61f0fIGlxBL._SY741_.jpg",
      description : "Men Slim Fit Shirt",
      price: "549"
  },

  {
      title : "THE BEAR HOUSE",
      img : "https://assets.ajio.com/medias/sys_master/root/20230624/Rac6/6496722ca9b42d15c9deabb7/-473Wx593H-465427351-multi-MODEL.jpg",
      description : "Men Checked Slim Fit Shirt",
      price: "873"
  }
]


let tShirts = [
  {
      title : "Lymio",
      img : "https://m.media-amazon.com/images/I/71Sz0Z8pN3L._SY741_.jpg",
      description : "Plain T Shirt",
      price: "379"
  },

  {
      title : "JUMP CUTS",
      img : "https://assets.ajio.com/medias/sys_master/root/20240117/EMy2/65a7e8c68cdf1e0df5bc4dda/-473Wx593H-465647923-black-MODEL.jpg",
      description : "Hooded T-Shirt with Flap Pocket",
      price: "319"
  },

  {
      title : "BULLMER",
      img : "https://m.media-amazon.com/images/I/61XgareNwlL._SY741_.jpg",
      description : "oversized Round Neck T-shirt for men",
      price: "299"
  },

  {
      title : "MANIAC",
      img : "https://assets.ajio.com/medias/sys_master/root/20240225/nv7b/65db6d7205ac7d77bb76a1a4/-1117Wx1400H-467104469-green-MODEL.jpg",
      description : "Men Oversized Polo T-Shirt",
      price: "687"
  },

  {
      title : "EYEBOGLER",
      img : "https://assets.ajio.com/medias/sys_master/root/20240610/sNXZ/6667209f16fd2c6e6a73ce09/-1117Wx1400H-700069293-multi-MODEL.jpg",
      description : "Regular Fit Polo T-Shirt with Collar Neck",
      price: "475"
  },

  {
      title : "LEVIS",
      img : "https://assets.ajio.com/medias/sys_master/root/20240415/8UXe/661d47a405ac7d77bb0a8d59/-473Wx593H-469607694-black-MODEL4.jpg",
      description : "Regular Fit Crew-Neck T-Shirt",
      price: "769"
  },

  {
      title : "SNITCH",
      img : "https://assets.ajio.com/medias/sys_master/root/20231015/FjaV/652be96dafa4cf41f5438bcc/-473Wx593H-466706598-beige-MODEL2.jpg",
      description : "Polo T-Shirt with Ribbed Hem",
      price: "1,299"
  },

  {
      title : "U.S POLO ASSN.",
      img : "https://assets.ajio.com/medias/sys_master/root/20240607/V3tI/6662a98316fd2c6e6a561192/-1117Wx1400H-469536318-olive-MODEL.jpg",
      description : "Men Printed Extra Slim Fit Polo T-Shirt",
      price: "1,139"
  }
]



let kurtas = [
  {
      title : "SOJANYA",
      img : "https://assets.ajio.com/medias/sys_master/root/20240303/MawH/65e47b8905ac7d77bb924cbf/-1117Wx1400H-467130277-grey-MODEL5.jpg",
      description : "Men Embroidered Kurta",
      price: "1,759"
  },

  {
      title : "SWTANTRA",
      img : "https://assets.ajio.com/medias/sys_master/root/20240601/XBXv/665ae02205ac7d77bb94af55/-1117Wx1400H-700030080-purple-MODEL.jpg",
      description : "Men Long Kurta with Mandarin Collar",
      price: "4,274"
  },

  {
      title : "TISTABENE",
      img : "https://assets.ajio.com/medias/sys_master/root/20240425/5SlG/662a54fd16fd2c6e6ad2b659/-473Wx593H-466324855-yellow-MODEL3.jpg",
      description : "Embroidered Long Kurta",
      price: "899"
  },

  {
      title : "Manyavar",
      img : "https://manyavar.scene7.com/is/image/manyavar/8905100280845.9611_25-04-2023-21-30:650x900",
      description : "Carnation Pink Self Design Kurta Pajama",
      price: "2,999"
  },

  {
      title : "VASTRAMAY",
      img : "https://assets.ajio.com/medias/sys_master/root/20240703/fEYB/668589441d763220fabfc07c/-1117Wx1400H-466925802-maroon-MODEL2.jpg",
      description : "Regular Fit Striped Kurta",
      price: "1,249"
  },

  {
      title : "HANGUP TREND",
      img : "https://assets.ajio.com/medias/sys_master/root/20231112/Z5Ra/6550fb7dddf7791519800561/-1117Wx1400H-466779177-khaki-MODEL5.jpg",
      description : "Mandarin-Neck Kurta & Pyjamas Set",
      price: "625"
  },

  {
      title : "TABARD",
      img : "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019010710_437Wx649H_202309010041393.jpeg",
      description : "Regular Fit Embroidery Kurta Set",
      price: "2,080"
  },

  {
      title : "Peter England",
      img : "https://img.tatacliq.com/images/i18//437Wx649H/MP000000022657919_437Wx649H_202406202313331.jpeg",
      description : "Cotton Slim Fit Kurta",
      price: "1,079"
  }
]


let jeans = [
  {
      title : "LEE COOPER",
      img : "https://assets.ajio.com/medias/sys_master/root/20240502/Jlhz/6633a9a405ac7d77bb394d1a/-473Wx593H-442601800-olive-MODEL2.jpg",
      description : "Men Slim Fit Jeans",
      price: "1,172"
  },

  {
      title : "U.S. POLO ASSN.",
      img : "https://assets.ajio.com/medias/sys_master/root/20240617/Jqst/666ff4321d763220fac45908/-473Wx593H-469620949-blue-MODEL.jpg",
      description : "Regallo Mid-Wash Skinny Fit Jeans",
      price: "1,379"
  },

  {
      title : "Campus Sutra",
      img : "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019653071_437Wx649H_202310132218431.jpeg",
      description : "Regular Fit Cargo Jeans",
      price: "979"
  },

  {
      title : "STUDIO NEXX",
      img : "https://assets.ajio.com/medias/sys_master/root/20230624/SbuW/6496092ba9b42d15c9ceff7a/-1117Wx1400H-465095581-blue-MODEL.jpg",
      description : "Men Relaxed Fit Jeans",
      price: "660"
  },

  {
      title : "BUDA JEANS CO",
      img : "https://assets.ajio.com/medias/sys_master/root/20231211/1yNI/65772054ddf7791519c32540/-473Wx593H-469152186-olive-MODEL2.jpg",
      description : "Mid-Rise Cargo Jogger Jeans",
      price: "918"
  },

  {
      title : "BENE KLEED",
      img : "https://assets.ajio.com/medias/sys_master/root/20231018/SMEF/652f7aebafa4cf41f54c07ee/-473Wx593H-466433224-white-MODEL.jpg",
      description : "Men Bootcut Jeans",
      price: "897"
  },

  {
      title : "B WOLVES",
      img : "https://assets.ajio.com/medias/sys_master/root/20240327/RNXU/660374de16fd2c6e6a834615/-473Wx593H-467206190-black-MODEL4.jpg",
      description : "Men High-Rise Baggy Fit Jeans",
      price: "1,290"
  },

  {
      title : "PEPE JEANS",
      img : "https://assets.ajio.com/medias/sys_master/root/20240510/TbDP/663e343616fd2c6e6afbad73/-1117Wx1400H-442405946-lightblue-MODEL.jpg",
      description : "Men Vapour Mid-Wash Slim Fit Jeans",
      price: "2,649"
  }
]


  return (

    <div className='mens-clothing'>


      {/*******************************************  FORMAL SHIRTS  *********************************************************/}

      <div className='mens-clothing-formals'>

        <p className='title mens-clothing-formals-title display-5 fw-bold text-center mb-3 mx-3 py-2 rounded-3'>Formal Shirts</p>

        <Row xs={1} md={2} xl={4} className='gx-0' >

        {
             formalShirts.map((formalShirt,index)=>
        (
            <Col className='mb-3'>
              <Card as={Link} to={`/men's-clothing/formal-shirts/${formalShirt.title}/${formalShirt.description}`} className='m-3 mens-clothing-card text-decoration-none'>
                <Card.Img className='mens-clothing-card-img img-fluid' variant="top" src={formalShirt.img} />
                <Card.Body>
                    <Card.Title className='mens-clothing-card-title text-center fs-5 fw-bolder'>{formalShirt.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>{formalShirt.description}</p>
                        <p>Price : ₹{formalShirt.price}</p>
                    </Card.Text>
                </Card.Body>
              </Card>

            </Col>

        ))
    }

        </Row>

      </div>



      {/*******************************************  CASUAL SHIRTS  *********************************************************/}

      <div className='mens-clothing-casuals'>

        <p className='title mens-clothing-casuals-title display-5 fw-bold text-center mt-4 mb-3 mx-3 py-2 rounded-3'>Casual Shirts</p>

        <Row xs={1} md={2} xl={4} className='gx-0' >

        {
             casualShirts.map((casualShirt,index)=>
        (
            <Col className='mb-3'>
              <Card as={Link} to={`/men's-clothing/casual-shirts/${casualShirt.title}/${casualShirt.description}`} className='m-3 mens-clothing-card text-decoration-none'>
                <Card.Img className='mens-clothing-card-img img-fluid' variant="top" src={casualShirt.img} />
                <Card.Body>
                    <Card.Title className='mens-clothing-card-title text-center fs-5 fw-bolder'>{casualShirt.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>{casualShirt.description}</p>
                        <p>Price : ₹{casualShirt.price}</p>
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        ))
    }
    
        </Row>

      </div>



      {/*******************************************  T-SHIRTS  *********************************************************/}


      <div className='mens-clothing-tshirts'>

        <p className='title mens-clothing-tshirts-title display-5 fw-bold text-center mt-4 mb-3 mx-3 py-2 rounded-3'>T-Shirts</p>

        <Row xs={1} md={2} xl={4} className='gx-0' >

        {
             tShirts.map((tShirt,index)=>
        (
            <Col className='mb-3'>
              <Card as={Link} to={`/men's-clothing/t-shirts/${tShirt.title}/${tShirt.description}`} className='m-3 mens-clothing-card text-decoration-none'>
                <Card.Img className='mens-clothing-card-img img-fluid' variant="top" src={tShirt.img} />
                <Card.Body>
                    <Card.Title className='mens-clothing-card-title text-center fs-5 fw-bolder'>{tShirt.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>{tShirt.description}</p>
                        <p>Price : ₹{tShirt.price}</p>
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        ))
    }

        </Row>

      </div>




      {/*******************************************  KURTA AND SET  *********************************************************/}


      <div className='mens-clothing-kurtas'>

        <p className='title mens-clothing-kurtas-title display-5 fw-bold text-center mt-4 mb-3 mx-3 py-2 rounded-3'>Kurtas & Set</p>

        <Row xs={1} md={2} xl={4} className='gx-0' >

        {
             kurtas.map((kurta,index)=>
        (
            <Col className='mb-3'>
              <Card as={Link} to={`/men's-clothing/kurta/${kurta.title}/${kurta.description}`} className='m-3 mens-clothing-card text-decoration-none'>
                <Card.Img className='mens-clothing-card-img img-fluid' variant="top" src={kurta.img} />
                <Card.Body>
                    <Card.Title className='mens-clothing-card-title text-center fs-5 fw-bolder'>{kurta.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>{kurta.description}</p>
                        <p>Price : ₹{kurta.price}</p>
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        ))
    }

        </Row>

      </div>




      {/*******************************************  JEANS  *********************************************************/}


      <div className='mens-clothing-jeans'>

        <p className='title mens-clothing-jeans-title display-5 fw-bold text-center mt-4 mb-3 mx-3 py-2 rounded-3'>Jeans</p>

        <Row xs={1} md={2} xl={4}className='gx-0' >

        {
             jeans.map((jean,index)=>
        (
            <Col className='mb-3'>
              <Card as={Link} to={`/men's-clothing/jeans/${jean.title}/${jean.description}`} className='m-3 mens-clothing-card text-decoration-none'>
                <Card.Img className='mens-clothing-card-img img-fluid' variant="top" src={jean.img} />
                <Card.Body>
                    <Card.Title className='mens-clothing-card-title text-center fs-5 fw-bolder'>{jean.title}</Card.Title>
                    <Card.Text className='fs-6 fw-bold'>
                        <p>{jean.description}</p>
                        <p>Price : ₹{jean.price}</p>
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        ))
    }

        </Row>
      </div>



    </div>
  )
}

export default MensClothing