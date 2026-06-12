import React from 'react';
import Hero from '../components/Hero';
import BrandsSection from '../components/BrandsSection';
import FeaturesSection from '../components/FeaturesSection';
import StatsBanner from '../components/StatsBanner';
import ProductsSlider from '../components/ProductsSlider';
import FeaturedProducts from '../components/FeaturedProducts';
import IndustriesGrid from '../components/IndustriesGrid';
import CoreValues from '../components/CoreValues';
import QuoteBanner from '../components/QuoteBanner';
import CtaSection from '../components/CtaSection';
import InsightsSection from '../components/InsightsSection';

const Home = () => {
  return (
    <main>
      <Hero />
      <BrandsSection />
      
      <CoreValues />

      <FeaturedProducts />
      
      <QuoteBanner />

      <ProductsSlider />
      
      <FeaturesSection />

      <IndustriesGrid />
      
      <StatsBanner />
      
      <InsightsSection />
      
      <CtaSection />
    </main>
  );
};

export default Home;
