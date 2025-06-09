import React from 'react';

const Section = ({ 
  children, 
  id, 
  className = '', 
  bgColor = 'bg-white',
  paddingY = 'py-16 md:py-24',
}) => {
  return (
    <section id={id} className={`${bgColor} ${paddingY} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export const SectionTitle = ({ children, className = '', centered = true }) => {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {children}
    </h2>
  );
};

export const SectionSubtitle = ({ children, className = '', centered = true }) => {
  return (
    <p className={`text-xl text-gray-600 mb-12 max-w-3xl ${centered ? 'text-center mx-auto' : ''} ${className}`}>
      {children}
    </p>
  );
};

export default Section;
