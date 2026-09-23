'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log unexpected client exceptions
    console.error('Next.js App Router caught an error:', error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        backgroundColor: '#f8fafc',
      }}
    >
      <div
        style={{
          maxWidth: '520px',
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '2.5rem 2rem',
          boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.08)',
          border: '1px solid #e2e8f0',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#fef2f2',
            color: '#ef4444',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
          }}
        >
          <AlertTriangle size={32} />
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-heading, Outfit, sans-serif)',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#0f172a',
            marginBottom: '0.75rem',
          }}
        >
          Something Went Wrong
        </h2>

        <p
          style={{
            color: '#64748b',
            fontSize: '0.95rem',
            lineHeight: 1.6,
            marginBottom: '1.75rem',
          }}
        >
          We encountered an unexpected issue while loading this page. Our engineers have been alerted.
        </p>

        {error.digest && (
          <div
            style={{
              padding: '0.5rem 0.75rem',
              backgroundColor: '#f1f5f9',
              borderRadius: '8px',
              fontSize: '0.8rem',
              color: '#64748b',
              marginBottom: '1.5rem',
              fontFamily: 'monospace',
            }}
          >
            Error ID: {error.digest}
          </div>
        )}

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            onClick={() => reset()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.4rem',
              borderRadius: '9999px',
              backgroundColor: '#0080f6',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '0.9rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
          >
            <RefreshCw size={16} />
            Try Again
          </button>

          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.4rem',
              borderRadius: '9999px',
              backgroundColor: '#f1f5f9',
              color: '#0f172a',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
          >
            <Home size={16} />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
