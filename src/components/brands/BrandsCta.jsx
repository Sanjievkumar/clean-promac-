import React from 'react';
import './BrandsCta.css';

const BrandsCta = () => {
  return (
    <section className="brands-cta-section">
      <div className="container">
        <div className="brands-cta-box animate-on-scroll">
          <div className="cta-content">
            <span className="cta-subtitle text-red">LET'S CONNECT</span>
            <h2 className="cta-title">
              Looking for the Right<br/>Cleaning Solution?
            </h2>
            <p className="cta-desc text-gray">
              Our experts are here to help you choose the perfect brand and solution for your business.
            </p>
          </div>
          <div className="cta-action">
            <button className="btn btn-primary cta-btn">
              Book a Free Demo <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsCta;
