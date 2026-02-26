import React from 'react';
import { motion } from 'framer-motion';

const FlipBanner = () => {
  const data = {
    bgColor: '#00faff',
    textColor: '#000000',
    text: <>Awards Night <strong><em>3rd Oct 2025</em></strong> at One Great George Street</>
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 3,
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
    }}>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: `linear-gradient(to right, ${data.bgColor}, ${data.bgColor}cc)`,
          color: data.textColor,
          width: '100%',
          padding: '0.8rem 1rem',
          fontSize: 'clamp(0.9rem, 2.2vw, 1.2rem)',
          fontWeight: '600',
          textAlign: 'center',
          fontFamily: "'Poppins', sans-serif",
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {data.text}
      </motion.div>
    </div>
  );
};

export default FlipBanner;
