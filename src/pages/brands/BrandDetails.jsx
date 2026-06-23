import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { truvoxData } from '../../data/truvoxProducts';
import './BrandDetails.css';

const BrandDetails = () => {
  const { brandId } = useParams();
  
  // In a real app, you would fetch data based on brandId.
  // We're hardcoding truvoxData for now as requested.
  const brand = brandId === 'truvox' ? truvoxData : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [brandId]);

  if (!brand) {
    return (
      <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h2>Brand not found</h2>
        <Link to="/brands" className="btn btn-primary mt-4">Back to Brands</Link>
      </div>
    );
  }

  return (
    <main className="brand-details-page">
      {/* Brand Hero */}
      <section className="brand-details-hero">
        <div className="container">
          <Link to="/brands" className="back-link brand-back-link" style={{ marginBottom: '2rem' }}>&larr; Back to Brands</Link>
          <div className="brand-hero-content">
            <div className="brand-hero-logo">
              <img src={brand.logo} alt={brand.name} />
            </div>
            <h1 className="brand-hero-title">{brand.name}</h1>
            <h2 className="brand-hero-tagline">{brand.tagline}</h2>
            <p className="brand-hero-desc">{brand.description}</p>
          </div>
        </div>
        <div className="brand-hero-bg"></div>
      </section>

      {/* Categories Grid */}
      <section className="brand-categories-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Product <span>Categories</span></h2>
            <p className="section-subtitle">Explore our comprehensive range of {brand.name} floorcare solutions.</p>
          </div>

          <div className="categories-grid">
            {brand.categories.map((category) => (
              <Link to={`/brands/${brand.id}/${category.id}`} className="category-card" key={category.id}>
                <div className="category-img-wrapper">
                  <img src={category.image} alt={category.name} className="category-img" />
                  <div className="category-icon">{category.icon}</div>
                </div>
                <div className="category-content">
                  <h3 className="category-title">{category.name}</h3>
                  <p className="category-desc">{category.shortDesc}</p>
                  <span className="category-link-text">View Products &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrandDetails;
