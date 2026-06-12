import React from 'react';
import './BrandsIntro.css';

const BrandsIntro = () => {
  return (
    <section className="brands-intro">
      <div className="container">
        <div className="brands-intro-content animate-on-scroll">
          <span className="intro-subtitle text-red">OUR PARTNERS</span>
          <h2 className="intro-title">
            Engineered for Excellence.<br/>
            Chosen for Impact.
          </h2>
          <p className="intro-desc text-gray">
            We collaborate with global innovators in cleaning technology to deliver unmatched quality, performance, and value.
          </p>
        </div>
      </div>
      
      {/* Abstract geometric background elements */}
      <div className="intro-bg-shape"></div>
    </section>
  );
};

export default BrandsIntro;
