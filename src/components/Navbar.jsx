import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProperlyLogo from '../assets/images/ProperlyLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed left-0 right-0 z-50 transition-all duration-300 font-mixed ${
        isScrolled ? 'top-0 bg-white bg-opacity-40 backdrop-blur-sm shadow-md py-2' : 'top-[-100px]'
      }`}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => {
            navigate('/');
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
          }}
          className="flex items-center bg-transparent border-none outline-none cursor-pointer"
          aria-label="Scroll to top"
        >
          <ProperlyLogo className="h-20 md:h-36 transition-all duration-300" />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => goToSection('what-we-do')} className="text-gray-800 hover:text-primary font-medium transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer">About</button>
          <button onClick={() => goToSection('services')} className="text-gray-800 hover:text-primary font-medium transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer">Services</button>
          <button onClick={() => goToSection('pricing')} className="text-gray-800 hover:text-primary font-medium transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer">Pricing</button>
          <Link to="/get-started" className="px-8 py-3 rounded-xl bg-primary text-white font-bold text-lg shadow-lg hover:bg-primary/90 transition-all duration-200 border-2 border-primary focus:ring-4 focus:ring-primary/30 focus:outline-none ml-2">Get Started</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-40 backdrop-blur-sm shadow-lg transition-all duration-300 rounded-b-lg">
          <div className="container py-4 px-4 flex flex-col space-y-2">
            <button
              onClick={() => { goToSection('what-we-do'); setIsMobileMenuOpen(false); }}
              className="text-gray-800 hover:text-primary font-medium py-3 px-4 rounded-md hover:bg-gray-100 transition-all duration-300 text-center sm:text-left bg-transparent border-none outline-none cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => { goToSection('services'); setIsMobileMenuOpen(false); }}
              className="text-gray-800 hover:text-primary font-medium py-3 px-4 rounded-md hover:bg-gray-100 transition-all duration-300 text-center sm:text-left bg-transparent border-none outline-none cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => { goToSection('pricing'); setIsMobileMenuOpen(false); }}
              className="text-gray-800 hover:text-primary font-medium py-3 px-4 rounded-md hover:bg-gray-100 transition-all duration-300 text-center sm:text-left bg-transparent border-none outline-none cursor-pointer"
            >
              Pricing
            </button>
            <Link 
              to="/get-started" 
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
