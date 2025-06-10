import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionTitle, SectionSubtitle } from '../Section';
import Button from '../Button';

const VirtualToursSection = () => {
  return (
    <Section id="virtual-tours">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionTitle centered={false}>Tours</SectionTitle>
          <SectionSubtitle centered={false}>
            Immersive tours that showcase properties in stunning detail, giving potential buyers a realistic view of listings.
          </SectionSubtitle>
          
          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Increased Engagement</h3>
                <p className="text-gray-600">
                  Tours keep potential buyers engaged 5-10x longer than traditional photos, increasing the likelihood of inquiries.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Pre-Qualified Buyers</h3>
                <p className="text-gray-600">
                  Tours help pre-qualify buyers by giving them a realistic view of the property before in-person showings.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Professional Quality</h3>
                <p className="text-gray-600">
                  Our tours are created with professional equipment and techniques to ensure the highest quality experience.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Button to="/services/virtual-tours">
              Learn More About Tours
            </Button>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Virtual Tour Mockup */}
          <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden">
            {/* 360 View Container */}
            <div className="aspect-video relative">
              {/* Panoramic Image (represented as a gradient) */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700"></div>
              
              {/* Interior Room Mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-md aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-300"></div>
                  
                  {/* Room elements */}
                  <div className="absolute inset-0">
                    {/* Window */}
                    <div className="absolute top-[20%] left-[10%] w-[30%] h-[40%] bg-blue-200 border-4 border-white"></div>
                    
                    {/* Door */}
                    <div className="absolute top-[30%] right-[15%] w-[15%] h-[50%] bg-gray-400 border-2 border-gray-500"></div>
                    
                    {/* Floor */}
                    <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-amber-100"></div>
                  </div>
                </div>
              </div>
              
              {/* 360 Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 rounded-full px-4 py-2 flex items-center space-x-3">
                <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                </button>
              </div>
              
              {/* 360 Badge */}
              <div className="absolute top-4 right-4 bg-primary text-white rounded-full px-3 py-1 text-sm font-semibold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                360° View
              </div>
              
              {/* Hotspots */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute top-[40%] left-[25%] w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
                className="absolute top-[30%] right-[30%] w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
            </div>
            
            {/* Tour Navigation */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="text-sm font-medium">Living Room</div>
                  <div className="text-xs text-gray-500">2 of 8</div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="mt-3 flex space-x-2 overflow-x-auto pb-2">
                <div className="w-16 h-12 bg-gray-200 rounded-md flex-shrink-0 border-2 border-primary"></div>
                <div className="w-16 h-12 bg-gray-300 rounded-md flex-shrink-0"></div>
                <div className="w-16 h-12 bg-gray-300 rounded-md flex-shrink-0"></div>
                <div className="w-16 h-12 bg-gray-300 rounded-md flex-shrink-0"></div>
                <div className="w-16 h-12 bg-gray-300 rounded-md flex-shrink-0"></div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full bg-gray-100 rounded-lg"></div>
          <div className="absolute -z-20 -bottom-12 -left-12 w-full h-full bg-gray-200 rounded-lg"></div>
          
          {/* VR Goggles Icon */}
          <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg z-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default VirtualToursSection;
