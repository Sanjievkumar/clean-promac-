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
                  <div className="product-card-actions">
                    <span className="product-card-cta">Explore</span>
                  </div>
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
