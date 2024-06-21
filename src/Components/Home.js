import React from 'react';
import { Container} from 'react-bootstrap';
import '../style.css'
import Navigationbar from './Navigationbar';
import Intro from './Intro';
import TopBrands from './TopBrands';
import NewArrivals from './NewArrivals';

function Home() 
{
  return (
    <Container fluid className='px-0'>
       <Navigationbar/>
       <Intro/>
       <TopBrands/>
       <NewArrivals/>
   </Container>
  )
}

export default Home;