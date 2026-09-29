'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { CufSelect } from './CufSelect';
import { RoomTypePopup } from '../../../hotels/components/RoomTypePopup';
import { hotelService } from '../../../../services/hotel.service';

const DEFAULT_LOCATIONS = ['Makkah', 'Madinah'];
const DEFAULT_ROOM_TYPES = ['Double', 'Triple', 'Quad', 'Sharing'];

export function UmrahHotelRow({
  hotel,
  index,
  isLast,
  canRemove,
  onUpdate,
  onAdd,
  onRemove,
  hotelLookups,
}) {
  const [open, setOpen] = useState(null);
  const roomTypeWrapRef = useRef(null);

  // Available room types for the currently selected hotel (fetched from API)
  const [availableRoomTypes, setAvailableRoomTypes] = useState(
    hotel.availableRoomTypes || DEFAULT_ROOM_TYPES
  );

  // Multi-room counts (e.g. { Double: 2, Triple: 1 })
  const [roomCounts, setRoomCounts] = useState(
    hotel.roomCounts || { Double: 1, Triple: 0, Quad: 0, Quint: 0, Sharing: 0 }
  );

  const toggle = (key) => setOpen((c) => (c === key ? null : key));
  const close = () => setOpen(null);

  // Close Room Type popup on outside click
  useEffect(() => {
    if (open !== 'roomType') return;
    function handleClickOutside(event) {
      if (roomTypeWrapRef.current && !roomTypeWrapRef.current.contains(event.target)) {
        close();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  // Cities from API lookups
  const locationOptions =
    hotelLookups?.cities && hotelLookups.cities.length > 0
      ? hotelLookups.cities
      : DEFAULT_LOCATIONS;

  // Filter hotels from API by current city/location
  const allHotels = hotelLookups?.hotels || [];
  const currentCity = (hotel.location || 'Makkah').toLowerCase();
  const cityFilteredHotels = allHotels.filter((h) => {
    const loc = (h.location || h.city || '').toLowerCase();
    if (currentCity.includes('madin') || currentCity.includes('medin')) {
      return loc.includes('madin') || loc.includes('medin');
    }
    return loc.includes('makkah') || loc.includes('mecca');
  });

  const displayHotels = cityFilteredHotels.length > 0 ? cityFilteredHotels : allHotels;
  const hotelOptions = displayHotels.map((h) => ({
    value: `${h.name}${h.category ? ` ${h.category}` : ''}`,
    label: `${h.name}${h.category ? ` (${h.category})` : ''}`,
    id: h.id,
    name: h.name,
    category: h.category,
  }));

  // Fetch hotel room types from API when hotelId is known
  const loadRoomTypesForHotel = (hotelId) => {
    if (!hotelId) return;
    hotelService.getHotelRoomTypes(hotelId).then((res) => {
      if (Array.isArray(res) && res.length > 0) {
        const types = res.map((r) => r.type || r.room_type || r.name).filter(Boolean);
        if (types.length > 0) {
          const uniqueTypes = Array.from(new Set(types));
          setAvailableRoomTypes(uniqueTypes);
          onUpdate(hotel.id, 'availableRoomTypes', uniqueTypes);
        }
      }
    }).catch(() => {});
  };

  // When location changes, update location & reset hotel selection so placeholder shows
  const handleLocationChange = (newLoc) => {
    onUpdate(hotel.id, 'location', newLoc);
    onUpdate(hotel.id, 'hotelName', '');
    onUpdate(hotel.id, 'hotelId', null);
    onUpdate(hotel.id, 'roomType', '');
    onUpdate(hotel.id, 'bedsText', '');
    setRoomCounts({ Double: 0, Triple: 0, Quad: 0, Quint: 0, Sharing: 0 });
    setAvailableRoomTypes(DEFAULT_ROOM_TYPES);
  };

  // When hotel is selected from dropdown, fetch room types from API
  const handleHotelSelect = (selectedVal) => {
    onUpdate(hotel.id, 'hotelName', selectedVal);
    const matched = hotelOptions.find((o) => o.value === selectedVal);
    if (matched?.id) {
      onUpdate(hotel.id, 'hotelId', matched.id);
      loadRoomTypesForHotel(matched.id);
    }
  };

  // Update room count (multi-selection like No of Pax: allows 2 or more Double, Triple, etc.)
  const handleUpdateRoomCount = (rType, delta) => {
    setRoomCounts((prev) => {
      const current = prev[rType] ?? 0;
      const next = Math.max(0, current + delta);
      const nextCounts = { ...prev, [rType]: next };

      // Format trigger label (e.g., "2 Double, 1 Triple")
      const labelParts = [];
      const bedParts = [];
      Object.entries(nextCounts).forEach(([type, count]) => {
        if (count > 0) {
          labelParts.push(`${count} ${type}`);
          bedParts.push(`(${count} ${type} Bed)`);
        }
      });

      const label = labelParts.join(', ') || 'Select type';
      const beds = bedParts.join(', ') || '';

      onUpdate(hotel.id, 'roomType', label);
      onUpdate(hotel.id, 'bedsText', beds);
      onUpdate(hotel.id, 'roomCounts', nextCounts);

      return nextCounts;
    });
  };

  return (
    <div className="cuf-section">
      {/* Header with Bed count badge and Nights count badge */}
      <div className="cuf-row-header">
        <h3 className="cuf-section-title">Hotel Details</h3>
        <div className="cuf-row-header-right">
          {hotel.bedsText && (
            <span className="cuf-badge cuf-badge--green">{hotel.bedsText}</span>
          )}
          <span className="cuf-badge cuf-badge--muted">{hotel.nights} nights</span>
        </div>
      </div>

      {/* 5-column grid */}
      <div className="cuf-hotel-grid">
        {/* 1. Location (from API lookups) */}
        <CufSelect
          label="Location"
          value={hotel.location}
          placeholder="Select city"
          options={locationOptions}
          onChange={handleLocationChange}
          isOpen={open === 'location'}
          onToggle={() => toggle('location')}
          onClose={close}
        />

        {/* 2. Check In */}
        <div className="cuf-field">
          <label className="cuf-label">Check In</label>
          <input
            type="date"
            className="cuf-input"
            value={hotel.checkIn}
            onChange={(e) => onUpdate(hotel.id, 'checkIn', e.target.value)}
          />
        </div>

        {/* 3. Check Out */}
        <div className="cuf-field">
          <label className="cuf-label">Check Out</label>
          <input
            type="date"
            className="cuf-input"
            value={hotel.checkOut}
            onChange={(e) => onUpdate(hotel.id, 'checkOut', e.target.value)}
          />
        </div>

        {/* 4. Hotel Name (Dropdown from API lookups with search filter and placeholder) */}
        <CufSelect
          label="Hotel name"
          value={hotel.hotelName}
          placeholder="Select Hotel"
          options={hotelOptions}
          onChange={handleHotelSelect}
          isOpen={open === 'hotelName'}
          onToggle={() => toggle('hotelName')}
          onClose={close}
          searchable={true}
          searchPlaceholder="Search hotel..."
          header={`Hotels in ${hotel.location || 'Location'} (${hotelOptions.length})`}
        />

        {/* 5. Select Room Type (Counter popup like No of Pax: allows 2 or more Double, Triple, etc.) */}
        <div className="cuf-field" ref={roomTypeWrapRef} style={{ position: 'relative' }}>
          <label className="cuf-label">Select Room Type</label>
          <div className="cuf-inline-row">
            <div style={{ flex: 1, minWidth: 0, position: 'relative' }}>
              <button
                type="button"
                className={`cuf-custom-select-trigger ${open === 'roomType' ? 'cuf-custom-select-trigger--open' : ''}`}
                onClick={() => toggle('roomType')}
                aria-expanded={open === 'roomType'}
              >
                <span className={`cuf-custom-select-value ${!hotel.roomType ? 'cuf-custom-select-placeholder' : ''}`}>
                  {hotel.roomType || 'Select type'}
                </span>
                <ChevronDown
                  size={15}
                  className={`cuf-custom-select-chevron ${open === 'roomType' ? 'cuf-custom-select-chevron--open' : ''}`}
                />
              </button>

              <RoomTypePopup
                isOpen={open === 'roomType'}
                onClose={close}
                counts={roomCounts}
                onUpdateCount={handleUpdateRoomCount}
                roomTypes={availableRoomTypes}
              />
            </div>

            <button
              type="button"
              onClick={() => canRemove && onRemove(hotel.id)}
              className="cuf-icon-btn cuf-icon-btn--red"
              style={{ opacity: canRemove ? 1 : 0.85, cursor: canRemove ? 'pointer' : 'default' }}
              title="Remove hotel"
            >
              <Minus size={15} strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={onAdd}
              className="cuf-icon-btn cuf-icon-btn--blue"
              title="Add hotel"
            >
              <Plus size={15} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
