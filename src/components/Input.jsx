import React from 'react';

const Input = ({ placeholder, value, onChange }) => {
  return (
    <input 
      className="border border-gray-300 rounded px-4 py-2 w-full" 
      type="text" 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
    />
  );
};

export default Input;
