import React, { useRef } from 'react';
import { productCategories } from '../data/schemas';
import './ProductsSlider.css';

const ProductsSlider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  return (
    <section className="products-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle text-red">EVERY MACHINE. EVERY SOLUTION.</span>
          <h2 className="section-title">Explore Our Cleaning Equipment Range</h2>
        </div>
        
        <div className="slider-wrapper">
          <button className="slider-btn left" onClick={scrollLeft} aria-label="Scroll left">
            &lt;
          </button>
          
          <div className="slider-container" ref={sliderRef}>
            {productCategories.map((category) => (
              <div key={category.id} className="slider-item">
                <div className="slider-item-image">
                  {category.imageUrl ? (
                    <img src={category.imageUrl} alt={category.name} className="product-img" />
                  ) : (
                    <div className="product-icon-placeholder">
                      {/* Placeholder icon */}
                      <span className="icon-circle"></span>
                    </div>
                  )}
                </div>
                <h3 className="category-name">{category.name}</h3>
                <div className="category-dot"></div>
              </div>
            ))}
          </div>

          <button className="slider-btn right" onClick={scrollRight} aria-label="Scroll right">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSlider;
