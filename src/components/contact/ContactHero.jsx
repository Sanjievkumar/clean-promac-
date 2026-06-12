import React from 'react';
import './ContactHero.css';

const ContactHero = () => {
  return (
    <section className="contact-hero">
      
      {/* Background faint lines */}
      <div className="contact-hero-bg-lines"></div>

      {/* The organic SVG background dividing left and right */}
      <div className="contact-svg-container">
        <svg viewBox="0 0 1440 900" className="contact-swoop-svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="contact-shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="15" dy="0" stdDeviation="25" floodColor="#080C16" floodOpacity="0.08"/>
            </filter>
          </defs>
          {/* The image is actually in the background, the SVG white shape covers the left side */}
          <path 
            d="M0,0 L850,0 C1250,0 800,450 650,450 C500,450 800,900 1200,900 L0,900 Z" 
            fill="#FFFFFF" 
            filter="url(#contact-shadow)"
            className="contact-white-swoop"
          />
        </svg>

        {/* The Image sitting behind the white swoop on the right */}
        <div className="contact-image-container">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Office Lobby" 
            className="contact-hero-img"
          />
        </div>
      </div>

      <div className="container contact-hero-container">
        
        {/* Left Content */}
        <div className="contact-hero-content animate-on-scroll">
          <div className="section-subtitle text-red" style={{ marginBottom: '1rem', fontWeight: '800' }}>CONTACT US</div>
          
          <h1 className="contact-hero-title">
            Let's Build<br/>
            Cleaner, Better<br/>
            <span className="text-red">Environments.</span>
          </h1>
          
          <div className="title-underline"></div>
          
          <p className="contact-hero-desc text-gray">
            We're here to help you find the right cleaning solutions for your spaces. Reach out to our team and we'll get back to you shortly.
          </p>

          <div className="contact-immediate">
            <div className="immediate-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div className="immediate-text">
              <span className="immediate-label">Need Immediate Assistance?</span>
              <span className="immediate-phone">+91 44 2364 5678</span>
            </div>
          </div>
        </div>

        {/* Right Floating Card over the image */}
        <div className="contact-floating-card animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
          
          <div className="contact-benefit-row">
            <div className="benefit-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
            </div>
            <div className="benefit-text">
              <h4>Quick Response</h4>
              <p>We reply within 24 hours</p>
            </div>
          </div>
          
          <div className="benefit-divider"></div>
          
          <div className="contact-benefit-row">
            <div className="benefit-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div className="benefit-text">
              <h4>Expert Support</h4>
              <p>Get advice from cleaning experts</p>
            </div>
          </div>

          <div className="benefit-divider"></div>

          <div className="contact-benefit-row">
            <div className="benefit-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
            </div>
            <div className="benefit-text">
              <h4>Tailored Solutions</h4>
              <p>Solutions designed for your space</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactHero;
