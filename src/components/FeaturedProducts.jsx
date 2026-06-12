import React, { useRef } from 'react';
import { productsData } from '../data/schemas';
import useTilt from '../hooks/useTilt';
import './FeaturedProducts.css';

const ProductCard = ({ product }) => {
  const tiltRef = useTilt({ max: 8, perspective: 1000, scale: 1.02 });

  return (
    <div className="product-card" ref={tiltRef}>
      <div className="product-image">
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} className="product-img" />
        ) : (
          <div className="product-placeholder-bg">
            <span className="placeholder-text">Image</span>
          </div>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <a href={`/product/${product.id}`} className="product-link text-red">View Details <span>&rarr;</span></a>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="featured-products animate-on-scroll">
      <div className="container">
        <div className="section-header space-between">
          <div>
            <span className="subtitle text-red">FEATURED PRODUCTS</span>
            <h2 className="section-title">Built for Performance. Designed for Results.</h2>
          </div>
          <a href="/products" className="view-all-link text-red">View All Products <span>&rarr;</span></a>
        </div>
        
        <div className="slider-wrapper">
          <button className="slider-btn left" onClick={scrollLeft} aria-label="Scroll left">
            &lt;
          </button>
          
          <div className="products-container" ref={sliderRef}>
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
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

export default FeaturedProducts;
