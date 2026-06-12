import React from 'react';
import './BrandsHero.css';

const BrandsHero = () => {
  return (
    <section className="brands-hero">
      
      {/* Background with concentric circles */}
      <div className="hero-bg-lines"></div>

      {/* The organic swooping white shape built with CSS composition */}
      <div className="organic-shape-wrapper">
        <div className="left-swoop-panel"></div>
        {/* The right circle panel overlaps the swoop to create a seamless wave */}
        <div className="globe-circle-panel"></div>
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

        {/* Right Visual / Globe Map */}
        <div className="brands-hero-visual animate-on-scroll">
          <div className="globe-wrapper">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
              alt="World Map" 
              className="world-map-img"
            />
            
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
