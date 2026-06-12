import React from 'react';
import './ServicesApproach.css';

const approachSteps = [
  {
    id: 1,
    title: "Assessment & Analysis",
    desc: "We evaluate your current cleaning operations, workflows, and challenges.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        <line x1="11" y1="8" x2="11" y2="14"></line>
        <line x1="8" y1="11" x2="14" y2="11"></line>
      </svg>
    )
  },
  {
    id: 2,
    title: "Strategy Development",
    desc: "Custom cleaning strategies aligned with your goals, budget, and environment.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    )
  },
  {
    id: 3,
    title: "Process Optimization",
    desc: "We streamline workflows, resources, and technologies for maximum efficiency.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    )
  },
  {
    id: 4,
    title: "Implementation Support",
    desc: "Our experts guide your team through smooth execution and change management.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10"></line>
        <line x1="18" y1="20" x2="18" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="16"></line>
      </svg>
    )
  },
  {
    id: 5,
    title: "Performance Improvement",
    desc: "Continuous tracking, reporting, and refinement for lasting impact.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    )
  }
];

const ServicesApproach = () => {
  return (
    <section className="services-approach section">
      <div className="container">
        
        <div className="section-header text-center animate-on-scroll">
          <div className="section-subtitle">OUR APPROACH</div>
          <h2 className="section-title">
            Solutions Designed<br/>
            Around <span className="text-red">Your Space.</span>
          </h2>
          <p className="section-desc mx-auto">
            We go beyond recommendations. Our consultants work with you to build practical, future-ready cleaning strategies that deliver real results.
          </p>
        </div>

        <div className="approach-grid animate-on-scroll">
          {/* Decorative Dotted Connecting Line */}
          <div className="approach-woven-line">
            <svg width="100%" height="100" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path d="M0,50 Q250,100 500,50 T1000,50" fill="none" stroke="var(--color-gray-200)" strokeWidth="2" strokeDasharray="6 6"/>
            </svg>
          </div>

          {approachSteps.map((step, index) => (
            <div key={step.id} className={`approach-card card-${index + 1}`}>
              <div className="approach-icon-wrapper">
                <div className="approach-icon">{step.icon}</div>
                <div className="icon-glow"></div>
              </div>
              <h3 className="approach-title">{step.title}</h3>
              <p className="approach-desc">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesApproach;
