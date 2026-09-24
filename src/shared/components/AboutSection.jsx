'use client';

import React from 'react';
import { Flag, Eye, Star } from 'lucide-react';

/* Mosque Silhouette Icon */
function MosqueIcon({ size = 20, color = 'currentColor', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C12 2 11.2 3.8 9.5 5C8 6 7.5 7.5 7.5 9.5V11H6V7.5L4.5 6L3 7.5V20.5C3 21 3.5 21.5 4 21.5H8.5V16.5C8.5 14.8 9.8 13.5 11.5 13.5H12.5C14.2 13.5 15.5 14.8 15.5 16.5V21.5H20C20.5 21.5 21 21 21 20.5V7.5L19.5 6L18 7.5V11H16.5V9.5C16.5 7.5 16 6 14.5 5C12.8 3.8 12 2 12 2Z" />
    </svg>
  );
}

/* Checkmark badge for IATA Member */
function IataCheckBadge({ size = 15, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#0f172a" />
      <path d="M8 12.5l2.5 2.5 5.5-5.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Classical Govt building icon */
function BuildingGovIcon({ size = 15, color = '#0f172a', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <line x1="3" y1="21" x2="21" y2="21" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <polygon points="12 3 2 10 22 10 12 3" fill={color} />
      <line x1="6" y1="10" x2="6" y2="21" />
      <line x1="10" y1="10" x2="10" y2="21" />
      <line x1="14" y1="10" x2="14" y2="21" />
      <line x1="18" y1="10" x2="18" y2="21" />
    </svg>
  );
}

/* DTS Approved Shield Icon */
function ShieldCheckDark({ size = 15, color = '#0f172a', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill={color} />
      <path d="m9 12 2 2 4-4" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Plane Departure Runway Icon for 150K+ */
function PlaneDepartureIcon({ size = 22, color = '#0284c7', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M2 20h20" />
      <path d="M13.5 15.5L20 9l-1.5-1.5L14 10l-4-6-2 1 2 6-4 2-2-1-1.5 1 2.5 3.5 6.5-1z" />
    </svg>
  );
}

/* Medal Legacy Icon for 14+ Years */
function MedalLegacyIcon({ size = 22, color = '#0284c7', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M12 2v1" />
      <path d="M8.21 13.89L7 22l5-3 5 3-1.21-8.11" />
    </svg>
  );
}

/* Scalloped Badge with Checkmark (Blue) for 99.4% */
function ScallopedBadgeBlue({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        fill="#0284c7"
      />
      <path d="m9 12 2 2 4-4" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Plane In Flight Icon for 700+ */
function PlaneFlightIcon({ size = 22, color = '#0284c7', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.2-2 1-.3.5-.2 1.2.3 1.6l4.2 3.4-2.1 2.1-2.1-.4c-.4-.1-.8.1-1.1.4l-.3.3c-.3.3-.3.7 0 1l2.5 2.5c.3.3.7.3 1 0l.3-.3c.3-.3.5-.7.4-1.1l-.4-2.1 2.1-2.1 3.4 4.2c.4.5 1.1.6 1.6.3.8-.4 1.2-1.2 1-2Z" />
    </svg>
  );
}

export function AboutSection({ isAboutPage = false }) {
  const stats = [
    {
      id: 'travelers',
      icon: <PlaneDepartureIcon size={22} color="#0284c7" />,
      value: '150K+',
      title: 'Travelers Served',
      subtitle: 'Across 42+ countries worldwide',
    },
    {
      id: 'legacy',
      icon: <MedalLegacyIcon size={22} color="#0284c7" />,
      value: '14+ Years',
      title: 'Industry Legacy',
      subtitle: 'Established & trusted since 2012',
    },
    {
      id: 'visa-success',
      icon: <ScallopedBadgeBlue size={22} />,
      value: '99.4%',
      title: 'Visa Success Rate',
      subtitle: 'Thorough pre-audit verification',
    },
    {
      id: 'airlines',
      icon: <PlaneFlightIcon size={22} color="#0284c7" />,
      value: '700+',
      title: 'Airline Partners',
      subtitle: 'Direct GDS wholesale connectivity',
    },
  ];

  return (
    <section className="about-brand-section" id="about">
      <div className="section-container">
        {/* Centered Eyebrow & Main Title Header */}
        <div className="about-header-centered">
          <div className="about-eyebrow-text">ABOUT WORLD TRACK</div>

          <h2 className="about-main-title">
            Crafting Meaningful Journeys &amp;
            <br />
            Sacred Memories Since 2012
          </h2>

          <p className="about-lead-subtitle">
            World Track Travel &amp; Tourism (Pvt.) Ltd. is Pakistan&apos;s trusted IATA-accredited travel management and
            pilgrimage services organization, connecting thousands of families, corporate leaders, and pilgrims to the
            world with absolute integrity.
          </p>
        </div>

        {/* 2-Column Story & Visual Block */}
        <div className="about-story-grid">
          {/* Left Column: Narrative & Mission/Vision Cards */}
          <div className="about-story-content">
            <h3 className="about-story-lead">
              Founded with a vision to eliminate travel ambiguity, World Track has transformed from a boutique ticketing
              house into a comprehensive global travel ecosystem.
            </h3>

            <p className="about-story-body">
              Whether you are embarking on a sacred pilgrimage to the Holy Haramain in Makkah and Madinah, organizing an
              executive corporate delegation, or booking a rejuvenating family getaway to Baku, Dubai, or the Far East
              — we ensure that every itinerary is engineered with precision, transparent pricing, and 24/7 human
              concierge care.
            </p>

            {/* Mission & Vision 2-Column Cards */}
            <div className="about-mv-cards-row">
              {/* Mission Card */}
              <div className="about-mv-card">
                <div className="about-mv-icon-wrap bg-blue-light">
                  <Flag size={18} fill="#0284c7" stroke="#0284c7" />
                </div>
                <div className="about-mv-text">
                  <h4 className="about-mv-title">Our Mission</h4>
                  <p className="about-mv-desc">
                    To deliver seamless, transparent, and spiritually elevating travel experiences through cutting-edge
                    booking technology and personalized hospitality.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="about-mv-card">
                <div className="about-mv-icon-wrap bg-amber-light">
                  <Eye size={18} stroke="#d97706" />
                </div>
                <div className="about-mv-text">
                  <h4 className="about-mv-title">Our Vision</h4>
                  <p className="about-mv-desc">
                    To be the premier travel and pilgrimage management brand in the region, recognized for unwavering
                    trust, ethical fare transparency, and customer loyalty.
                  </p>
                </div>
              </div>
            </div>

            {/* Accreditation / Certified Bar */}
            <div className="about-certifications-bar">
              <span className="cert-label">CERTIFIED BY:</span>
              <div className="cert-items-group">
                <div className="cert-badge-item">
                  <IataCheckBadge size={16} />
                  <span>IATA Member #27-2-8941</span>
                </div>
                <div className="cert-badge-item">
                  <BuildingGovIcon size={16} color="#0f172a" />
                  <span>Govt. Ministry Lic #4821</span>
                </div>
                <div className="cert-badge-item">
                  <ShieldCheckDark size={16} color="#0f172a" />
                  <span>DTS Approved</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Media with Floating Badges */}
          <div className="about-media-column">
            <div className="about-media-frame">
              {/* Main Sunset Flight Image */}
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80"
                alt="World Track Global Flight Ecosystem"
                className="about-hero-img"
                loading="lazy"
                decoding="async"
                width={560}
                height={420}
              />

              {/* Top-Right Star Rating Badge */}
              <div className="about-floating-rating">
                <Star size={13} fill="#000000" stroke="#000000" className="rating-star-icon" />
                <span>4.9 / 5.0 Star Rating</span>
              </div>
            </div>

            {/* Bottom-Left Floating Haramain Desk Card */}
            <div className="about-floating-desk-card">
              <div className="desk-icon-box">
                <MosqueIcon size={22} color="#ffffff" />
              </div>
              <div className="desk-text-box">
                <h5 className="desk-title">Dedicated Haramain Desk</h5>
                <p className="desk-desc">Makkah &amp; Madinah Ground Coordinators 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4-Column Statistics Row */}
        <div className="about-stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="about-stat-card">
              <div className="stat-icon-wrap">
                {stat.icon}
              </div>
              <div className="stat-content-wrap">
                <div className="stat-number-val">{stat.value}</div>
                <h4 className="stat-title-txt">{stat.title}</h4>
                <p className="stat-sub-txt">{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
