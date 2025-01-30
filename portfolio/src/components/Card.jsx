import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, hoverEffect, shadow, className, border, ...props }) => {
  return (
    <div 
      className={`card overflow-hidden ${className || ''}`}
      style={{
        background: 'var(--card-bg)',
        borderRadius: '8px',
        border: border ? '1px solid var(--card-border)' : 'none',
        transition: hoverEffect ? 'transform 0.2s, box-shadow 0.2s' : 'none',
        boxShadow: shadow ? 'var(--card-shadow)' : 'none',
        color: 'var(--text-color)'
      }}
      {...props}
    >
      {children}
    </div>
  );
};

const CardImage = ({ src, alt, className }) => (
  <div className={`card-image ${className}`} style={{ marginBottom: '1rem' }}>
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-48 object-cover rounded-t-lg"
    />
  </div>
);

const CardBody = ({ children, className }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className }) => (
  <h3 className={`text-xl font-semibold mb-2 ${className}`}>{children}</h3>
);

const CardSubtitle = ({ children, className }) => (
  <h4 className={`text-sm text-gray-500 dark:text-gray-400 mb-2 ${className}`}>{children}</h4>
);

const CardText = ({ children, className }) => (
  <p className={`text-base mb-4 justify-evenly ${className}`}>{children}</p>
);

Card.Image = CardImage;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Text = CardText;

Card.propTypes = {
  hoverEffect: PropTypes.bool,
  shadow: PropTypes.bool,
  className: PropTypes.string,
  border: PropTypes.bool,
  children: PropTypes.node,
};

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CardTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CardSubtitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CardText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
