import React from 'react';
import './BrandsHero.css';

const BrandsHero = () => {
  return (
    <section className="brands-hero">
      
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
          {/* 
            Path traces: 
            - Top left (0,0) to top right (1440,0)
            - Down right edge to 1440,500
            - Curve to bottom of globe (1150, 850)
            - S-curve up to the valley peak (600, 550)
            - Curve down to the left edge (0, 750)
          */}
          <path 
            d="M0,0 L1440,0 L1440,500 
               C1440,700 1300,850 1150,850 
               C950,850 800,550 600,550 
               C400,550 200,750 0,750 Z" 
            fill="#FFFFFF" 
            filter="url(#premium-shadow)"
          />
        </svg>

        {/* The Dotted Globe exactly positioned over the SVG's circular bulge */}
        <div className="precise-globe-container">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
            alt="World Map" 
            className="dotted-world-map-img"
          />
          
          {/* Pulsing red location markers */}
          <div className="map-marker loc-usa">
            <div className="marker-dot"></div>
            <div className="marker-pulse"></div>
          </div>
          <div className="map-marker loc-uk">
            <div className="marker-dot"></div>
            <div className="marker-pulse"></div>
          </div>
          <div className="map-marker loc-asia">
            <div className="marker-dot"></div>
            <div className="marker-pulse"></div>
          </div>
        </div>
      </div>

      <div className="container brands-hero-container">
        
        {/* Left Content */}
        <div className="brands-hero-content animate-on-scroll">
          <div className="breadcrumbs">
            <span className="text-gray">Home</span> / <span className="text-red">Brands</span>
          </div>
          
          <h1 className="brands-hero-title">
            World-Class Brands.<br/>
            Cleaner <span className="text-red">Outcomes.</span>
          </h1>
          
          <div className="title-underline"></div>
          
          <p className="brands-hero-desc text-gray">
            Clean ProMac partners with global pioneers to deliver innovative, reliable, and sustainable cleaning solutions to every space.
          </p>
        </div>

        <div className="vertical-trusted-text">
          TRUSTED BRANDS. TRANSFORMS SPACES.
        </div>

      </div>
    </section>
  );
};

export default BrandsHero;
