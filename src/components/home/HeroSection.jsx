import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
import ProperlyLogo from '../../assets/images/ProperlyLogo';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-yellow-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[110vw] max-w-[600px] max-h-[600px] rounded-full border-4 border-dashed border-gray-200 opacity-40 z-0"></div>
      </div>

      {/* Logo at the very top, centered */}
      <div className="relative z-20 flex flex-col items-center w-full pt-10 sm:pt-16 mb-4">
        <ProperlyLogo className="mx-auto w-72 sm:w-80 md:w-[32rem] max-w-full h-auto" />
      </div>

      {/* Main content grid: left=text/buttons, right=mockup */}
      <div className="container relative z-20 flex-1 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 px-4 sm:px-6 pb-10">
        {/* Left: Text and Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Marketing Tools. <span className="text-primary">Done Properly.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-3 sm:mb-4 max-w-lg">
            Websites. Tours. Staging. Smart Cards. All in one place.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg">
            We don't hide our pricing or require demos. What you see is what you get — and what you get is everything you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center md:justify-start">
            <Button onClick={() => scrollToSection('pricing')} size="lg" className="w-full sm:w-auto">
              Pick Your Plan
            </Button>
            <Link to="/services" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Services
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right: IDX Animation/Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full md:w-1/2 flex flex-col items-center mt-10 md:mt-0 relative"
        >
          {/* Floating animated elements - only on md+ screens */}
          <motion.div
            className="hidden md:block absolute -top-8 -left-8 z-20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="#3496ff">
                <rect x="4" y="5" width="16" height="10" rx="2" />
                <rect x="8" y="17" width="8" height="2" rx="1" />
                <rect x="10" y="19" width="4" height="2" rx="1" />
              </svg>
              <span className="font-semibold text-sm text-primary">IDX Websites</span>
            </div>
          </motion.div>
          <motion.div
            className="hidden md:block absolute -top-8 right-0 z-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <div className="bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="#3496ff">
                <rect x="4" y="8" width="16" height="8" rx="2" />
                <rect x="7" y="6" width="10" height="4" rx="2" />
                <circle cx="12" cy="12" r="2" fill="#fff" />
              </svg>
              <span className="font-semibold text-sm text-primary">Tours</span>
            </div>
          </motion.div>
          <motion.div
            className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 z-20"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          >
            <div className="bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="18" height="12" rx="3" fill="#3496ff" />
                <circle cx="8" cy="12" r="2" fill="#fff" />
                <rect x="12" y="10" width="6" height="1.5" rx="0.75" fill="#fff" />
                <rect x="12" y="13" width="4" height="1.2" rx="0.6" fill="#fff" />
              </svg>
              <span className="font-semibold text-sm text-primary">Smart Cards</span>
            </div>
          </motion.div>
          {/* End floating elements */}

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
