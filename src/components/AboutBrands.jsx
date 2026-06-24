import React from 'react';
import './AboutBrands.css';

const AboutBrands = () => {
  return (
    <section className="about-brands animate-on-scroll">
      <div className="container">
        <div className="about-brands-header">
          <span className="subtitle text-red">BRANDS WE REPRESENT</span>
        </div>
        
        <div className="about-brands-marquee">
          <div className="about-brands-strip">
            {/* Set 1 */}
            <div className="brand-logo-item"><img src="/assets/klenco-logo.png" alt="Klenco" className="marquee-logo" /></div>
            <div className="brand-separator"></div>
            <div className="brand-logo-item"><img src="/assets/truvox-logo-v2.svg" alt="Truvox" className="marquee-logo" /></div>
            <div className="brand-separator"></div>
            <div className="brand-logo-item"><img src="/assets/promac-logo.png" alt="Promac" className="marquee-logo" /></div>
            <div className="brand-separator"></div>
            <div className="brand-logo-item future-brands">
              <strong>Future<br/>Brands</strong>
              <small>Driven by innovation</small>
            </div>
            <div className="brand-separator"></div>

            {/* Set 2 (Duplicate for seamless loop) */}
            <div className="brand-logo-item"><img src="/assets/klenco-logo.png" alt="Klenco" className="marquee-logo" /></div>
            <div className="brand-separator"></div>
            <div className="brand-logo-item"><img src="/assets/truvox-logo-v2.svg" alt="Truvox" className="marquee-logo" /></div>
            <div className="brand-separator"></div>
            <div className="brand-logo-item"><img src="/assets/promac-logo.png" alt="Promac" className="marquee-logo" /></div>
            <div className="brand-separator"></div>
            <div className="brand-logo-item future-brands">
              <strong>Future<br/>Brands</strong>
              <small>Driven by innovation</small>
            </div>
            <div className="brand-separator"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrands;
