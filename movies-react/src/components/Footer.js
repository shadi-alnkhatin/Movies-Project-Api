import React from "react";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok, FaPhone, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      
      {/* Footer Wrapper */}
      <div className="footer-wrapper">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="logo.png" alt="Logo" />
          <p className="footer-logo-text">MovieMaze</p>
        </div>

        {/* Links Section */}
        <div>
        <div className="footer-links">
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/subscription">Subscription</a></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
                {/* Social Media Section */}
                <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="social-icon" />
          </a>
          
        </div>
         {/* Copyright */}
      <p className="footer-copyright">
        © {currentYear} Your Website Name. All Rights Reserved.
      </p>
        </div>


        {/* Contact Section */}
        <div className="footer-contact">
          <p>Intrested to join our team? </p>
          <p>Get in touch now</p>
          <br />

          <p><FaPhone className="social-icon" /> +123-456-7890</p>
         
          <p><FaEnvelope className="social-icon" />info@yourwebsite.com</p>
        </div>


      </div>

     
      
    </footer>
  );
};

export default Footer;
