'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Star, ArrowRight } from 'lucide-react';

const DEFAULT_HOTEL_IMAGE = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80';

export function HotelCard({ hotel }) {
  const router = useRouter();

  const handleSelectHotel = () => {
    router.push(`/hotels/${hotel.id}`);
  };

  const firstImage = Array.isArray(hotel.images) && hotel.images[0];
  const imageUrl =
    hotel.image ||
    (firstImage?.file) ||
    (typeof firstImage === 'string' ? firstImage : null) ||
    DEFAULT_HOTEL_IMAGE;

  const imageAlt =
    (firstImage?.alt_text) ||
    hotel.name ||
    'Hotel';

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
          height={190}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = DEFAULT_HOTEL_IMAGE;
          }}
        />

        {/* Feature / Category Tag Badge */}
        {hotel.tag && (
          <div className="hotel-tag-badge">
            <span>{hotel.tag}</span>
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="hotel-card-body">
        {/* Location Pin */}
        <div className="hotel-location-row">
          <MapPin size={14} className="location-pin-icon" />
          <span className="location-name">{hotel.location}</span>
        </div>

        {/* Hotel Name */}
        <h3 className="hotel-title-text" title={hotel.name}>
          {hotel.name}
        </h3>

        {/* Stars */}
        <div className="hotel-stars-row">
          {[...Array(5)].map((_, idx) => {
            const isFilled = idx < (hotel.stars || 0);
            return (
              <Star
                key={idx}
                size={15}
                fill={isFilled ? '#f59e0b' : 'none'}
                stroke={isFilled ? '#f59e0b' : '#cbd5e1'}
                className={isFilled ? 'star-filled' : 'star-muted'}
              />
            );
          })}
        </div>

        {/* Rating Score Badge & Reviews */}
        <div className="hotel-rating-row">
          <span className="rating-pill-badge">{hotel.rating}</span>
          <span className="reviews-count-text">{hotel.reviewsCount} reviews</span>
        </div>

        {/* Price & Book Action */}
        <div className="hotel-pricing-action-row">
          <div className="price-stack">
            <span className="price-from-label">FROM</span>
            <div className="price-value-line">
              <span className="price-amount">{hotel.price}</span>
              <span className="price-unit"> {hotel.unit}</span>
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
            <ArrowRight size={14} className="book-arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
