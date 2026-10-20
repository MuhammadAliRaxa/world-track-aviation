'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Clock, Globe, CalendarDays } from 'lucide-react';

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

function VisaCardComponent({ visa, priority = false }) {
  const router = useRouter();

  const slug = visa.seo?.url_slug || visa.slug || visa.id;
  const handleAction = (e) => {
    e.stopPropagation();
    router.push(`/visas/${slug}/`);
  };

  // Format processing time cleanly (e.g. "2-3 days")
  const rawDuration = visa.processing_time || visa.processingTime || visa.duration || '2 - 3 Days';
  const formattedDuration = String(rawDuration)
    .replace(/^processing\s*time\s*:?\s*/i, '')
    .replace(/\s*-\s*/g, '-')
    .toLowerCase();

  // Entry type and validity
  const entryType = visa.entry_type || visa.entryType || visa.specs?.entryType || null;
  const validity = visa.validity || visa.specs?.validity || null;

  const imageUrl = getVisaImage(visa);
  const [imgSrc, setImgSrc] = useState(imageUrl);
  const [prevImageUrl, setPrevImageUrl] = useState(imageUrl);

  if (prevImageUrl !== imageUrl) {
    setPrevImageUrl(imageUrl);
    setImgSrc(imageUrl);
  }

  const displayTitle = visa.title || visa.name || (visa.country ? `${visa.country} Visit Visa` : 'Tourist Visit Visa');

  // Format price cleanly without duplicate "Rs"
  const rawPrice = visa.pricePKR || visa.rate || visa.price || '44500';
  let cleanPrice = String(rawPrice).trim();
  if (cleanPrice.startsWith('Rs') || cleanPrice.startsWith('RS')) {
    cleanPrice = cleanPrice.replace(/^Rs\.?\s*/i, '');
  }
  const numericPrice = parseInt(cleanPrice.replace(/[^0-9]/g, ''), 10);
  const displayPrice = !isNaN(numericPrice) && numericPrice > 0 ? numericPrice.toLocaleString() : cleanPrice;

  return (
    <div
      className="visa-card-item"
      onClick={() => router.push(`/visas/${slug}/`)}
      id={`visa-card-${visa.id}`}
    >
      {/* Media Image Container */}
      <div className="visa-card-media">
        <Image
          src={imgSrc}
          alt={visa.imageAltText || visa.seo?.image_alt || `${displayTitle} - World Track Aviation`}
          className="visa-card-img"
          width={360}
          height={205}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          priority={priority}
          quality={75}
          onError={() => {
            setImgSrc(DEFAULT_VISA_IMAGE);
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
          <Clock size={14} className="visa-clock-icon" strokeWidth={2.4} />
          <span>Processing time {formattedDuration}</span>
        </div>

        {/* Entry Type */}
        {entryType && (
          <div className="visa-processing-row">
            <Globe size={14} className="visa-clock-icon" strokeWidth={2.4} />
            <span>{entryType}</span>
          </div>
        )}

        {/* Validity */}
        {validity && (
          <div className="visa-processing-row">
            <CalendarDays size={14} className="visa-clock-icon" strokeWidth={2.4} />
            <span>Validity {validity}</span>
          </div>
        )}

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
          </button>
        </div>

        {/* Bottom Multi-color Gradient Accent Bar */}
        <div
          className="visa-accent-gradient-bar"
          style={visa.accentGradient ? { background: visa.accentGradient } : undefined}
        />
      </div>
    </div>
  );
}

export const VisaCard = React.memo(VisaCardComponent);
export default VisaCard;
