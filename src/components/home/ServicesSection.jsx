import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionTitle, SectionSubtitle } from '../Section';
import Card from '../Card';
import Button from '../Button';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'IDX Custom Websites',
      description: 'Fully custom (not WordPress), agent-branded, fast, lead capture enabled. Mobile responsive, MLS synced.',
      features: [
        'Fully custom (not WordPress)',
        'Agent-branded, fast, lead capture enabled',
        'Mobile responsive, MLS synced'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      image: (
        <div className="relative w-full h-40 bg-gray-100 rounded-lg overflow-hidden mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="absolute top-0 left-0 right-0 h-8 bg-blue-500 flex items-center px-3">
              <div className="w-3 h-3 rounded-full bg-red-400 mr-1"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></div>
              <div className="w-3 h-3 rounded-full bg-green-400 mr-1"></div>
              <div className="ml-auto w-24 h-4 bg-white/20 rounded"></div>
            </div>
            <div className="absolute top-10 inset-x-0 p-2">
              <div className="h-6 w-3/4 bg-blue-200 rounded mb-2"></div>
              <div className="h-4 w-1/2 bg-blue-200/70 rounded mb-3"></div>
              <div className="flex space-x-2">
                <div className="h-8 w-20 bg-blue-500 rounded"></div>
                <div className="h-8 w-20 bg-white border border-blue-200 rounded"></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-12 bg-white p-2">
            <div className="flex space-x-2">
              <div className="h-8 w-8 bg-blue-100 rounded"></div>
              <div className="h-8 w-8 bg-blue-100 rounded"></div>
              <div className="h-8 w-8 bg-blue-100 rounded"></div>
              <div className="h-8 w-8 bg-blue-100 rounded"></div>
            </div>
          </div>
        </div>
      ),
      link: '/services/idx-websites'
    },
    {
      id: 2,
      title: 'Smart Business Cards with NFC Tags',
      description: 'Tap-to-share digital business cards that link directly to the agent\'s Properly site or listings.',
      features: [
        'Tap-to-share digital business cards',
        'Link directly to the agent\'s Properly site or listings'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      image: (
        <div className="relative w-full h-40 bg-gray-100 rounded-lg overflow-hidden mb-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-28 bg-primary rounded-lg shadow-lg transform rotate-6 relative">
              <div className="absolute inset-0 p-3 text-white">
                <div className="text-sm font-bold">Jane Smith</div>
                <div className="text-xs opacity-80">Real Estate Professional</div>
                <div className="absolute bottom-3 left-3 text-xs opacity-80">
                  jane@properly.com<br />
                  (555) 123-4567
                </div>
                <div className="absolute bottom-3 right-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="text-[6px]">NFC</div>
                </div>
              </div>
            </div>
            <div className="absolute right-4 bottom-4 w-16 h-32 bg-gray-800 rounded-xl border-4 border-gray-900 shadow-lg">
              <div className="w-full h-full bg-white rounded-md overflow-hidden">
                <div className="h-4 bg-gray-200 w-full"></div>
                <div className="p-1">
                  <div className="w-full h-3 bg-gray-100 rounded mb-1"></div>
                  <div className="w-full h-3 bg-gray-100 rounded mb-1"></div>
                  <div className="w-full h-3 bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-primary/30"
          ></motion.div>
        </div>
      ),
      link: '/services/nfc-cards'
    },
    {
      id: 3,
      title: 'Virtual Tours',
      description: '360° walk-throughs optimized for MLS and mobile devices, giving potential buyers an immersive view of properties.',
      features: [
        '360° walk-throughs',
        'Optimized for MLS and mobile'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      image: (
        <div className="relative w-full h-40 bg-gray-800 rounded-lg overflow-hidden mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-24 bg-gray-200 rounded-md relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-300"></div>
                <div className="absolute top-[20%] left-[10%] w-[30%] h-[40%] bg-blue-200 border-2 border-white"></div>
                <div className="absolute top-[30%] right-[15%] w-[15%] h-[50%] bg-gray-400 border border-gray-500"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-amber-100"></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/50 rounded-full px-2 py-1 flex items-center space-x-1">
            <div className="w-4 h-4 bg-white/20 rounded-full"></div>
            <div className="w-4 h-4 bg-white/20 rounded-full"></div>
            <div className="w-4 h-4 bg-white/20 rounded-full"></div>
            <div className="w-4 h-4 bg-white/20 rounded-full"></div>
          </div>
          <div className="absolute top-2 right-2 bg-primary text-white rounded-full px-2 py-0.5 text-xs font-semibold">
            360° View
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute top-[40%] left-[25%] w-3 h-3 bg-primary rounded-full"
          ></motion.div>
        </div>
      ),
      link: '/services/virtual-tours'
    },
    {
      id: 4,
      title: 'Virtual Staging',
      description: 'Upload photo > Choose style > Get staged results. Use before/after image sliders or flip animation.',
      features: [
        'Upload photo > Choose style > Get staged results',
        'Before/after image sliders or flip animation'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      image: (
        <div className="relative w-full h-40 bg-gray-100 rounded-lg overflow-hidden mb-4">
          <div className="absolute inset-0 flex">
            <div className="w-1/2 h-full bg-gray-200 flex items-center justify-center">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5/6 h-5/6 bg-gray-100 rounded">
                    <div className="absolute top-1 left-1 bg-black/50 text-white text-[8px] px-1 rounded">
                      Before
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full bg-gray-200 flex items-center justify-center">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5/6 h-5/6 bg-gray-100 rounded">
                    <div className="absolute bottom-[20%] left-[20%] w-[30%] h-[15%] bg-gray-700 rounded-sm"></div>
                    <div className="absolute bottom-[20%] right-[25%] w-[20%] h-[25%] bg-blue-700 rounded-sm"></div>
                    <div className="absolute top-1 left-1 bg-primary text-white text-[8px] px-1 rounded">
                      After
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-full w-0.5 bg-white relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ),
      link: '/services/virtual-staging'
    }
  ];

  const comingSoonFeatures = [
    {
      id: 1,
      title: 'Social Media Reels Generator',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Google Ads Setup',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Content Management Tools',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Section id="services" bgColor="bg-gray-50">
      <SectionTitle>Core Services</SectionTitle>
      <SectionSubtitle>
        No demos. No surprises. Just simple, transparent pricing for everything you need.
      </SectionSubtitle>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={itemVariants}>
            <Card
              title={service.title}
              description={service.description}
              icon={service.icon}
              className="h-full"
            >
              {service.image}
              <div className="mt-4">
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">✅</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t">
                <Button to={service.link} variant="ghost" className="text-sm">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* What's Coming Next Section */}
      <div className="mt-20">
        <SectionTitle>What's Coming Next</SectionTitle>
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p>We're not stopping here. Soon, Properly will offer social media tools that help you automate marketing — from reels to ads to analytics. Stay tuned.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {comingSoonFeatures.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full flex flex-col items-center justify-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <div className="mt-2 inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">Coming Soon</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-12 text-center">
        <Button to="/pricing" variant="outline">
          View Pricing & Packages
        </Button>
      </div>
    </Section>
  );
};

export default ServicesSection;
