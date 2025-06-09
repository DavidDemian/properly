import React from 'react';
import properlyLogo from '../assets/images/Body 3.png';

const ComingSoon = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
    <img src={properlyLogo} alt="Properly Logo" className="h-32 mb-8" />
    <h1 className="text-4xl font-bold mb-4 text-primary">Coming Soon</h1>
    <p className="text-lg text-gray-600">We're working hard to launch our new site. Stay tuned!</p>
  </div>
);

export default ComingSoon; 