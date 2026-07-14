import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './BrandsHero.css';

const BrandsHero = () => {
  return (
    <section className="brands-hero">
      {/* Tier 1: Main Image & Hero Content */}
      <div className="brands-hero-main">
        <div className="hero-content-wrapper container">
          <div className="hero-content-left animate-on-scroll">
            <h4 className="hero-subtitle text-red">OUR BRANDS</h4>
            
            <h1 className="brands-hero-title">
              World-Class Brands.<br/>
              <span className="text-red">Built on Trust.</span>
            </h1>
            
            <div className="title-underline"></div>
            
            <p className="brands-hero-desc text-gray">
              Clean Promac proudly represents<br/>
              global leaders in cleaning technology.<br/>
              Proven. Reliable. Preferred worldwide.
            </p>

            <Link to="#explore" className="hero-cta-btn">
              EXPLORE OUR BRANDS <FiArrowRight className="hero-cta-icon" />
            </Link>
          </div>
        </div>
      </div>

      {/* Tier 2: The Angled Logo Band */}
      <div className="brands-logo-band">
        <div className="logo-band-content container">
          {/* Truvox side */}
          <div className="logo-band-item">
            <img 
              src="/assets/truvox-logo-v2.svg" 
              alt="Truvox International" 
              className="band-logo truvox-logo" 
            />
            <div className="band-divider"></div>
            <div className="band-text">
              <div className="band-header">
                {/* UK Flag Emoji / SVG placeholder */}
                <span className="flag-icon" role="img" aria-label="UK Flag">🇬🇧</span>
                <span className="since-text">SINCE 1960</span>
              </div>
              <p>Global technology partner for<br/>professional cleaning solutions.</p>
            </div>
          </div>

          {/* Klenco side */}
          <div className="logo-band-item">
            <img 
              src="/assets/klenco-logo.png" 
              alt="Klenco" 
              className="band-logo klenco-logo" 
            />
            <div className="band-divider"></div>
            <div className="band-text">
              <div className="band-header">
                {/* Singapore Flag Emoji / SVG placeholder */}
                <span className="flag-icon" role="img" aria-label="Singapore Flag">🇸🇬</span>
                <span className="since-text">SINCE 1975</span>
              </div>
              <p>Innovation partner for<br/>advanced cleaning systems.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 3: Dark Blue Feature Grid */}
      <div className="brands-feature-grid">
        <div className="container feature-grid-container">
          
          <div className="feature-item">
            <div className="feature-icon-circle">
              {/* Shield Icon SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
            <div className="feature-text">
              <h5>TRUSTED PARTNERSHIPS</h5>
              <p>Representing the world's leading<br/>cleaning technology brands.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-circle">
              {/* Gear Icon SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </div>
            <div className="feature-text">
              <h5>RELIABLE PERFORMANCE</h5>
              <p>Products built for durability,<br/>efficiency and long-term value.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-circle">
              {/* Globe Icon SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div className="feature-text">
              <h5>GLOBAL STANDARDS</h5>
              <p>Backed by expert service and a<br/>commitment to excellence.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandsHero;
