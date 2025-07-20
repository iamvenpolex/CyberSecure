import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" data-aos="slide-up">
      <div className="footer-top">
        {/* Quick Links */}
        <div className="footer-nav">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
             <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-legal">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/terms">Terms of Use</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="footer-search">
          <h4>Search</h4>
          <form className="search-form">
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>

      {/* Social Icons */}
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CyberSecure Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
