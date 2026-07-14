import React from 'react';
import Hero from '../components/Hero';
import BrandsSection from '../components/BrandsSection';
import FeaturesSection from '../components/FeaturesSection';
import StatsBanner from '../components/StatsBanner';
import IndustriesGrid from '../components/IndustriesGrid';
import CoreValues from '../components/CoreValues';
import CtaSection from '../components/CtaSection';

const Home = () => {
  return (
    <main>
      <Hero />
      <BrandsSection />
      
      <CoreValues />
      
      <FeaturesSection />

      <IndustriesGrid />
      
      <StatsBanner />
      
      <CtaSection />
    </main>
  );
};

export default Home;
