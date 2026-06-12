import React from 'react';
import './WhyItMatters.css';

const WhyItMatters = () => {
  return (
    <section className="why-it-matters animate-on-scroll">
      <div className="container">
        <div className="wim-grid">
          
          <div className="wim-content">
            <span className="subtitle text-red">WHY IT MATTERS</span>
            <h2 className="section-title">
              Clean Spaces. <br/>Stronger Impact.
            </h2>
            <p className="wim-desc">
              Clean environments do more than look good. They create lasting value for everyone.
            </p>
          </div>

          <div className="wim-cards-grid">
            
            <div className="wim-card bg-pink">
              <div className="wim-icon text-red">🛡️</div>
              <h4 className="wim-card-title">Safer Spaces</h4>
              <p className="wim-card-desc">Reduce health risks and ensure well-being for everyone.</p>
            </div>
            
            <div className="wim-card bg-blue">
              <div className="wim-icon" style={{color: '#4361EE'}}>📊</div>
              <h4 className="wim-card-title">Higher Productivity</h4>
              <p className="wim-card-desc">Cleaner environments lead to better focus and performance.</p>
            </div>
            
            <div className="wim-card bg-green">
              <div className="wim-icon" style={{color: '#2D6A4F'}}>👍</div>
              <h4 className="wim-card-title">Better Impressions</h4>
              <p className="wim-card-desc">A clean space reflects your standards and builds confidence.</p>
            </div>
            
            <div className="wim-card bg-orange">
              <div className="wim-icon" style={{color: '#F77F00'}}>🌱</div>
              <h4 className="wim-card-title">Sustainable Future</h4>
              <p className="wim-card-desc">Efficient solutions today for a cleaner tomorrow.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
