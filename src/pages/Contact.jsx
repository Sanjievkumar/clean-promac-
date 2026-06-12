import React, { useEffect } from 'react';
import './Contact.css';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfoCards from '../components/contact/ContactInfoCards';
import CtaSection from '../components/CtaSection';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="contact-page">
      <ContactHero />
      <ContactForm />
      <ContactInfoCards />
      <CtaSection />
    </main>
  );
};

export default Contact;
