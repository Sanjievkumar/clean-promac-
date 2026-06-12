import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "./HorizontalShowcase.css";

const HorizontalShowcase = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  const showcaseItems = [
    { title: "Commercial Scrubber Dryers", image: "https://images.unsplash.com/photo-1580982335150-13f8ccb85293?auto=format&fit=crop&q=80&w=800", color: "#F0F4FF" },
    { title: "Industrial Sweepers", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800", color: "#FFF0F2" },
    { title: "High-Pressure Washers", image: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&q=80&w=800", color: "#F0FFF4" },
    { title: "Commercial Vacuums", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=800", color: "#FFF8F0" },
    { title: "Steam Cleaning Systems", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800", color: "#F3F0FF" },
  ];

  return (
    <section ref={targetRef} className="horizontal-showcase-section">
      <div className="horizontal-sticky-container">
        <div className="container">
          <div className="horizontal-header">
            <span className="subtitle text-red">DEEP DIVE</span>
            <h2 className="section-title text-navy">Explore Our Flagship Solutions</h2>
          </div>
        </div>
        
        <div className="horizontal-scroll-window">
          <motion.div style={{ x }} className="horizontal-scroll-track">
            {showcaseItems.map((item, index) => (
              <div key={index} className="horizontal-card" style={{ backgroundColor: item.color }}>
                <div className="horizontal-card-img-wrapper">
                  <img src={item.image} alt={item.title} className="horizontal-card-img" />
                </div>
                <div className="horizontal-card-content">
                  <h3>{item.title}</h3>
                  <button className="btn btn-outline btn-sm interactive">Discover More</button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalShowcase;
