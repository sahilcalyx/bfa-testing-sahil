import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlipBanner = () => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const data = [
    {
      // bgColor: '#ff007f',
      // textColor: '#ffffff',
      // text: <> Nominations Open – <strong><em>Get Yours In Today! </em></strong></>
    },
    {
      bgColor: '#00faff',
      textColor: '#000000',
      text: <>Awards night <strong><em>3rd Oct 2025  </em></strong>at One Great George Street</>
    }
  ];

  const active = data[flipped ? 1 : 0];

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
        key={`banner-${flipped}`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: `linear-gradient(to right, ${active.bgColor}, ${active.bgColor}cc)`,
          color: active.textColor,
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
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${flipped}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className='font-small'
          >
            {active.text}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FlipBanner;
