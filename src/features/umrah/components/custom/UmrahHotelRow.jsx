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
    // Real per-night rate in SAR from API (min_rate field)
    minRateSar: Number(h.priceNumeric || h.min_rate || 0),
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
    const resetCounts = { Double: 0, Triple: 0, Quad: 0, Quint: 0, Sharing: 0 };
    setRoomCounts(resetCounts);
    setAvailableRoomTypes(DEFAULT_ROOM_TYPES);
    onUpdate(hotel.id, {
      location: newLoc,
      hotelName: '',
      hotelId: null,
      roomType: '',
      bedsText: '',
      roomCounts: resetCounts,
    });
  };

  // Fetch hotel details & real room rates from GET /hotel/{id} API
  const fetchHotelRates = (hotelId, name) => {
    if (!hotelId) return;
    loadRoomTypesForHotel(hotelId);

    hotelService.getHotelDetail(hotelId).then((hotelDetail) => {
      if (!hotelDetail) return;
      const rates = {};
      const rawRates = Array.isArray(hotelDetail.room_rates)
        ? hotelDetail.room_rates
        : (Array.isArray(hotelDetail?.data?.[0]?.room_rates) ? hotelDetail.data[0].room_rates : []);

      rawRates.forEach((r) => {
        const rType = r.room_type || r.type || r.name;
        const rawPrice = Number(r.price || r.selling_price || r.rate || 0);
        // Normalize if entered in PKR in database (e.g. 100,000)
        const price = rawPrice > 10000 ? Math.round(rawPrice / 78) : rawPrice;
        if (rType && price > 0) rates[rType] = price;
      });

      // Ensure sensible fallbacks for other room types if base exists
      const baseMin = Number(hotelDetail.price || hotelDetail.min_rate || 0);
      const cleanMin = baseMin > 10000 ? Math.round(baseMin / 78) : baseMin;
      if (!rates['Double'] && cleanMin > 0) rates['Double'] = cleanMin;
      if (!rates['Triple'] && rates['Double']) rates['Triple'] = rates['Double'];
      if (!rates['Quad'] && rates['Triple']) rates['Quad'] = rates['Triple'];
      if (!rates['Quint'] && rates['Quad']) rates['Quint'] = rates['Quad'];
      if (!rates['Sharing']) {
        rates['Sharing'] = rates['Quint'] || rates['Quad'] || rates['Triple'] || rates['Double'] || cleanMin;
      }

      // Update room types options if room_rates contains room types
      if (rawRates.length > 0) {
        const types = rawRates.map((r) => r.room_type).filter(Boolean);
        if (types.length > 0) {
          if (!types.includes('Sharing')) types.push('Sharing');
          const uniqueTypes = Array.from(new Set(types));
          setAvailableRoomTypes(uniqueTypes);
          onUpdate(hotel.id, 'availableRoomTypes', uniqueTypes);
        }
      }

      onUpdate(hotel.id, {
        roomRates: rates,
        minRateSar: cleanMin > 0 ? cleanMin : hotel.minRateSar,
      });
      console.log(`[HotelRates] ${name || hotelDetail.name} (ID: ${hotelId}) — room rates loaded from API (SAR):`, rates);
    }).catch((err) => {
      console.warn(`[HotelRates] Failed loading details for hotel ${hotelId}:`, err);
    });
  };

  // Fetch room rates on mount or update if hotelId is present but roomRates not yet loaded
  useEffect(() => {
    if (hotel.hotelId && (!hotel.roomRates || Object.keys(hotel.roomRates).length === 0)) {
      fetchHotelRates(hotel.hotelId, hotel.hotelName);
    }
  }, [hotel.hotelId]);

  // When hotel is selected from dropdown, fetch room types + room rates from GET /hotel/{id}
  const handleHotelSelect = (selectedVal) => {
    const matched = hotelOptions.find((o) => o.value === selectedVal);
    const hotelId = matched?.id || null;
    const minRate = matched?.minRateSar || 0;

    onUpdate(hotel.id, {
      hotelName: selectedVal,
      hotelId: hotelId,
      minRateSar: minRate,
      roomRates: {}, // reset until API returns
    });

    if (hotelId) {
      fetchHotelRates(hotelId, selectedVal);
    }
  };

  // Update room count (multi-selection like No of Pax: allows 2 or more Double, Triple, etc.)
  const handleUpdateRoomCount = (rType, delta) => {
    const current = roomCounts[rType] ?? 0;
    const next = Math.max(0, current + delta);
    const nextCounts = { ...roomCounts, [rType]: next };

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

    setRoomCounts(nextCounts);
    onUpdate(hotel.id, {
      roomType: label,
      bedsText: beds,
      roomCounts: nextCounts,
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
