import React from 'react';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="our-story animate-on-scroll">
      <div className="container">
        <div className="story-grid">
          <div className="story-content">
            <span className="subtitle text-red">OUR STORY</span>
            <h2 className="section-title">
              Every Clean Space Begins With A <span className="text-red">Purpose.</span>
            </h2>
            <p className="story-desc">
              CleanPromac was built on a simple belief that professional spaces deserve professional cleaning solutions.
            </p>
            <p className="story-desc">
              Today, we work with businesses across industries to deliver technology, support and expertise that make a real difference.
            </p>
          </div>
          <div className="story-visual">
            <div className="story-image-wrapper">
              <img src="/assets/about.png" alt="Clean Office Lobby" className="story-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
