import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionTitle, SectionSubtitle } from '../Section';
import Button from '../Button';

const VirtualStagingSection = () => {
  return (
    <Section id="virtual-staging">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative order-2 lg:order-1"
        >
          {/* Virtual Staging Mockup */}
          <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Enhanced Before/After Slider */}
            <div className="aspect-video relative">
              {/* Before Image (Empty Room) */}
              <div className="absolute inset-0 bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full relative">
                    {/* Room elements - Before (Empty) */}
                    <div className="absolute inset-0">
                      {/* Window */}
                      <div className="absolute top-[20%] left-[10%] w-[30%] h-[40%] bg-blue-100 border-4 border-white"></div>
                      
                      {/* Door */}
                      <div className="absolute top-[30%] right-[15%] w-[15%] h-[50%] bg-gray-300 border-2 border-gray-400"></div>
                      
                      {/* Floor */}
                      <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-amber-50"></div>
                      
                      {/* Empty Room Label */}
                      <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
                        Before
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* After Image (Staged Room) - Shown partially based on slider */}
              <motion.div 
                className="absolute inset-0 bg-gray-100 overflow-hidden" 
                initial={{ width: '50%' }}
                animate={{ width: ['50%', '0%', '100%', '50%'] }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  times: [0, 0.3, 0.7, 1]
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center" style={{ width: '200%' }}>
                  <div className="w-full h-full relative">
                    {/* Room elements - After (Staged) */}
                    <div className="absolute inset-0">
                      {/* Window */}
                      <div className="absolute top-[20%] left-[10%] w-[30%] h-[40%] bg-blue-100 border-4 border-white"></div>
                      
                      {/* Door */}
                      <div className="absolute top-[30%] right-[15%] w-[15%] h-[50%] bg-gray-300 border-2 border-gray-400"></div>
                      
                      {/* Floor */}
                      <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-amber-100"></div>
                      
                      {/* Furniture */}
                      <div className="absolute bottom-[20%] left-[20%] w-[30%] h-[15%] bg-gray-700 rounded-md"></div>
                      <div className="absolute bottom-[20%] right-[25%] w-[20%] h-[25%] bg-blue-700 rounded-md"></div>
                      <div className="absolute bottom-[20%] left-[55%] w-[15%] h-[10%] bg-amber-700 rounded-sm"></div>
                      
                      {/* Staged Room Label */}
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs px-2 py-1 rounded">
                        After
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Slider Control */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={{ x: [0, -10, 10, 0] }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  times: [0.3, 0.4, 0.6, 0.7]
                }}
              >
                <div className="h-full w-0.5 bg-white relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab pointer-events-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                </div>
              </motion.div>
              
              {/* Flip Animation Button */}
              <div className="absolute bottom-4 right-4 z-20">
                <motion.button 
                  className="bg-primary text-white rounded-full p-2 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </motion.button>
              </div>
            </div>
            
            {/* Controls */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="text-sm font-medium">Living Room</div>
                  <div className="text-xs text-gray-500">Modern Style</div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 bg-gray-100 rounded text-xs font-medium">Before</button>
                  <button className="px-3 py-1 bg-primary text-white rounded text-xs font-medium">After</button>
                  <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="mt-3 flex space-x-2 overflow-x-auto pb-2">
                <div className="w-16 h-12 bg-gray-200 rounded-md flex-shrink-0 border-2 border-primary"></div>
                <div className="w-16 h-12 bg-gray-300 rounded-md flex-shrink-0"></div>
                <div className="w-16 h-12 bg-gray-300 rounded-md flex-shrink-0"></div>
                <div className="w-16 h-12 bg-gray-300 rounded-md flex-shrink-0"></div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-gray-100 rounded-lg"></div>
          <div className="absolute -z-20 -bottom-12 -right-12 w-full h-full bg-gray-200 rounded-lg"></div>
          
          {/* Style Selector Icon */}
          <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg z-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </motion.div>
        
        <div className="order-1 lg:order-2">
          <SectionTitle centered={false}>Virtual Staging</SectionTitle>
          <SectionSubtitle centered={false}>
            Upload a photo, choose a style, and get professionally staged results. Perfect for showcasing a property's potential.
          </SectionSubtitle>
          
          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Simple Process</h3>
                <p className="text-gray-600">
                  Upload photo {'>'}  Choose style {'>'}  Get staged results. Our streamlined process delivers professional virtual staging within 24 hours.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cost-Effective</h3>
                <p className="text-gray-600">
                  Save thousands compared to physical staging while still showcasing your property's full potential to buyers.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Higher Selling Price</h3>
                <p className="text-gray-600">
                  Staged properties typically sell for 5-10% more than empty ones. Our before/after sliders help buyers visualize the space's potential.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Multiple Design Styles</h3>
                <p className="text-gray-600">
                  Choose from modern, traditional, minimalist, or luxury styles to match your target market's preferences.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Button to="/services/virtual-staging">
              Learn More About Virtual Staging
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default VirtualStagingSection;
