import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import CustomCursor from './components/CustomCursor';
import NoiseOverlay from './components/NoiseOverlay';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Simple intersection observer for scroll animations
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Run once
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Slight delay to ensure DOM is ready after route change
    const timer = setTimeout(() => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <div className="app">
      <CustomCursor />
      <NoiseOverlay />
      <Navbar />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
