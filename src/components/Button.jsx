import React from 'react';
import '../index.css'; // Correct relative path to index.css

const Button = ({ label, variant = 'primary', ...props }) => {
  return (
    <button className={`button ${variant}`} {...props}>
      {label}
    </button>
  );
};

export default Button;