import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors rounded-md';
  
  const variantClasses = {
    primary: 'text-white bg-primary hover:bg-primary/90',
    secondary: 'text-gray-900 bg-secondary hover:bg-secondary/90',
    outline: 'text-primary border border-primary hover:bg-primary/10',
    ghost: 'text-primary hover:bg-primary/10',
    dark: 'text-white bg-gray-900 hover:bg-gray-800',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={allClasses} {...props}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={allClasses} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.04, opacity: 0.95 }}
      whileTap={{ scale: 0.96, opacity: 0.85 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={allClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
