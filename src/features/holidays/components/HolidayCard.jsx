'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Star, Clock, Hotel, Ticket, MapPin, IdCard, Check } from 'lucide-react';

const DEFAULT_INCLUSIONS = [
  { icon: 'hotel', label: 'Hotel' },
  { icon: 'visa', label: 'Visa' },
  { icon: 'air', label: 'Air Ticket' },
  { icon: 'transfer', label: 'Pick & Drop' },
  { icon: 'insurance', label: 'Insurance' },
];

function renderInclusionIcon(type) {
  switch (type) {
    case 'hotel':
      return <Hotel size={14} className="inc-svg-icon" strokeWidth={2.2} />;
    case 'visa':
      return (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="inc-svg-icon"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <circle cx="12" cy="8.5" r="2.5" />
          <path d="M8 15a4 4 0 0 1 8 0" />
          <line x1="8" y1="18" x2="16" y2="18" />
        </svg>
      );
    case 'air':
      return <Ticket size={14} className="inc-svg-icon" strokeWidth={2.2} />;
    case 'transfer':
      return <MapPin size={14} className="inc-svg-icon" strokeWidth={2.2} />;
    case 'insurance':
      return <IdCard size={14} className="inc-svg-icon" strokeWidth={2.2} />;
    default:
      return <Check size={14} className="inc-svg-icon" strokeWidth={2.2} />;
  }
}

const DEFAULT_HOLIDAY_IMAGE = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80';

export function HolidayCard({ tour, onSelectTour }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/tours/${tour.id}`);
  };

  const inclusions = tour.packageIncludes && tour.packageIncludes.length > 0
    ? tour.packageIncludes
    : DEFAULT_INCLUSIONS;

  const row1 = inclusions.slice(0, 3);
  const row2 = inclusions.slice(3);

  const displayTitle = tour.title || tour.name || 'Tour Package';
  const imageUrl = tour.image || DEFAULT_HOLIDAY_IMAGE;

  const rawPrice = tour.pricePKR ?? tour.price;
  const formattedPrice = typeof rawPrice === 'number'
    ? rawPrice.toLocaleString()
    : (rawPrice ? String(rawPrice) : '158,000');

  return (
    <div
      className="holiday-tour-card"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
    >
      {/* Media Image */}
      <div className="holiday-media-box">
        <img
          src={imageUrl}
          alt={displayTitle}
          className="holiday-card-img"
          loading="lazy"
          decoding="async"
          width={360}
          height={200}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = DEFAULT_HOLIDAY_IMAGE;
          }}
        />

        {/* Top-Right Star Rating */}
        <div className="holiday-rating-pill">
          <Star size={11} className="rating-star-icon" fill="#000000" color="#000000" />
          <span className="rating-val">{tour.rating}</span>
          <span className="rating-count">({tour.reviewCount})</span>
        </div>

        {/* Bottom-Left Duration Pill */}
        <div className="holiday-duration-pill">
          <Clock size={12} className="holiday-clock-icon" strokeWidth={2.2} />
          <span>{tour.duration}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="holiday-card-body">
        <div className="holiday-location-tag">{tour.location || tour.destination}</div>
        <h3 className="holiday-card-title">{tour.title}</h3>

        {/* Package Includes Box */}
        <div className="holiday-package-includes-wrapper">
          <div className="inclusions-box-title">PACKAGE INCLUDES:</div>
          <div className="holiday-inclusions-box">
            {/* Row 1: Hotel, Visa, Air Ticket */}
            <div className="holiday-inclusions-row">
              {row1.map((inc, idx) => (
                <div key={idx} className="holiday-inclusion-item">
                  {renderInclusionIcon(inc.icon)}
                  <span>{inc.label}</span>
                </div>
              ))}
            </div>

            {/* Row 2: Pick & Drop, Insurance */}
            {row2.length > 0 && (
              <div className="holiday-inclusions-row">
                {row2.map((inc, idx) => (
                  <div key={idx} className="holiday-inclusion-item">
                    {renderInclusionIcon(inc.icon)}
                    <span>{inc.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Pricing & View Details Action Row */}
        <div className="holiday-pricing-action-row">
          <div className="holiday-price-col">
            <span className="holiday-price-label">STATING FROM</span>
            <div className="holiday-price-amount">
              <span className="holiday-price-val">Rs {formattedPrice}</span>
              <span className="per-person-unit">/ person</span>
            </div>
          </div>

          <button
            type="button"
            className="holiday-view-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

