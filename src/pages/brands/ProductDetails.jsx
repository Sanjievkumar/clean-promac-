import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { truvoxData } from '../../data/truvoxProducts';
import './ProductDetails.css';

const ProductDetails = () => {
  const { brandId, categoryId, productId } = useParams();

  const brand = brandId === 'truvox' ? truvoxData : null;
  const category = brand ? brand.categories.find(c => c.id === categoryId) : null;
  const product = category ? category.products.find(p => p.id === productId) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!brand || !category || !product) {
    return (
      <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to={`/brands/${brandId}/${categoryId}`} className="btn btn-primary mt-4">Back to {category?.name || 'Category'}</Link>
      </div>
    );
  }

  return (
    <main className="product-details-page">

      {/* Breadcrumb Back button */}
      <div className="product-breadcrumb-bar">
        <div className="container">
          <Link to={`/brands/${brand.id}`} className="breadcrumb-link">{brand.name}</Link>
          <span className="breadcrumb-sep">/</span>
          <Link to={`/brands/${brand.id}/${category.id}`} className="breadcrumb-link">{category.name}</Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </div>
      </div>

      {/* Product Hero */}
      <section className="product-hero-section">
        <div className="container">
          <div className="product-hero-grid">

            {/* Left: Image */}
            <div className="product-hero-visual">
              <div className="product-hero-img-bg"></div>
              <img src={product.image} alt={product.name} className="product-hero-img" />
              {product.modelCode && (
                <div className="product-badge">{product.modelCode}</div>
              )}
            </div>

            {/* Right: Info */}
            <div className="product-hero-info">
              <p className="product-category-label">{category.name}</p>
              <h1 className="product-hero-name">{product.name}</h1>
              {product.tagline && (
                <p className="product-hero-tagline">{product.tagline}</p>
              )}
              <p className="product-hero-desc">{product.description}</p>

              <div className="product-hero-actions">
                <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
                <a href="https://www.truvox.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Visit Truvox Website</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Specs */}
      <section className="product-details-section">
        <div className="container">
          <div className="product-details-grid">

            {/* Features */}
            <div className="product-features-panel">
              <h2 className="panel-title">Key Features</h2>
              <ul className="features-list">
                {product.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <div className="feature-check">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="product-specs-panel">
              <h2 className="panel-title">Technical Specifications</h2>
              <table className="specs-table-full">
                <tbody>
                  {Object.entries(product.specs).map(([key, value]) => (
                    <tr key={key}>
                      <td className="spec-key">{key}</td>
                      <td className="spec-value">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>

      {/* Other Products in Category */}
      {category.products.length > 1 && (
        <section className="other-products-section">
          <div className="container">
            <h2 className="section-title">Other <span>{category.name}</span> Models</h2>
            <div className="other-products-grid">
              {category.products
                .filter(p => p.id !== product.id)
                .map(p => (
                  <Link to={`/brands/${brand.id}/${category.id}/${p.id}`} key={p.id} className="other-product-card">
                    <img src={p.image} alt={p.name} className="other-product-img" />
                    <div className="other-product-body">
                      {p.modelCode && <span className="product-model-code">{p.modelCode}</span>}
                      <h3>{p.name}</h3>
                      <p>{p.tagline}</p>
                      <span className="category-link-text">View Details &rarr;</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
};

export default ProductDetails;
