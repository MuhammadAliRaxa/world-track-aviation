import React from 'react';
import Link from 'next/link';
import { Compass, Plane, Building2, ShieldCheck, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem',
        backgroundColor: '#f8fafc',
      }}
    >
      <div
        style={{
          maxWidth: '640px',
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: '28px',
          padding: '3rem 2.5rem',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.08)',
          border: '1px solid #e2e8f0',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#e0f2fe',
            color: '#0080f6',
            marginBottom: '1.5rem',
          }}
        >
          <Compass size={44} />
        </div>

        <div
          style={{
            fontFamily: 'var(--font-heading, Outfit, sans-serif)',
            fontSize: '4.5rem',
            fontWeight: 800,
            lineHeight: 1,
            color: '#0f172a',
            letterSpacing: '-0.03em',
            marginBottom: '0.5rem',
          }}
        >
          404
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-heading, Outfit, sans-serif)',
            fontSize: '1.6rem',
            fontWeight: 700,
            color: '#1e2b4f',
            marginBottom: '0.75rem',
          }}
        >
          Page Off Course
        </h1>

        <p
          style={{
            color: '#64748b',
            fontSize: '1rem',
            lineHeight: 1.6,
            maxWidth: '460px',
            margin: '0 auto 2rem',
          }}
        >
          The page or travel route you are looking for does not exist or has been moved. Explore our core services below:
        </p>

        {/* Quick Nav Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '0.75rem',
            marginBottom: '2rem',
          }}
        >
          <Link
            href="/group-tickets"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1rem 0.5rem',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              backgroundColor: '#f8fafc',
              color: '#0f172a',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            <Plane size={22} color="#0080f6" style={{ marginBottom: '0.4rem' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Flights</span>
          </Link>

          <Link
            href="/hotels"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1rem 0.5rem',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              backgroundColor: '#f8fafc',
              color: '#0f172a',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            <Building2 size={22} color="#0080f6" style={{ marginBottom: '0.4rem' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Hotels</span>
          </Link>

          <Link
            href="/umrah-packages"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1rem 0.5rem',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              backgroundColor: '#f8fafc',
              color: '#0f172a',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            <ShieldCheck size={22} color="#0080f6" style={{ marginBottom: '0.4rem' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Umrah</span>
          </Link>

          <Link
            href="/visa"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1rem 0.5rem',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              backgroundColor: '#f8fafc',
              color: '#0f172a',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            <Compass size={22} color="#0080f6" style={{ marginBottom: '0.4rem' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Visas</span>
          </Link>
        </div>

        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.85rem 2rem',
            borderRadius: '9999px',
            backgroundColor: '#0080f6',
            color: '#ffffff',
            fontWeight: 600,
            fontSize: '0.95rem',
            textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(0, 128, 246, 0.35)',
            transition: 'all 0.2s',
          }}
        >
          <Home size={18} />
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
