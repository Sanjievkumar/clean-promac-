import React from 'react';
import { Link } from 'react-router-dom';
import './BrandsHero.css';

const BrandsHero = () => {
  return (
    <section className="brands-hero">
      
      {/* Tier 1 & 2: Main Image with Overlays */}
      <div className="bh-image-container">
        
        {/* Text Overlay (Positioned carefully to avoid the blue block on the left) */}
        <div className="bh-text-overlay animate-on-scroll">
          <h4 className="bh-subtitle text-red">OUR BRANDS</h4>
          <h1 className="bh-title">
            World-Class Brands.<br/>
            <span className="text-red">Built on Trust.</span>
          </h1>
          <div className="bh-underline"></div>
          <p className="bh-desc text-gray">
            Clean Promac proudly represents<br/>
            global leaders in cleaning technology.<br/>
            Proven. Reliable. Preferred worldwide.
          </p>
          <Link to="#explore" className="bh-cta-btn">
            EXPLORE OUR BRANDS 
            <svg className="bh-cta-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* Logo Band Overlay (Positioned exactly over the white trapezoid in the image) */}
        <div className="bh-logo-overlay">
          {/* Truvox */}
          <div className="bh-brand-item">
            <img src="/assets/truvox-logo-v2.svg" alt="Truvox" className="bh-logo truvox-logo" />
            <div className="bh-divider"></div>
            <div className="bh-brand-info">
              <div className="bh-flag-row">
                <img src="https://flagcdn.com/w40/gb.png" srcSet="https://flagcdn.com/w80/gb.png 2x" alt="UK" className="bh-flag" />
                <span className="bh-since">SINCE 1960</span>
              </div>
              <p>Global technology partner for<br/>professional cleaning solutions.</p>
            </div>
          </div>

          {/* Klenco */}
          <div className="bh-brand-item">
            <img src="/assets/klenco-logo.png" alt="Klenco" className="bh-logo klenco-logo" />
            <div className="bh-divider"></div>
            <div className="bh-brand-info">
              <div className="bh-flag-row">
                <img src="https://flagcdn.com/w40/sg.png" srcSet="https://flagcdn.com/w80/sg.png 2x" alt="Singapore" className="bh-flag" />
                <span className="bh-since">SINCE 1975</span>
              </div>
              <p>Innovation partner for<br/>advanced cleaning systems.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 3: Dark Blue Feature Grid (Directly below the image) */}
      <div className="bh-feature-tier">
        <div className="bh-feature-grid">
          
          <div className="bh-feature-col">
            <div className="bh-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
            <div className="bh-feature-text">
              <h5>TRUSTED PARTNERSHIPS</h5>
              <p>Representing the world's leading<br/>cleaning technology brands.</p>
            </div>
          </div>

          <div className="bh-feature-col bh-feature-center-col">
            <div className="bh-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </div>
            <div className="bh-feature-text">
              <h5>RELIABLE PERFORMANCE</h5>
              <p>Products built for durability,<br/>efficiency and long-term value.</p>
            </div>
          </div>

          <div className="bh-feature-col">
            <div className="bh-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div className="bh-feature-text">
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
