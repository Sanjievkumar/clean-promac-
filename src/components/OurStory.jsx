import React from 'react';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="our-story animate-on-scroll">
      <div className="container">
        <div className="story-grid">
          
          {/* New Modern Visual Layout */}
          <div className="story-visual-modern">
            <div className="story-img-main-wrapper">
              <img src="/assets/VA40-in-use-website-2.png" alt="Cleaning in Action" className="story-img-main" />
            </div>
            <div className="story-experience-badge">
              <span className="exp-number">10+</span>
              <span className="exp-text">Years of<br/>Excellence</span>
            </div>
          </div>

          <div className="story-content">
            <span className="subtitle text-red">OUR STORY</span>
            <h2 className="section-title">
              Every Clean Space Begins With A <span className="text-red">Purpose.</span>
            </h2>
            <p className="story-desc">
              CleanPromac was built on a simple belief that professional spaces deserve professional cleaning solutions. We recognized a growing need for equipment that could withstand heavy industrial use while remaining accessible to operators.
            </p>
            <p className="story-desc">
              Today, we work with businesses across industries to deliver technology, support and expertise that make a real difference in how organizations maintain their environments.
            </p>
            
            <div className="story-features">
              <div className="sf-item"><span className="text-red">✔</span> Global Standards</div>
              <div className="sf-item"><span className="text-red">✔</span> Local Expertise</div>
              <div className="sf-item"><span className="text-red">✔</span> Proven Reliability</div>
              <div className="sf-item"><span className="text-red">✔</span> Sustainable Solutions</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OurStory;
