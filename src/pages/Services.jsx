import React, { useEffect } from 'react';
import './Services.css';
import ServicesHero from '../components/services/ServicesHero';
import ServicesApproach from '../components/services/ServicesApproach';
import ServicesWhyPartner from '../components/services/ServicesWhyPartner';
import ServicesProcess from '../components/services/ServicesProcess';
import IndustriesGrid from '../components/IndustriesGrid';
import CtaSection from '../components/CtaSection';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="services-page">
      <ServicesHero />
      <ServicesApproach />
      <ServicesWhyPartner />
      <ServicesProcess />
      <div style={{ backgroundColor: 'var(--color-gray-50)', padding: '4rem 0' }}>
        <IndustriesGrid />
      </div>
      <CtaSection />
    </main>
  );
};

export default Services;
