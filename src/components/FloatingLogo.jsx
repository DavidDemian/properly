import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProperlyLogo from '../assets/images/ProperlyLogo.jsx';

const FloatingLogo = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute left-1/2 top-0 -translate-x-1/2 z-30 mt-8 mb-8 flex justify-center w-full pointer-events-none"
        >
          <ProperlyLogo className="h-28 md:h-40 w-auto drop-shadow-lg mx-auto" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingLogo; 