import React from 'react'; 
import '../styles/Home.css'; 
import Pets from '../images/Pets.jpg'; 
 
function Home() { 
  return ( 
    <div className="home-container"> 
      <div className="home-content"> 
        <div className="image-section"> 
          <img src={Pets} alt="Pets" /> 
        </div> 
        <div className="text-section"> 
          <h1>WELCOME TO PETS HOME</h1> 
          <p>HERE YOU CAN LEARN MORE ABOUT PETS</p> 
          <p>AND FIND A PET THAT YOU LIKE</p> 
        </div> 
      </div> 
    </div> 
  ); 
} 
 
export default Home;