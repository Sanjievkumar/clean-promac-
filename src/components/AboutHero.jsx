import React from 'react';
import { Link } from 'react-router-dom';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <section className="about-hero-section">
      <div className="ah-container">
        <div className="ah-grid">
          
          {/* Left Text Content */}
          <div className="ah-text-content">
            <h4 className="ah-subtitle text-red">ABOUT CLEANPROMAC</h4>
            <div className="ah-underline-small"></div>
            
            <h1 className="ah-title">
              Clean today.<br/>
              Strong tomorrow.<br/>
              <span className="text-red">Built together.</span>
            </h1>
            
            <div className="ah-divider"></div>
            
            <p className="ah-desc">
              Clean Promac brings together world-class<br/>
              cleaning technologies, industry expertise,<br/>
              and trusted global partnerships to deliver<br/>
              solutions that create cleaner, safer and more<br/>
              productive environments.
            </p>
            
            <Link to="#story" className="ah-cta-btn">
              DISCOVER OUR STORY
              <span className="ah-cta-icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </Link>
          </div>

          {/* Right Complex Graphic */}
          <div className="ah-graphic-container">
            {/* Outer dotted rings */}
            <div className="ah-ring ah-ring-outer"></div>
            <div className="ah-ring ah-ring-inner"></div>
            
            {/* Dots on rings */}
            <div className="ah-ring-dot dot-1"></div>
            <div className="ah-ring-dot dot-2"></div>
            <div className="ah-ring-dot dot-3"></div>
            <div className="ah-ring-dot dot-4"></div>
            <div className="ah-ring-dot dot-5"></div>
            <div className="ah-ring-dot dot-6"></div>

            {/* Connecting Lines (SVG) */}
            <svg className="ah-connecting-lines" viewBox="0 0 600 600">
              <line x1="120" y1="160" x2="260" y2="300" stroke="#0A2540" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="480" y1="120" x2="350" y2="250" stroke="#E31837" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="280" y1="480" x2="400" y2="350" stroke="#0A2540" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="480" y1="480" x2="350" y2="350" stroke="#E31837" strokeWidth="1" strokeDasharray="4 4" />
            </svg>

            {/* Blue Skyscraper Arc */}
            <div className="ah-arc ah-arc-blue">
              <div className="ah-arc-image-wrapper">
                <img src="/assets/about-skyscraper-blue.jpg" alt="Building" />
                <div className="ah-arc-overlay blue-overlay"></div>
              </div>
            </div>

            {/* Red Skyscraper Arc */}
            <div className="ah-arc ah-arc-red">
              <div className="ah-arc-image-wrapper">
                <img src="/assets/about-city-red.jpg" alt="City" />
                <div className="ah-arc-overlay red-overlay"></div>
              </div>
            </div>

            {/* Central White Circle */}
            <div className="ah-center-circle">
              <div className="ah-logo-wrapper">
                <img src="/assets/clean-promac-logo.jpg" alt="Clean Promac" className="ah-cleanpromac-center-logo-img" />
                <div className="ah-center-divider"></div>
                <p className="ah-core-values">EXPERTISE <span className="text-red">•</span> TRUST <span className="text-red">•</span> PERFORMANCE</p>
              </div>
            </div>

            {/* Left Truvox Container */}
            <div className="ah-brand-container ah-brand-truvox">
              <div className="ah-brand-circle">
                <img src="/assets/truvox-logo-v2.svg" alt="Truvox" className="ah-brand-logo" />
              </div>
              <p className="ah-brand-text">GLOBAL<br/>TECHNOLOGY<br/>PARTNER</p>
              <div className="ah-brand-divider blue-line"></div>
            </div>

            {/* Right Klenco Container */}
            <div className="ah-brand-container ah-brand-klenco">
              <div className="ah-brand-circle">
                <img src="/assets/klenco-logo.png" alt="Klenco" className="ah-brand-logo klenco-logo" />
              </div>
              <p className="ah-brand-text">INNOVATION<br/>PARTNER</p>
              <div className="ah-brand-divider red-line"></div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Dotted World Map Background (Bottom Right) */}
      <div className="ah-world-map-bg"></div>

      {/* Dark Blue Footer Section */}
      <div className="ah-bottom-bg"></div>

      {/* Bottom Feature Grid (Overlapping) */}
      <div className="ah-feature-grid-wrapper">
        <div className="ah-container">
          <div className="ah-feature-card">
            
            <div className="ah-feature-col">
              <div className="ah-feature-icon red-bg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
              <div className="ah-feature-text">
                <h5>TRUSTED BRANDS</h5>
                <p>Partnered with global leaders<br/>in cleaning technology.</p>
              </div>
            </div>

            <div className="ah-feature-col">
              <div className="ah-feature-icon blue-bg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <div className="ah-feature-text">
                <h5>EXPERT GUIDANCE</h5>
                <p>Solutions tailored to your<br/>needs by industry experts.</p>
              </div>
            </div>

            <div className="ah-feature-col">
              <div className="ah-feature-icon dark-bg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="ah-feature-text">
                <h5>RELIABLE SUPPORT</h5>
                <p>Prompt service and support<br/>you can depend on.</p>
              </div>
            </div>

            <div className="ah-feature-col">
              <div className="ah-feature-icon red-bg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <div className="ah-feature-text">
                <h5>PERFORMANCE<br/>THAT LASTS</h5>
                <p>Equipment and solutions<br/>built for long-term results.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
