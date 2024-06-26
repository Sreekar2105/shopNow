import React from 'react';
import { Card,Row,Col } from 'react-bootstrap';
import '../App.css' 


function NewArrivals() {
  return (
    <>
       <p className='new-arrivals fs-1 fw-bold text-center mt-5 mb-3 mx-3 bg-light overflow-x-auto'>New Arrivals</p>

       <Row  xs={1} sm={2} md={3} lg={4} className='gx-0' >
        <Col>
          <Card className='m-3 new-arrivals-card'>
            <Card.Img className='new-arrivals-card-img img-fluid' variant="top" src="https://m.media-amazon.com/images/I/710qN4eow2L._SX679_.jpg" />
            <Card.Body>
                <Card.Title className='new-arrivals-title text-center fs-4 fw-bold'>Realme Narzo N65 5G</Card.Title>
                <Card.Text className='fs-5 fw-bold'>
                   <p>(6GB RAM,128GB)</p>
                   <p>Price : ₹12,499</p>
                </Card.Text>
            </Card.Body>        
          </Card>
        </Col>

        <Col>
          <Card className='m-3 new-arrivals-card'>
            <Card.Img className='new-arrivals-card-img img-fluid' variant="top" src="https://m.media-amazon.com/images/I/61RE1r+2pkL._SX679_.jpg" />
            <Card.Body>
        <Card.Title className='new-arrivals-title text-center fs-4 fw-bold'>Vivo Y200 Pro 5G</Card.Title>
        <Card.Text className='fs-5 fw-bold'>
          <p>(8GB RAM,128GB)</p>
          <p>Price : ₹24,999</p>
        </Card.Text>
      </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='m-3 new-arrivals-card'> 
            <Card.Img className='new-arrivals-card-img img-fluid' variant="top" src="https://m.media-amazon.com/images/I/61sY8BGOyEL._SX679_.jpg" />
            <Card.Body>
              <Card.Title className='new-arrivals-title text-center fs-4 fw-bold'>iQOO Z9x 5G</Card.Title>
              <Card.Text className='fs-5 fw-bold'>
                <p>(6GB RAM,128GB)</p>
                <p>Price:  ₹14,499</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='m-3 new-arrivals-card'>
            <Card.Img className='new-arrivals-card-img img-fluid' variant="top" src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-e556bzoains/gallery/in-galaxy-f-sm-e556bzoains-sm-e---bzodins-541633762?$1300_1038_PNG$" />
            <Card.Body>
              <Card.Title className='new-arrivals-title text-center fs-4 fw-bold'>Samsung Galaxy F55 5G</Card.Title>
              <Card.Text className='fs-5 fw-bold'>
               <p>(8GB RAM,256GB)</p>
               <p>Price : ₹29,999</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>


        <Col>
          <Card className='m-3 new-arrivals-card'>
            <Card.Img className='new-arrivals-card-img img-fluid' variant="top" src="https://images.gizbot.com/webp/fit-in/400x400/img/gadget-finder/laptops/2024/06/acer-alg-gaming-laptop-al15g-52-windows-11-home-15-6-inch-16gb-ram-1tb-ssd-intel-core-i5-12450h-12th-gen-nvidia-geforce-rtx-3050_1718177709.jpg" />
            <Card.Body>
              <Card.Title className='new-arrivals-title text-center fs-4 fw-bold'>Acer ALG Gaming Laptop</Card.Title>
              <Card.Text className='fs-5 fw-bold'>
                <p>(i5,12th Gen)</p>
               <p>(16GB RAM,1TB)</p>
               <p>Price : ₹68,990</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='m-3 new-arrivals-card'>
            <Card.Img className='new-arrivals-card-img img-fluid' variant="top" src="https://images.gizbot.com/webp/fit-in/400x400/img/gadget-finder/laptops/2024/05/asus-vivobook-s-14-oled-m5406-windows-11-home-14-inch-16gb-ram-1tb-ssd-amd-ryzen-5-7535hs-integrated-amd-radeon-graphics_1716288846.jpg" />
            <Card.Body>
              <Card.Title className='new-arrivals-title text-center fs-4 fw-bold'>ASUS Vivobook S14 OLED</Card.Title>
              <Card.Text className='fs-5 fw-bold'>
                <p>(AMD Ryzen 5 7535HS)</p>
               <p>(16GB RAM,1TB)</p>
               <p>Price : ₹29,999</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='m-3 new-arrivals-card'>
            <Card.Img className='new-arrivals-card-img img-fluid mt-4' variant="top" src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw49a8b12d/images/Fastrack/Catalog/3308KM01_1.jpg?sw=800&sh=800" />
            <Card.Body>
              <Card.Title className='new-arrivals-title text-center fs-4 fw-bold'>Fastrack Stunners Quartz Analog Black Dial Metal Strap Watch</Card.Title>
              <Card.Text className='fs-5 fw-bold'>
               <p>Price : ₹2,240</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>


        <Col>
          <Card className='m-3 new-arrivals-card'>
            <Card.Img className='new-arrivals-card-img img-fluid mt-2' variant="top" src="https://justintime.in/cdn/shop/products/D011.jpg?v=1682005814&width=823" />
            <Card.Body>
              <Card.Title className='new-arrivals-title text-center fs-4 fw-bold'>CASIO</Card.Title>
              <Card.Text className='fs-5 fw-bold'>
                <p>Vintage Unisex Digital Stainless Steel Watch</p>
               <p>Price : ₹1,695</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='m-3 new-arrivals-card'>
            <Card.Img className='new-arrivals-card-img img-fluid mt-4' variant="top" src="https://sylvi.in/cdn/shop/files/Professional_Edge_Black_Black_No_Hands_800x1000_97e41e1c-4e31-4a8f-be41-9cea2bc0bb67_720x.webp?v=1715861970" />
            <Card.Body>
              <Card.Title className='new-arrivals-title text-center fs-4 fw-bold'>SYLVI</Card.Title>
              <Card.Text className='fs-5 fw-bold'>
                <p>PROFESSIONAL EDGE BLACK</p>
               <p>Price : ₹2,590</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='m-3 new-arrivals-card'>
            <Card.Img className='new-arrivals-card-img img-fluid mt-4' variant="top" src="https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7d810be0/images/Sonata/Catalog/8123YM03_1.jpg?sw=800&sh=800" />
            <Card.Body>
              <Card.Title className='new-arrivals-title text-center fs-5 fw-bold'>Sonata Quartz Analog Silver Stainless Steel Strap for Women</Card.Title>
              <Card.Text className='fs-5 fw-bold'>
               <p>Price : ₹1,999</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='m-3 new-arrivals-card'>
            <Card.Img className='new-arrivals-card-img img-fluid mt-4' variant="top" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa931c91c/images/Sonata/Catalog/77105NM09W_1.jpg?sw=800&sh=800" />
            <Card.Body>
              <Card.Title className='new-arrivals-title text-center fs-5 fw-bold'>Sonata Aspire Quartz Analog Black Dial Stainless Steel Strap Watch for Men</Card.Title>
              <Card.Text className='fs-5 fw-bold'>
               <p>Price : ₹1,795</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        
        <Col>
          <Card className='m-3 new-arrivals-card'>
            <Card.Img className='new-arrivals-card-img img-fluid' variant="top" src="https://m.media-amazon.com/images/I/51OdFEcaiRL._SY695_.jpg" />
            <Card.Body>
              <Card.Title className='new-arrivals-title text-center fs-4 fw-bold'>Puma</Card.Title>
              <Card.Text className='fs-5 fw-bold'>
                <p>mens Snatch V2 Sneaker</p>
               <p>Price : ₹1,899</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>


        
        <Col>
          <Card className='m-3 new-arrivals-card'>
            <Card.Img className='new-arrivals-card-img img-fluid mt-2' variant="top" src="https://m.media-amazon.com/images/I/71u0Tk0vY1L._SY675_.jpg" />
            <Card.Body>
              <Card.Title className='new-arrivals-title text-center fs-4 fw-bold'>Centrino</Card.Title>
              <Card.Text className='fs-5 fw-bold'>
                <p>Mens Casual Shoes and Classy Sneakers with Extra Comfort</p>
               <p>Price : ₹849</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>


        
        <Col>
          <Card className='m-3 new-arrivals-card'>
            <Card.Img className='new-arrivals-card-img img-fluid mt-3' variant="top" src="https://m.media-amazon.com/images/I/61t1SDF8PyL._SY695_.jpg" />
            <Card.Body>
              <Card.Title className='new-arrivals-title text-center fs-4 fw-bold'>Marc Loire</Card.Title>
              <Card.Text className='fs-5 fw-bold'>
                <p>Women's Pair of Embellished Fashion Flat Sandals</p>
               <p>Price : ₹1,200</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='m-3 new-arrivals-card'>
            <Card.Img className='new-arrivals-card-img img-fluid mt-3' variant="top" src="https://m.media-amazon.com/images/I/810Jx+-EfxL._SY675_.jpg" />
            <Card.Body>
              <Card.Title className='new-arrivals-title text-center fs-4 fw-bold'>JM LOOKS</Card.Title>
              <Card.Text className='fs-5 fw-bold'>
                <p>Women's Silver Spool Heel Sandals with Upper Bow</p>
               <p>Price : ₹799</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>


        <Col>
          <Card className='m-3 new-arrivals-card'>
            <Card.Img className='new-arrivals-card-img img-fluid mt-3' variant="top" src="https://m.media-amazon.com/images/I/91xqhJ-iNPL._SY695_.jpg" />
            <Card.Body>
              <Card.Title className='new-arrivals-title text-center fs-4 fw-bold'>AFROJACK</Card.Title>
              <Card.Text className='fs-5 fw-bold'>
                <p>Men's Orginal Leather Sandals</p>
               <p>Price : ₹849</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>


    <p className='footer mt-3 mb-0 text-center fs-3 overflow-x-auto'>Copyright &#169; 2024 <span style={{color:"#19297C",fontWeight:"600"}}>shopNow</span></p>
    </>
  )
}

export default NewArrivals;