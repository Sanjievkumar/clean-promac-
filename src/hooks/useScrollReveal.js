import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Give React a tick to render the new route's elements
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [location.pathname]);
};

export default useScrollReveal;
