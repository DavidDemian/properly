import React, { useState } from 'react';
import ProperlyLogo from '../assets/images/ProperlyLogo';
import { motion, AnimatePresence } from 'framer-motion';
import Carousel from '../components/Carousel';
import TextCarousel from '../components/TextCarousel';
import { Link } from 'react-router-dom';

// Import service images
import idxBefore from '../assets/images/services/idx-before.svg?url';
import idxAfter from '../assets/images/services/idx-after.svg?url';
import toursBefore from '../assets/images/services/virtual-tour-before.svg?url';
import toursAfter from '../assets/images/services/virtual-tour-after.svg?url';
import tapCardBefore from '../assets/images/services/tapcard-before.svg?url';
import tapCardAfter from '../assets/images/services/tap-card-after.svg?url';
import stagingBefore from '../assets/images/services/virtual-staging-before.svg?url';
import stagingAfter from '../assets/images/services/virtual-staging-after.svg?url';

const idxWebsiteSlides = [
  <img src={idxBefore} alt="IDX Website Before" className="w-full h-64 object-cover rounded-lg" key="idx-before" />,
  <img src={idxAfter} alt="IDX Website After" className="w-full h-64 object-cover rounded-lg" key="idx-after" />,
];

const toursSlides = [
  <img src={toursBefore} alt="Tours Before" className="w-full h-64 object-cover rounded-lg" key="tours-before" />,
  <img src={toursAfter} alt="Tours After" className="w-full h-64 object-cover rounded-lg" key="tours-after" />,
];

const tapCardSlides = [
  <img src={tapCardBefore} alt="tapCard Before" className="w-full h-64 object-cover rounded-lg" key="tapcard-before" />,
  <img src={tapCardAfter} alt="tapCard After" className="w-full h-64 object-cover rounded-lg" key="tapcard-after" />,
];

const stagingSlides = [
  <img src={stagingBefore} alt="Staging Before" className="w-full h-64 object-cover rounded-lg" key="staging-before" />,
  <img src={stagingAfter} alt="Staging After" className="w-full h-64 object-cover rounded-lg" key="staging-after" />,
];

const services = [
  {
    id: 1,
    title: 'IDX Website (React)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="#3496ff">
        <rect x="4" y="5" width="16" height="10" rx="2" />
        <rect x="8" y="17" width="8" height="2" rx="1" />
        <rect x="10" y="19" width="4" height="2" rx="1" />
      </svg>
    ),
    description: 'Custom IDX websites built in React — not WordPress. Fast, agent-branded, and MLS-synced.',
    details: 'Our IDX websites are fully custom, mobile responsive, and include lead capture, mortgage calculator, and more. No slow plugins or bloated themes.',
    features: {
      whatYouGet: [
        'Fully custom, agent-branded website',
        'MLS-synced property search',
        'Lead capture forms',
        'Mortgage calculator',
        'Mobile responsive design',
        'Lightning-fast performance',
      ],
      howItWorks: [
        'We consult with you to understand your brand and needs',
        'Design and build your custom site in React',
        'Connect to your MLS for live listings',
        'Launch and support your site with ongoing updates',
      ],
      whyItMatters: [
        'Stand out from cookie-cutter WordPress sites',
        'Capture more leads with a seamless user experience',
        'Showcase your brand and listings with speed and style',
      ],
    },
    animation: <Carousel slides={idxWebsiteSlides} autoAdvance={4000} />,
  },
  {
    id: 2,
    title: 'Tours',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="#3496ff">
        <rect x="4" y="8" width="16" height="8" rx="2" />
        <rect x="7" y="6" width="10" height="4" rx="2" />
        <circle cx="12" cy="12" r="2" fill="#fff" />
      </svg>
    ),
    description: 'Immersive 360° virtual tours that bring listings to life.',
    details: 'Our tours use the latest technology to create immersive, interactive experiences for buyers. Easy to embed and share.',
    features: {
      whatYouGet: [
        'High-quality 360° tours',
        'MLS and website integration',
        'Mobile and VR ready',
        'Professional photography included',
      ],
      howItWorks: [
        'Schedule a shoot with our team',
        'We capture and process your property in 360°',
        'You receive a shareable, embeddable tour link',
      ],
      whyItMatters: [
        'Let buyers tour listings from anywhere',
        'Stand out in your market with immersive media',
        'Save time on in-person showings',
      ],
    },
    animation: <Carousel slides={toursSlides} autoAdvance={4000} />,
  },
  {
    id: 3,
    title: 'tapCard',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="12" rx="3" fill="#3496ff" />
        <circle cx="8" cy="12" r="2" fill="#fff" />
        <rect x="12" y="10" width="6" height="1.5" rx="0.75" fill="#fff" />
        <rect x="12" y="13" width="4" height="1.2" rx="0.6" fill="#fff" />
      </svg>
    ),
    description: 'Smart tapCard that connects to your personal landing page.',
    details: 'Share your contact info and listings with a tap. Modern, professional, and easy to use.',
    features: {
      whatYouGet: [
        'Physical tapCard with your branding',
        'Tap-to-share digital business card',
        'Links to your Properly site or listings',
        'Easy to update your info online',
      ],
      howItWorks: [
        'Order your custom tapCard',
        'We program it to your Properly profile or custom link',
        'Tap the card to any phone to share your info instantly',
      ],
      whyItMatters: [
        'Make a memorable first impression',
        'Share your contact and listings instantly',
        'No more paper cards or manual entry',
      ],
    },
    animation: <Carousel slides={tapCardSlides} autoAdvance={4000} />,
  },
  {
    id: 4,
    title: 'Staging',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 48 48" fill="none">
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
    description: 'Help buyers envision the space with digital furniture and decor.',
    details: 'Help buyers envision the potential of any space with our professional staging service.',
    features: {
      whatYouGet: [
        'Before/after staging',
        'Multiple style options (Modern, Traditional, Minimalist)',
        'High-resolution renders',
        'Quick turnaround (24-48 hours)',
        'Easy to share on MLS and social media',
      ],
      howItWorks: [
        'Upload your empty space photos',
        'Choose your preferred style',
        'Our designers stage the space virtually',
        'Receive your staged images ready to use',
      ],
      whyItMatters: [
        'Help buyers visualize the space\'s potential',
        'Increase listing appeal and value',
        'Faster sales and higher offers',
        'Cost-effective alternative to physical staging',
      ],
    },
    animation: <Carousel slides={stagingSlides} autoAdvance={4000} />,
  },
];

