import React from 'react';
import './FounderMessage.css';

const FounderMessage = () => {
  return (
    <section className="founder-message animate-on-scroll">
      <div className="container">
        <div className="founder-wrapper">
          <div className="founder-bg-circles"></div>
          <div className="founder-grid">
            
            <div className="founder-image-col">
              <div className="founder-image-wrapper">
                {/* Fallback to generic about image if quota exceeded, or actual founder portrait */}
                <img src="/assets/hero.png" alt="Arun Prakash - Founder & Director" className="founder-img" />
              </div>
            </div>

            <div className="founder-content-col">
              <span className="quote-icon-small">“</span>
              <span className="subtitle text-red">FOUNDER'S MESSAGE</span>
              <h3 className="founder-quote">
                We never wanted to become another equipment supplier. We wanted to become a trusted partner for businesses that care about quality, reliability and long-term value.
              </h3>
              <div className="founder-signature-area">
                <div className="signature-font">Arun Prakash</div>
                <div className="founder-name">Arun Prakash</div>
                <div className="founder-title">Founder & Director</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
