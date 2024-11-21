import React from 'react';
const Pill = ({ 
    label, 
    variant = 'default', 
    size = 'medium', 
    shape = 'round', 
    iconLeft, 
    iconRight, 
    outline = false, 
    onClick 
  }) => {
    return (
        <button 
          className={`pill ${variant} ${size} ${shape} ${outline ? 'outline' : ''}`} 
          onClick={onClick}
        >
          {iconLeft && <span className="icon-left">{iconLeft}</span>}
          <span className="pill-label">{label}</span>
          {iconRight && <span className="icon-right">{iconRight}</span>}
        </button>
      );
  }
  export default Pill;