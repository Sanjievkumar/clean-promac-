import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-col brand-col">
            <Link to="/" className="logo footer-logo">
              <span className="logo-icon">
                <div className="logo-circle"></div>
              </span>
              <div className="logo-text">
                <strong className="text-white">CleanPromac</strong>
                <small className="text-gray-300">Professional Cleaning Solutions</small>
              </div>
            </Link>
            <p className="footer-desc">
              Providing professional cleaning equipment, solutions and support to help your facilities cleaner, safer and more efficient.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="YouTube">yt</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/brands">Brands</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><Link to="/products/scrubber-dryers">Scrubber Dryers</Link></li>
              <li><Link to="/products/vacuum-cleaners">Vacuum Cleaners</Link></li>
              <li><Link to="/products/sweepers">Sweepers</Link></li>
              <li><Link to="/products/pressure-washers">Pressure Washers</Link></li>
              <li><Link to="/products/steam-cleaners">Steam Cleaners</Link></li>
              <li><Link to="/products/chemicals">Chemicals & Accessories</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/installation">Installation</Link></li>
              <li><Link to="/services/amc">AMC & Maintenance</Link></li>
              <li><Link to="/services/repairs">Repairs</Link></li>
              <li><Link to="/services/spare-parts">Spare Parts</Link></li>
              <li><Link to="/services/training">Training & Support</Link></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <span className="contact-icon">📍</span>
                <span>No. 15, Industrial Estate,<br/>Guindy, Chennai - 600 032, India</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span>+91 44 1234 5678</span>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <span>sales@cleanpromac.com</span>
              </li>
              <li>
                <span className="contact-icon">🌐</span>
                <span>www.cleanpromac.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 CleanPromac. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
      
      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        &uarr;
      </button>
    </footer>
  );
};

export default Footer;
