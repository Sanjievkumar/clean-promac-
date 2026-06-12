import React from 'react';
import './ServicesHero.css';

const ServicesHero = () => {
  return (
    <section className="services-hero">
      
      {/* Background with concentric circles */}
      <div className="hero-bg-lines"></div>

      {/* The precise, scalable SVG organic shape */}
      <div className="organic-svg-container">
        <svg viewBox="0 0 1440 900" className="precise-swoop-svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="premium-shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="25" stdDeviation="30" floodColor="#080C16" floodOpacity="0.08"/>
            </filter>
          </defs>
          <path 
            d="M0,0 L1440,0 L1440,500 
               C1440,700 1300,850 1150,850 
               C950,850 800,550 600,550 
               C400,550 200,750 0,750 Z" 
            fill="#FFFFFF" 
            filter="url(#premium-shadow)"
          />
        </svg>

        {/* The Masked Image perfectly positioned over the SVG's circular bulge */}
        <div className="precise-image-container">
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Consultancy Team" 
            className="services-hero-img"
          />
          {/* Subtle pulse glow behind the image */}
          <div className="image-pulse-glow"></div>
        </div>
      </div>

      <div className="container services-hero-container">
        
        {/* Left Content */}
        <div className="services-hero-content animate-on-scroll">
          <div className="breadcrumbs">
            <span className="text-gray">Home</span> / <span className="text-gray">Services</span> / <span className="text-red">Consultancy</span>
          </div>
          
          <h1 className="services-hero-title">
            Strategic Guidance.<br/>
            Operational Excellence.<br/>
            Cleaner <span className="text-red">Environments.</span>
          </h1>
          
          <div className="title-underline"></div>
          
          <p className="services-hero-desc text-gray">
            Our consultancy services help organisations design smarter cleaning strategies, improve efficiency, and create healthier, safer spaces.
          </p>
        </div>

        {/* Right Floating Stats Box */}
        <div className="services-floating-card animate-on-scroll">
          <div className="floating-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </div>
          <div className="floating-card-text">
            <p>Data-driven insights.</p>
            <p>Tailored strategies.</p>
            <p>Measurable impact.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesHero;
