import React from 'react';
import { ShieldCheck, Zap, Headphones } from 'lucide-react';
import { VISA_BENEFITS } from '../data/visasData';

export function VisaBenefits() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'shield-check':
        return <ShieldCheck size={22} className="visa-benefit-icon" />;
      case 'zap':
        return <Zap size={22} className="visa-benefit-icon zap-icon" />;
      case 'headphones':
        return <Headphones size={22} className="visa-benefit-icon" />;
      default:
        return <ShieldCheck size={22} className="visa-benefit-icon" />;
    }
  };

  return (
    <div className="visa-benefits-grid">
      {VISA_BENEFITS.map((benefit) => (
        <div
          key={benefit.id}
          className={`visa-benefit-card benefit-${benefit.id}`}
          style={{
            backgroundColor: benefit.bgColor,
            borderColor: benefit.borderColor
          }}
        >
          <div className="visa-benefit-icon-wrapper" style={{ color: benefit.iconColor }}>
            {getIcon(benefit.icon)}
          </div>
          <div className="visa-benefit-text">
            <h4 className="visa-benefit-title">{benefit.title}</h4>
            <p className="visa-benefit-desc">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
