import React from 'react';
import './CoreValues.css';

const CoreValues = () => {
  return (
    <section className="core-values animate-on-scroll">
      <div className="container">
        <div className="values-grid">
          
          <div className="value-card card-red">
            <div className="value-icon">🎯</div>
            <h3 className="value-title">Technology</h3>
            <p className="value-desc">
              We collaborate with global manufacturers to bring proven and innovative cleaning technology to Indian businesses.
            </p>
            <div className="value-number">01</div>
          </div>

          <div className="value-card card-navy">
            <div className="value-icon">👥</div>
            <h3 className="value-title">Expertise</h3>
            <p className="value-desc">
              Our experts understand your environment and recommend solutions that deliver real operational improvements.
            </p>
            <div className="value-number">02</div>
          </div>

          <div className="value-card card-white">
            <div className="value-icon">🎧</div>
            <h3 className="value-title">Support</h3>
            <p className="value-desc">
              From installation to maintenance, we stand by our clients with reliable support every step of the way.
            </p>
            <div className="value-number">03</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreValues;
