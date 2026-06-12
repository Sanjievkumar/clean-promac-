import React from 'react';
import './BrandsHero.css';

const BrandsHero = () => {
  return (
    <section className="brands-hero">
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

        {/* Right Visual / Globe */}
        <div className="brands-hero-visual animate-on-scroll">
          <div className="globe-wrapper">
            <div className="globe-pattern"></div>
            {/* Red accent dots matching design */}
            <div className="red-dot dot-1"></div>
            <div className="red-dot dot-2"></div>
            <div className="red-dot dot-3"></div>
          </div>
          <div className="curved-bg-element"></div>
        </div>
        
        <div className="vertical-trusted-text">
          TRUSTED BRANDS. TRANSFORMS SPACES.
        </div>

      </div>
    </section>
  );
};

export default BrandsHero;
