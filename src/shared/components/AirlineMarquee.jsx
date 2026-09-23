'use client';

import React from 'react';

export const AIRLINES_LIST = [
  {
    id: 'serene',
    name: 'SereneAir',
    render: () => (
      <>
        <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M4 22C12 22 18 16 26 8C20 12 14 14 4 14" stroke="#00a3e0" strokeWidth="3" strokeLinecap="round"/>
          <path d="M8 26C15 26 21 21 28 14C23 17 17 19 8 19" stroke="#0f3b60" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: '15px', letterSpacing: '-0.2px' }}>
          <strong style={{ color: '#0f3b60', fontWeight: 800 }}>Serene</strong>
          <span style={{ color: '#00a3e0', fontWeight: 600 }}>Air</span>
        </span>
      </>
    )
  },
  {
    id: 'airsial',
    name: 'AirSial',
    render: () => (
      <>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#044331" aria-hidden="true">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
        <span style={{ color: '#044331', fontWeight: 900, letterSpacing: '0.8px', fontSize: '14.5px' }}>
          AIRSIAL
        </span>
      </>
    )
  },
  {
    id: 'flyjinnah',
    name: 'FlyJinnah',
    render: () => (
      <>
        <span style={{ color: '#e50914', fontSize: '15px', fontWeight: 500, letterSpacing: '-0.2px' }}>
          Fly<strong style={{ fontWeight: 900 }}>Jinnah</strong>
        </span>
        <span style={{
          background: '#e50914',
          color: '#ffffff',
          fontSize: '9.5px',
          fontWeight: 800,
          borderRadius: '50%',
          width: '18px',
          height: '18px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 1
        }}>FJ</span>
      </>
    )
  },
  {
    id: 'thai',
    name: 'Thai Airways',
    render: () => (
      <>
        <svg width="26" height="22" viewBox="0 0 36 28" fill="none" aria-hidden="true">
          <path d="M4 14C12 4 24 4 32 14C24 24 12 24 4 14Z" fill="url(#thaiGradM)" />
          <path d="M12 14C18 7 26 7 32 14C26 21 18 21 12 14Z" fill="#eaaa00" />
          <defs>
            <linearGradient id="thaiGradM" x1="4" y1="4" x2="32" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#49156e" />
              <stop offset="1" stopColor="#ce0058" />
            </linearGradient>
          </defs>
        </svg>
        <span style={{ color: '#49156e', fontWeight: 900, letterSpacing: '1px', fontSize: '14.5px' }}>
          THAI
        </span>
      </>
    )
  },
  {
    id: 'malaysia',
    name: 'Malaysia Airlines',
    render: () => (
      <>
        <svg width="24" height="22" viewBox="0 0 32 26" fill="none" aria-hidden="true">
          <path d="M2 18C10 18 20 12 30 4C22 10 14 12 2 12Z" fill="#d61a21" />
          <path d="M6 22C14 22 22 17 30 9C23 15 16 17 6 17Z" fill="#002b49" />
        </svg>
        <span style={{ color: '#002b49', fontWeight: 800, fontSize: '13.5px', letterSpacing: '-0.2px' }}>
          malaysia<span style={{ color: '#d61a21', fontWeight: 600, marginLeft: '3px' }}>airlines</span>
        </span>
      </>
    )
  },
  {
    id: 'emirates',
    name: 'Emirates',
    render: () => (
      <div style={{
        background: '#d71921',
        borderRadius: '5px',
        padding: '3px 9px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <span style={{
          color: '#ffffff',
          fontFamily: 'serif',
          fontWeight: 900,
          fontSize: '14px',
          letterSpacing: '0.5px'
        }}>Emirates</span>
      </div>
    )
  },
  {
    id: 'qatar',
    name: 'Qatar Airways',
    render: () => (
      <>
        <svg width="22" height="22" viewBox="0 0 32 32" fill="#5c0632" aria-hidden="true">
          <path d="M16 2C15 6 12 12 8 15L10 17C13 14 15 10 16 7C17 10 19 14 22 17L24 15C20 12 17 6 16 2Z" />
          <path d="M12 17C10 20 11 25 16 28C21 25 22 20 20 17C18 19 14 19 12 17Z" />
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <span style={{ color: '#5c0632', fontWeight: 900, letterSpacing: '0.8px', fontSize: '13px' }}>QATAR</span>
          <span style={{ color: '#5c0632', fontWeight: 700, letterSpacing: '1.2px', fontSize: '7.5px' }}>AIRWAYS</span>
        </div>
      </>
    )
  },
  {
    id: 'airblue',
    name: 'Airblue',
    render: () => (
      <>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 18L10 6L14 6L8 18Z" fill="#0f3d79" />
          <path d="M11 18L17 6L21 6L15 18Z" fill="#00a4e4" />
        </svg>
        <span style={{ color: '#0f3d79', fontWeight: 800, fontSize: '16px', letterSpacing: '-0.4px' }}>
          airblue
        </span>
      </>
    )
  },
  {
    id: 'pia',
    name: 'PIA',
    render: () => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ color: '#bfa054', fontSize: '19px', fontWeight: 900, fontStyle: 'italic', lineHeight: 1 }}>
          PIA
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <span style={{ color: '#005a36', fontSize: '8.5px', fontWeight: 900, letterSpacing: '0.5px' }}>PAKISTAN</span>
          <span style={{ color: '#005a36', fontSize: '6.5px', fontWeight: 600 }}>International Airlines</span>
        </div>
      </div>
    )
  },
  {
    id: 'oman',
    name: 'Oman Air',
    render: () => (
      <>
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M6 22C12 24 20 22 26 14C22 17 16 17 10 14" stroke="#c59b27" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M10 10C16 6 24 8 28 16C24 13 18 13 12 16" stroke="#007799" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <span style={{ color: '#1a2b3c', fontWeight: 800, letterSpacing: '0.8px', fontSize: '13.5px' }}>
          OMAN <span style={{ color: '#c59b27' }}>AIR</span>
        </span>
      </>
    )
  },
  {
    id: 'uzbekistan',
    name: 'Uzbekistan Airways',
    render: () => (
      <>
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="14" stroke="#0072bc" strokeWidth="2" />
          <path d="M8 18C12 13 20 13 24 18C20 16 12 16 8 18Z" fill="#00965e" />
          <circle cx="16" cy="11.5" r="2.2" fill="#0072bc" />
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <span style={{ color: '#0072bc', fontWeight: 800, fontSize: '11px', letterSpacing: '0.4px' }}>UZBEKISTAN</span>
          <span style={{ color: '#00965e', fontWeight: 700, fontSize: '7.5px', letterSpacing: '0.8px' }}>AIRWAYS</span>
        </div>
      </>
    )
  },
  {
    id: 'saudia',
    name: 'Saudi Arabian Airlines',
    render: () => (
      <>
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M16 4V18M16 8C13 5 9 6 7 8C10 9 14 10 16 12C18 10 22 9 25 8C23 6 19 5 16 8Z" stroke="#006341" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 24L23 20M23 24L9 20" stroke="#c99700" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <span style={{ color: '#006341', fontWeight: 900, fontSize: '13.5px', letterSpacing: '0.8px' }}>SAUDIA</span>
          <span style={{ color: '#64748b', fontWeight: 600, fontSize: '7px' }}>Saudi Arabian Airlines</span>
        </div>
      </>
    )
  },
  {
    id: 'malindo',
    name: 'Malindo Air',
    render: () => (
      <>
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M4 20C12 22 22 18 28 8C22 13 14 15 4 15" fill="#c0142b" />
          <circle cx="25" cy="9" r="2.5" fill="#f37021" />
        </svg>
        <span style={{ color: '#c0142b', fontWeight: 800, fontSize: '13.5px', letterSpacing: '-0.2px' }}>
          malindo<span style={{ color: '#f37021', fontWeight: 700, marginLeft: '3px' }}>air</span>
        </span>
      </>
    )
  },
  {
    id: 'airarabia',
    name: 'Air Arabia',
    render: () => (
      <>
        <svg width="22" height="20" viewBox="0 0 32 24" fill="#e21836" aria-hidden="true">
          <path d="M4 14C12 8 20 8 28 4C22 12 14 16 4 14Z" />
          <circle cx="28" cy="5" r="2.5" fill="#e21836" />
        </svg>
        <span style={{ color: '#e21836', fontWeight: 800, fontSize: '14px', letterSpacing: '-0.3px' }}>
          air<strong style={{ fontWeight: 900 }}>arabia</strong>
        </span>
      </>
    )
  },
  {
    id: 'flydubai',
    name: 'Fly Dubai',
    render: () => (
      <>
        <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <path d="M4 20C10 20 18 14 24 6" stroke="#009fe3" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M8 24C14 24 20 19 26 12" stroke="#f58220" strokeWidth="2.3" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: '14.5px', letterSpacing: '-0.2px' }}>
          <strong style={{ color: '#009fe3', fontWeight: 900 }}>fly</strong>
          <span style={{ color: '#f58220', fontWeight: 800 }}>dubai</span>
        </span>
      </>
    )
  },
  {
    id: 'turkish',
    name: 'Turkish Airlines',
    render: () => (
      <>
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="14" fill="#c70a0a" />
          <path d="M8 17C14 13 18 11 25 11C21 14 17 18 13 21C11 21 9 19 8 17Z" fill="#ffffff" />
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <span style={{ color: '#1d252c', fontWeight: 900, fontSize: '11.5px', letterSpacing: '0.4px' }}>TURKISH</span>
          <span style={{ color: '#c70a0a', fontWeight: 800, fontSize: '8.5px', letterSpacing: '0.8px' }}>AIRLINES</span>
        </div>
      </>
    )
  },
  {
    id: 'jazeera',
    name: 'Jazeera',
    render: () => (
      <>
        <svg width="20" height="20" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <path d="M6 18C12 18 18 12 22 6C18 10 12 12 6 12" fill="#009cd9" />
          <circle cx="23" cy="6" r="2.5" fill="#009cd9" />
        </svg>
        <span style={{ color: '#009cd9', fontWeight: 800, fontSize: '15px', letterSpacing: '-0.2px' }}>
          jazeera<span style={{ color: '#0c2340', fontWeight: 900 }}>.</span>
        </span>
      </>
    )
  },
  {
    id: 'gulfair',
    name: 'Gulf Air',
    render: () => (
      <>
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M6 18C12 12 20 8 28 6C24 14 18 20 12 24C10 22 8 20 6 18Z" fill="#b38e44" />
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <span style={{ color: '#1e293b', fontWeight: 900, fontSize: '12px', letterSpacing: '0.6px' }}>GULF AIR</span>
          <span style={{ color: '#b38e44', fontWeight: 700, fontSize: '7px', letterSpacing: '1px' }}>BAHRAIN</span>
        </div>
      </>
    )
  },
  {
    id: 'etihad',
    name: 'Ethad Airways',
    render: () => (
      <>
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <polygon points="16,4 26,16 16,28 6,16" stroke="#bd995c" strokeWidth="2.2" fill="none" />
          <polygon points="16,10 21,16 16,22 11,16" fill="#bd995c" />
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <span style={{ color: '#1f2421', fontWeight: 900, fontSize: '12px', letterSpacing: '1.2px' }}>ETIHAD</span>
          <span style={{ color: '#bd995c', fontWeight: 700, fontSize: '7px', letterSpacing: '1.8px' }}>AIRWAYS</span>
        </div>
      </>
    )
  }
];

export function AirlineMarquee({ trustText = '15+ Airlines. One Search. Trusted Travel Agency in Islamabad.' }) {
  // We duplicate the list to ensure perfectly seamless, continuous looping
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
              {airline.render()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
