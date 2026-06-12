import React from 'react';
import './StatsBanner.css';

const StatsBanner = () => {
  return (
    <section className="stats-banner animate-on-scroll">
      <div className="container">
        <div className="stats-wrapper">
          <div className="stat-box">
            <span className="stat-icon-large">🏅</span>
            <div className="stat-content">
              <strong>10+</strong>
              <small>Years of<br/>Experience</small>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-icon-large">👥</span>
            <div className="stat-content">
              <strong>1000+</strong>
              <small>Happy<br/>Clients</small>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-icon-large">🌍</span>
            <div className="stat-content">
              <strong>20+</strong>
              <small>Global<br/>Brands</small>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-icon-large">⚙️</span>
            <div className="stat-content">
              <strong>25,000+</strong>
              <small>Machines<br/>Deployed</small>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-icon-large">🎧</span>
            <div className="stat-content">
              <strong>24/7</strong>
              <small>Service<br/>Support</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
