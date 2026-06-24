import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { truvoxData } from '../../data/truvoxProducts';
import { klencoData } from '../../data/klencoProducts';
import './CategoryDetails.css';

const CategoryDetails = () => {
  const { brandId, categoryId } = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const activeSubcat = queryParams.get('sub');

  const brand = brandId === 'truvox' ? truvoxData : brandId === 'klenco' ? klencoData : null;
  const category = brand ? brand.categories.find(c => c.id === categoryId) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId, activeSubcat]);

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

  // Render Subcategory Cards view
  if (hasSubcategories && !activeSubcat) {
    return (
      <main className="category-details-page">
        {/* Category Hero */}
        <section className="category-hero">
          <Link to={`/brands/${brand.id}`} className="brand-back-btn">&larr; Back to {brand.name}</Link>
          <div className="container">
            <div className="category-hero-content">
              <span className="category-icon-large">{category.icon}</span>
              <h1 className="category-title-main">{category.name}</h1>
              <p className="category-hero-desc">Please select a subcategory below.</p>
            </div>
          </div>
        </section>

        {/* Subcategories Grid */}
        <section className="products-section">
          <div className="container">
            <div className="subcategories-grid">
              {Object.keys(groupedProducts).map(subcat => (
                <Link
                  key={subcat}
                  to={`/brands/${brand.id}/${category.id}?sub=${encodeURIComponent(subcat)}`}
                  className="subcategory-card"
                >
                  <h3 className="subcategory-title">{subcat}</h3>
                  <span className="subcategory-link-text">Explore Products &rarr;</span>
                </Link>
              ))}
              {ungroupedProducts.length > 0 && (
                <Link
                  to={`/brands/${brand.id}/${category.id}?sub=other`}
                  className="subcategory-card"
                >
                  <h3 className="subcategory-title">Other Models</h3>
                  <span className="subcategory-link-text">Explore Products &rarr;</span>
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Determine which products to show
  let displayProducts = category.products;
  let pageTitle = category.name;
  let pageDesc = category.shortDesc;

  if (activeSubcat) {
    if (activeSubcat === 'other') {
      displayProducts = ungroupedProducts;
      pageTitle = 'Other Models';
      pageDesc = `Explore other products in the ${category.name} range.`;
    } else if (groupedProducts[activeSubcat]) {
      displayProducts = groupedProducts[activeSubcat];
      pageTitle = activeSubcat;
      pageDesc = `Explore our range of ${activeSubcat.toLowerCase()}.`;
    }
  }

  return (
    <main className="category-details-page">

      {/* Category Hero */}
      <section className="category-hero">
        {activeSubcat ? (
          <Link to={`/brands/${brand.id}/${category.id}`} className="brand-back-btn">&larr; Back to {category.name}</Link>
        ) : (
          <Link to={`/brands/${brand.id}`} className="brand-back-btn">&larr; Back to {brand.name}</Link>
        )}
        <div className="container">
          <div className="category-hero-content">
            <span className="category-icon-large">{category.icon}</span>
            <h1 className="category-title-main">{pageTitle}</h1>
            <p className="category-hero-desc" style={{ textTransform: 'capitalize' }}>{pageDesc}</p>
          </div>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="products-section">
        <div className="container">
          <div className="product-cards-grid">
            {displayProducts.map((product) => (
              <Link
                to={`/brands/${brand.id}/${category.id}/${product.id}`}
                className="product-card"
                key={product.id}
              >
                <div className="product-card-img-wrapper">
                  <img src={product.image} alt={product.name} className="product-card-img" />
                </div>
                <div className="product-card-body">
                  {product.modelCode && <span className="product-model-code">{product.modelCode}</span>}
                  <h3 className="product-card-name">{product.name}</h3>
                  <p className="product-card-desc" style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1rem', flex: 1 }}>{product.tagline}</p>
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
