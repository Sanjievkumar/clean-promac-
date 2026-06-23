import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { truvoxData } from '../../data/truvoxProducts';
import './CategoryDetails.css';

const CategoryDetails = () => {
  const { brandId, categoryId } = useParams();

  const brand = brandId === 'truvox' ? truvoxData : null;
  const category = brand ? brand.categories.find(c => c.id === categoryId) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!brand || !category) {
    return (
      <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h2>Category not found</h2>
        <Link to={`/brands/${brandId}`} className="btn btn-primary mt-4">Back to {brand?.name || 'Brand'}</Link>
      </div>
    );
  }

  return (
    <main className="category-details-page">

      {/* Category Hero */}
      <section className="category-hero">
        <Link to={`/brands/${brand.id}`} className="brand-back-btn">&larr; Back to {brand.name}</Link>
        <div className="container">
          <div className="category-hero-content">
            <span className="category-icon-large">{category.icon}</span>
            <h1 className="category-title-main">{category.name}</h1>
            <p className="category-hero-desc">{category.shortDesc}</p>
          </div>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="products-section">
        <div className="container">
          <div className="product-cards-grid">
            {category.products.map((product) => (
              <Link
                to={`/brands/${brand.id}/${category.id}/${product.id}`}
                className="product-card"
                key={product.id}
              >
                <div className="product-card-img-wrapper">
                  <img src={product.image} alt={product.name} className="product-card-img" />
                </div>
                <div className="product-card-body">
                  {product.modelCode && (
                    <span className="product-model-code">{product.modelCode}</span>
                  )}
                  <h3 className="product-card-name">{product.name}</h3>
                  {product.tagline && (
                    <p className="product-card-tagline">{product.tagline}</p>
                  )}
                  <ul className="product-card-features">
                    {product.features.slice(0, 3).map((f, i) => (
                      <li key={i}>
                        <svg viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="product-card-cta">View Full Details &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CategoryDetails;
