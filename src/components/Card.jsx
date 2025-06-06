import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ 
  title, 
  description, 
  icon, 
  image,
  to,
  href,
  className = '',
  hoverEffect = true,
  children,
  ...props 
}) => {
  const cardClasses = `bg-white rounded-lg overflow-hidden shadow-md ${
    hoverEffect ? 'transition-transform hover:-translate-y-1 hover:shadow-lg' : ''
  } ${className}`;
  
  // Check if children contain Link or Button with to prop
  const hasLinkInChildren = React.Children.toArray(children).some(child => 
    React.isValidElement(child) && 
    (child.type === Link || 
     (child.props && child.props.to) ||
     (child.type && child.type.name === 'Button' && child.props.to))
  );
  
  const content = (
    <>
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {icon && (
          <div className="mb-4 text-primary">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        {children}
      </div>
    </>
  );
  
  // If we have link children, don't wrap the card in a link
  if (hasLinkInChildren) {
    return (
      <div className={cardClasses} {...props}>
        {content}
      </div>
    );
  }
  
  if (to) {
    return (
      <Link to={to} className={cardClasses} {...props}>
        {content}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={cardClasses} {...props}>
        {content}
      </a>
    );
  }
  
  return (
    <div className={cardClasses} {...props}>
      {content}
    </div>
  );
};

export const FeatureCard = ({ 
  title, 
  description, 
  icon,
  className = '',
  ...props 
}) => {
  return (
    <div className={`flex flex-col items-center text-center p-6 ${className}`} {...props}>
      {icon && (
        <div className="mb-4 text-primary text-4xl">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
