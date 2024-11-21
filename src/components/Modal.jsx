import React from 'react';

const Modal = ({ title, description, children, footerButtons }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
        </div>
        {description && <p className="modal-description">{description}</p>}
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          {footerButtons.map((button, index) => (
            <button 
              key={index} 
              className={button.className} 
              onClick={button.onClick}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
