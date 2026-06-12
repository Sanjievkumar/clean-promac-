import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on desktop
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e) => {
      if (
        e.target?.tagName?.toLowerCase() === 'a' ||
        e.target?.tagName?.toLowerCase() === 'button' ||
        e.target?.closest?.('a') ||
        e.target?.closest?.('button') ||
        e.target?.classList?.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 1,
      opacity: 1
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 3,
      backgroundColor: "rgba(230, 57, 70, 0.2)",
      mixBlendMode: "multiply",
      border: "1px solid rgba(230, 57, 70, 0.5)",
      opacity: 1
    }
  };

  // Don't render on mobile
  if (typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="custom-cursor-dot"
        animate={{ x: mousePosition.x - 3, y: mousePosition.y - 3 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="custom-cursor-ring"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      />
    </>
  );
};

export default CustomCursor;
