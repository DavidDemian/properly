import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import WhatWeDoSection from '../components/home/WhatWeDoSection';
import ServicesSection from '../components/home/ServicesSection';
import PricingSection from '../components/home/PricingSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          el.classList.add('ring-4', 'ring-primary', 'ring-offset-2');
          setTimeout(() => el.classList.remove('ring-4', 'ring-primary', 'ring-offset-2'), 1200);
        }, 200);
      }
    }
  }, [location]);

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
