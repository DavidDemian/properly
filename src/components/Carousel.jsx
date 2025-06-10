import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Carousel = ({ slides, autoAdvance = 3000, className = '' }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const slideCount = slides.length;

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slideCount);
    }, autoAdvance);
    return () => clearTimeout(timeoutRef.current);
  }, [index, autoAdvance, slideCount]);

  return (
    <div className={`relative w-full h-full flex flex-col items-center justify-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full flex items-center justify-center"
        >
          {slides[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel; 