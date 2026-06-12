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
import AboutSection from '../components/AboutSection';

import PageTransition from '../components/PageTransition';
import HorizontalShowcase from '../components/HorizontalShowcase';
import VideoTypography from '../components/VideoTypography';

const Home = () => {
  return (
    <PageTransition>
      <main>
        <Hero />
        <VideoTypography />
        <BrandsSection />
        <ProductsSlider />
        <HorizontalShowcase />
        <IndustriesGrid />
        <FeaturesSection />
        <CoreValues />
        <QuoteBanner />
        <StatsBanner />
        <FeaturedProducts />
        <CtaSection />
        <InsightsSection />
        <AboutSection />
      </main>
    </PageTransition>
  );
};

export default Home;
