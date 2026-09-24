import React from 'react';
import worldTrackLogo from '../../assets/world_track_logo.png';

export function Logo({ className = '', variant = 'white' }) {
  return (
    <div className={`brand-logo-pill ${variant === 'white' ? 'white-logo-pill' : ''} ${className}`}>
      <img
        src={worldTrackLogo?.src || worldTrackLogo}
        alt="World Track Aviation & Tourism"
        className={`brand-logo-img ${variant === 'white' ? 'white-logo-img' : ''}`}
        width={155}
        height={48}
        decoding="async"
      />
    </div>
  );
}
