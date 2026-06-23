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
        <div className="container">
          <Link to={`/brands/${brand.id}`} className="back-link">&larr; Back to {brand.name}</Link>
          <div className="category-hero-content">
            <span className="category-icon-large">{category.icon}</span>
            <h1 className="category-title-main">{category.name}</h1>
            <p className="category-hero-desc">{category.shortDesc}</p>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="products-section">
        <div className="container">
          
          {category.products.map((product, index) => (
            <div className={`product-showcase ${index % 2 !== 0 ? 'reversed' : ''}`} key={product.id}>
              
              <div className="product-visual">
                <div className="product-visual-bg"></div>
                <img src={product.image} alt={product.name} className="product-img" />
              </div>

              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-desc">{product.description}</p>
                
                <div className="product-features">
                  <h4>Key Features</h4>
                  <ul>
                    {product.features.map((feature, i) => (
                      <li key={i}>
                        <svg viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="product-specs">
                  <h4>Specifications</h4>
                  <table className="specs-table">
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

                <div className="product-actions">
                  <button className="btn btn-primary">Request Quote</button>
                  <button className="btn btn-outline">Download Brochure</button>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>
    </main>
  );
};

export default CategoryDetails;
