import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { truvoxData } from '../../data/truvoxProducts';
import './BrandDetails.css';

/* Inline SVG avoids browser img-tag CSS scoping issues */
const TruvoxLogoSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442.59 110" className="brand-hero-logo-svg">
    <g fill="#00a8b0">
      <path d="m20.04,100.54v-50.53H0v-17.89h63.14v17.89h-20.04v50.53h-23.07Z"/>
      <path d="m110.05,100.54h24.63l-14.36-21.04c3.83-1.96,6.86-4.61,9.08-7.94,2.54-3.81,3.81-8.36,3.81-13.63s-1.27-9.85-3.81-13.73c-2.54-3.88-6.14-6.86-10.8-8.94-4.66-2.08-10.18-3.13-16.57-3.13h-32.94v68.42h23.07v-17.2h6.28l11.6,17.2Zm-2.39-48.48c1.53,1.43,2.3,3.39,2.3,5.86s-.77,4.43-2.3,5.86c-1.53,1.43-3.89,2.15-7.09,2.15h-8.41v-16.03h8.41c3.19,0,5.55.72,7.09,2.15Z"/>
      <path d="m172.9,102.11c-10.49,0-18.67-2.83-24.53-8.5-5.86-5.67-8.8-13.62-8.8-23.85v-37.63h23.07v36.95c0,5.21.94,8.91,2.83,11.09,1.89,2.18,4.43,3.27,7.62,3.27s5.82-1.09,7.67-3.27c1.86-2.18,2.79-5.88,2.79-11.09v-36.95h22.68v37.63c0,10.23-2.93,18.18-8.8,23.85-5.86,5.67-14.04,8.5-24.53,8.5Z"/>
      <path d="m330.89,102.11c-5.6,0-10.77-.88-15.49-2.64-4.73-1.76-8.81-4.25-12.27-7.48-3.45-3.23-6.14-7.02-8.06-11.39-1.92-4.36-2.88-9.12-2.88-14.27s.96-9.98,2.88-14.32c1.92-4.33,4.61-8.11,8.06-11.34,3.45-3.23,7.54-5.72,12.27-7.48,4.72-1.76,9.85-2.64,15.39-2.64s10.75.88,15.44,2.64c4.69,1.76,8.76,4.25,12.22,7.48,3.45,3.23,6.14,7,8.06,11.34,1.92,4.33,2.88,9.11,2.88,14.32s-.96,9.91-2.88,14.27c-1.92,4.37-4.61,8.16-8.06,11.39-3.46,3.23-7.53,5.72-12.22,7.48s-9.81,2.64-15.35,2.64Zm-.1-18.67c2.15,0,4.15-.39,6.01-1.17,1.86-.78,3.49-1.91,4.89-3.37,1.4-1.47,2.49-3.26,3.27-5.38.78-2.12,1.17-4.51,1.17-7.18s-.39-5.07-1.17-7.18c-.78-2.12-1.87-3.91-3.27-5.38-1.4-1.47-3.03-2.59-4.89-3.37-1.86-.78-3.86-1.17-6.01-1.17s-4.15.39-6.01,1.17c-1.86.78-3.49,1.91-4.89,3.37-1.4,1.47-2.49,3.26-3.27,5.38-.78,2.12-1.17,4.51-1.17,7.18s.39,5.07,1.17,7.18c.78,2.12,1.87,3.91,3.27,5.38,1.4,1.47,3.03,2.59,4.89,3.37,1.86.78,3.86,1.17,6.01,1.17Z"/>
      <polygon points="442.59 100.54 417.35 65.19 441.12 32.13 416.29 32.13 404.96 49.32 393.33 32.13 367.42 32.13 391.27 65.99 366.55 100.54 392.84 100.54 404.36 82.25 416.2 100.54 442.59 100.54"/>
      <path d="m310.12,0c-17.33-.34-27.69,12.44-30.68,19.23l-36.13,81.31h22.39L310.54.02c-.14,0-.27-.01-.42-.02Z"/>
      <polygon fill="#6ac7ce" points="244.02 48.94 235.48 32.12 210.61 32.12 231.78 76.49 244.02 48.94"/>
    </g>
  </svg>
);

const BrandDetails = () => {
  const { brandId } = useParams();
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
        {/* Back button pinned top-left */}
        <Link to="/brands" className="brand-back-btn">&larr; Back to Brands</Link>

        <div className="container">
          <div className="brand-hero-content">
            <div className="brand-hero-logo-box">
              <TruvoxLogoSVG />
            </div>
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
