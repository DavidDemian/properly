import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';
import Button from '../Button';

const CtaSection = () => {
  return (
    <Section 
      id="cta" 
      bgColor="bg-primary" 
      paddingY="py-20 md:py-28"
      className="relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          Marketing Tools. Done Properly.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-white/80 mb-10"
        >
          We don't hide our pricing or require demos. What you see is what you get — and what you get is everything you need.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            to="/pricing" 
            variant="secondary" 
            size="lg"
            className="font-semibold"
          >
            Explore Packages
          </Button>
          
          <Button 
            to="/contact" 
            variant="outline" 
            size="lg"
            className="text-white border-white hover:bg-white/20 font-semibold"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default CtaSection;
