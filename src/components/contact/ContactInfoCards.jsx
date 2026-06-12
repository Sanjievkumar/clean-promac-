import React from 'react';
import './ContactInfoCards.css';

const ContactInfoCards = () => {
  return (
    <section className="contact-info-cards-section">
      <div className="container">
        <div className="contact-cards-grid">
          
          {/* Card 1: Location Map */}
          <div className="contact-card map-card animate-on-scroll">
            <div className="map-bg-overlay"></div>
            <div className="map-card-content">
              <div className="map-location-info">
                <div className="map-pin">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
                </div>
                <p>Located in<br/><strong>Industrial Estate,<br/>Chennai</strong></p>
              </div>
              <button className="btn btn-outline-dark btn-sm map-btn">
                View on Map <span>&rarr;</span>
              </button>
            </div>
          </div>

          {/* Card 2: Stats / Presence */}
          <div className="contact-card stats-card animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <h3 className="stats-card-title">Our Presence</h3>
            <p className="stats-card-desc">Serving businesses across India with trusted cleaning solutions and local support.</p>
            
            <div className="stats-grid">
              <div className="stat-col">
                <div className="stat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <h4>5+</h4>
                <p>Regions</p>
              </div>
              <div className="stat-col">
                <div className="stat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                </div>
                <h4>20+</h4>
                <p>Cities</p>
              </div>
              <div className="stat-col">
                <div className="stat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h4>1000+</h4>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Card 3: Consultation */}
          <div className="contact-card consult-card animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="consult-bg-image"></div>
            <div className="consult-card-content">
              <h3>Looking for a<br/>Free Consultation?</h3>
              <p>Let's discuss how we can help you achieve cleaner, safer, and smarter spaces.</p>
              <button className="btn btn-white btn-sm consult-btn">
                Book a Free Consultation <span>&rarr;</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
