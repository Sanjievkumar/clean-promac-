import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { truvoxData } from '../../data/truvoxProducts';
import { klencoData } from '../../data/klencoProducts';
import './CategoryDetails.css';

const CategoryDetails = () => {
  const { brandId, categoryId } = useParams();

  const brand = brandId === 'truvox' ? truvoxData : brandId === 'klenco' ? klencoData : null;
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

  const groupedProducts = {};
  const ungroupedProducts = [];

  category.products.forEach(p => {
    if (p.subcategory) {
      if (!groupedProducts[p.subcategory]) {
        groupedProducts[p.subcategory] = [];
      }
      groupedProducts[p.subcategory].push(p);
    } else {
      ungroupedProducts.push(p);
    }
  });

  const hasSubcategories = Object.keys(groupedProducts).length > 0;

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
          {hasSubcategories ? (
            <div className="subcategories-wrap">
              {Object.entries(groupedProducts).map(([subcat, prods]) => (
                <div key={subcat} className="subcategory-group" style={{ marginBottom: '4rem' }}>
                  <h2 className="subcategory-title" style={{ borderBottom: '2px solid #00a8b0', paddingBottom: '0.5rem', marginBottom: '2rem', color: '#1a2b4b' }}>
                    {subcat}
                  </h2>
                  <div className="product-cards-grid">
                    {prods.map((product) => (
                      <Link
                        to={`/brands/${brand.id}/${category.id}/${product.id}`}
                        className="product-card"
                        key={product.id}
                      >
                        <div className="product-card-img-wrap">
                          <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-card-body">
                          {product.modelCode && <span className="product-code-badge">{product.modelCode}</span>}
                          <h3 className="product-card-title">{product.name}</h3>
                          <p className="product-card-desc">{product.tagline}</p>
                          <span className="product-card-link">View Details &rarr;</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              {ungroupedProducts.length > 0 && (
                <div className="subcategory-group" style={{ marginBottom: '4rem' }}>
                  <h2 className="subcategory-title" style={{ borderBottom: '2px solid #00a8b0', paddingBottom: '0.5rem', marginBottom: '2rem', color: '#1a2b4b' }}>
                    Other Models
                  </h2>
                  <div className="product-cards-grid">
                    {ungroupedProducts.map((product) => (
                      <Link
                        to={`/brands/${brand.id}/${category.id}/${product.id}`}
                        className="product-card"
                        key={product.id}
                      >
                        <div className="product-card-img-wrap">
                          <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-card-body">
                          {product.modelCode && <span className="product-code-badge">{product.modelCode}</span>}
                          <h3 className="product-card-title">{product.name}</h3>
                          <p className="product-card-desc">{product.tagline}</p>
                          <span className="product-card-link">View Details &rarr;</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="product-cards-grid">
              {category.products.map((product) => (
                <Link
                  to={`/brands/${brand.id}/${category.id}/${product.id}`}
                  className="product-card"
                  key={product.id}
                >
                  <div className="product-card-img-wrap">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-card-body">
                    {product.modelCode && <span className="product-code-badge">{product.modelCode}</span>}
                    <h3 className="product-card-title">{product.name}</h3>
                    <p className="product-card-desc">{product.tagline}</p>
                    <span className="product-card-link">View Details &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

    </main>
  );
};

export default CategoryDetails;
