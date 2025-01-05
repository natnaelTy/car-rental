
import "./index.css";
import Home from './components/home/Home';
import AboutDetail from './components/about/AboutDetail';
import Vehicles from './components/vehicles/Vehicles';
import Favorites from './components/favorites/Favorites';
import { Route, Routes } from 'react-router';
import Contact from './components/contact/Contact';

function App() {


  return (
    <>
    <Routes>
     <Route path='/' element={<Home/>}/> 
     <Route path='/aboutDetail' element={<AboutDetail/>}/> 
     <Route path='/vehicles' element={<Vehicles/>}/> 
     <Route path='/favorites' element={<Favorites/>}/> 
     <Route path='/contact' element={<Contact/>}/> 
    </Routes>
    </>
  )
}

export default App
