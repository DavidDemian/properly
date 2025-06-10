import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TextCarousel = ({ slides, className = '' }) => {
  const [index, setIndex] = useState(0);
  const slideCount = slides.length;

  const goTo = (i) => {
    setIndex((i + slideCount) % slideCount);
  };

  return (
    <div className={`relative w-full max-w-xl mx-auto flex flex-col items-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <h3 className="font-semibold text-primary mb-2 text-lg text-center">{slides[index].heading}</h3>
          <p className="text-gray-700 text-center text-base md:text-lg mb-2 min-h-[3.5em]">{slides[index].text}</p>
        </motion.div>
      </AnimatePresence>
      {/* Left Arrow */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 text-primary opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-200 rounded-full z-10 bg-transparent p-2"
        onClick={() => goTo(index - 1)}
        aria-label="Previous"
        style={{ outline: 'none', border: 'none' }}
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {/* Right Arrow */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 text-primary opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-200 rounded-full z-10 bg-transparent p-2"
        onClick={() => goTo(index + 1)}
        aria-label="Next"
        style={{ outline: 'none', border: 'none' }}
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  );
};

export default TextCarousel; 