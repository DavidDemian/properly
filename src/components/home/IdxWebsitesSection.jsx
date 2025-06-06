import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionTitle, SectionSubtitle } from '../Section';
import { FeatureCard } from '../Card';
import Button from '../Button';

const IdxWebsitesSection = () => {
  const features = [
    {
      id: 1,
      title: 'Property Listings',
      description: 'Showcase all your listings with advanced search filters and detailed property information.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Mortgage Calculator',
      description: 'Help clients estimate monthly payments with an easy-to-use mortgage calculator.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Contact Forms',
      description: 'Capture leads with integrated contact forms that notify you instantly of new inquiries.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Mobile Responsive',
      description: 'Websites that look and function perfectly on all devices, from desktops to smartphones.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'SEO Optimized',
      description: 'Built with search engine optimization in mind to help you rank higher in local searches.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Custom Branding',
      description: 'Websites designed to match your personal brand with your colors, logo, and style.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <Section id="idx-websites">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionTitle centered={false}>Custom IDX Websites</SectionTitle>
          <SectionSubtitle centered={false}>
            Professional, feature-rich websites that help you showcase properties and generate leads.
          </SectionSubtitle>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
          >
            {features.map((feature) => (
              <motion.div key={feature.id} variants={itemVariants}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  className="h-full"
                />
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-8">
            <Button to="/services/idx-websites">
              Learn More About IDX Websites
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
          {/* Website mockup */}
          <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
            {/* Website header */}
            <div className="bg-gray-800 p-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 bg-gray-700 rounded h-6 w-2/3"></div>
              </div>
            </div>
            
            {/* Website content */}
            <div className="p-4">
              {/* Hero section */}
              <div className="bg-gray-100 h-40 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-6 bg-gray-300 rounded mx-auto mb-2"></div>
                  <div className="w-48 h-4 bg-gray-300 rounded mx-auto"></div>
                </div>
              </div>
              
              {/* Search bar */}
              <div className="bg-white border border-gray-200 rounded-lg p-3 mb-4 shadow-sm">
                <div className="flex flex-wrap gap-2">
                  <div className="w-24 h-8 bg-gray-200 rounded"></div>
                  <div className="w-24 h-8 bg-gray-200 rounded"></div>
                  <div className="w-24 h-8 bg-gray-200 rounded"></div>
                  <div className="w-16 h-8 bg-primary rounded"></div>
                </div>
              </div>
              
              {/* Property listings */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-gray-200 h-24"></div>
                  <div className="p-2">
                    <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="w-2/3 h-3 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-gray-200 h-24"></div>
                  <div className="p-2">
                    <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="w-2/3 h-3 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-gray-200 h-24"></div>
                  <div className="p-2">
                    <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="w-2/3 h-3 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-gray-200 h-24"></div>
                  <div className="p-2">
                    <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="w-2/3 h-3 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-gray-100 rounded-lg"></div>
          <div className="absolute -z-20 -bottom-12 -right-12 w-full h-full bg-gray-200 rounded-lg"></div>
        </motion.div>
      </div>
    </Section>
  );
};

export default IdxWebsitesSection;
