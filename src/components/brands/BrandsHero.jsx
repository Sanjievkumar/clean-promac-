import React from 'react';
import './BrandsHero.css';

const BrandsHero = () => {
  return (
    <section className="brands-hero">
      
      {/* Background with concentric circles */}
      <div className="hero-bg-lines"></div>

      {/* The organic swooping white shape with shadow */}
      <div className="hero-swoop-bg">
        <svg viewBox="0 0 1440 700" preserveAspectRatio="xMidYMin slice" className="swoop-svg">
          <defs>
            <filter id="hero-shadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="25" stdDeviation="35" floodColor="#080C16" floodOpacity="0.08"/>
            </filter>
          </defs>
          <path 
            d="M0,0 L1440,0 L1440,200 
               C1350,200 1350,650 1050,650 
               C750,650 700,450 0,450 Z" 
            fill="#FFFFFF" 
            filter="url(#hero-shadow)"
          />
        </svg>
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

        {/* Right Visual / Globe Map embedded in the curve */}
        <div className="brands-hero-visual animate-on-scroll">
          <div className="globe-wrapper">
            <div className="world-map-svg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" alt="World Map" style={{opacity: 0.15, width: '120%', filter: 'grayscale(100%)', transform: 'scale(1.2)'}} />
            </div>
            
            {/* Red accent dots mapping to locations */}
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
        
        <div className="vertical-trusted-text">
          TRUSTED BRANDS. TRANSFORMS SPACES.
        </div>

      </div>
    </section>
  );
};

export default BrandsHero;
