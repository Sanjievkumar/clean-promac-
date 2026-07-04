import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { truvoxData } from '../../data/truvoxProducts';
import { klencoData } from '../../data/klencoProducts';
import { AnimatePresence, motion } from 'framer-motion';
import './ProductDetails.css';

const TABS = ['FEATURES', 'SPECIFICATIONS', 'ACCESSORIES', 'GALLERY', 'FLOOR TYPES'];

const floorTypeIcons = {
  'Carpet': '/assets/carpet.jpg',
  'Concrete': '/assets/concrete.jpg',
  'Hard Floors': '/assets/hard-floors.jpg',
  'Entrance Matting': '/assets/matting.jpg',
  'Studded Rubber': '/assets/studded-rubber.jpg',
  'Non-Slip Safety Floors': '/assets/non-slip.jpg',
  'Tiles': '/assets/Tiles.jpg',
  'Escalator': '/assets/carpet.jpg', // fallback if needed
};

const ProductDetails = () => {
  const { brandId, categoryId, productId } = useParams();
  const [activeTab, setActiveTab] = useState('FEATURES');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [mainImg, setMainImg] = useState(null);

  const brand = brandId === 'truvox' ? truvoxData : brandId === 'klenco' ? klencoData : null;
  const category = brand ? brand.categories.find(c => c.id === categoryId) : null;
  const product = category ? category.products.find(p => p.id === productId) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) setMainImg(product.image);
  }, [productId, product]);

  if (!brand || !category || !product) {
    return (
      <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to={`/brands/${brandId}/${categoryId}`} className="btn btn-primary">Back to {category?.name || 'Category'}</Link>
      </div>
    );
  }

  // Detect if features are objects (with image) or plain strings
  const featuresAreObjects = product.features?.length > 0 && typeof product.features[0] === 'object';

  return (
    <main className={`pd-page brand-theme-${brandId}`}>

      {/* ── BREADCRUMB ── */}
      <div className="pd-breadcrumb">
        <div className="container">
          <Link to={`/brands/${brand.id}`} className="pd-bc-link">{brand.name}</Link>
          <span className="pd-bc-sep"> / </span>
          <Link to={`/brands/${brand.id}/${category.id}`} className="pd-bc-link">{category.name}</Link>
          <span className="pd-bc-sep"> / </span>
          <span className="pd-bc-cur">{product.name}</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="pd-hero">
        <div className="container">
          <div className="pd-hero-inner">

            {/* LEFT – image + slideshow */}
            <div className="pd-hero-left">
              <div className="pd-main-img-wrap pd-slideshow">
                {product.modelCode && <span className="pd-badge">{product.modelCode}</span>}
                <img src={mainImg || product.image} alt={product.name} className="pd-main-img" />
                
                {product.gallery && product.gallery.length > 1 && (
                  <>
                    <button 
                      className="pd-slide-btn prev"
                      onClick={() => {
                        const currentIndex = product.gallery.indexOf(mainImg || product.image);
                        const newIndex = currentIndex <= 0 ? product.gallery.length - 1 : currentIndex - 1;
                        setMainImg(product.gallery[newIndex]);
                      }}
                    >
                      ‹
                    </button>
                    <button 
                      className="pd-slide-btn next"
                      onClick={() => {
                        const currentIndex = product.gallery.indexOf(mainImg || product.image);
                        const newIndex = currentIndex >= product.gallery.length - 1 ? 0 : currentIndex + 1;
                        setMainImg(product.gallery[newIndex]);
                      }}
                    >
                      ›
                    </button>
                    <div className="pd-slide-dots">
                      {product.gallery.map((img, i) => (
                        <span 
                          key={i} 
                          className={`pd-dot ${mainImg === img ? 'active' : (!mainImg && i === 0 ? 'active' : '')}`}
                          onClick={() => setMainImg(img)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* RIGHT – info */}
            <div className="pd-hero-right">
              <p className="pd-category-label">{category.name}</p>
              <h1 className="pd-product-name">{product.name}</h1>
              <p className="pd-hero-desc">
                {brand.id === 'klenco' ? product.description : (product.heroDescription || product.description)}
              </p>

              {/* Ideal For */}
              {product.idealFor && (
                <div className="pd-ideal-row">
                  <span className="pd-ideal-label">IDEAL FOR:</span>
                  <div className="pd-ideal-tags">
                    {product.idealFor.map(s => <span key={s} className="pd-ideal-tag">{s}</span>)}
                  </div>
                </div>
              )}

              <div className="pd-hero-actions">
                <Link to="/contact" className="pd-btn-primary">Enquire Here</Link>
                {brand.id === 'truvox' && (
                  <a href={`https://www.truvox.com/product/${productId}/`} target="_blank" rel="noopener noreferrer" className="pd-btn-outline">
                    View on Truvox.com ↗
                  </a>
                )}
                {brand.id === 'klenco' && (
                  <a href={`https://www.klenco-asia.com/`} target="_blank" rel="noopener noreferrer" className="pd-btn-outline">
                    View on Klenco.com ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TAB BAR ── */}
      {brand.id === 'truvox' && (
      <div className="pd-tab-bar">
        <div className="container">
          <div className="pd-tabs">
            {TABS.map(tab => (
              <button
                key={tab}
                className={`pd-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
      )}

      {/* ── TAB CONTENT ── */}
      {brand.id === 'truvox' && (
      <div className="pd-tab-content">
        <div className="container">

          {/* FEATURES */}
          {activeTab === 'FEATURES' && (
            <div className="pd-features-grid">
              {product.features?.map((feat, i) => {
                const isObj = typeof feat === 'object';
                const label = isObj ? feat.label : feat.split(' — ')[0];
                const desc = isObj ? feat.desc : feat.split(' — ').slice(1).join(' — ');
                const img = isObj ? feat.image : null;
                return (
                  <div key={i} className="pd-feature-card">
                    {img && (
                      <div className="pd-feature-img-wrap" onClick={() => setLightboxImg(img)}>
                        <img src={img} alt={label} className="pd-feature-img" />
                        <div className="pd-feature-overlay">
                          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="2">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                          </svg>
                        </div>
                      </div>
                    )}
                    <div className="pd-feature-body">
                      <h3 className="pd-feature-label">{label}</h3>
                      <p className="pd-feature-desc">{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* SPECIFICATIONS */}
          {activeTab === 'SPECIFICATIONS' && (
            <div className="pd-specs-wrap">
              <table className="pd-specs-table">
                <tbody>
                  {Object.entries(product.specs || {}).map(([k, v]) => (
                    <tr key={k}>
                      <td className="pd-spec-key">{k}</td>
                      <td className="pd-spec-val">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="pd-spec-note">*Subject to conditions</p>
            </div>
          )}

          {/* ACCESSORIES */}
          {activeTab === 'ACCESSORIES' && (
            <div className="pd-acc-section">
              {['Standard', 'Optional'].map(type => {
                const items = product.accessories?.filter(a => a.type === type) || [];
                if (!items.length) return null;
                return (
                  <div key={type} className="pd-acc-group">
                    <h3 className="pd-acc-group-title">{type.toUpperCase()} ACCESSORIES</h3>
                    <div className="pd-acc-grid">
                      {items.map(acc => (
                        <div key={acc.code} className="pd-acc-card">
                          <div className="pd-acc-img-wrap">
                            {acc.image
                              ? <img src={acc.image} alt={acc.name} className="pd-acc-img" />
                              : <div className="pd-acc-no-img">No Image</div>
                            }
                          </div>
                          <div className="pd-acc-info">
                            <span className="pd-acc-code">{acc.code}</span>
                            <p className="pd-acc-name">{acc.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* GALLERY */}
          {activeTab === 'GALLERY' && (
            <div className="pd-gallery-grid">
              {(product.gallery || [product.image]).map((img, i) => (
                <div key={i} className="pd-gallery-item" onClick={() => setLightboxImg(img)}>
                  <img src={img} alt={`${product.name} gallery ${i + 1}`} />
                  <div className="pd-gallery-overlay">
                    <span>🔍</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* FLOOR TYPES */}
          {activeTab === 'FLOOR TYPES' && (
            <div className="pd-floor-grid">
              {product.floorTypes?.map(ft => (
                <div key={ft} className="pd-floor-card">
                  {floorTypeIcons[ft] ? (
                    <img src={floorTypeIcons[ft]} alt={ft} className="pd-floor-img" />
                  ) : (
                    <span className="pd-floor-icon">✓</span>
                  )}
                  <span className="pd-floor-name">{ft}</span>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
      )}

      {/* ── VIDEO ── */}
      {product.videoUrl && (
        <section className="pd-video-section">
          <div className="container">
            <h2 className="pd-section-title">Product Video</h2>
            <div className="pd-video-wrap">
              <iframe
                src={product.videoUrl}
                title={`${product.name} product video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* ── SUPPORT VIDEOS ── */}
      {product.supportVideos && product.supportVideos.length > 0 && (
        <section className="pd-video-section" style={{ paddingTop: 0 }}>
          <div className="container">
            <h2 className="pd-section-title">Support Videos</h2>
            <div className="pd-gallery-grid">
              {product.supportVideos.map((sv, i) => (
                <div key={i} className="pd-support-video-card">
                  <h3 className="pd-support-video-title">{sv.title}</h3>
                  <div className="pd-video-wrap" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={sv.url}
                      title={sv.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TESTIMONIAL ── */}
      {product.testimonial && (
        <section className="pd-testimonial-section">
          <div className="container">
            <div className="pd-testimonial-card">
              <span className="pd-testimonial-icon">❝</span>
              <p className="pd-testimonial-quote">{product.testimonial.quote}</p>
              <span className="pd-testimonial-source">— {product.testimonial.source}</span>
            </div>
          </div>
        </section>
      )}

      {/* ── OTHER MODELS ── */}
      {category.products.length > 1 && (
        <section className="pd-related-section">
          <div className="container">
            <h2 className="pd-section-title">Other {category.name} Models</h2>
            <div className="pd-related-grid">
              {category.products.filter(p => p.id !== product.id).map(p => (
                <Link key={p.id} to={`/brands/${brand.id}/${category.id}/${p.id}`} className="pd-related-card">
                  <img src={p.image} alt={p.name} className="pd-related-img" />
                  <div className="pd-related-body">
                    {p.modelCode && <span className="pd-related-code">{p.modelCode}</span>}
                    <h3>{p.name}</h3>
                    <p>{p.tagline}</p>
                    <span className="pd-related-link">Explore →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── LIGHTBOX ── */}
      {lightboxImg && (
        <div className="pd-lightbox" onClick={() => setLightboxImg(null)}>
          <button className="pd-lightbox-close" onClick={() => setLightboxImg(null)}>✕</button>
          <img src={lightboxImg} alt="Full view" onClick={e => e.stopPropagation()} />
        </div>
      )}

    </main>
  );
};

export default ProductDetails;
