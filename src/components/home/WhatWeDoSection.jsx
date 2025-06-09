import React from 'react';
import Section, { SectionTitle, SectionSubtitle } from '../Section';

const WhatWeDoSection = () => (
  <Section id="what-we-do" bgColor="bg-white">
    <SectionTitle>What Do We Do?</SectionTitle>
    <SectionSubtitle>
      We help real estate professionals stand out in a crowded market of free demos and hidden fees. Our mission is to empower realtors with digital marketing tools that streamline daily work and elevate their brand.
    </SectionSubtitle>
    <div className="mt-8 max-w-3xl mx-auto text-center text-lg text-gray-700">
      <p className="mb-6">
        Properly is not just another website provider. We build fully branded, blazing-fast React IDX websites—never WordPress templates—so your realty stands out and your clients get the best experience possible. Our platform is designed for transparency, speed, and customization, giving you the tools you need to grow your business without the headaches of outdated, cookie-cutter solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-2 text-primary">No Demos, No Hidden Fees</h3>
          <p>What you see is what you get. Transparent pricing and full deliverables—always.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-2 text-primary">Digital Tools for Realtors</h3>
          <p>IDX websites, NFC business cards, and more—all designed to make your daily work easier and your brand more visible.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-2 text-primary">React, Not WordPress</h3>
          <p>We build with modern technology for speed, security, and full customization—no slow, bloated templates.</p>
        </div>
      </div>
    </div>
  </Section>
);

export default WhatWeDoSection; 