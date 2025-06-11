import React, { useState } from "react";
import './mynavbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (

    <div className='Navbar' id='navbar'>

      <span className="logo-text">Gileon_Digital</span>

      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
       
      </ul>

      <div className='nav-connect'>Welcome!!!</div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        
      </div>
    </div>
  );
}

export default Navbar;
