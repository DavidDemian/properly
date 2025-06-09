import React from 'react';
import { motion } from 'framer-motion';

const blobs = [
  {
    style: 'top-0 left-0 w-40 h-40',
    gradient: 'from-blue-200 via-blue-100 to-yellow-100',
    delay: 0,
  },
  {
    style: 'bottom-0 right-0 w-56 h-56',
    gradient: 'from-yellow-100 via-blue-100 to-blue-50',
    delay: 1.2,
  },
  {
    style: 'top-1/2 left-0 w-32 h-32',
    gradient: 'from-blue-100 via-yellow-50 to-blue-200',
    delay: 2.1,
  },
];

const svgDecor = [
  // Top right animated wave
  (
    <motion.svg
      key="wave1"
      className="absolute top-0 right-0 w-64 h-32 md:w-96 md:h-48 opacity-30"
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ y: 0 }}
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path d="M0 100 Q100 0 200 100 T400 100 V200 H0 Z" fill="url(#wave1-gradient)" />
      <defs>
        <linearGradient id="wave1-gradient" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3496ff" stopOpacity="0.18" />
          <stop offset="1" stopColor="#FFD700" stopOpacity="0.12" />
        </linearGradient>
      </defs>
    </motion.svg>
  ),
  // Bottom left animated curve
  (
    <motion.svg
      key="curve1"
      className="absolute bottom-0 left-0 w-80 h-40 md:w-[32rem] md:h-64 opacity-20"
      viewBox="0 0 600 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ x: 0 }}
      animate={{ x: [0, -15, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path d="M0 200 Q200 100 400 200 T600 200 V300 H0 Z" fill="url(#curve1-gradient)" />
      <defs>
        <linearGradient id="curve1-gradient" x1="0" y1="0" x2="600" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD700" stopOpacity="0.22" />
          <stop offset="1" stopColor="#3496ff" stopOpacity="0.15" />
        </linearGradient>
      </defs>
    </motion.svg>
  ),
  // Center right subtle circle
  (
    <motion.svg
      key="circle1"
      className="absolute top-1/2 right-0 w-32 h-32 md:w-48 md:h-48 opacity-10"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.08, 0.96, 1] }}
      transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
    >
      <circle cx="100" cy="100" r="90" fill="url(#circle1-gradient)" />
      <defs>
        <radialGradient id="circle1-gradient" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
          <stop stopColor="#3496ff" stopOpacity="0.12" />
          <stop offset="1" stopColor="#FFD700" stopOpacity="0.06" />
        </radialGradient>
      </defs>
    </motion.svg>
  ),
];

const BackgroundDecor = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 w-full h-full overflow-hidden">
    {/* Animated Blobs */}
    {blobs.map((blob, i) => (
      <motion.div
        key={i}
        className={`absolute ${blob.style} rounded-full blur-2xl opacity-80 bg-gradient-to-br ${blob.gradient}`}
        initial={{ scale: 1, opacity: 0.7 }}
        animate={{ scale: [1, 1.08, 0.96, 1], opacity: [0.7, 1, 0.8, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, delay: blob.delay, ease: 'easeInOut' }}
      />
    ))}
    {/* SVG Decorative Elements */}
    {svgDecor}
  </div>
);

export default BackgroundDecor; 