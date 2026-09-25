'use client';

import React, { useState, useEffect } from 'react';
import { Award } from 'lucide-react';
import { contentService } from '../../../services/content.service';
import { FacebookIcon } from '../../../shared/components/icons/FacebookIcon';
import { InstagramIcon } from '../../../shared/components/icons/InstagramIcon';
import { LinkedinIcon } from '../../../shared/components/icons/LinkedinIcon';

const DEFAULT_AVATAR = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';

const resolveImageUrl = (img) => {
  if (!img || typeof img !== 'string') return DEFAULT_AVATAR;
  if (img.startsWith('http://') || img.startsWith('https://') || img.startsWith('data:')) return img;
  const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || 'https://admin.worldtracktravel.com').replace(/\/api\/?$/, '');
  return `${baseUrl}${img.startsWith('/') ? '' : '/'}${img}`;
};

const isValidUrl = (url) => {
  return typeof url === 'string' && url.trim().length > 0 && url.trim() !== 'null' && url.trim() !== 'undefined' && url.trim() !== '#';
};

const normalizeTeam = (rawMembers) => {
  if (!rawMembers || !Array.isArray(rawMembers)) return [];
  return rawMembers.map((m, idx) => ({
    id: m.id || idx + 1,
    name: m.name || 'Team Specialist',
    role: m.designation || m.position || m.role || 'Travel Consultant',
    image: resolveImageUrl(m.photo || m.image),
    facebookUrl: m.facebook_url || m.facebookUrl,
    instagramUrl: m.instagram_url || m.instagramUrl,
    linkedinUrl: m.linkedin_url || m.linkedinUrl,
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
            [1, 2, 3, 4, 5].map((i) => (
              <div key={`team-skeleton-${i}`} className="specialist-card animate-pulse">
                <div className="specialist-card-inner bg-slate-800 flex flex-col justify-end items-start p-5 pb-6">
                  <div className="h-5 bg-slate-700 rounded-full mb-2 w-3/4"></div>
                  <div className="h-3.5 bg-slate-700/80 rounded-full w-1/2"></div>
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
                    width={260}
                    height={330}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = DEFAULT_AVATAR;
                    }}
                  />

                  {/* Bottom Dark Gradient with Left-Aligned Name & Role */}
                  <div className="specialist-card-overlay">
                    {/* Hover Social Media in Top of Name (only rendered if URL is not null or empty) */}
                    {(isValidUrl(member.linkedinUrl) || isValidUrl(member.facebookUrl) || isValidUrl(member.instagramUrl)) && (
                      <div className="specialist-socials">
                        {isValidUrl(member.linkedinUrl) && (
                          <a
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="specialist-social-btn linkedin"
                            aria-label={`LinkedIn - ${member.name}`}
                            title={`LinkedIn - ${member.name}`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <LinkedinIcon size={14} color="#0080f6" />
                          </a>
                        )}
                        {isValidUrl(member.facebookUrl) && (
                          <a
                            href={member.facebookUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="specialist-social-btn facebook"
                            aria-label={`Facebook - ${member.name}`}
                            title={`Facebook - ${member.name}`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FacebookIcon size={14} color="#0080f6" />
                          </a>
                        )}
                        {isValidUrl(member.instagramUrl) && (
                          <a
                            href={member.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="specialist-social-btn instagram"
                            aria-label={`Instagram - ${member.name}`}
                            title={`Instagram - ${member.name}`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <InstagramIcon size={14} color="#0080f6" />
                          </a>
                        )}
                      </div>
                    )}

                    <h3 className="specialist-name" style={{ color: '#ffffff', textAlign: 'left' }}>{member.name}</h3>
                    <p className="specialist-role" style={{ color: 'rgba(255, 255, 255, 0.9)', textAlign: 'left' }}>{member.role}</p>
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
