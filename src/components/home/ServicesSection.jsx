import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section, { SectionTitle, SectionSubtitle } from '../Section';
import Card from '../Card';
import Button from '../Button';

// Add custom styles for 3D flip animation
const styles = `
  .flip-card {
    perspective: 1000px;
    height: 100%;
    min-height: 500px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  .flip-card:hover {
    transform: translateY(-5px);
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .flip-card-back {
    transform: rotateY(180deg);
  }
  .flip-card.flipped .flip-card-inner {
    transform: rotateY(180deg);
  }
  .flip-card-front .card-content {
    transition: all 0.3s ease;
  }
  .flip-card:hover .card-content {
    transform: scale(1.02);
  }
  .flip-card:hover .hover-indicator {
    opacity: 1;
    transform: translateY(0);
  }
  .hover-indicator {
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
  }
`;

// Service-specific animation components
const ServiceDemo = ({ service }) => {
  if (service.title === 'Virtual Staging') {
    // Before/After crossfade animation
    return (
      <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10"
        >
          <span className="text-xs bg-black/60 text-white px-2 py-1 rounded absolute top-2 left-2">Before</span>
          <svg width="60" height="60" viewBox="0 0 60 60"><rect x="10" y="30" width="40" height="20" rx="4" fill="#bbb" /><rect x="20" y="40" width="20" height="6" rx="2" fill="#999" /></svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 bg-blue-100 flex items-center justify-center z-20"
        >
          <span className="text-xs bg-primary text-white px-2 py-1 rounded absolute top-2 left-2">After</span>
          <svg width="60" height="60" viewBox="0 0 60 60"><rect x="10" y="30" width="40" height="20" rx="4" fill="#e0c9a6" /><rect x="20" y="40" width="20" height="6" rx="2" fill="#bfa76f" /><rect x="15" y="35" width="10" height="8" rx="2" fill="#8ecae6" /><rect x="35" y="35" width="10" height="8" rx="2" fill="#219ebc" /></svg>
        </motion.div>
      </div>
    );
  }
  if (service.title === 'Virtual Tours') {
    // Animated house with camera orbit
    return (
      <div className="flex flex-col items-center mb-4 relative h-24">
        <div className="relative w-20 h-20 flex items-center justify-center">
          {/* House Icon */}
          <svg width="48" height="48" viewBox="0 0 48 48" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <rect x="12" y="24" width="24" height="16" rx="3" fill="#e0e7ef" />
            <polygon points="24,10 10,24 38,24" fill="#3496ff" />
            <rect x="20" y="32" width="8" height="8" rx="2" fill="#fff" />
          </svg>
          {/* Camera Orbit Animation */}
          <motion.div
            style={{ position: 'absolute', left: '50%', top: '50%', originX: '0%', originY: '0%' }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="8" fill="none" stroke="#bbb" strokeWidth="2" />
              <rect x="14" y="2" width="6" height="4" rx="1" fill="#222" stroke="#fff" strokeWidth="1" transform="rotate(20 10 10)" />
              <circle cx="17" cy="4" r="1" fill="#fff" />
            </svg>
          </motion.div>
        </div>
        <span className="text-xs text-gray-500 mt-2">360° Walkthrough</span>
      </div>
    );
  }
  if (service.title === 'IDX Website (React)') {
    // Animated browser window
    return (
      <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden bg-blue-50 flex items-center justify-center">
        <motion.div
          initial={{ x: -40 }}
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          className="w-32 h-20 bg-white rounded shadow flex flex-col justify-between"
        >
          <div className="h-4 bg-blue-200 rounded-t"></div>
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="w-16 h-2 bg-blue-100 rounded mb-2"></div>
            <div className="w-10 h-2 bg-blue-100 rounded"></div>
          </div>
        </motion.div>
      </div>
    );
  }
  if (service.title === 'tapCard') {
    // Card tap animation
    return (
      <div className="relative w-full h-32 mb-4 flex items-center justify-center">
        <motion.div
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          className="w-20 h-12 bg-primary rounded-lg shadow-lg flex items-center justify-center text-white text-lg font-bold relative z-10"
        >
          tapCard
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute right-8 w-12 h-20 bg-gray-300 rounded-2xl border-2 border-gray-400 flex items-center justify-center z-0"
        >
          <svg width="24" height="24" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="4" fill="#fff" stroke="#bbb" strokeWidth="2" /></svg>
        </motion.div>
      </div>
    );
  }
  if (service.title === 'Branding') {
    // Logo reveal animation
    return (
      <div className="flex flex-col items-center mb-4">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: [0.7, 1.1, 1], opacity: [0, 1, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center shadow-lg"
        >
          <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#fff" /><text x="16" y="22" textAnchor="middle" fontSize="16" fill="#3496ff" fontWeight="bold">B</text></svg>
        </motion.div>
        <span className="text-xs text-gray-500 mt-2">Brand Reveal</span>
      </div>
    );
  }
  return null;
};

const FlipCard = ({ service, isFlipped, onClick }) => {
  return (
    <div 
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onClick={onClick}
    >
      <div className="flip-card-inner">
        {/* Front of card */}
        <div className="flip-card-front">
          <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col justify-between">
            <div className="p-8 card-content flex-1 flex flex-col">
              {service.icon && (
                <div className="mb-6 text-primary text-4xl">
                  {service.icon}
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-lg mb-4">{service.description}</p>
              <ul className="mb-6 space-y-2">
                {service.summaryFeatures && service.summaryFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-base">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-8 pb-6 flex flex-col items-center gap-2">
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="flip-card-back">
          <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
            <div className="p-8">
              {service.icon && (
                <div className="mb-6 text-primary text-4xl">
                  {service.icon}
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              {/* Service-specific animation/demo */}
              <ServiceDemo service={service} />
              <div className="mt-6">
                <p className="text-gray-700 text-base">
                  {service.details || service.description}
                </p>
              </div>
              {service.price && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
                  <p className="text-lg font-semibold text-primary">{service.price}</p>
                </div>
              )}
              {service.link && !service.price && (
                <div className="mt-8 pt-6 border-t">
                  <Button to={service.link} variant="ghost" className="text-lg">
                    View service details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [flippedCardId, setFlippedCardId] = useState(null);

  const handleCardClick = (cardId) => {
    setFlippedCardId(flippedCardId === cardId ? null : cardId);
  };

  const services = [
    {
      id: 1,
      title: 'IDX Website (React)',
      description: 'Custom IDX websites built in React — not WordPress.',
      summaryFeatures: [
        'Fully custom (not WordPress)',
        'Agent-branded, fast, lead capture enabled',
        'Mobile responsive, MLS synced',
      ],
      features: [
        'No bloated themes or slow plugins',
        'Blazing-fast performance and responsive design',
        'Complete customization options',
        'Includes listings, mortgage calculator, and contact form'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="#3496ff">
          <rect x="4" y="5" width="16" height="10" rx="2" />
          <rect x="8" y="17" width="8" height="2" rx="1" />
          <rect x="10" y="19" width="4" height="2" rx="1" />
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
        </div>
      ),
      link: '/services/idx-websites'
    },
    {
      id: 2,
      title: 'tapCard',
      description: 'Smart tapCard that connects to your personal landing page.',
      summaryFeatures: [
        'Tap-to-share digital business cards',
        'Link directly to the agent\'s Properly site or listings',
      ],
      features: [
        'One tap shares your listings',
        'Instant access to your site',
        'Share contact info seamlessly',
        'Professional and modern design'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="6" width="18" height="12" rx="3" fill="#3496ff" />
          <circle cx="8" cy="12" r="2" fill="#fff" />
          <rect x="12" y="10" width="6" height="1.5" rx="0.75" fill="#fff" />
          <rect x="12" y="13" width="4" height="1.2" rx="0.6" fill="#fff" />
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
                  <div className="text-[6px]">tapCard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      link: '/services/tapcard'
    },
    {
      id: 4,
      title: 'Tours',
      description: 'Immersive 360° virtual tours that bring listings to life.',
      summaryFeatures: [
        '360° walk-throughs',
        'Optimized for MLS and mobile',
      ],
      features: [
        'High-quality 360° walkthroughs',
        'Available in Tampa & Orlando, FL',
        'Professional photography included',
        'Optimized for all devices'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="#3496ff">
          <rect x="4" y="8" width="16" height="8" rx="2" />
          <rect x="7" y="6" width="10" height="4" rx="2" />
          <circle cx="12" cy="12" r="2" fill="#fff" />
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
        </div>
      ),
      price: '$100 per listing',
      link: '/services/virtual-tours'
    },
    {
      id: 5,
      title: 'Staging',
      description: 'Help buyers envision the space with digital furniture and decor.',
      summaryFeatures: [
        'Upload photo > Choose style > Get staged results',
        'Before/after image sliders or flip animation',
      ],
      features: [
        'Professional digital staging',
        'Multiple style options',
        'Quick turnaround time',
        'High-quality renders'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 48 48" fill="none">
          {/* Sofa base */}
          <rect x="8" y="24" width="32" height="12" rx="4" fill="#3496ff"/>
          {/* Sofa back */}
          <rect x="12" y="18" width="24" height="8" rx="3" fill="#60a5fa"/>
          {/* Sofa legs */}
          <rect x="12" y="36" width="4" height="6" rx="1" fill="#bbb"/>
          <rect x="32" y="36" width="4" height="6" rx="1" fill="#bbb"/>
          {/* Lamp stand */}
          <rect x="40" y="14" width="2" height="14" rx="1" fill="#bbb"/>
          {/* Lamp shade */}
          <ellipse cx="41" cy="14" rx="4" ry="3" fill="#FFD700"/>
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
        </div>
      ),
      price: '$100 per listing',
      link: '/services/virtual-staging'
    }
  ];

  return (
    <Section id="services" bgColor="bg-transparent">
      <style>{styles}</style>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>Core Services</SectionTitle>
        <SectionSubtitle>
          No demos. No hidden fees. Just a seamless experience.
        </SectionSubtitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: service.id * 0.1 }}
            >
              <FlipCard
                service={service}
                isFlipped={flippedCardId === service.id}
                onClick={() => handleCardClick(service.id)}
              />
            </motion.div>
          ))}
        </div>
        {/* Single See Details link below all cards */}
        <div className="flex justify-center mt-6">
          <a href="/services" className="text-primary underline underline-offset-2 hover:text-secondary transition-colors text-lg font-semibold">See details</a>
        </div>
      </motion.div>
    </Section>
  );
};

export default ServicesSection;
