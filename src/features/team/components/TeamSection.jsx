'use client';

import React, { useState, useEffect } from 'react';
import { Award } from 'lucide-react';
import { contentService } from '../../../services/content.service';

const resolveImageUrl = (img) => {
  if (!img || typeof img !== 'string') return 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
  if (img.startsWith('http://') || img.startsWith('https://') || img.startsWith('data:')) return img;
  const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || 'https://admin.worldtracktravel.com').replace(/\/api\/?$/, '');
  return `${baseUrl}${img.startsWith('/') ? '' : '/'}${img}`;
};

const normalizeTeam = (rawMembers) => {
  if (!rawMembers || !Array.isArray(rawMembers)) return [];
  return rawMembers.map((m, idx) => ({
    id: m.id || idx + 1,
    name: m.name || 'Team Specialist',
    role: m.position || m.role || 'Travel Consultant',
    image: resolveImageUrl(m.image),
    facebookUrl: m.facebookUrl,
    instagramUrl: m.instagramUrl,
  }));
};

export function TeamSection({ isAboutPage = false, initialTeam = null }) {
  const hasInitial = initialTeam && Array.isArray(initialTeam.members) && initialTeam.members.length > 0;
  const [members, setMembers] = useState(hasInitial ? normalizeTeam(initialTeam.members) : []);
  const [loading, setLoading] = useState(!hasInitial);

  useEffect(() => {
    if (hasInitial) {
      setMembers(normalizeTeam(initialTeam.members));
      setLoading(false);
      return;
    }

    setLoading(true);
    contentService
      .getTeam()
      .then((res) => {
        if (res && Array.isArray(res.members)) {
          setMembers(normalizeTeam(res.members));
        }
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, [initialTeam, hasInitial]);

  // Duplicate for seamless continuous looping marquee if we have members
  const marqueeMembers = members.length > 0 ? [...members, ...members] : [];

  return (
    <section className="team-leadership-section" id="team">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-row team-header-row">
          <div className="section-header-left">
            <div className="section-eyebrow-badge team-eyebrow">
              <Award size={15} className="eyebrow-icon team-eyebrow-icon" />
              <span>{isAboutPage ? 'LEADERSHIP & EXPERTS' : 'MEET THE TEAM'}</span>
            </div>

            <h2 className="section-main-title">
              {isAboutPage ? 'Meet Our Travel & Umrah Specialists' : 'The People Behind Every Booking'}
            </h2>
            <p className="section-sub-title">
              {isAboutPage
                ? 'Travel consultants, visa specialists, and ground coordinators who work on your booking together, not in isolation.'
                : 'A team of travel consultants, visa specialists, and Umrah coordinators at our Islamabad office, handling bookings for families, corporate clients, and pilgrims across Pakistan.'}
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Continuous Scrolling Specialists Marquee / Loading Skeleton */}
      <div className="team-marquee-wrapper">
        <div className="team-marquee-track">
          {loading ? (
            /* Skeleton Loading State */
            [1, 2, 3, 4].map((i) => (
              <div key={`team-skeleton-${i}`} className="specialist-card animate-pulse">
                <div className="specialist-card-inner bg-slate-200 h-[340px] w-[280px] rounded-2xl flex flex-col justify-end p-4">
                  <div className="h-5 bg-slate-300 rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-slate-300 rounded w-1/2"></div>
                </div>
              </div>
            ))
          ) : marqueeMembers.length > 0 ? (
            marqueeMembers.map((member, index) => (
              <div key={`${member.id}-${index}`} className="specialist-card">
                <div className="specialist-card-inner">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="specialist-img"
                    loading="lazy"
                    decoding="async"
                    width={280}
                    height={340}
                  />

                  {/* Floating Bottom Info Pill Matching Reference Design */}
                  <div className="specialist-info-pill">
                    <div className="specialist-info-text">
                      <h3 className="specialist-name">{member.name}</h3>
                      <span className="specialist-role">{member.role}</span>
                    </div>

                    <div className="specialist-socials">
                      <a
                        href={member.facebookUrl || 'https://facebook.com'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="specialist-social-btn"
                        aria-label={`Facebook - ${member.name}`}
                        title={`Facebook - ${member.name}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                      </a>
                      <a
                        href={member.instagramUrl || 'https://instagram.com'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="specialist-social-btn"
                        aria-label={`Instagram - ${member.name}`}
                        title={`Instagram - ${member.name}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : null}
        </div>
      </div>
    </section>
  );
}
