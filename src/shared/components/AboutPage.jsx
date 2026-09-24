'use client';

import React from 'react';
import {
  ShieldCheck,
  Users,
  Headphones,
  FileCheck2,
  Tag,
  CreditCard
} from 'lucide-react';
import { AppBar } from './AppBar';
import { Footer } from './Footer';
import { AboutSection } from './AboutSection';
import { AirlineMarquee } from './AirlineMarquee';
import { TeamSection } from '../../features/team';

export function AboutPage() {
  const advantages = [
    {
      id: 'iata',
      icon: ShieldCheck,
      title: 'IATA Accredited Agency',
      desc: 'Direct access to airline inventory means instantly confirmed tickets, no third-party markups.'
    },
    {
      id: 'rate',
      icon: CreditCard,
      title: 'Best Rate Guarantee',
      desc: 'Wholesale fares across our 15+ airline partner network for corporate, family, and Umrah bookings.'
    },
    {
      id: 'ground',
      icon: Users,
      title: 'Ground Support Teams',
      desc: 'Our people in Saudi Arabia, Dubai, and Baku handle hotel check-ins, transfers, and arrivals.'
    },
    {
      id: 'concierge',
      icon: Headphones,
      title: '24/7 Human Support',
      desc: 'Call or WhatsApp a real travel advisor directly — no automated loops.'
    },
    {
      id: 'audit',
      icon: FileCheck2,
      title: 'Pre-Submission Visa Review',
      desc: 'A case officer checks every visa file before it goes to the embassy, which cuts down rejections.'
    },
    {
      id: 'pricing',
      icon: Tag,
      title: 'Transparent Pricing',
      desc: 'What you see is what you pay — every invoice breaks down the full cost, taxes included.'
    }
  ];

  /* ── Hero section passed as heroContent so the nav floats over it ── */
  const heroSection = (
    <section className="about-page-hero">
      <div className="about-page-hero-overlay" />
      <div className="about-page-hero-content">
        <h1 className="about-page-hero-title">
          Connecting the World with Absolute Integrity
        </h1>
        <p className="about-page-hero-subtitle">
          World Track Aviation is an IATA-accredited travel agency handling ticketing, Umrah trips to Makkah and Madinah, and visa processing for travelers across Pakistan.
        </p>
      </div>
    </section>
  );

  return (
    <div className="about-page-root">
      {/* 1. AppBar — navbar floats over the hero */}
      <AppBar heroContent={heroSection} />

      {/* 2. Partner Airlines Marquee (Matching Home Page) */}
      <AirlineMarquee trustText="15+ Airlines. One Search. Trusted Travel Agency in Islamabad." />

      {/* 3. About World Track: Crafting Meaningful Journeys & Sacred Memories Since 2022 */}
      <AboutSection isAboutPage={true} />

      {/* 4. "THE WORLD TRACK AVIATION ADVANTAGE" Section */}
      <section className="about-advantage-section">
        <div className="detail-container">
          <div className="about-centered-header">
            <div className="about-pill-capsule">
              <span className="capsule-arrow">▼</span>
              <span>THE WORLD TRACK AVIATION ADVANTAGE</span>
            </div>
            <h2 className="about-main-title">
              Designed for Effortless Travel &amp; Absolute Peace
            </h2>
            <p className="about-main-lead">
              Direct airline connections and real people on the ground — built to support you at every step.
            </p>
          </div>

          {/* 6 Cards in 3x2 Grid */}
          <div className="advantage-cards-grid">
            {advantages.map((adv) => {
              const IconComp = adv.icon;
              return (
                <div key={adv.id} className="adv-card-item">
                  <div className="adv-icon-wrap">
                    <IconComp size={20} />
                  </div>
                  <h4 className="adv-card-title">{adv.title}</h4>
                  <p className="adv-card-desc">{adv.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Team Leadership & Travel Specialists Section */}
      <TeamSection isAboutPage={true} />

      {/* 6. Complete Footer with Newsletter CTA */}
      <Footer />
    </div>
  );
}
