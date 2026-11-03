import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Mail, MessageCircle, MapPin, Clock, RefreshCw, Plane, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/company';

export const metadata: Metadata = {
  title: 'Under Maintenance | World Track Aviation',
  description: 'World Track Aviation is currently undergoing scheduled system maintenance. We will be back shortly.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  const whatsappUrl = COMPANY_CONFIG.getWhatsAppUrl(
    'Hi World Track Aviation team, I am reaching out while your website is undergoing maintenance. I would like assistance with a booking.'
  );

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        position: 'relative',
        backgroundColor: '#0a1628',
        fontFamily: "var(--font-main, 'Plus Jakarta Sans', -apple-system, sans-serif)",
        overflow: 'hidden',
      }}
    >
      {/* Background Travel Media with dark cinematic overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/assets/Main header.webp"
          alt="World Track Aviation Background"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center 40%',
            filter: 'brightness(0.35) blur(3px)',
            transform: 'scale(1.05)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(10,22,40,0.7) 0%, rgba(10,22,40,0.92) 100%)',
          }}
        />
      </div>

      {/* Main Luxury Glassmorphic Card */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '560px',
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '40px 32px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          textAlign: 'center',
          boxSizing: 'border-box',
        }}
      >
        {/* Brand Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <Image
            src="/assets/world_track_logo.png"
            alt={COMPANY_CONFIG.name}
            width={210}
            height={56}
            priority
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
          />
        </div>

        {/* Status Pill Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#eff6ff',
            border: '1px solid #bfdbfe',
            color: '#1d4ed8',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            padding: '6px 14px',
            borderRadius: '9999px',
            marginBottom: '16px',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#2563eb',
              boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.25)',
              display: 'inline-block',
            }}
          />
          System Upgrade in Progress
        </div>

        {/* Clean, High-Contrast Headline */}
        <h1
          style={{
            fontSize: '28px',
            fontWeight: 800,
            color: '#0f172a',
            margin: '0 0 10px 0',
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
          }}
        >
          We&apos;ll Be Back Shortly
        </h1>

        {/* Subtitle Message */}
        <p
          style={{
            fontSize: '14px',
            color: '#475569',
            lineHeight: 1.6,
            margin: '0 auto 24px auto',
            maxWidth: '440px',
          }}
        >
          We are currently upgrading our booking systems and flight inventories to serve you better.
          Our team is available 24/7 for all flight, Umrah, hotel, and visa inquiries.
        </p>

        {/* 24/7 Booking Available Banner */}
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '14px',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '12px',
            color: '#334155',
            fontWeight: 600,
            marginBottom: '20px',
          }}
        >
          <ShieldCheck size={16} color="#059669" />
          <span>All existing bookings &amp; issued tickets remain fully confirmed.</span>
        </div>

        {/* Primary Contact Channels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
          
          {/* WhatsApp Direct Chat (Primary Action) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 18px',
              borderRadius: '16px',
              backgroundColor: '#25D366',
              color: '#ffffff',
              textDecoration: 'none',
              boxShadow: '0 4px 14px 0 rgba(37, 211, 102, 0.35)',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MessageCircle size={20} color="#ffffff" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px', lineHeight: 1.2 }}>
                  Chat on WhatsApp 24/7
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.9)' }}>
                  {COMPANY_CONFIG.whatsapp}
                </div>
              </div>
            </div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                backgroundColor: 'rgba(0, 0, 0, 0.12)',
                padding: '4px 10px',
                borderRadius: '9999px',
              }}
            >
              Online Now
            </span>
          </a>

          {/* Direct Phone Call (Secondary Action) */}
          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 18px',
              borderRadius: '16px',
              backgroundColor: '#0f172a',
              color: '#ffffff',
              textDecoration: 'none',
              boxShadow: '0 4px 14px 0 rgba(15, 23, 42, 0.25)',
              transition: 'background-color 0.15s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Phone size={18} color="#ffffff" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px', lineHeight: 1.2 }}>
                  Call Office Helpline
                </div>
                <div style={{ fontSize: '12px', color: '#cbd5e1' }}>
                  {COMPANY_CONFIG.phoneFormatted}
                </div>
              </div>
            </div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                padding: '4px 10px',
                borderRadius: '9999px',
              }}
            >
              Call Now
            </span>
          </a>

          {/* Email Support */}
          <a
            href={`mailto:${COMPANY_CONFIG.email}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '11px 16px',
              borderRadius: '12px',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              color: '#475569',
              textDecoration: 'none',
              fontSize: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={15} color="#64748b" />
              <span>{COMPANY_CONFIG.email}</span>
            </div>
            <span style={{ fontWeight: 600, color: '#0284c7' }}>Email Us</span>
          </a>
        </div>

        {/* Operating Hours & Physical Location */}
        <div
          style={{
            marginTop: '20px',
            paddingTop: '16px',
            borderTop: '1px solid #f1f5f9',
            fontSize: '11px',
            color: '#64748b',
            lineHeight: 1.6,
            textAlign: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', marginBottom: '4px' }}>
            <Clock size={12} color="#059669" />
            <span>{COMPANY_CONFIG.openingHours}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
            <MapPin size={12} color="#ea580c" />
            <span>{COMPANY_CONFIG.address}</span>
          </div>
        </div>

        {/* Refresh Check Link */}
        <div style={{ marginTop: '16px' }}>
          <a
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              fontWeight: 600,
              color: '#64748b',
              textDecoration: 'none',
              padding: '6px 12px',
              borderRadius: '8px',
              backgroundColor: '#f8fafc',
            }}
          >
            <RefreshCw size={12} />
            <span>Check if website is back online</span>
          </a>
        </div>
      </div>
    </main>
  );
}
