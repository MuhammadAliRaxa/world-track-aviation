'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Clock, ArrowRight } from 'lucide-react';

const DEFAULT_VISA_IMAGE = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80';

const getVisaImage = (visa) => {
  if (visa?.image) return visa.image;
  const target = ((visa?.country || '') + ' ' + (visa?.title || '') + ' ' + (visa?.name || '')).toLowerCase();
  if (target.includes('dubai') || target.includes('uae') || target.includes('emirates')) {
    return 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80';
  }
  if (target.includes('saudi') || target.includes('umrah') || target.includes('makkah')) {
    return 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80';
  }
  if (target.includes('turkey') || target.includes('istanbul')) {
    return 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80';
  }
  if (target.includes('baku') || target.includes('azerbaijan')) {
    return 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80';
  }
  if (target.includes('malaysia') || target.includes('kuala')) {
    return 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80';
  }
  if (target.includes('singapore')) {
    return 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80';
  }
  if (target.includes('thailand') || target.includes('bangkok')) {
    return 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80';
  }
  if (target.includes('egypt') || target.includes('cairo')) {
    return 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80';
  }
  return DEFAULT_VISA_IMAGE;
};

export function VisaCard({ visa }) {
  const router = useRouter();

  const slug = visa.seo?.url_slug || visa.id;
  const handleAction = (e) => {
    e.stopPropagation();
    router.push(`/visas/${slug}/`);
  };

  // Format processing time cleanly (e.g. "2-3 days")
  const rawDuration = visa.processing_time || visa.duration || '2 - 3 Days';
  const formattedDuration = rawDuration
    .replace(/\s*-\s*/g, '-')
    .toLowerCase();

  const imageUrl = getVisaImage(visa);
  const displayTitle = visa.title || visa.name || 'Tourist Visit Visa';
  const displayPrice = visa.pricePKR || (visa.rate ? Number(visa.rate).toLocaleString() : (visa.price ? Number(visa.price).toLocaleString() : '44,500'));

  return (
    <div
      className="visa-card-item"
      onClick={() => router.push(`/visas/${slug}/`)}
      id={`visa-card-${visa.id}`}
    >
      {/* Media Image Container */}
      <div className="visa-card-media">
        <img
          src={imageUrl}
          alt={visa.imageAltText || visa.seo?.image_alt || `${displayTitle} - World Track Aviation`}
          className="visa-card-img"
          loading="lazy"
          decoding="async"
          width={360}
          height={180}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = DEFAULT_VISA_IMAGE;
          }}
        />

        {/* Top-Right Badge (e.g., E-VISA) */}
        <div className="visa-badge-top-right">
          <span>{visa.visa_type || visa.badge || 'E-VISA'}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="visa-card-body">
        {/* Visa Title */}
        <h3 className="visa-card-title">{displayTitle}</h3>

        {/* Processing Time with Clock Icon */}
        <div className="visa-processing-row">
          <Clock size={13} className="visa-clock-icon" />
          <span>Processing time {formattedDuration}</span>
        </div>

        {/* Price and View Details Action */}
        <div className="visa-pricing-action-row">
          <div className="visa-price-text">
            Rs {displayPrice}
          </div>

          <button
            type="button"
            className="visa-view-details-btn"
            onClick={handleAction}
          >
            <span>View Details</span>
            <ArrowRight size={14} className="view-details-arrow" />
          </button>
        </div>

        {/* Bottom Multi-color Gradient Bar */}
        <div
          className="visa-accent-gradient-bar"
          style={visa.accentGradient ? { background: visa.accentGradient } : undefined}
        />
      </div>
    </div>
  );
}

export default VisaCard;
