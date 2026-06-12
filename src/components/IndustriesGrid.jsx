import React from 'react';
import { industriesData } from '../data/schemas';
import useTilt from '../hooks/useTilt';
import './IndustriesGrid.css';

const IndustryCard = ({ industry }) => {
  const tiltRef = useTilt({ max: 12, perspective: 1000, scale: 1.05 });

  return (
    <div className="industry-card" ref={tiltRef}>
      <div className="industry-image-wrapper">
        {industry.imageUrl && !industry.imageUrl.includes('industries/') ? (
          <img src={industry.imageUrl} alt={industry.name} className="industry-bg-image" />
        ) : (
          <div className="industry-placeholder-bg"></div>
        )}
        <div className="industry-overlay"></div>
        
        <div className="industry-content">
          <div className="industry-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            </svg>
          </div>
          <h3 className="industry-name">{industry.name}</h3>
        </div>
      </div>
    </div>
  );
};

const IndustriesGrid = () => {
  return (
    <section className="industries-section animate-on-scroll">
      <div className="container">
        <div className="section-header left-align">
          <span className="subtitle text-red">SOLUTIONS FOR EVERY INDUSTRY</span>
          <h2 className="section-title">Industries We Serve</h2>
        </div>
        
        <div className="industries-grid">
          {industriesData.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
