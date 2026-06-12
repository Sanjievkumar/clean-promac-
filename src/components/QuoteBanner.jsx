import React from 'react';
import './QuoteBanner.css';

const QuoteBanner = () => {
  return (
    <section className="quote-banner animate-on-scroll">
      <div className="container">
        <div className="quote-wrapper">
          <div className="quote-bg-image">
            {/* Fallback to hero image due to generation quota, or /assets/quote_bg.png */}
            <div className="quote-overlay"></div>
          </div>
          <div className="quote-content">
            <span className="quote-icon">“</span>
            <h2 className="quote-text">
              Cleaner spaces don't happen by accident.
            </h2>
            <p className="quote-subtext">
              They happen through planning, technology and consistency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteBanner;
