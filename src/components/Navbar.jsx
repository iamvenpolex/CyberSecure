import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">CyberSecure</div>

      {/* Toggle Button for Mobile */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
        <li>
          <Link to="/login" className="login-btn" onClick={closeMenu}>
            Sign up for audit
          </Link>
        </li>
      </ul>
    </nav>
  );
}
