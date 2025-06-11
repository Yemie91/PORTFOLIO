import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Gileon Digital</h2>
        <p>Crafting modern websites & apps for ambitious startups.</p>
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:Gileon_Digital@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gileon Digital. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

