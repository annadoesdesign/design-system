import React from 'react';

const Card = ({ title, subtitle, icon, children, footer, trend, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-header">
        {icon && <span className="card-icon">{icon}</span>}
        <div className="card-title">
          <h3>{title}</h3>
          {trend && <span className="card-trend">{trend}</span>}
        </div>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;