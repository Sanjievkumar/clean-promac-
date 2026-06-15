import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container topbar-container">
          <div className="topbar-contact">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>+01 44 1234 5678</span>
          </div>
          <Link to="/quote" className="btn btn-primary btn-sm topbar-cta">
            Request a Quote <span>&rarr;</span>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container navbar-container">
          <Link to="/" className="logo">
            <span className="logo-icon">
              {/* Simple placeholder icon, replace with actual logo */}
              <div className="logo-circle"></div>
            </span>
            <div className="logo-text">
              <strong>CleanPromac</strong>
              <small>Professional Cleaning Solutions</small>
            </div>
          </Link>

          <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/brands">Brands</Link>
            <div className="dropdown">
              <Link to="/services">Services <span className="caret">▼</span></Link>
            </div>
            <Link to="/contact">Contact Us</Link>
          </div>

          <button 
            className="hamburger" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
