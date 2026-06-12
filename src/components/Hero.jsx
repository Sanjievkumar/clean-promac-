import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        
        {/* Left Content */}
        <div className="hero-content">
          <span className="subtitle text-red">CLEANER SPACES, STRONGER IMPACT.</span>
          <h1 className="title">
            Powering Clean Environments. <br/>
            <span className="text-red">Elevating Standards.</span>
          </h1>
          <p className="description text-gray">
            Advanced cleaning equipment and solutions that help businesses maintain cleaner, safer and more efficient environments.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary">
              Explore Products <span>&rarr;</span>
            </button>
            <button className="btn btn-outline hero-btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Talk to an Expert
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon">🌍</div>
              <div className="stat-text">
                <strong>20+</strong>
                <span>Global Brands</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🤝</div>
              <div className="stat-text">
                <strong>1000+</strong>
                <span>Happy Clients</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">⚙️</div>
              <div className="stat-text">
                <strong>25,000+</strong>
                <span>Machines Deployed</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🎧</div>
              <div className="stat-text">
                <strong>24/7</strong>
                <span>Service Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content / Image */}
        <div className="hero-visual">
          <div className="visual-bg-arc"></div>
          <div className="image-container">
            <img src="/assets/hero.png" alt="Industrial Cleaning Equipment" className="hero-image" />
          </div>
          <button className="watch-video-btn">
            <span className="play-icon">▶</span>
            <span className="video-text">Watch<br/>Video</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
