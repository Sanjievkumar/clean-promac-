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
        imageSrc="/assets/product_4.png"
        imageAlt="Truvox Floorcare Machine"
        buttonText="Explore Truvox"
        exploreLink="/brands/truvox"
        isReversed={false}
        accentColor="#00A8A8"
      />

      <BrandCard 
        index="02"
        brandName="KLENCO"
        logoText="KLENCO"
        logoSubtext="CLEANING SYSTEMS"
        title="Clean Spaces."
        titleHighlight="Better"
        subtitle="Better Places."
        description="Klenco provides advanced, durable, and efficient cleaning solutions that help organizations maintain hygienic, safe, and productive environments."
        features={[
          { icon: '🔬', title: 'Advanced', subtitle: 'Technology' },
          { icon: '🛋️', title: 'Ergonomic', subtitle: 'Design' },
          { icon: '🌐', title: 'Trusted', subtitle: 'Worldwide' }
        ]}
        imageSrc="/assets/product_2.png"
        imageAlt="Klenco Cleaning Cart"
        buttonText="Explore Klenco"
        isReversed={true}
        accentColor="#0A2540"
      />

      <BrandsCta />
    </main>
  );
};

export default Brands;
