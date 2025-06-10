import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionTitle, SectionSubtitle } from '../Section';
import Button from '../Button';

const NfcCardsSection = () => {
  return (
    <Section id="tapcard" bgColor="bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="order-2 lg:order-1 relative"
        >
          {/* tapCard Mockup */}
          <div className="relative mx-auto max-w-sm">
            {/* Business Card */}
            <div className="relative z-20 bg-white rounded-lg shadow-xl overflow-hidden aspect-[1.586/1] transform rotate-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-700 p-6 text-white">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Jane Smith</h3>
                    <p className="text-sm text-white/80">Real Estate Professional</p>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-white/80 mb-1">jane@properly.com</p>
                      <p className="text-xs text-white/80">(555) 123-4567</p>
                    </div>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs text-center">tapCard<br/>Enabled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second Card (decorative) */}
            <div className="absolute top-8 left-8 z-10 bg-white rounded-lg shadow-lg overflow-hidden aspect-[1.586/1] transform -rotate-3">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-6 text-white opacity-80"></div>
            </div>
            
            {/* Phone Mockup */}
            <div className="absolute -right-16 bottom-0 z-30 w-48">
              <div className="relative">
                <div className="bg-gray-900 rounded-3xl p-2 shadow-xl">
                  <div className="rounded-2xl overflow-hidden bg-white aspect-[9/19.5]">
                    <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col">
                      {/* Phone Notch */}
                      <div className="h-6 bg-gray-900 w-1/2 mx-auto rounded-b-xl"></div>
                      
                      {/* Phone Content */}
                      <div className="flex-1 p-2">
                        <div className="bg-white rounded-lg shadow-sm h-full flex flex-col p-2">
                          <div className="w-full h-24 bg-primary/20 rounded-lg mb-2"></div>
                          <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
                          <div className="w-3/4 h-3 bg-gray-300 rounded mb-4"></div>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-gray-100 rounded-lg p-2 flex flex-col items-center">
                              <div className="w-8 h-8 bg-primary/30 rounded-full mb-1"></div>
                              <div className="w-12 h-2 bg-gray-300 rounded"></div>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-2 flex flex-col items-center">
                              <div className="w-8 h-8 bg-primary/30 rounded-full mb-1"></div>
                              <div className="w-12 h-2 bg-gray-300 rounded"></div>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-2 flex flex-col items-center">
                              <div className="w-8 h-8 bg-primary/30 rounded-full mb-1"></div>
                              <div className="w-12 h-2 bg-gray-300 rounded"></div>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-2 flex flex-col items-center">
                              <div className="w-8 h-8 bg-primary/30 rounded-full mb-1"></div>
                              <div className="w-12 h-2 bg-gray-300 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connection Animation */}
                <motion.div
                  animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-primary/30"
                ></motion.div>
                <motion.div
                  animate={{ opacity: [0, 0.7, 0], scale: [0.8, 1.5, 0.8] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-primary/20"
                ></motion.div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full bg-secondary/20 rounded-lg"></div>
          </div>
        </motion.div>
        
        <div className="order-1 lg:order-2">
          <SectionTitle centered={false}>tapCard</SectionTitle>
          <SectionSubtitle centered={false}>
            Modern digital business cards with tapCard technology that instantly connect clients to your digital presence.
          </SectionSubtitle>
          
          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personal Landing Page</h3>
                <p className="text-gray-600">
                  Each NFC card links to your personalized landing page with your contact information, bio, and professional photo.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Listing Flyers</h3>
                <p className="text-gray-600">
                  Showcase your property listings with digital flyers that include photos, details, and tours.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">IDX Website Connection</h3>
                <p className="text-gray-600">
                  Direct potential clients to your IDX website where they can browse all available properties in your area.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Button to="/services/nfc-cards">
              Learn More About NFC Cards
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default NfcCardsSection;
