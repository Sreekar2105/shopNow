import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { Container } from 'react-bootstrap';
import { Routes,Route } from 'react-router-dom';
import Navigationbar from './Components/Navigationbar';
import Mobiles from './Components/Mobiles';
import Laptops from './Components/Laptops';
import MensClothing from './Components/MensClothing';
import MensWatches from './Components/MensWatches';
import MensShoes from './Components/MensShoes';
import WomensClothing from './Components/WomensClothing';
import Handbags from './Components/Handbags';
import WomensFootwear from './Components/WomensFootwear';
import AppleProducts from './Components/AppleProducts';
import SamsungMobiles from './Components/SamsungMobiles';
import OppoMobiles from './Components/OppoMobiles';
import LenovoLaptops from './Components/LenovoLaptops';
import DellLaptops from './Components/DellLaptops';
import AsusLaptops from './Components/AsusLaptops';
import Adidas from './Components/Adidas';
import Nike from './Components/Nike';
import AppleMobiles from './Components/AppleMobiles';
import XiaomiMobiles from './Components/XiaomiMobiles';
import OneplusMobiles from './Components/OneplusMobiles';
import IqooMobiles from './Components/IqooMobiles';
import RealmeMobiles from './Components/RealmeMobiles';
import HpLaptops from './Components/HpLaptops';
import AcerLaptops from './Components/AcerLaptops';
import SingleMobile from './Components/SingleMobile';

function App() {

  let oppoDetails = [
    {
      title : "oppo a59 5g",
      price : "15,499"
    },

    {
      title : "oppo a3 pro 5g",
      price : "17,999"
    }
  ]
  return (
    <Container fluid className='px-0'>
    <Navigationbar/>
    <Routes>
      <Route path="/shopNow" element={<Home/>}></Route>
      <Route path="/mobiles" element={<Mobiles/>}></Route>
      <Route path='/laptops' element={<Laptops/>}></Route>
      <Route path="/men's-clothing" element={<MensClothing/>}></Route>
      <Route path="/men's-watches" element={<MensWatches/>}></Route>
      <Route path="/men's-shoes" element={<MensShoes/>}></Route>
      <Route path="/women's-clothing" element={<WomensClothing/>}></Route>
      <Route path="/handbags" element={<Handbags/>}></Route>
      <Route path="/women's-footwear" element={<WomensFootwear/>}></Route>
      <Route path="/apple-products" element={<AppleProducts/>}></Route>
      <Route path="/mobiles/samsung" element={<SamsungMobiles/>}></Route>
      <Route path="/mobiles/oppo" element={<OppoMobiles/>}></Route>
      <Route path="/adidas-products" element={<Adidas/>}></Route>
      <Route path="/nike-products" element={<Nike/>}></Route>
      <Route path="/mobiles/apple" element={<AppleMobiles/>}></Route>
      <Route path="/mobiles/xiaomi" element={<XiaomiMobiles/>}></Route>
      <Route path="/mobiles/oneplus" element={<OneplusMobiles/>}></Route>
      <Route path="/mobiles/iqoo" element={<IqooMobiles/>}></Route>
      <Route path="/mobiles/realme" element={<RealmeMobiles/>}></Route>
      <Route path="/laptops/hp" element={<HpLaptops/>}></Route>
      <Route path="/laptops/lenovo" element={<LenovoLaptops/>}></Route>
      <Route path="/laptops/dell" element={<DellLaptops/>}></Route>
      <Route path="/laptops/asus" element={<AsusLaptops/>}></Route>
      <Route path="/laptops/acer" element={<AcerLaptops/>}></Route>




    </Routes>
    </Container>
  );
}

export default App;
