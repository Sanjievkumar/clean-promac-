import React from 'react';
import AboutHero from '../components/AboutHero';
import OurStory from '../components/OurStory';
import MissionVision from '../components/MissionVision';
import WhyItMatters from '../components/WhyItMatters';
import FounderMessage from '../components/FounderMessage';
import AboutStats from '../components/AboutStats';
import AboutBrands from '../components/AboutBrands';
import AboutCta from '../components/AboutCta';

const About = () => {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <WhyItMatters />
      <FounderMessage />
      <AboutStats />
      <AboutBrands />
      <AboutCta />
    </main>
  );
};

export default About;
