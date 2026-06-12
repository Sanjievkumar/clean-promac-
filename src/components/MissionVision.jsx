import React from 'react';
import './MissionVision.css';

const MissionVision = () => {
  return (
    <section className="mission-vision animate-on-scroll">
      <div className="container">
        <div className="mv-grid">
          
          <div className="mv-card">
            <span className="subtitle text-red">OUR MISSION</span>
            <h3 className="mv-title">
              To empower organisations with advanced cleaning solutions that enhance safety, hygiene and operational efficiency every day.
            </h3>
          </div>

          <div className="mv-card mv-vision">
            <div className="dot-pattern-bg"></div>
            <span className="subtitle text-red">OUR VISION</span>
            <h3 className="mv-title">
              To be India's most trusted partner for professional cleaning solutions and to build cleaner, healthier environments for future generations.
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
