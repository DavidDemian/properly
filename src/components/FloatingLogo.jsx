import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import properlyLogo from '../assets/images/Body 3.png';

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
          className="fixed top-8 left-1/2 -translate-x-1/3 z-[100] sm:left-1/4 sm:-translate-x-0"
        >
          <img src={properlyLogo} alt="Properly Logo" className="h-40 md:h-56 w-auto drop-shadow-lg" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingLogo; 