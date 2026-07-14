import React from 'react';
import BrandsHero from '../components/brands/BrandsHero';
import BrandsIntro from '../components/brands/BrandsIntro';
import BrandCard from '../components/brands/BrandCard';
import BrandsCta from '../components/brands/BrandsCta';

const Brands = () => {
  return (
    <main className="brands-page">
      <BrandsHero />
      <BrandsIntro />
      
      {/* Brand Cards */}
      <BrandCard 
        index="01"
        brandName="TRUVOX"
        logoImageSrc="/assets/truvox-logo-v2.svg"
        title="Built for Performance."
        titleHighlight="Performance."
        subtitle="Designed for You."
        description="Truvox delivers powerful, reliable, and easy-to-use cleaning machines designed to perform in the toughest environments — from commercial spaces to industrial facilities."
        features={[
          { icon: '⚙️', title: 'Innovative', subtitle: 'Engineering' },
          { icon: '🛡️', title: 'Built to', subtitle: 'Last' },
          { icon: '🌱', title: 'Sustainable', subtitle: 'by Design' }
        ]}
        images={[
          "/assets/truvox-mwpro-440.png",
          "/assets/Orbis-200-Website.png",
          "/assets/VBUII-website.png"
        ]}
        buttonText="Explore Truvox"
        exploreLink="/brands/truvox"
        isReversed={false}
        accentColor="#00A8A8"
      />

      <BrandCard 
        index="02"
        brandName="KLENCO"
        logoImageSrc="/assets/klenco-logo.png"
        title="Clean Spaces."
        titleHighlight="Better"
        subtitle="Better Places."
        description="Klenco provides advanced, durable, and efficient cleaning solutions that help organizations maintain hygienic, safe, and productive environments."
        features={[
          { icon: '🔬', title: 'Advanced', subtitle: 'Technology' },
          { icon: '🛋️', title: 'Ergonomic', subtitle: 'Design' },
          { icon: '🌐', title: 'Trusted', subtitle: 'Worldwide' }
        ]}
        images={[
          "/assets/klenco-typhoon-hardy.png",
          "/assets/klenco-cyclone-g680-0.png",
          "/assets/klenco-tempest-ms900-0.png"
        ]}
        buttonText="Explore Klenco"
        exploreLink="/brands/klenco"
        isReversed={true}
        accentColor="#0A2540"
      />

      <BrandsCta />
    </main>
  );
};

export default Brands;
