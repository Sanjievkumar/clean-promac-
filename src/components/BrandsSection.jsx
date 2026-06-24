import React from 'react';
import './BrandsSection.css';
import { brandsData } from '../data/schemas';

const BrandsSection = () => {
  return (
    <section className="brands-section animate-on-scroll">
      <div className="container">
        <div className="brands-card">
          <div className="brands-text">
            <h3 className="brands-title">TRUSTED GLOBAL BRANDS.<br/>LOCAL EXPERTISE.</h3>
            <p className="brands-desc">We partner with world-leading manufacturers to bring you the most reliable and innovative cleaning solutions with local support.</p>
            <a href="/brands" className="brands-link text-red">View All Brands <span>&rarr;</span></a>
          </div>
          <div className="brands-logos">
            {brandsData.map(brand => (
              <div key={brand.id} className="brand-logo-wrapper">
                {brand.logoUrl ? (
                  <img src={brand.logoUrl} alt={`${brand.name} Logo`} className="brand-logo-img" />
                ) : (
                  <span className="brand-name-placeholder">{brand.name}</span>
                )}
              </div>
            ))}
            <div className="brand-logo-wrapper more-brands">
              <span>MORE<br/>BRANDS</span>
              <small>COMING SOON</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
