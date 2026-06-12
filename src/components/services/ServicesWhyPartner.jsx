import React, { useEffect, useRef, useState } from 'react';
import './ServicesWhyPartner.css';

const ServicesWhyPartner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-why section" ref={sectionRef}>
      <div className="container">
        <div className="why-grid">
          
          {/* Left Content */}
          <div className="why-content animate-on-scroll">
            <div className="section-subtitle">WHY PARTNER WITH US?</div>
            <h2 className="section-title">
              Experience.<br/>
              Expertise.<br/>
              <span className="text-red">Environment First.</span>
            </h2>
            <p className="why-desc">
              Decades of industry knowledge combined with a forward-thinking approach to cleaning and facility care.
            </p>

            <ul className="why-features-list">
              <li className={`feature-item ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.1s' }}>
                <span className="feature-check">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                Industry-leading expertise
              </li>
              <li className={`feature-item ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.2s' }}>
                <span className="feature-check">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                Sustainable & responsible solutions
              </li>
              <li className={`feature-item ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.3s' }}>
                <span className="feature-check">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                Measurable outcomes that matter
              </li>
            </ul>
          </div>

          {/* Right Visual */}
          <div className="why-visual animate-on-scroll">
            
            {/* Background red geometric shape */}
            <div className="why-visual-bg"></div>

            {/* Angled Masked Image */}
            <div className="why-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Modern Office" 
                className="why-img"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="why-stats-card">
              <div className="stat-row">
                <div className="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div className="stat-info">
                  <h4 className="stat-num">{isVisible ? '25,000+' : '0'}</h4>
                  <p className="stat-label">Spaces Consulted</p>
                </div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-row">
                <div className="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div className="stat-info">
                  <h4 className="stat-num">{isVisible ? '100+' : '0'}</h4>
                  <p className="stat-label">Expert Consultants</p>
                </div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-row">
                <div className="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"></path></svg>
                </div>
                <div className="stat-info">
                  <h4 className="stat-num">{isVisible ? '98%' : '0%'}</h4>
                  <p className="stat-label">Client Satisfaction</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWhyPartner;
