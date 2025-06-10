import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 to-yellow-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        {/* Decorative dashed circle, more subtle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[110vw] max-w-[600px] max-h-[600px] rounded-full border-4 border-dashed border-gray-200 opacity-40 z-0"></div>
      </div>

      {/* Logo (IDX animation) - centered above mockup */}
      <div className="relative z-20 flex flex-col items-center w-full pt-10 sm:pt-16">
        {/* Replace with your logo component or SVG */}
        <div className="mx-auto mb-4 w-24 h-16 flex items-center justify-center">
          {/* Example: <ProperlyLogo /> or SVG */}
          <svg width="90" height="48" viewBox="0 0 90 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="90" height="48" rx="8" fill="#fff"/>
            <text x="15" y="32" fontFamily="Arial Black, Arial, sans-serif" fontSize="32" fontWeight="bold" fill="#222">prope</text>
            <text x="70" y="32" fontFamily="Arial Black, Arial, sans-serif" fontSize="32" fontWeight="bold" fill="#FFD600">rly</text>
            <rect x="8" y="8" width="16" height="16" rx="4" fill="#1976D2"/>
            <polyline points="12,16 16,20 22,12" stroke="#FFD600" strokeWidth="2.5" fill="none"/>
          </svg>
        </div>
        {/* Optional: IDX animation or badge below logo */}
        <div className="mb-2">
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full shadow-sm">IDX Animation</span>
        </div>
      </div>

      {/* Mockup - centered below logo */}
      <div className="relative z-10 w-full flex justify-center mt-2 mb-6 px-2">
        <div className="bg-white p-2 sm:p-4 rounded-lg shadow-xl w-full max-w-md">
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white">
            {/* Real Estate Website Mockup */}
            <div className="w-full h-full relative">
              {/* Website Header */}
              <div className="h-[15%] bg-white border-b border-gray-200 flex items-center px-3 sm:px-4">
                <div className="w-20 sm:w-24 h-5 sm:h-6 bg-primary rounded"></div>
                <div className="ml-auto flex space-x-2 sm:space-x-4">
                  <div className="w-12 sm:w-16 h-4 sm:h-5 bg-gray-100 rounded"></div>
                  <div className="w-12 sm:w-16 h-4 sm:h-5 bg-gray-100 rounded"></div>
                  <div className="w-16 sm:w-20 h-4 sm:h-5 bg-gray-100 rounded"></div>
                  <div className="w-20 sm:w-24 h-6 sm:h-8 bg-primary rounded-full"></div>
                </div>
              </div>
              {/* Hero Banner */}
              <div className="h-[30%] bg-gradient-to-r from-blue-600 to-blue-400 flex items-center px-4 sm:px-6">
                <div className="w-full">
                  <div className="w-3/4 h-5 sm:h-6 bg-white rounded mb-2"></div>
                  <div className="w-1/2 h-3 sm:h-4 bg-white/80 rounded mb-3"></div>
                  <div className="w-28 sm:w-32 h-6 sm:h-8 bg-white rounded-full"></div>
                </div>
              </div>
              {/* Property Listings */}
              <div className="p-3 sm:p-4">
                <div className="w-40 sm:w-48 h-5 sm:h-6 bg-gray-800 rounded mb-3 sm:mb-4"></div>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                      <div className="h-20 sm:h-24 bg-blue-100"></div>
                      <div className="p-2">
                        <div className="w-full h-4 sm:h-5 bg-blue-50 rounded mb-1 sm:mb-2"></div>
                        <div className="w-2/3 h-3 sm:h-4 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content: Headline, Text, Buttons */}
      <div className="container relative z-20 pb-16 md:pb-24 px-4 sm:px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Marketing Tools. <span className="text-primary">Done Properly.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-3 sm:mb-4 max-w-lg mx-auto">
            Websites. Tours. Staging. Smart Cards. All in one place.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto">
            We don't hide our pricing or require demos. What you see is what you get — and what you get is everything you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button onClick={() => scrollToSection('pricing')} size="lg" className="w-full sm:w-auto">
              Pick Your Plan
            </Button>
            <Button onClick={() => scrollToSection('services')} variant="outline" size="lg" className="w-full sm:w-auto">
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-30 w-full pointer-events-none">
        <p className="text-sm text-gray-500 mb-2">Scroll to explore</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
