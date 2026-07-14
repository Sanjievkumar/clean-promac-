import React from 'react';
import './ServicesHero.css';

const ServicesHero = () => {
  return (
    <section className="sh-hero-section">
      <div className="container sh-container">
        <div className="sh-content">
          <div className="sh-subtitle-wrapper">
            <h4 className="sh-subtitle">OUR SERVICES</h4>
            <div className="sh-subtitle-line"></div>
          </div>
          
          <h1 className="sh-title">
            EXPERTISE<br/>
            YOU CAN<br/>
            <span className="text-red">TRUST.</span>
          </h1>
          
          <p className="sh-description">
            From consultation to after-sales support, we deliver end-to-end cleaning solutions that ensure performance, reliability and peace of mind.
          </p>
          
          <div className="sh-cta-group">
            <button className="sh-btn sh-btn-primary">
              <span>EXPLORE OUR SERVICES</span>
              <span className="sh-arrow">&rarr;</span>
            </button>
            <button className="sh-btn sh-btn-secondary">
              <span>TALK TO OUR EXPERTS</span>
              <span className="sh-arrow">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
