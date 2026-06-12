import React from 'react';
import AboutHero from '../components/AboutHero';
import OurStory from '../components/OurStory';
import AboutStats from '../components/AboutStats';
import CoreValues from '../components/CoreValues';
import QuoteBanner from '../components/QuoteBanner';
import MissionVision from '../components/MissionVision';
import FounderMessage from '../components/FounderMessage';
import AboutBrands from '../components/AboutBrands';
import WhyItMatters from '../components/WhyItMatters';
import AboutCta from '../components/AboutCta';
import PageTransition from '../components/PageTransition';

const About = () => {
  return (
    <PageTransition>
      <main className="about-page">
        <AboutHero />
        <OurStory />
        <AboutStats />
        <CoreValues />
        <QuoteBanner />
        <MissionVision />
        <FounderMessage />
        <AboutBrands />
        <WhyItMatters />
        <AboutCta />
      </main>
    </PageTransition>
  );
};

export default About;
