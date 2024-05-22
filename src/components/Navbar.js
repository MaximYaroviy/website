import React from 'react'; 
import { Link } from 'react-router-dom'; 
import '../styles/Navbar.css'; 
import logo from '../images/logo.jpg'; 
 
function Navbar() { 
return ( 
    <nav className="navbar"> 
    <div className="logo-container"> 
        <Link to="/"> 
            <img src={logo} alt="Logo" className="logo" /> 
        </Link> 
    </div> 
    <ul className="nav-links"> 
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/exotic-pets">Exotic Pets</Link></li> 
        <li><Link to="/pet-shop">Pet Shop</Link></li> 
    </ul> 
    </nav> 
     
); 
} 
 
export default Navbar;