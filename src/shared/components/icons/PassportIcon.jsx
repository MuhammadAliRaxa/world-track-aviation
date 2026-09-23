import React from 'react';

export function PassportIcon({ size = 16, className = '', strokeWidth = 2, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Passport booklet */}
      <rect x="4" y="2" width="16" height="20" rx="2" />
      {/* Passport photo/emblem */}
      <circle cx="12" cy="8.5" r="2.5" />
      <path d="M8 15a4 4 0 0 1 8 0" />
      {/* Document info line */}
      <line x1="8" y1="18" x2="16" y2="18" />
    </svg>
  );
}

export default PassportIcon;
