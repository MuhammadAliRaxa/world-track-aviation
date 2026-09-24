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

export function UmrahPackageCard({ pkg, onBookPackage }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/umrah-packages/${pkg.id}/`);
  };

  const imageUrl = getUmrahImage(pkg);
  const displayTitle = pkg.title || pkg.package_name || pkg.name || 'Umrah Package';
  const displayBadge = pkg.badge || pkg.category || 'UMRAH';
  const displayDuration = pkg.duration
    ? (typeof pkg.duration === 'number' || !String(pkg.duration).includes('Day') ? `${pkg.duration} Days` : pkg.duration)
    : '14 Days';
  const displayTagline = pkg.tagline || pkg.short_description || 'Complete Umrah package with hotels and transfers';
  
  const rawPrice = pkg.price || pkg.prices?.sharing;
  const displayPrice = pkg.price && typeof pkg.price === 'string' && pkg.price.startsWith('Rs')
    ? pkg.price
    : (rawPrice ? `Rs ${Number(rawPrice).toLocaleString()}` : 'Contact for Price');

  const makkahHotelName = pkg.makkahHotel?.name || pkg.makkah_hotel?.name || 'Makkah Hotel';
  const madinahHotelName = pkg.madinahHotel?.name || pkg.madina_hotel?.name || pkg.madinah_hotel?.name || 'Madinah Hotel';

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
          height={200}
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
            <Building2 size={13} className="hotel-entry-icon" />
            <div className="umrah-hotel-text-cell">
              <span className="hotel-city-label">MAKKAH HOTEL</span>
              <div className="hotel-name-val">{makkahHotelName}</div>
            </div>
          </div>

          {/* Madinah Hotel */}
          <div className="umrah-hotel-entry">
            <Building2 size={13} className="hotel-entry-icon" />
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

