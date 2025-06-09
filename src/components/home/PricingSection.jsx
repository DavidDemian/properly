import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionTitle, SectionSubtitle } from '../Section';
import Button from '../Button';
import Card from '../Card';

const PricingSection = () => {
  const packages = [
    {
      id: 1,
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Essential tools to get your real estate marketing started',
      features: [
        { name: 'IDX website', included: true },
        { name: 'Smart business card', included: true },
        { name: 'Virtual tour', included: false },
        { name: 'Virtual staging', included: false },
      ],
      turnaround: '7 business days',
      deliverables: 'Website link, 5 NFC cards',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'bg-blue-500',
      buttonText: 'Choose Starter'
    },
    {
      id: 2,
      name: 'Growth',
      price: '$199',
      period: '/month',
      description: 'Complete marketing toolkit for growing your business',
      features: [
        { name: 'IDX website', included: true },
        { name: 'Smart business card', included: true },
        { name: 'Virtual staging', included: true },
        { name: 'Virtual tour', included: false },
      ],
      turnaround: '5 business days',
      deliverables: 'Website link, 10 NFC cards, 1 virtual staging per month',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'bg-primary',
      popular: true,
      buttonText: 'Choose Growth'
    },
    {
      id: 3,
      name: 'Complete',
      price: '$299',
      period: '/month',
      description: 'All-inclusive package for top-performing agents',
      features: [
        { name: 'IDX website', included: true },
        { name: 'Smart business card', included: true },
        { name: 'Virtual tour', included: true },
        { name: 'Virtual staging', included: true },
      ],
      turnaround: '3 business days',
      deliverables: 'Website link, 20 NFC cards, 2 virtual tours & 3 virtual stagings per month',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: 'bg-blue-600',
      buttonText: 'Choose Complete'
    }
  ];

  return (
    <Section id="pricing" bgColor="bg-transparent">
      <SectionTitle>Simple, Transparent Pricing</SectionTitle>
      <SectionSubtitle>
        No demos. No surprises. Just simple, transparent pricing for everything you need.
      </SectionSubtitle>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: pkg.id * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {pkg.popular && (
              <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                <div className="inline-block bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              </div>
            )}
            
            <Card className={`h-full ${pkg.popular ? 'ring-2 ring-primary shadow-xl' : 'shadow-lg'}`}>
              <div className={`w-16 h-16 rounded-full ${pkg.color} text-white flex items-center justify-center mb-6`}>
                {pkg.icon}
              </div>
              
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-2xl font-bold">{pkg.name}</h3>
                <div>
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className="text-gray-500">{pkg.period}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{pkg.description}</p>
              
              <div className="space-y-3 mb-6">
                <p className="font-medium">What's included:</p>
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    {feature.included ? (
                      <span className="text-primary mr-2 flex-shrink-0">✅</span>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    <span className={feature.included ? 'text-gray-800' : 'text-gray-400'}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 mb-6 pt-4 border-t border-gray-100">
                <div className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0">⏱</span>
                  <div>
                    <p className="font-medium text-sm">Turnaround time</p>
                    <p className="text-gray-600 text-sm">{pkg.turnaround}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0">📁</span>
                  <div>
                    <p className="font-medium text-sm">What's delivered</p>
                    <p className="text-gray-600 text-sm">{pkg.deliverables}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto pt-4">
                <Button 
                  to="/contact" 
                  className="w-full" 
                  variant={pkg.popular ? 'primary' : 'outline'}
                >
                  {pkg.buttonText}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-lg font-medium mb-4">✅ Transparent Pricing • No Demos • Full Deliverables Included</p>
        <p className="text-md text-gray-600 mb-6">We don't hide our pricing or require demos. What you see is what you get — and what you get is everything you need.</p>
      </div>

      {/* What's Coming Next Section */}
      <div className="mt-20">
        <div className="bg-gray-100 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-6">What's Coming Next</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Social Media Reels Generator</h4>
              <p className="text-gray-600 text-sm">Automatically create engaging reels for your listings and personal brand.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Google Ads Setup</h4>
              <p className="text-gray-600 text-sm">Targeted ad campaigns to drive qualified leads to your listings and website.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Content Management Tools</h4>
              <p className="text-gray-600 text-sm">Easily update your website, create landing pages, and manage your digital presence.</p>
            </div>
          </div>
          
          <p className="text-center mt-8 text-gray-700">
            We're not stopping here. Soon, Properly will offer social media tools that help you automate marketing — from reels to ads to analytics. Stay tuned.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-3">Is there a setup fee?</h4>
            <p className="text-gray-600">No, there are no hidden fees. The monthly subscription covers everything you need to get started.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-3">How long does it take to set up?</h4>
            <p className="text-gray-600">Turnaround times vary by package, from 3-7 business days after receiving your information.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-3">Can I cancel anytime?</h4>
            <p className="text-gray-600">Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-3">Do you offer custom designs?</h4>
            <p className="text-gray-600">Absolutely! All our websites are custom designed to match your personal brand and preferences.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PricingSection;
