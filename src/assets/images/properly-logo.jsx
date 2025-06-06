import React from 'react';

const ProperlyLogo = ({ className = '', width = 200, height = 80, invert = false }) => {
  const textColor = invert ? 'text-white' : 'text-primary';
  const taglineColor = invert ? 'text-white/80' : 'text-gray-800';
  
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Main logo text */}
          <span className={`text-4xl font-bold ${textColor}`} style={{ fontFamily: "'Inter', sans-serif" }}>
            Properly<span className={textColor}>.</span>
          </span>
          
          {/* Tagline */}
          <div className="absolute -bottom-5 left-0 right-0">
            <span className={`text-xs font-bold tracking-wider ${taglineColor}`}>
              LIST MORE. PROPERLY.
            </span>
          </div>
        </div>
      </div>
      
      {/* Background elements (simplified version of the logo's background elements) */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-current"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-current rotate-45"></div>
      </div>
    </div>
  );
};

export default ProperlyLogo;
