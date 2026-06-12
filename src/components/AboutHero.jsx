import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <section className="about-hero animate-on-scroll">
      <div className="container">
        <div className="about-hero-grid">
          <div className="about-hero-content">
            <span className="subtitle text-red">ABOUT CLEANPROMAC</span>
            <h1 className="hero-title">
              More Than Machines. Building Better <span className="text-red">Environments.</span>
            </h1>
            <p className="hero-desc">
              We partner with organisations to deliver advanced cleaning solutions that create healthier spaces, improve efficiency and leave a lasting impact.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Our Story &rarr;</button>
              <button className="btn btn-video">
                <span className="play-icon-outline">▶</span> Watch Video
              </button>
            </div>
          </div>
          
          <div className="about-hero-visual">
            <div className="red-accent-curve"></div>
            <div className="hero-image-wrapper">
              {/* Fallback to hero image due to generation quota, or you can use /assets/about.png */}
              <img src="/assets/hero.png" alt="CleanPromac Team" className="about-hero-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
