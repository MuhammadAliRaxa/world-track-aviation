'use client';

import React from 'react';
import { Search } from 'lucide-react';

export function UmrahHotelRow({
  hotel,
  index,
  isLast,
  canRemove,
  onUpdate,
  onAdd,
  onRemove,
}) {
  return (
    <div className="umrah-section-block">
      {/* Hotel Header Row */}
      <div className="umrah-hotel-header-row">
        <h3 className="umrah-section-title">
          Add Hotel {index + 1}
        </h3>
        <div className="umrah-hotel-badges">
          <span className="umrah-bed-tag">
            {hotel.bedsText}
          </span>
          <span className="umrah-nights-tag">
            {hotel.nights} nights
          </span>
        </div>
      </div>

      {/* Hotel Inputs Grid */}
      <div className="umrah-hotel-grid">
        {/* Location */}
        <div className="umrah-field-group">
          <label className="umrah-field-label">
            Location
          </label>
          <select
            value={hotel.location}
            onChange={(e) => onUpdate(hotel.id, 'location', e.target.value)}
            className="umrah-field-select"
          >
            <option value="Makkah">Makkah</option>
            <option value="Madinah">Madinah</option>
          </select>
        </div>

        {/* Check In */}
        <div className="umrah-field-group">
          <label className="umrah-field-label">
            Check In
          </label>
          <input
            type="date"
            value={hotel.checkIn}
            onChange={(e) => onUpdate(hotel.id, 'checkIn', e.target.value)}
            className="umrah-field-input"
          />
        </div>

        {/* Check Out */}
        <div className="umrah-field-group">
          <label className="umrah-field-label">
            Check Out
          </label>
          <input
            type="date"
            value={hotel.checkOut}
            onChange={(e) => onUpdate(hotel.id, 'checkOut', e.target.value)}
            className="umrah-field-input"
          />
        </div>

        {/* Hotel name */}
        <div className="umrah-field-group">
          <label className="umrah-field-label">
            Hotel name
          </label>
          <div className="umrah-field-search-wrap">
            <input
              type="text"
              value={hotel.hotelName}
              onChange={(e) => onUpdate(hotel.id, 'hotelName', e.target.value)}
              className="umrah-field-input"
              placeholder="Search hotel name"
            />
            <Search
              size={14}
              className="umrah-field-search-icon"
            />
          </div>
        </div>

        {/* Select Room Type */}
        <div className="umrah-field-group">
          <label className="umrah-field-label">
            Select Room Type
          </label>
          <select
            value={hotel.roomType}
            onChange={(e) => onUpdate(hotel.id, 'roomType', e.target.value)}
            className="umrah-field-select"
          >
            <option value="Double">Double</option>
            <option value="Triple">Triple</option>
            <option value="Quad">Quad</option>
            <option value="Sharing">Sharing</option>
          </select>
        </div>
      </div>

      {/* Add / Remove buttons for Hotel row */}
      {isLast && (
        <div className="umrah-row-actions">
          {canRemove && (
            <button
              type="button"
              onClick={() => onRemove(hotel.id)}
              className="umrah-btn-remove"
            >
              Remove
            </button>
          )}
          <button
            type="button"
            onClick={onAdd}
            className="umrah-btn-add"
          >
            Add Hotel
          </button>
        </div>
      )}
    </div>
  );
}
