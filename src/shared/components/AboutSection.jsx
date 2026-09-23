'use client';

import React from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Flag,
  Eye,
  PlaneTakeoff,
  Medal,
  Star
} from 'lucide-react';

/* Mosque Silhouette Icon (Dedicated Haramain Desk & Govt. Ministry Lic) */
function MosqueIcon({ size = 18, color = 'currentColor', className = '' }) {
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

/* Scalloped Badge with Checkmark (Used for Verified Visa Success Rate & IATA Member) */
function ScallopedBadgeCheck({ size = 20, bgColor = '#10b981', checkColor = '#ffffff', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        fill={bgColor}
      />
      <path
        d="m9 12 2 2 4-4"
        stroke={checkColor}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Dual Airplanes Icon for Airline Partners Fleet */
function DualPlanesIcon({ size = 20, color = '#0284c7', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.2-2 1-.3.5-.2 1.2.3 1.6l4.2 3.4-2.1 2.1-2.1-.4c-.4-.1-.8.1-1.1.4l-.3.3c-.3.3-.3.7 0 1l2.5 2.5c.3.3.7.3 1 0l.3-.3c.3-.3.5-.7.4-1.1l-.4-2.1 2.1-2.1 3.4 4.2c.4.5 1.1.6 1.6.3.8-.4 1.2-1.2 1-2Z"
        transform="translate(4, -3) scale(0.72)"
      />
      <path
        d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.2-2 1-.3.5-.2 1.2.3 1.6l4.2 3.4-2.1 2.1-2.1-.4c-.4-.1-.8.1-1.1.4l-.3.3c-.3.3-.3.7 0 1l2.5 2.5c.3.3.7.3 1 0l.3-.3c.3-.3.5-.7.4-1.1l-.4-2.1 2.1-2.1 3.4 4.2c.4.5 1.1.6 1.6.3.8-.4 1.2-1.2 1-2Z"
        transform="translate(-1, 9) scale(0.48)"
      />
    </svg>
  );
}

/* DTS Approved Shield Icon */
function ShieldCheckDark({ size = 15, color = '#0f172a', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        fill={color}
      />
      <path
        d="m9 12 2 2 4-4"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AboutSection({ isAboutPage = false }) {
  const stats = [
    {
      id: 'travelers',
      icon: <PlaneTakeoff size={20} className="text-sky-600" />,
      wrapBg: '#eff6ff',
      dotColor: '#0284c7',
      value: isAboutPage ? '21,000+' : '30,000+',
      title: isAboutPage ? 'Umrah Travelers Served' : 'Travelers Served',
      subtitle: 'Across Pakistan and international routes'
    },
    {
      id: 'legacy',
      icon: <Medal size={20} className="text-amber-500" />,
      wrapBg: '#fffbeb',
      dotColor: '#f59e0b',
      value: '4+ Years',
      title: isAboutPage ? 'in the Industry' : 'Industry Legacy',
      subtitle: 'Established and trusted since 2022'
    },
    {
      id: 'visa-success',
      icon: <ScallopedBadgeCheck size={20} bgColor="#10b981" checkColor="#ffffff" />,
      wrapBg: '#ecfdf5',
      dotColor: '#10b981',
      value: '99.4%',
      title: 'Visa Success Rate',
      subtitle: 'Thorough pre-audit verification'
    },
    {
      id: 'airlines',
      icon: <DualPlanesIcon size={20} color="#0284c7" />,
      wrapBg: '#eff6ff',
      dotColor: '#0284c7',
      value: '15+',
      title: 'Airline Partners',
      subtitle: 'Direct wholesale connectivity'
    }
  ];

  return (
    <section className="about-brand-section" id="about">
      <div className="section-container">
        {/* Centered Eyebrow & Main Title Header */}
        <div className="about-header-centered">
          <div className="about-eyebrow-badge">
            <CheckCircle2 size={15} className="about-badge-icon" />
            <span>{isAboutPage ? 'ABOUT WORLD TRACK AVIATION' : 'WHO WE ARE'}</span>
          </div>

          <h2 className="about-main-title">
            {isAboutPage
              ? 'Crafting Meaningful Journeys & Sacred Memories Since 2022'
              : "Islamabad's Travel Agency for Umrah, Visas, Flights & Hotels"}
          </h2>

          <p className="about-lead-subtitle">
            {isAboutPage
              ? 'World Track Aviation is an IATA-accredited travel company based in Islamabad, working with families, corporate travelers, and Umrah pilgrims across Pakistan on transparent, well-planned trips.'
              : "World Track Aviation is a licensed, IATA-accredited travel company in Islamabad, built around one idea: booking a trip, a visa, or an Umrah package shouldn't feel complicated."}
          </p>
        </div>

        {/* 2-Column Story & Visual Block */}
        <div className="about-story-grid">
          {/* Left Column: Narrative & Mission/Vision Cards */}
          <div className="about-story-content">
            {isAboutPage ? (
              <p className="about-story-body" style={{ fontSize: '15px', lineHeight: '1.75', color: '#334155' }}>
                We started as a small ticketing office with one goal: take the guesswork out of booking travel. Today the team handles everything from{' '}
                <Link href="/umrah-packages" style={{ color: '#0284c7', fontWeight: 600, textDecoration: 'underline' }}>
                  Umrah trips to Makkah and Madinah
                </Link>
                , corporate delegations, and{' '}
                <Link href="/tours" style={{ color: '#0284c7', fontWeight: 600, textDecoration: 'underline' }}>
                  family holidays
                </Link>{' '}
                to places like Baku, Dubai, and across the Far East. Every booking comes with clear pricing upfront and support you can actually reach, whether you're mid-flight or still deciding where to go.
              </p>
            ) : (
              <>
                <h3 className="about-story-lead">
                  Built to make travel planning simple, World Track Aviation has grown from a small ticketing office into a full-service travel company for Pakistan.
                </h3>

                <p className="about-story-body">
                  Since 2022, we've helped families, corporate teams, and pilgrims across the country plan trips that actually go the way they were supposed to. Whether it's an Umrah package with real hotel bookings near the Haramain, a visa application checked before it's submitted, or flights booked at rates that don't change at checkout, everything runs through one team, in one office, so you're never stuck explaining your booking to someone new.
                </p>
              </>
            )}

            {/* Mission & Vision 2-Column Cards */}
            <div className="about-mv-cards-row">
              {/* Mission Card */}
              <div className="about-mv-card">
                <div className="about-mv-icon-wrap bg-blue-light">
                  <Flag size={18} fill="#2563eb" className="text-blue-600" />
                </div>
                <div className="about-mv-text">
                  <h4 className="about-mv-title">Our Mission</h4>
                  <p className="about-mv-desc">
                    {isAboutPage
                      ? 'To deliver honest, well-organized travel experiences using modern booking tools without losing the personal side of service.'
                      : 'To make booking Umrah trips, visas, and flights simple, reliable, and backed by real support at every step.'}
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="about-mv-card">
                <div className="about-mv-icon-wrap bg-amber-light">
                  <Eye size={18} className="text-amber-600" />
                </div>
                <div className="about-mv-text">
                  <h4 className="about-mv-title">Our Vision</h4>
                  <p className="about-mv-desc">
                    {isAboutPage
                      ? "To become Pakistan's most trusted name in travel and Umrah management, known for straightforward pricing and clients who come back."
                      : 'To be the travel company Pakistani families and pilgrims trust first, known for fair pricing and lasting service.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Accreditation / Certified Bar */}
            <div className="about-certifications-bar">
              <span className="cert-label">CERTIFIED BY:</span>
              <div className="cert-items-group">
                <div className="cert-badge-item">
                  <ScallopedBadgeCheck size={15} bgColor="#0f172a" checkColor="#ffffff" />
                  <span><strong>IATA Member</strong> #27351170</span>
                </div>
                <div className="cert-badge-item">
                  <MosqueIcon size={14} color="#0f172a" />
                  <span><strong>Govt. Ministry Lic</strong> No. ID-2637</span>
                </div>
                <div className="cert-badge-item">
                  <ShieldCheckDark size={14} color="#0f172a" />
                  <span><strong>DTS Approved</strong></span>
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
                alt="World Track Aviation Global Travel"
                className="about-hero-img"
                loading="lazy"
                decoding="async"
                width={560}
                height={420}
              />

              {/* Top-Right Star Rating Badge */}
              <div className="about-floating-rating">
                <Star size={14} className="rating-star-icon" />
                <span>4.9 / 5.0 Star Rating</span>
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
        </div>

        {/* Bottom 4-Column Statistics Row */}
        <div className="about-stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="about-stat-card">
              <div className="stat-card-header">
                <div
                  className="stat-icon-wrap"
                  style={{ backgroundColor: stat.wrapBg }}
                >
                  {stat.icon}
                </div>
                <span
                  className="stat-dot-indicator"
                  style={{ backgroundColor: stat.dotColor }}
                />
              </div>
              <div className="stat-number-val">{stat.value}</div>
              <h4 className="stat-title-txt">{stat.title}</h4>
              <p className="stat-sub-txt">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
