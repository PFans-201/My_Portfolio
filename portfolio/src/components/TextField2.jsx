import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TextField = forwardRef(({ 
  label, 
  id,
  isRequired = false, 
  error, 
  helperText, 
  multiline,
  rows = 4,
  ...props 
}, ref) => {
  const inputStyles = {
    backgroundColor: 'var(--card-bg)',
    borderColor: error ? 'var(--error-color)' : 'var(--textfield-border)',
    color: 'var(--text-color)'
  };

  const labelStyles = {
    color: error ? 'var(--error-color)' : 'var(--textfield-label)'
  };

  const InputComponent = multiline ? 'textarea' : 'input';

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} style={labelStyles} className="block mb-2 text-sm font-medium">
          {label}{isRequired && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <InputComponent
        ref={ref}
        id={id}
        style={inputStyles}
        className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        required={isRequired}
        aria-required={isRequired}
        aria-invalid={!!error}
        rows={multiline ? rows : undefined}
        {...props}
      />
      {helperText && (
        <p className={`mt-2 text-sm ${error ? 'text-red-500' : 'text-gray-500'}`}>
          {helperText}
        </p>
      )}
    </div>
  );
});

TextField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number
};

export default TextField;
