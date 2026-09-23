'use client';

import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  BadgePercent,
  Building2,
  UserCheck,
  Headphones,
  Lock
} from 'lucide-react';

export function AdvantageSection() {
  const advantages = [
    {
      id: 'iata',
      icon: <CheckCircle2 size={22} className="adv-icon text-blue-600" />,
      title: 'IATA Accredited Agency',
      description: 'Every ticket comes from an officially accredited travel agency, so your booking is protected and instantly confirmed, with no third-party resellers involved.'
    },
    {
      id: 'best-rate',
      icon: <BadgePercent size={22} className="adv-icon text-blue-600" />,
      title: 'Best Fare & Rate Guarantee',
      description: 'Our travel consultants check real-time fares across the airline network for corporate, family, and Umrah bookings, and match any lower verified wholesale rate.'
    },
    {
      id: 'haramain-team',
      icon: <Building2 size={22} className="adv-icon text-blue-600" />,
      title: 'Direct Haramain Ground Team',
      description: 'Our coordinators in Makkah and Madinah handle hotel check-ins, Nusuk Rawdah permits, private transfers, and Ziyarat visits, without a third-party contractor.'
    },
    {
      id: 'visa-rate',
      icon: <UserCheck size={22} className="adv-icon text-blue-600" />,
      title: '99.4% Visa Success Rate',
      description: 'Every visa file gets document verification and visa assistance before it reaches the embassy, across multiple countries.'
    },
    {
      id: 'concierge',
      icon: <Headphones size={22} className="adv-icon text-blue-600" />,
      title: '24/7 Human Concierge',
      description: 'Get personalized travel assistance from a real advisor by phone, WhatsApp, or email at any hour, no automated call trees.'
    },
    {
      id: 'zero-fees',
      icon: <Lock size={22} className="adv-icon text-blue-600" />,
      title: 'Transparent & Zero Hidden Fees',
      description: "The price you're quoted is the price you pay, with professional, upfront pricing and no hidden service charges."
    }
  ];

  return (
    <section className="advantage-feature-section" id="advantage">
      <div className="section-container">
        {/* Centered Header */}
        <div className="advantage-header-centered">
          <div className="section-eyebrow-badge advantage-eyebrow">
            <ShieldCheck size={16} className="eyebrow-icon" />
            <span>THE WORLD TRACK AVIATION ADVANTAGE</span>
          </div>
          <h2 className="section-main-title">
            Designed for Effortless Travel &amp; Spiritual Peace
          </h2>
          <p className="section-sub-title">
            Real people handle your booking from start to finish, backed by direct airline access and over 30,000 travelers served.
          </p>
        </div>

        {/* 6 Advantage Cards Grid (3 Columns x 2 Rows) */}
        <div className="advantage-cards-grid">
          {advantages.map((adv) => (
            <div key={adv.id} className="advantage-card-box">
              <div className="advantage-icon-wrapper">
                {adv.icon}
              </div>
              <h3 className="advantage-card-title">{adv.title}</h3>
              <p className="advantage-card-desc">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
