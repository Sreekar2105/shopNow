import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { Container } from 'react-bootstrap';
import { Routes,Route } from 'react-router-dom';
import Navigationbar from './Components/Navigationbar';
import Mobiles from './Components/Mobiles';
import Laptops from './Components/Laptops';
import MensClothing from './Components/MensClothing';

function App() {
  return (
    <Container fluid className='px-0'>
    <Navigationbar/>
    <Routes>
      <Route path="/shopNow" element={<Home/>}></Route>
      <Route path="/mobiles" element={<Mobiles/>}></Route>
      <Route path='/laptops' element={<Laptops/>}></Route>
      <Route path="/men's-clothing" element={<MensClothing>/></MensClothing>}></Route>
    </Routes>
    </Container>
  );
}

export default App;
