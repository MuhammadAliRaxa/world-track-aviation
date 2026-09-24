'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, ArrowRight } from 'lucide-react';

const DEFAULT_HOTEL_IMAGE = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80';

export function HotelCard({ hotel }) {
  const router = useRouter();

  const handleSelectHotel = () => {
    const target = hotel.slug || hotel?.seo?.url_slug || hotel.id;
    router.push(`/our-hotels/${target}/`);
  };

  const firstImage = Array.isArray(hotel.images) && hotel.images[0];
  const imageUrl =
    hotel.image ||
    (firstImage?.file) ||
    (typeof firstImage === 'string' ? firstImage : null) ||
    DEFAULT_HOTEL_IMAGE;

  const imageAlt =
    hotel.imageAlt ||
    hotel?.seo?.image_alt ||
    firstImage?.alt_text ||
    hotel.name ||
    'Verified Hotel in Makkah & Madinah';

  const formatRating = (val) => {
    if (!val) return '9.2/10';
    const s = String(val).trim();
    return s.includes('/') ? s : `${s}/10`;
  };

  const formatReviews = (count) => {
    if (!count) return '1,154';
    const num = parseInt(String(count).replace(/[^0-9]/g, ''), 10);
    return !isNaN(num) ? num.toLocaleString() : count;
  };

  const formatPrice = (p) => {
    if (!p) return 'Rs 98,369';
    if (typeof p === 'number') {
      return `Rs ${p.toLocaleString()}`;
    }
    const s = String(p).trim();
    if (/^\d+(\.\d+)?$/.test(s)) {
      return `Rs ${Number(s).toLocaleString()}`;
    }
    const num = parseInt(s.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(num) && num > 0) {
      if (s.startsWith('SAR')) {
        return `SAR ${num.toLocaleString()}`;
      }
      return `Rs ${num.toLocaleString()}`;
    }
    return s;
  };

  const starBadge = hotel.stars ? `${hotel.stars}-STAR` : (hotel.tag || '5-STAR');

  return (
    <div
      className="hotel-card-item"
      onClick={handleSelectHotel}
      style={{ cursor: 'pointer' }}
    >
      {/* Image Container */}
      <div className="hotel-card-media">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="hotel-card-img"
          loading="lazy"
          decoding="async"
          width={360}
          height={205}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = DEFAULT_HOTEL_IMAGE;
          }}
        />

        {/* 5-STAR Top-Left Amber Badge */}
        <div className="hotel-star-badge-top">
          <span>{starBadge}</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="hotel-card-body">
        {/* Location Pin */}
        <div className="hotel-location-row">
          <MapPin size={14} className="location-pin-icon" />
          <span className="location-name">{hotel.location || hotel.city || 'Singapore'}</span>
        </div>

        {/* Hotel Name */}
        <h3 className="hotel-title-text" title={hotel.name}>
          {hotel.name}
        </h3>

        {/* Rating Score Badge & Reviews */}
        <div className="hotel-rating-row">
          <span className="rating-pill-badge">{formatRating(hotel.rating)}</span>
          <span className="reviews-count-text">{formatReviews(hotel.reviewsCount)} reviews</span>
        </div>

        {/* Price & Book Action */}
        <div className="hotel-pricing-action-row">
          <div className="price-stack">
            <span className="price-from-label">FROM</span>
            <div className="price-value-line">
              <span className="price-amount">{formatPrice(hotel.price)}</span>
              <span className="price-unit"> {hotel.unit || '/ night'}</span>
            </div>
          </div>

          <button
            type="button"
            className="hotel-book-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleSelectHotel();
            }}
          >
            <span>Book</span>
            <ArrowRight size={14} className="book-arrow-icon" strokeWidth={2.3} />
          </button>
        </div>
      </div>
    </div>
  );
}
