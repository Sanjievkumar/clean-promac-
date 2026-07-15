import React from 'react';
import { Link } from 'react-router-dom';
import './AboutCta.css';

const AboutCta = () => {
  return (
    <section className="about-cta animate-on-scroll">
      <div className="container">
        <div className="about-cta-wrapper">
          <div className="about-cta-bg-circles"></div>
          
          <div className="about-cta-grid">
            <div className="about-cta-title-col">
              <h2 className="about-cta-title">
                Let's Build <br/>
                <span className="text-red">Cleaner,</span><br/>
                <span className="text-red">Safer</span> & Smarter <span className="text-navy">Spaces.</span>
              </h2>
            </div>
            
            <div className="about-cta-action-col">
              <p className="about-cta-desc">
                Talk to our experts and discover how we can elevate your cleaning experience.
              </p>
              <div className="about-cta-actions">
                <Link to="/contact" className="btn btn-primary">Schedule a Consultation &rarr;</Link>
                <Link to="/contact" className="btn btn-outline about-btn-outline">
                  <span className="phone-icon-small">📞</span> Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutCta;
