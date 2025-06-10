import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'IDX Website (React)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: 'Custom IDX websites built in React — not WordPress. Fast, agent-branded, and MLS-synced.',
    details: 'Our IDX websites are fully custom, mobile responsive, and include lead capture, mortgage calculator, and more. No slow plugins or bloated themes.',
    animation: (
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full h-40 bg-blue-50 rounded-lg flex items-center justify-center shadow"
      >
        <div className="w-32 h-20 bg-white rounded shadow flex flex-col justify-between">
          <div className="h-4 bg-blue-200 rounded-t"></div>
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="w-16 h-2 bg-blue-100 rounded mb-2"></div>
            <div className="w-10 h-2 bg-blue-100 rounded"></div>
          </div>
        </div>
      </motion.div>
    ),
  },
  {
    id: 2,
    title: 'Tours',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    description: '360° virtual walkthroughs to showcase your listings online.',
    details: 'Our virtual tours use the latest technology to create immersive, interactive experiences for buyers. Easy to embed and share.',
    animation: (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full h-40 flex items-center justify-center"
      >
        <div className="relative w-20 h-20 flex items-center justify-center">
          <svg width="48" height="48" viewBox="0 0 48 48" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <rect x="12" y="24" width="24" height="16" rx="3" fill="#e0e7ef" />
            <polygon points="24,10 10,24 38,24" fill="#3496ff" />
            <rect x="20" y="32" width="8" height="8" rx="2" fill="#fff" />
          </svg>
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
      </motion.div>
    ),
  },
  {
    id: 3,
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
    details: 'Transform empty spaces into beautifully staged rooms with virtual furniture and decor.',
    animation: (
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full h-40 flex items-center justify-center"
      >
        <motion.div
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          className="w-20 h-12 bg-primary rounded-lg shadow-lg flex items-center justify-center text-white text-lg font-bold relative z-10"
        >
          Staging
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute right-8 w-12 h-20 bg-gray-300 rounded-2xl border-2 border-gray-400 flex items-center justify-center z-0"
        >
          <svg width="24" height="24" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="4" fill="#fff" stroke="#bbb" strokeWidth="2" /></svg>
        </motion.div>
      </motion.div>
    ),
  },
  {
    id: 4,
    title: 'Branding',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" className="h-8 w-8 text-primary"><circle cx="16" cy="16" r="14" fill="#fff" /><text x="16" y="22" textAnchor="middle" fontSize="16" fill="#3496ff" fontWeight="bold">B</text></svg>
    ),
    description: 'Custom branding and logo design for your real estate business.',
    details: 'Stand out with a unique brand identity. We offer logo design, color palettes, and more.',
    animation: (
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full h-40 flex items-center justify-center"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center shadow-lg">
          <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#fff" /><text x="16" y="22" textAnchor="middle" fontSize="16" fill="#3496ff" fontWeight="bold">B</text></svg>
        </div>
      </motion.div>
    ),
  },
];

const DynamicServiceCard = () => {
  const [selected, setSelected] = useState(0);
  const [flip, setFlip] = useState(false);

  const handleTabClick = (idx) => {
    if (idx !== selected) {
      setFlip(true);
      setTimeout(() => {
        setSelected(idx);
        setFlip(false);
      }, 400); // match animation duration
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-8">
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-4">
        {services.map((service, idx) => (
          <button
            key={service.id}
            onClick={() => handleTabClick(idx)}
            className={`rounded-full p-2 border-2 transition-all duration-200 ${selected === idx ? 'border-primary bg-primary/10' : 'border-gray-200 bg-white hover:bg-gray-100'}`}
            aria-label={service.title}
          >
            {service.icon}
          </button>
        ))}
      </div>
      {/* Card with 360 flip */}
      <div className="relative h-96">
        <AnimatePresence initial={false}>
          <motion.div
            key={selected}
            initial={{ rotateY: flip ? 0 : 0, opacity: 1 }}
            animate={{ rotateY: flip ? 360 : 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
            className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-8"
          >
            <h2 className="text-2xl font-bold text-primary mb-2 text-center">{services[selected].title}</h2>
            <p className="text-gray-700 text-lg mb-4 text-center">{services[selected].description}</p>
            <div className="mb-4 w-full flex justify-center">{services[selected].animation}</div>
            <p className="text-base text-gray-700 text-center">{services[selected].details}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DynamicServiceCard; 