import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import properlyLogo from '../assets/images/Body 3.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed left-0 right-0 z-50 transition-all duration-300 font-mixed ${
        isScrolled ? 'top-0 bg-white bg-opacity-40 backdrop-blur-sm shadow-md py-2' : 'top-[-100px]'
      }`}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <img src={properlyLogo} alt="Properly Logo" className="h-20 md:h-36 transition-all duration-300" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/services" className="text-gray-800 hover:text-primary font-medium transition-colors duration-300">
            Services
          </Link>
          <Link to="/pricing" className="text-gray-800 hover:text-primary font-medium transition-colors duration-300">
            Pricing
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-primary font-medium transition-colors duration-300">
            About
          </Link>
          <Link to="/contact" className="btn btn-primary transition-all duration-300">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 p-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-40 backdrop-blur-sm shadow-lg transition-all duration-300 rounded-b-lg">
          <div className="container py-4 px-4 flex flex-col space-y-2">
            <Link 
              to="/services" 
              className="text-gray-800 hover:text-primary font-medium py-3 px-4 rounded-md hover:bg-gray-100 transition-all duration-300 text-center sm:text-left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/pricing" 
              className="text-gray-800 hover:text-primary font-medium py-3 px-4 rounded-md hover:bg-gray-100 transition-all duration-300 text-center sm:text-left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className="text-gray-800 hover:text-primary font-medium py-3 px-4 rounded-md hover:bg-gray-100 transition-all duration-300 text-center sm:text-left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="btn btn-primary w-full text-center mt-6 py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
