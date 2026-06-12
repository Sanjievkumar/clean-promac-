import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <div className="container">
        
        <div className="contact-form-card animate-on-scroll">
          
          {/* Left Side: Contact Details */}
          <div className="contact-form-details">
            <h2 className="contact-form-title">Send Us a Message</h2>
            <div className="title-underline"></div>
            <p className="contact-form-desc">
              Share your requirements and our team will connect with you to understand how we can help.
            </p>

            <div className="contact-info-list">
              
              <div className="contact-info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="info-text">
                  <h5>Head Office</h5>
                  <p>No. 15, Industrial Estate,<br/>Guindy, Chennai – 600 032,<br/>Tamil Nadu, India</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="info-text">
                  <h5>Email Us</h5>
                  <p>info@cleanpromac.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="info-text">
                  <h5>Call Us</h5>
                  <p>+91 44 2364 5678</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div className="info-text">
                  <h5>Business Hours</h5>
                  <p>Mon – Sat: 9:00 AM – 6:00 PM<br/>Sunday: Closed</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form">
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name <span className="text-red">*</span></label>
                  <input type="text" id="fullName" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="text-red">*</span></label>
                  <input type="email" id="email" placeholder="Enter your email" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="Enter your number" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input type="text" id="company" placeholder="Enter your company" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject <span className="text-red">*</span></label>
                <input type="text" id="subject" placeholder="How can we help you?" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message <span className="text-red">*</span></label>
                <textarea id="message" rows="5" placeholder="Type your message here..." required></textarea>
              </div>

              <div className="form-submit-row">
                <button type="submit" className="btn btn-primary form-submit-btn">
                  Send Message <span>&rarr;</span>
                </button>
                <div className="form-security-note">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  <span>Your information is secure<br/>and will never be shared.</span>
                </div>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;
