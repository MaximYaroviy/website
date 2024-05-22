import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import ExoticPets from './pages/ExoticPets'; 
import PetShop from './pages/PetShop'; 
import './App.css'; 
 
function App() { 
  return ( 
    <div> 
      <BrowserRouter> 
        <Navbar /> 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/exotic-pets" element={<ExoticPets />} /> 
          <Route path="/pet-shop" element={<PetShop />} /> 
        </Routes> 
        <Footer /> 
      </BrowserRouter> 
    </div> 
  ); 
} 
 
export default App;