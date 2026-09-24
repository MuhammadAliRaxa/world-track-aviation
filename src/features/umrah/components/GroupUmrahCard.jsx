'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export function GroupUmrahCard({ pkg }) {
  const router = useRouter();

  if (!pkg) return null;

  return (
    <div className="group-umrah-card">
      {/* Card Header Row */}
      <div className="group-card-header">
        <div className="group-card-airline-info">
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              background: '#f8fafc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '14px',
              color: '#334155',
              flexShrink: 0,
            }}
          >
            {pkg.airlineCode || 'PK'}
          </div>
          <div style={{ minWidth: 0 }}>
            <h3 className="group-card-sector-title">
              {pkg.sector || pkg.name || pkg.title || 'Group Umrah Package'}
            </h3>
            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '1px' }}>
              {pkg.airlineName || 'Direct / Connecting Flight'}
            </div>
          </div>
        </div>

        <div className="group-card-header-actions">
          {pkg.seatsLeft !== undefined && pkg.seatsLeft !== null && (
            <span
              style={{
                background: '#dcfce7',
                color: '#15803d',
                fontSize: '11px',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '20px',
                whiteSpace: 'nowrap',
              }}
            >
              {pkg.seatsLeft} Seats Left
            </span>
          )}
          <button
            type="button"
            onClick={() => router.push('/umrah-group-packages')}
            style={{
              background: '#0284c7',
              color: '#ffffff',
              border: 'none',
              padding: '7px 18px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(2,132,199,0.2)',
              whiteSpace: 'nowrap',
            }}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Flight Info Strip */}
      <div className="group-flight-strip">
        <div className="group-flight-leg">
          <div style={{ color: '#0284c7', fontWeight: 700, marginBottom: '2px' }}>
            OUTBOUND - {pkg.outbound?.date || pkg.departure_date || 'ON REQUEST'}
          </div>
          <div style={{ color: '#0f172a', fontWeight: 600 }}>
            {pkg.outbound?.flightNo || ''} {pkg.outbound?.time ? `(${pkg.outbound.time})` : ''}
          </div>
          <div style={{ color: '#64748b', fontSize: '10px', marginTop: '2px' }}>
            {pkg.outbound?.baggage || 'Luggage: 2 × 23 KG'}
          </div>
        </div>

        <div className="group-flight-leg">
          <div style={{ color: '#ea580c', fontWeight: 700, marginBottom: '2px' }}>
            INBOUND - {pkg.inbound?.date || 'CONFIRMED'}
          </div>
          <div style={{ color: '#0f172a', fontWeight: 600 }}>
            {pkg.inbound?.flightNo || ''} {pkg.inbound?.time ? `(${pkg.inbound.time})` : ''}
          </div>
          <div style={{ color: '#64748b', fontSize: '10px', marginTop: '2px' }}>
            {pkg.inbound?.baggage || 'Luggage: 2 × 23 KG'}
          </div>
        </div>
      </div>

      {/* Hotels & Pricing Grid */}
      <div className="group-hotels-pricing-grid">
        {/* Hotels Column */}
        <div className="group-hotels-list" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Makkah Hotel */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#fef3c7',
                color: '#d97706',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                flexShrink: 0,
              }}
            >
              🕋
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.05em' }}>
                MAKKAH
              </div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', lineHeight: '1.2' }}>
                {pkg.makkahHotel?.name || 'Makkah Hotel'}
              </div>
              <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                {pkg.makkahHotel?.nights ? `${pkg.makkahHotel.nights} nights` : ''}{' '}
                {pkg.makkahHotel?.shuttle ? `• ${pkg.makkahHotel.shuttle}` : ''}
              </div>
            </div>
          </div>

          {/* Madinah Hotel */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#dcfce7',
                color: '#16a34a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                flexShrink: 0,
              }}
            >
              🕌
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.05em' }}>
                MADINAH
              </div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', lineHeight: '1.2' }}>
                {pkg.madinahHotel?.name || 'Madinah Hotel'}
              </div>
              <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                {pkg.madinahHotel?.nights ? `${pkg.madinahHotel.nights} nights` : ''}{' '}
                {pkg.madinahHotel?.shuttle ? `• ${pkg.madinahHotel.shuttle}` : ''}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Matrix Column */}
        <div className="group-pricing-wrapper">
          {/* Desktop Table Header */}
          <div className="group-pricing-table-header">
            <div>SHARING</div>
            <div>DOUBLE</div>
            <div>TRIPLE</div>
            <div>QUAD</div>
          </div>

          {/* Pricing Body Cells */}
          <div className="group-pricing-table-body">
            <div className="group-pricing-cell">
              <div className="group-pricing-tier-badge">SHARING</div>
              <div className="group-pricing-currency">PKR</div>
              <div className="group-pricing-amount">{pkg.pricing?.sharing || pkg.price || 'Call'}</div>
              <div className="group-pricing-sub">per person</div>
            </div>

            <div className="group-pricing-cell">
              <div className="group-pricing-tier-badge">DOUBLE</div>
              <div className="group-pricing-currency">PKR</div>
              <div className="group-pricing-amount">{pkg.pricing?.double || pkg.price || 'Call'}</div>
              <div className="group-pricing-sub">per person</div>
            </div>

            <div className="group-pricing-cell">
              <div className="group-pricing-tier-badge">TRIPLE</div>
              <div className="group-pricing-currency">PKR</div>
              <div className="group-pricing-amount">{pkg.pricing?.triple || pkg.price || 'Call'}</div>
              <div className="group-pricing-sub">per person</div>
            </div>

            <div className="group-pricing-cell">
              <div className="group-pricing-tier-badge">QUAD</div>
              <div className="group-pricing-currency">PKR</div>
              <div className="group-pricing-amount">{pkg.pricing?.quad || pkg.price || 'Call'}</div>
              <div className="group-pricing-sub">per person</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
