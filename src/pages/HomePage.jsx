import React from 'react';
import HeroSection from '../components/home/HeroSection';
import WhatWeDoSection from '../components/home/WhatWeDoSection';
import ServicesSection from '../components/home/ServicesSection';
import PricingSection from '../components/home/PricingSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <ServicesSection />
      <PricingSection />
      <WhyChooseUsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
