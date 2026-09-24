'use client';

import React from 'react';

export const AIRLINES_LIST = [
  { id: 'airline-01', name: 'flydubai', src: '/assets/Airlines/Airlines SVG WEBSITE-01.svg' },
  { id: 'airline-02', name: 'Air Arabia', src: '/assets/Airlines/Airlines SVG WEBSITE-02.svg' },
  { id: 'airline-03', name: 'Thai Airways', src: '/assets/Airlines/Airlines SVG WEBSITE-03.svg' },
  { id: 'airline-04', name: 'Malaysia Airlines', src: '/assets/Airlines/Airlines SVG WEBSITE-04.svg' },
  { id: 'airline-05', name: 'Emirates', src: '/assets/Airlines/Airlines SVG WEBSITE-05.svg' },
  { id: 'airline-06', name: 'Qatar Airways', src: '/assets/Airlines/Airlines SVG WEBSITE-06.svg' },
  { id: 'airline-07', name: 'Kuwait Airways', src: '/assets/Airlines/Airlines SVG WEBSITE-07.svg' },
  { id: 'airline-08', name: 'Saudia Airlines', src: '/assets/Airlines/Airlines SVG WEBSITE-08.svg' },
  { id: 'airline-09', name: 'Gulf Air', src: '/assets/Airlines/Airlines SVG WEBSITE-09.svg' },
  { id: 'airline-10', name: 'Etihad Airways', src: '/assets/Airlines/Airlines SVG WEBSITE-10.svg' },
  { id: 'airline-11', name: 'Flyadeal', src: '/assets/Airlines/Airlines SVG WEBSITE-11.svg' },
  { id: 'airline-12', name: 'Pakistan International Airlines (PIA)', src: '/assets/Airlines/Airlines SVG WEBSITE-12.svg' },
  { id: 'airline-13', name: 'Turkish Airlines', src: '/assets/Airlines/Airlines SVG WEBSITE-13.svg' },
  { id: 'airline-14', name: 'Jazeera Airways', src: '/assets/Airlines/Airlines SVG WEBSITE-14.svg' },
  { id: 'airline-15', name: 'Fly Jinnah', src: '/assets/Airlines/Airlines SVG WEBSITE-15.svg' },
  { id: 'airline-16', name: 'AirSial', src: '/assets/Airlines/Airlines SVG WEBSITE-16.svg' },
  { id: 'airline-17', name: 'Oman Air', src: '/assets/Airlines/Airlines SVG WEBSITE-17.svg' },
  { id: 'airline-18', name: 'SereneAir', src: '/assets/Airlines/Airlines SVG WEBSITE-18.svg' },
];

export function AirlineMarquee({ trustText = '18+ Airlines. One Search. Trusted Travel Agency in Islamabad.' }) {
  // Duplicate the list for seamless continuous infinite marquee scrolling
  const duplicatedList = [...AIRLINES_LIST, ...AIRLINES_LIST];

  return (
    <div className="hero-trust-bar">
      <h3 className="hero-trust-text" style={{ fontWeight: 800 }}>
        <strong>{trustText}</strong>
      </h3>
      <div className="airline-marquee-container" aria-label="Partner Airlines">
        <div className="airline-marquee-track">
          {duplicatedList.map((airline, index) => (
            <div
              key={`${airline.id}-${index}`}
              className={`airline-badge-card logo-${airline.id}`}
              title={airline.name}
            >
              <img
                src={airline.src}
                alt={airline.name}
                className="airline-logo-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
