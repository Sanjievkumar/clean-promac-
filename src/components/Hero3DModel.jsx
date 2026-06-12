import React from 'react';
import { motion } from 'framer-motion';

const Hero3DModel = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <motion.div
        animate={{
          rotate: [0, 90, 180, 270, 360],
          borderRadius: ["20% 80% 60% 40%", "40% 60% 80% 20%", "60% 40% 20% 80%", "80% 20% 40% 60%", "20% 80% 60% 40%"]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          width: '300px',
          height: '300px',
          background: 'linear-gradient(135deg, rgba(230, 57, 70, 0.8) 0%, rgba(255, 77, 90, 0.2) 100%)',
          boxShadow: '0 0 40px rgba(230, 57, 70, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          zIndex: 2
        }}
      />
      <motion.div
        animate={{
          rotate: [360, 270, 180, 90, 0],
          borderRadius: ["80% 20% 40% 60%", "60% 40% 20% 80%", "40% 60% 80% 20%", "20% 80% 60% 40%", "80% 20% 40% 60%"]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          border: '2px dashed rgba(230, 57, 70, 0.3)',
          zIndex: 1
        }}
      />
    </div>
  );
};

export default Hero3DModel;
