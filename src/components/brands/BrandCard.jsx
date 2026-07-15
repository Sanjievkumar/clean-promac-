import React from 'react';
import { Link } from 'react-router-dom';
import './BrandCard.css';

const BrandCard = ({ 
  index, 
  brandName, 
  logoImageSrc,
  logoText, 
  logoSubtext, 
  title, 
  titleHighlight, 
  subtitle, 
  description, 
  features, 
  images, 
  buttonText, 
  exploreLink,
  isReversed,
  accentColor
}) => {
  return (
    <section className={`brand-card-section ${isReversed ? 'reversed' : ''}`}>
      <div className="container">
        
        {/* The Card Wrapper */}
        <div className="brand-card glass animate-on-scroll">
          
          {/* Vertical Index & Name */}
          <div className="brand-vertical-label">
            <span className="brand-index">{index}</span>
            <span className="brand-vertical-name">{brandName}</span>
          </div>

          {/* Content Side */}
          <div className="brand-card-content">
            <div className="brand-logo" style={{ color: accentColor }}>
              {logoImageSrc ? (
                <div className="brand-logo-img-wrapper">
                  <img src={logoImageSrc} alt={`${brandName} Logo`} className="brand-logo-img" />
                </div>
              ) : (
                <>
                  <span className="logo-main">{logoText}</span>
                  {logoSubtext && <span className="logo-sub">{logoSubtext}</span>}
                </>
              )}
            </div>
            
            <h3 className="brand-title">
              {title.split(titleHighlight).map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <span style={{ color: accentColor }}>{titleHighlight}</span>}
                </React.Fragment>
              ))}
              <br/>
              {subtitle}
            </h3>
            
            <p className="brand-desc text-gray">
              {description}
            </p>
            
            <div className="brand-features">
              {features.map((feature, i) => (
                <div className="feature-item" key={i}>
                  <div className="feature-icon" style={{ color: accentColor }}>{feature.icon}</div>
                  <div className="feature-text">
                    <strong>{feature.title}</strong>
                    <span>{feature.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {exploreLink ? (
              <Link to={exploreLink} className="btn btn-outline brand-btn" style={{ '--hover-color': accentColor }}>
                {buttonText} <span>&rarr;</span>
              </Link>
            ) : (
              <button className="btn btn-outline brand-btn" style={{ '--hover-color': accentColor }}>
                {buttonText} <span>&rarr;</span>
              </button>
            )}
          </div>

          {/* Image Side */}
          <div className="brand-card-visual" style={{ backgroundColor: `${accentColor}15` }}>
            <div className="visual-accent-shape" style={{ backgroundColor: accentColor }}></div>
            {images && images.length > 0 ? (
              <div className="brand-product-collage">
                {images.map((imgSrc, idx) => (
                  <div key={idx} className={`collage-img-wrapper collage-img-wrapper-${idx + 1}`}>
                    <img 
                      src={imgSrc} 
                      alt={`${brandName} Product ${idx + 1}`} 
                      className="collage-img" 
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>

        </div>

      </div>
    </section>
  );
};

export default BrandCard;
