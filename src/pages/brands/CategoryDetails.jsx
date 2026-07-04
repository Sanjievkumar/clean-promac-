import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { truvoxData } from '../../data/truvoxProducts';
import { klencoData } from '../../data/klencoProducts';
import './CategoryDetails.css';

const CategoryHero = ({ category, brand, title, desc, backText, backUrl }) => {
  if (category.bannerImage) {
    return (
      <section className="category-hero-split">
        <div className="split-left">
          <Link to={backUrl} className="brand-back-btn">&larr; Back to {backText}</Link>
          <div className="split-left-content">
            <h1 className="split-title">{title}</h1>
            <p className="split-desc">{desc}</p>
          </div>
          <svg className="split-curve" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0,0 L100,0 C100,50 50,100 0,100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="split-right" style={{ backgroundImage: `url(${category.bannerImage})` }}>
           {/* Action shot background */}
        </div>
      </section>
    );
  }

  return (
    <section className="category-hero">
      <Link to={backUrl} className="brand-back-btn">&larr; Back to {backText}</Link>
      <div className="container">
        <div className="category-hero-content">
          <span className="category-icon-large">{category.icon}</span>
          <h1 className="category-title-main">{title}</h1>
          <p className="category-hero-desc" style={{ textTransform: 'capitalize' }}>{desc}</p>
        </div>
      </div>
    </section>
  );
};

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
        <CategoryHero 
          category={category} 
          brand={brand}
          title={category.name} 
          desc="Please select a subcategory below." 
          backText={brand.name} 
          backUrl={`/brands/${brand.id}`} 
        />

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
    <main className={`category-details-page brand-theme-${brandId}`}>

      {/* Category Hero */}
      <CategoryHero 
        category={category} 
        brand={brand}
        title={pageTitle} 
        desc={pageDesc} 
        backText={activeSubcat ? category.name : brand.name} 
        backUrl={activeSubcat ? `/brands/${brand.id}/${category.id}` : `/brands/${brand.id}`} 
      />

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
