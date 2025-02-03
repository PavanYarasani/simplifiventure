
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./footer.css"; // Import the external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Brand Info */}
        <div className="footer-section">
          <h2 className="footer-logo">VentureCapital</h2>
          <p className="footer-text">
            Empowering startups with strategic investments.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
             <li> <Link  to="/simplifiventure"> Home</Link></li>
             <li><Link to="/team">Team</Link></li>
             <li><Link to="/studio"> Studio</Link></li>
            
          </ul>
        </div>

        {/* Column 3: Social Media Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} VentureCapital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;