const ServicesDetailsPage = () => {
  const [selected, setSelected] = useState(0);
  const featureSlides = [
    {
      heading: 'What You Get',
      text: services[selected].features.whatYouGet.join(' ').replace(/\s*\.\s*/g, '. '),
    },
    {
      heading: 'How It Works',
      text: services[selected].features.howItWorks.join(' ').replace(/\s*\.\s*/g, '. '),
    },
    {
      heading: 'Why It Matters',
      text: services[selected].features.whyItMatters.join(' ').replace(/\s*\.\s*/g, '. '),
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 pb-16">
      <div className="container mx-auto py-12 px-4 sm:px-8 flex flex-col items-center">
        <Link to="/">
          <ProperlyLogo className="w-40 sm:w-56 md:w-72 mb-6 cursor-pointer" />
        </Link>
        <p className="text-lg text-gray-600 text-center max-w-2xl mb-8">Explore the details and see examples of what we offer for modern real estate professionals.</p>
        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-8 border-b border-gray-200 w-full max-w-xl">
          {services.map((service, idx) => (
            <button
              key={service.id}
              onClick={() => setSelected(idx)}
              className={`flex flex-col items-center px-2 pb-2 pt-4 transition-all duration-200 border-b-2 text-base font-semibold focus:outline-none ${selected === idx ? 'border-primary text-primary' : 'border-transparent text-gray-400 hover:text-primary'}`}
              style={{ minWidth: 80 }}
              aria-label={service.title}
            >
              {service.icon}
              <span className="mt-1 text-xs font-medium">{service.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>
        {/* Card */}
        <div className="w-full max-w-xl mx-auto p-8 flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="w-full flex flex-col items-center"
            >
              <h2 className="text-2xl font-bold text-primary mb-2 text-center flex items-center gap-2">{services[selected].icon}{services[selected].title}</h2>
              <p className="text-gray-700 text-lg mb-4 text-center">{services[selected].description}</p>
              <div className="mb-4 w-full flex justify-center">{services[selected].animation}</div>
              {/* Feature Sections */}
              <TextCarousel slides={featureSlides} className="mt-4" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetailsPage; 