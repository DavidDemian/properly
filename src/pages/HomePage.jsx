import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import PricingSection from '../components/home/PricingSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <WhyChooseUsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
