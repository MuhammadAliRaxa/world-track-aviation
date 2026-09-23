'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export function HotelsMapButton({ className = '', style = {} }) {
  const router = useRouter();

  return (
    <button
      type="button"
      className={`hotels-map-pill-btn ${className}`}
      style={style}
      onClick={() => router.push('/hotels/map')}
      title="View Hotels Map"
    >
      <span className="hm-btn-icon-wrapper">
        <svg
          width="16"
          height="14"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hm-map-icon-svg"
        >
          {/* 3-panel folded map */}
          <path d="M2 5.5L8 3.2V16.8L2 19V5.5Z" fill="white" />
          <path d="M8 3.2L16 5.8V19.4L8 16.8V3.2Z" fill="white" fillOpacity="0.9" />
          <path d="M16 5.8L22 3.5V17L16 19.4V5.8Z" fill="white" />
          {/* Location pin in center top */}
          <path
            d="M12 0.8C10.1 0.8 8.5 2.4 8.5 4.3C8.5 6.9 12 11.2 12 11.2C12 11.2 15.5 6.9 15.5 4.3C15.5 2.4 13.9 0.8 12 0.8Z"
            fill="white"
          />
          <circle cx="12" cy="4.3" r="1.6" fill="#0080f6" />
        </svg>
      </span>
      <span className="hm-btn-label">Hotels Map</span>
    </button>
  );
}
