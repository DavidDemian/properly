import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Marketing Tools. 
              <span className="text-primary"> Done Properly.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-lg mx-auto lg:mx-0">
              Websites. Tours. Staging. Smart Cards. All in one place.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              We don't hide our pricing or require demos. What you see is what you get — and what you get is everything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button to="/pricing" size="lg">
                Pick Your Plan
              </Button>
              <Button to="/services" variant="outline" size="lg">
                Explore Services
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white p-4 rounded-lg shadow-xl">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white">
                {/* Real Estate Website Mockup */}
                <div className="w-full h-full relative">
                  {/* Website Header */}
                  <div className="h-[15%] bg-white border-b border-gray-200 flex items-center px-4">
                    <div className="w-24 h-6 bg-primary rounded"></div>
                    <div className="ml-auto flex space-x-4">
                      <div className="w-16 h-5 bg-gray-100 rounded"></div>
                      <div className="w-16 h-5 bg-gray-100 rounded"></div>
                      <div className="w-20 h-5 bg-gray-100 rounded"></div>
                      <div className="w-24 h-8 bg-primary rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Hero Banner */}
                  <div className="h-[30%] bg-gradient-to-r from-blue-600 to-blue-400 flex items-center px-6">
                    <div className="w-full">
                      <div className="w-3/4 h-6 bg-white rounded mb-2"></div>
                      <div className="w-1/2 h-4 bg-white/80 rounded mb-3"></div>
                      <div className="w-32 h-8 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Property Listings */}
                  <div className="p-4">
                    <div className="w-48 h-6 bg-gray-800 rounded mb-4"></div>
                    <div className="grid grid-cols-3 gap-4">
                      {/* Property Card 1 */}
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="h-24 bg-blue-100"></div>
                        <div className="p-2">
                          <div className="w-full h-5 bg-blue-50 rounded mb-2"></div>
                          <div className="w-2/3 h-4 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                      
                      {/* Property Card 2 */}
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="h-24 bg-blue-100"></div>
                        <div className="p-2">
                          <div className="w-full h-5 bg-blue-50 rounded mb-2"></div>
                          <div className="w-2/3 h-4 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                      
                      {/* Property Card 3 */}
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="h-24 bg-blue-100"></div>
                        <div className="p-2">
                          <div className="w-full h-5 bg-blue-50 rounded mb-2"></div>
                          <div className="w-2/3 h-4 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">IDX Websites</p>
                    <p className="text-xs text-gray-500">Custom & Responsive</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Virtual Tours</p>
                    <p className="text-xs text-gray-500">360° Experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-8 border-dashed border-gray-200"></div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <p className="text-sm text-gray-500 mb-2">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
