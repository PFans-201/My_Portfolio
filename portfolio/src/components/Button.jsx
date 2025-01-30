import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled, 
  type = 'button', 
  icon, 
  className 
}) => {
  const variants = {
    primary: {
      background: '#007bff',
      color: 'white',
      hover: '#0056b3'
    },
    secondary: {
      background: '#6c757d',
      color: 'white',
      hover: '#5a6268'
    },
    outline: {
      background: 'transparent',
      color: '#007bff',
      border: '2px solid #007bff',
      hover: 'rgba(0,123,255,0.1)'
    }
  };

  const sizes = {
    small: '0.5rem 1rem',
    medium: '0.75rem 1.5rem',
    large: '1rem 2rem'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className || ''}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: sizes[size],
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.7 : 1,
        transition: 'background-color 0.2s, opacity 0.2s',
        ...variants[variant],
        ...(disabled ? { 
          background: '#e9ecef', 
          color: '#6c757d',
          hover: '#e9ecef' 
        } : {})
      }}
      onMouseOver={(e) => {
        if (!disabled) {
          e.target.style.backgroundColor = variants[variant]?.hover;
        }
      }}
      onMouseOut={(e) => {
        if (!disabled) {
          e.target.style.backgroundColor = variants[variant]?.background;
        }
      }}
    >
      {icon && <span style={{ display: 'inherit' }}>{icon}</span>}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  icon: PropTypes.element,
  className: PropTypes.string,
};

export default React.memo(Button);