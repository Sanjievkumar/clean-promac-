import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="home-hero">
      <div className="home-hero-bg-container">
        <div className="container home-hero-content">
          
          {/* Text Content */}
          <div className="home-hero-text">
            <span className="home-hero-subtitle text-navy">INDUSTRIAL CLEANING SOLUTIONS</span>
            <h1 className="home-hero-title text-navy">
              BUILT FOR <br/>
              <span className="text-red">PERFORMANCE.</span>
            </h1>
            <p className="home-hero-desc text-gray">
              Professional cleaning equipment for industries, healthcare, hospitality, commercial spaces, and institutions.
            </p>
            
            <div className="home-hero-actions">
              <button className="btn btn-primary">
                Explore Products <span>&rarr;</span>
              </button>
              <button className="btn btn-outline hero-btn-secondary">
                Talk to Our Experts <span>&rarr;</span>
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* Floating Features Bar */}
      <div className="container">
        <div className="home-features-bar">
          <div className="home-feature-item">
            <div className="home-feature-icon">
              <img src="/assets/klenco-logo.png" alt="Icon" style={{width: '32px', height: '32px', objectFit: 'contain', opacity: 0}} />
              {/* Using CSS masks or SVGs for icons in CSS or we can just use emoji placeholders if not provided */}
              <span style={{position: 'absolute', fontSize: '1.8rem'}}>🎖️</span>
            </div>
            <div className="home-feature-text">
              <strong>WORLD-CLASS</strong>
              <span>EQUIPMENT</span>
            </div>
          </div>
          <div className="home-feature-item">
            <div className="home-feature-icon">
              <span style={{position: 'absolute', fontSize: '1.8rem'}}>⚙️</span>
            </div>
            <div className="home-feature-text">
              <strong>ENGINEERED FOR</strong>
              <span>RELIABILITY</span>
            </div>
          </div>
          <div className="home-feature-item">
            <div className="home-feature-icon">
              <span style={{position: 'absolute', fontSize: '1.8rem'}}>🎧</span>
            </div>
            <div className="home-feature-text">
              <strong>EXPERT SUPPORT</strong>
              <span>&amp; SERVICE</span>
            </div>
          </div>
          <div className="home-feature-item">
            <div className="home-feature-icon">
              <span style={{position: 'absolute', fontSize: '1.8rem'}}>🛡️</span>
            </div>
            <div className="home-feature-text">
              <strong>TRUSTED BY</strong>
              <span>INDUSTRIES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
