import React from 'react';
import './FeaturesSection.css';

const featuresData = [
  { id: 1, icon: '🎯', title: 'Expert Guidance', desc: 'We understand your needs and recommend the right solution.' },
  { id: 2, icon: '⭐', title: 'Premium Quality', desc: 'Genuine products from world-leading manufacturers.' },
  { id: 3, icon: '🛠️', title: 'Installation & Training', desc: 'Professional installation and operator training for optimal performance.' },
  { id: 4, icon: '🎧', title: 'After Sales Support', desc: 'Dedicated support team for maintenance and technical assistance.' },
  { id: 5, icon: '⚙️', title: 'Genuine Spare Parts', desc: 'Ready availability of original parts to ensure long equipment life.' },
  { id: 6, icon: '📅', title: 'AMC & Service Plans', desc: 'Comprehensive service plans tailored to your business needs.' }
];

const FeaturesSection = () => {
  return (
    <section className="features-section animate-on-scroll">
      <div className="container features-container">
        <div className="features-header">
          <span className="subtitle text-red">WHY CLEANPROMAC?</span>
          <h2 className="section-title">More Than Machines.<br/>A Partnership You<br/>Can Trust.</h2>
        </div>
        
        <div className="features-grid">
          {featuresData.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
