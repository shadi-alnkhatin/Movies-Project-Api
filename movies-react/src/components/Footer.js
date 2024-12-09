import React from "react";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok, FaPhone, FaEnvelope } from "react-icons/fa";
import logo from "../assets/images/GoMovies.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      
      {/* Footer Wrapper */}
      <div className="footer-wrapper">
        {/* Logo Section */}
        <div className="footer-logo logo-link">
        <img src={logo} alt="MovieMaze home" width="140" height="32" />
          <p className="footer-logo-text">Go Movies</p>
        </div>

        {/* Links Section */}
        <div>
        <div className="footer-links">
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/TermsAndConditions">Terms And Conditions</Link></li>
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
        © {currentYear} Go Movies. All Rights Reserved.
      </p>
        </div>


        {/* Contact Section */}
        <div className="footer-contact">
          <p>Intrested to join our team? </p>
          <p>Get in touch now</p>
          <br />

          <p><FaPhone className="social-icon" /> +962788136963</p>
         
          <p><FaEnvelope className="social-icon" />info@GoMovies.com</p>
        </div>


      </div>

     
      
    </footer>
  );
};

export default Footer;
