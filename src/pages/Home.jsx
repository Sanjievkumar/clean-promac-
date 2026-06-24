import React from 'react';
import Hero from '../components/Hero';
import BrandsSection from '../components/BrandsSection';
import FeaturesSection from '../components/FeaturesSection';
import StatsBanner from '../components/StatsBanner';
import FeaturedProducts from '../components/FeaturedProducts';
import IndustriesGrid from '../components/IndustriesGrid';
import CoreValues from '../components/CoreValues';
import CtaSection from '../components/CtaSection';

const Home = () => {
  return (
    <main>
      <Hero />
      <BrandsSection />
      
      <CoreValues />

      <FeaturedProducts />
      
      <FeaturesSection />

      <IndustriesGrid />
      
      <StatsBanner />
      
      <CtaSection />
    </main>
  );
};

export default Home;
