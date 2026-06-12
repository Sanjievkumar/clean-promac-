import { useEffect, useRef } from 'react';

const useTilt = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // We can disable tilt on mobile for performance
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const maxTilt = options.max || 10;
    const perspective = options.perspective || 1000;
    const scale = options.scale || 1.02;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top; // y position within the element

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const tiltX = ((y - centerY) / centerY) * -maxTilt;
      const tiltY = ((x - centerX) / centerX) * maxTilt;

      el.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`;
      el.style.transition = 'none'; // remove transition for smooth tracking
    };

    const handleMouseLeave = () => {
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
      el.style.transition = 'transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)';
    };

    const handleMouseEnter = () => {
      el.style.transition = 'transform 0.1s ease-out';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [options.max, options.perspective, options.scale]);

  return ref;
};

export default useTilt;
