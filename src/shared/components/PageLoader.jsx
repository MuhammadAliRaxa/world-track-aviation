import React from 'react';

export function PageLoader() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      color: '#0284c7',
      fontFamily: 'Outfit, Inter, sans-serif'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid #e0f2fe',
        borderTopColor: '#0284c7',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }} />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '500' }}>
        Loading...
      </span>
    </div>
  );
}

export default PageLoader;
