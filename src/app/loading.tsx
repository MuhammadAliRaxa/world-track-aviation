import React from 'react';

export default function Loading() {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.25rem',
        backgroundColor: '#f8fafc',
      }}
    >
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          border: '4px solid #e2e8f0',
          borderTopColor: '#0080f6',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <div
        style={{
          fontFamily: 'var(--font-heading, Outfit, sans-serif)',
          fontWeight: 600,
          color: '#1e2b4f',
          fontSize: '1.05rem',
          letterSpacing: '0.02em',
        }}
      >
        Loading World Track...
      </div>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
