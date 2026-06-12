import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section animate-on-scroll">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-col">
            <div className="about-image-wrapper">
              <img src="/assets/about.png" alt="CleanPromac Building" className="about-image" />
              <button className="play-btn-large">
                <span>▶</span>
              </button>
            </div>
          </div>
          
          <div className="about-content-col">
            <span className="subtitle text-red">YOUR PARTNER IN:</span>
            <h2 className="section-title">Professional Cleaning</h2>
            
            <p className="about-desc">
              CleanPromac provides commercial and industrial cleaning equipment, floor care systems, maintenance solutions, and technical support to organizations across multiple industries.
            </p>
            <p className="about-desc">
              Our mission is to help businesses maintain cleaner, safer, and more efficient environments through reliable cleaning technology.
            </p>
            
            <a href="/about" className="btn btn-outline about-btn">Know More About Us &rarr;</a>
          </div>

          <div className="about-stats-col">
            <div className="about-stats-grid">
              <div className="about-stat-item">
                <span className="stat-icon-red">🏅</span>
                <div className="stat-text-sm">
                  <strong>10+</strong>
                  <span>Years of<br/>Experience</span>
                </div>
              </div>
              <div className="about-stat-item">
                <span className="stat-icon-red">👥</span>
                <div className="stat-text-sm">
                  <strong>1000+</strong>
                  <span>Happy<br/>Clients</span>
                </div>
              </div>
              <div className="about-stat-item">
                <span className="stat-icon-red">🌍</span>
                <div className="stat-text-sm">
                  <strong>20+</strong>
                  <span>Global<br/>Brands</span>
                </div>
              </div>
              <div className="about-stat-item">
                <span className="stat-icon-red">🎧</span>
                <div className="stat-text-sm">
                  <strong>24/7</strong>
                  <span>Service<br/>Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
