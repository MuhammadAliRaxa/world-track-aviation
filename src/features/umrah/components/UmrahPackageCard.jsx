'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Building2 } from 'lucide-react';

const DEFAULT_UMRAH_IMAGE = 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80';

const getUmrahImage = (pkg) => {
  if (pkg?.image) return pkg.image;
  if (Array.isArray(pkg?.images) && pkg.images[0]?.file) return pkg.images[0].file;
  if (Array.isArray(pkg?.images) && typeof pkg.images[0] === 'string') return pkg.images[0];
  if (pkg?.category === '5 Star' || pkg?.badge === '5-STAR') {
    return 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80';
  }
  return 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80';
};

/* Kaaba Silhouette Icon */
function KaabaIcon({ size = 15, color = '#0f172a', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} aria-hidden="true">
      <path d="M12 2L3 6.5V17.5L12 22L21 17.5V6.5L12 2ZM12 4.3L18.7 7.7L12 11.1L5.3 7.7L12 4.3ZM5 9.4L11 12.4V19.6L5 16.6V9.4ZM13 19.6V12.4L19 9.4V16.6L13 19.6Z" />
    </svg>
  );
}

/* Mosque Minaret Silhouette Icon */
function MosqueSilhouetteIcon({ size = 15, color = '#0f172a', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} aria-hidden="true">
      <path d="M12 2C12 2 11.2 3.8 9.5 5C8 6 7.5 7.5 7.5 9.5V11H6V7.5L4.5 6L3 7.5V20.5C3 21 3.5 21.5 4 21.5H8.5V16.5C8.5 14.8 9.8 13.5 11.5 13.5H12.5C14.2 13.5 15.5 14.8 15.5 16.5V21.5H20C20.5 21.5 21 21 21 20.5V7.5L19.5 6L18 7.5V11H16.5V9.5C16.5 7.5 16 6 14.5 5C12.8 3.8 12 2 12 2Z" />
    </svg>
  );
}

export function UmrahPackageCard({ pkg, onBookPackage }) {
  const router = useRouter();

  const handleCardClick = () => {
    const slug = pkg.slug || pkg.seo?.url_slug || pkg.id;
    router.push(`/umrah-packages/${slug}/`);
  };

  const imageUrl = getUmrahImage(pkg);
  const displayTitle = pkg.title || pkg.package_name || pkg.name || '5-Star VIP Royal Haramain Package';
  const displayBadge = pkg.badge || pkg.category || '5-STAR';
  const rawDuration = pkg.duration || '10 Days';
  const displayDuration = typeof rawDuration === 'number' || !String(rawDuration).toLowerCase().includes('day')
    ? `${rawDuration} Days`
    : String(rawDuration);
  const displayTagline = pkg.tagline || pkg.short_description || 'Supreme luxury adjacent to the sacred courtyards with private VIP transfers';
  
  const rawPrice = pkg.pricePKR || pkg.price || pkg.prices?.sharing || '485000';
  let cleanPrice = String(rawPrice).trim();
  if (cleanPrice.startsWith('Rs') || cleanPrice.startsWith('RS')) {
    cleanPrice = cleanPrice.replace(/^Rs\.?\s*/i, '');
  }
  const numericPrice = parseInt(cleanPrice.replace(/[^0-9]/g, ''), 10);
  const displayPrice = !isNaN(numericPrice) && numericPrice > 0
    ? `Rs ${numericPrice.toLocaleString()}`
    : `Rs ${cleanPrice}`;

  const makkahHotelName = pkg.makkahHotel?.name || pkg.makkah_hotel?.name || pkg.makkahHotel || 'Makkah Clock Royal Tower (Fairmont)';
  const madinahHotelName = pkg.madinahHotel?.name || pkg.madina_hotel?.name || pkg.madinah_hotel?.name || pkg.madinahHotel || 'The Oberoi Madina / Dar Al Taqwa';

  return (
    <div
      className="umrah-package-card"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
    >
      {/* Media Image */}
      <div className="umrah-card-media">
        <img
          src={imageUrl}
          alt={pkg.imageAlt || pkg.seo?.image_alt || `${displayTitle} - World Track Aviation`}
          className="umrah-card-img"
          loading="lazy"
          decoding="async"
          width={360}
          height={205}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = DEFAULT_UMRAH_IMAGE;
          }}
        />
        {/* Top-Left Category Badge */}
        <div className="umrah-badge-tier">
          <span>{displayBadge}</span>
        </div>

        {/* Top-Right Duration Badge */}
        <div className="umrah-badge-duration">
          <span>{displayDuration}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="umrah-card-body">
        <h3 className="umrah-card-title">{displayTitle}</h3>
        <p className="umrah-card-tagline">{displayTagline}</p>

        {/* Hotels Information Panel */}
        <div className="umrah-hotels-panel">
          {/* Makkah Hotel */}
          <div className="umrah-hotel-entry">
            <KaabaIcon size={15} color="#0f172a" className="hotel-entry-icon" />
            <div className="umrah-hotel-text-cell">
              <span className="hotel-city-label">MAKKAH HOTEL</span>
              <div className="hotel-name-val">{makkahHotelName}</div>
            </div>
          </div>

          {/* Madinah Hotel */}
          <div className="umrah-hotel-entry">
            <MosqueSilhouetteIcon size={15} color="#0f172a" className="hotel-entry-icon" />
            <div className="umrah-hotel-text-cell">
              <span className="hotel-city-label">MADINAH HOTEL</span>
              <div className="hotel-name-val">{madinahHotelName}</div>
            </div>
          </div>
        </div>

        {/* Pricing & CTA Action Row */}
        <div className="umrah-pricing-cta-row">
          <div className="umrah-price-block">
            <span className="umrah-price-label">PER PERSON</span>
            <div className="umrah-price-val">{displayPrice}</div>
          </div>

          <button
            type="button"
            className="umrah-book-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
          >
            <span>View Package</span>
          </button>
        </div>
      </div>
    </div>
  );
}

