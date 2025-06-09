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
  @media (max-width: 640px) {
    .flip-card {
      perspective: none;
    }
    .flip-card-inner {
      transform-style: flat;
    }
  }
`;

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
            <div className="px-8 pb-6">
              <span className="text-primary font-medium text-base flex items-center gap-1 underline underline-offset-2">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
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
        </div>
      ),
      link: '/services/idx-websites'
    },
    {
      id: 2,
      title: 'NFC Business Card',
      description: 'Smart NFC cards that connect to your personal landing page.',
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
          </div>
        </div>
      ),
      link: '/services/nfc-cards'
    },
    {
      id: 4,
      title: 'Virtual Tours',
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
        </div>
      ),
      price: '$100 per listing',
      link: '/services/virtual-tours'
    },
    {
      id: 5,
      title: 'Virtual Staging',
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
        </div>
      ),
      price: '$100 per listing',
      link: '/services/virtual-staging'
    }
  ];

  return (
    <Section id="services" bgColor="bg-gray-50">
      <style>{styles}</style>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>Core Services</SectionTitle>
        <SectionSubtitle>
          No demos. No hidden fees. Just a seamless experience — think AppleCare simplicity.
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
      </motion.div>
    </Section>
  );
};

export default ServicesSection;
