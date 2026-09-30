'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { CufSelect } from './CufSelect';
import { RoomTypePopup } from '../../../hotels/components/RoomTypePopup';
import { hotelService } from '../../../../services/hotel.service';
import {
  calculateTotalBeds,
  formatRoomSelection,
  suggestOptimalRooms,
} from '../../utils/roomCapacity';

const DEFAULT_LOCATIONS = ['Makkah', 'Madinah'];

export function UmrahHotelRow({
  hotel,
  index,
  isLast,
  canRemove,
  onUpdate,
  onAdd,
  onRemove,
  hotelLookups,
  adultCount = 1,
  errors = {},
  onClearError,
}) {
  const [open, setOpen] = useState(null);
  const roomTypeWrapRef = useRef(null);

  // Available room types strictly from API for the selected hotel
  const [availableRoomTypes, setAvailableRoomTypes] = useState(
    hotel.availableRoomTypes || []
  );

  // Multi-room counts (e.g. { Double: 2, Triple: 1 })
  const [roomCounts, setRoomCounts] = useState(hotel.roomCounts || {});
  const [isLoadingRoomTypes, setIsLoadingRoomTypes] = useState(false);

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
    minRateSar: Number(h.priceNumeric || h.min_rate || 0),
  }));

  // Fetch hotel room types strictly from GET /hotel/room/type/{hotelId} API
  const loadRoomTypesForHotel = (hotelId, currentSelectedCounts = null) => {
    if (!hotelId) return;
    setIsLoadingRoomTypes(true);

    hotelService.getHotelRoomTypes(hotelId)
      .then((res) => {
        setIsLoadingRoomTypes(false);
        const rawTypes = Array.isArray(res) ? res : (Array.isArray(res?.data) ? res.data : []);
        const types = rawTypes.map((r) => r.type || r.room_type || r.name).filter(Boolean);
        const uniqueTypes = Array.from(new Set(types));

        if (uniqueTypes.length > 0) {
          setAvailableRoomTypes(uniqueTypes);

          // Clean existing room counts to only keep types present in the API
          const cleanedCounts = {};
          let hasExistingValidCounts = false;
          if (currentSelectedCounts) {
            uniqueTypes.forEach((t) => {
              if (currentSelectedCounts[t] > 0) {
                cleanedCounts[t] = currentSelectedCounts[t];
                hasExistingValidCounts = true;
              }
            });
          }

          // If no valid rooms selected or beds are under capacity, auto-suggest optimal room configuration
          const currentBeds = calculateTotalBeds(cleanedCounts);
          let finalCounts = cleanedCounts;
          if (!hasExistingValidCounts || currentBeds < adultCount) {
            finalCounts = suggestOptimalRooms(uniqueTypes, adultCount);
          }

          setRoomCounts(finalCounts);
          const { label, bedsText } = formatRoomSelection(finalCounts);

          onUpdate(hotel.id, {
            availableRoomTypes: uniqueTypes,
            roomCounts: finalCounts,
            roomType: label,
            bedsText,
          });
        } else {
          setAvailableRoomTypes([]);
          setRoomCounts({});
          onUpdate(hotel.id, {
            availableRoomTypes: [],
            roomCounts: {},
            roomType: '',
            bedsText: '',
          });
        }
      })
      .catch((err) => {
        console.warn(`[HotelRoomTypes] Failed to load room types for hotel ${hotelId}:`, err);
        setIsLoadingRoomTypes(false);
      });
  };

  // When location changes, update location & reset hotel selection
  const handleLocationChange = (newLoc) => {
    setRoomCounts({});
    setAvailableRoomTypes([]);
    onUpdate(hotel.id, {
      location: newLoc,
      hotelName: '',
      hotelId: null,
      roomType: '',
      bedsText: '',
      roomCounts: {},
      availableRoomTypes: [],
    });
    onClearError?.(`hotel_${hotel.id}_name`);
    onClearError?.(`hotel_${hotel.id}_rooms`);
    onClearError?.(`hotel_${hotel.id}_checkIn`);
    onClearError?.(`hotel_${hotel.id}_checkOut`);
  };

  // Fetch hotel details & real room rates from GET /hotel/{id} API
  const fetchHotelRates = (hotelId, name) => {
    if (!hotelId) return;

    hotelService.getHotelDetail(hotelId).then((hotelDetail) => {
      if (!hotelDetail) return;
      const rates = {};
      const rawRates = Array.isArray(hotelDetail.room_rates)
        ? hotelDetail.room_rates
        : (Array.isArray(hotelDetail?.data?.[0]?.room_rates) ? hotelDetail.data[0].room_rates : []);

      rawRates.forEach((r) => {
        const rType = r.room_type || r.type || r.name;
        const rawPrice = Number(r.price || r.selling_price || r.rate || 0);
        const price = rawPrice > 10000 ? Math.round(rawPrice / 78) : rawPrice;
        if (rType && price > 0) rates[rType] = price;
      });

      const baseMin = Number(hotelDetail.price || hotelDetail.min_rate || 0);
      const cleanMin = baseMin > 10000 ? Math.round(baseMin / 78) : baseMin;

      onUpdate(hotel.id, {
        roomRates: rates,
        minRateSar: cleanMin > 0 ? cleanMin : hotel.minRateSar,
      });
      console.log(`[HotelRates] ${name || hotelDetail.name} (ID: ${hotelId}) rates (SAR):`, rates);
    }).catch((err) => {
      console.warn(`[HotelRates] Failed loading details for hotel ${hotelId}:`, err);
    });
  };

  // When hotel is selected from dropdown, fetch room types + room rates
  const handleHotelSelect = (selectedVal) => {
    const matched = hotelOptions.find((o) => o.value === selectedVal);
    const hotelId = matched?.id || null;
    const minRate = matched?.minRateSar || 0;

    onUpdate(hotel.id, {
      hotelName: selectedVal,
      hotelId: hotelId,
      minRateSar: minRate,
      roomRates: {},
    });

    if (hotelId) {
      loadRoomTypesForHotel(hotelId);
      fetchHotelRates(hotelId, selectedVal);
    }
  };

  // When adultCount changes in Personal Details, adapt room selection if current beds are insufficient
  useEffect(() => {
    if (hotel.hotelName && availableRoomTypes.length > 0) {
      const currentBeds = calculateTotalBeds(roomCounts);
      if (currentBeds < adultCount) {
        const optimal = suggestOptimalRooms(availableRoomTypes, adultCount);
        setRoomCounts(optimal);
        const { label, bedsText } = formatRoomSelection(optimal);
        onUpdate(hotel.id, {
          roomCounts: optimal,
          roomType: label,
          bedsText,
        });
      }
    }
  }, [adultCount]);

  // Load room types on mount if hotelId already exists
  useEffect(() => {
    if (hotel.hotelId && (!availableRoomTypes || availableRoomTypes.length === 0)) {
      loadRoomTypesForHotel(hotel.hotelId, hotel.roomCounts);
    }
    if (hotel.hotelId && (!hotel.roomRates || Object.keys(hotel.roomRates).length === 0)) {
      fetchHotelRates(hotel.hotelId, hotel.hotelName);
    }
  }, [hotel.hotelId]);

  // Update room count for a specific API room type
  const handleUpdateRoomCount = (rType, delta) => {
    const current = roomCounts[rType] ?? 0;
    const next = Math.max(0, current + delta);
    const nextCounts = { ...roomCounts, [rType]: next };

    const { label, bedsText } = formatRoomSelection(nextCounts);

    setRoomCounts(nextCounts);
    onUpdate(hotel.id, {
      roomType: label,
      bedsText,
      roomCounts: nextCounts,
    });
  };

  // Calculate current capacity vs adults
  const totalBeds = calculateTotalBeds(roomCounts);
  const isUnderCapacity = hotel.hotelName && totalBeds < adultCount;

  return (
    <div className="cuf-section">
      {/* Header with Bed count badge and Nights count badge */}
      <div className="cuf-row-header">
        <h3 className="cuf-section-title">Hotel Details</h3>
        <div className="cuf-row-header-right">
          {hotel.hotelName && (
            totalBeds === 0 ? (
              <span className="cuf-badge cuf-badge--warning">⚠️ Select room type</span>
            ) : isUnderCapacity ? (
              <span className="cuf-badge cuf-badge--warning">
                ⚠️ {totalBeds} / {adultCount} Adults ({adultCount - totalBeds} more bed{adultCount - totalBeds > 1 ? 's' : ''} needed)
              </span>
            ) : (
              <span className="cuf-badge cuf-badge--green">
                ✓ {totalBeds} Beds ({adultCount} Adults)
              </span>
            )
          )}
          <span className="cuf-badge cuf-badge--muted">{hotel.nights || 0} nights</span>
        </div>
      </div>

      {/* 5-column grid */}
      <div className="cuf-hotel-grid">
        {/* 1. Location (from API lookups) */}
        <CufSelect
          label="Location"
          required={true}
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
          <label className="cuf-label">
            Check In <span className="cuf-label-req">*</span>
          </label>
          <input
            type="date"
            className={`cuf-input ${errors[`hotel_${hotel.id}_checkIn`] ? 'cuf-input--error' : ''}`}
            value={hotel.checkIn}
            onChange={(e) => {
              onUpdate(hotel.id, 'checkIn', e.target.value);
              onClearError?.(`hotel_${hotel.id}_checkIn`);
            }}
          />
          {errors[`hotel_${hotel.id}_checkIn`] && (
            <span className="cuf-field-error-text">{errors[`hotel_${hotel.id}_checkIn`]}</span>
          )}
        </div>

        {/* 3. Check Out */}
        <div className="cuf-field">
          <label className="cuf-label">
            Check Out <span className="cuf-label-req">*</span>
          </label>
          <input
            type="date"
            className={`cuf-input ${errors[`hotel_${hotel.id}_checkOut`] ? 'cuf-input--error' : ''}`}
            value={hotel.checkOut}
            onChange={(e) => {
              onUpdate(hotel.id, 'checkOut', e.target.value);
              onClearError?.(`hotel_${hotel.id}_checkOut`);
            }}
          />
          {errors[`hotel_${hotel.id}_checkOut`] && (
            <span className="cuf-field-error-text">{errors[`hotel_${hotel.id}_checkOut`]}</span>
          )}
        </div>

        {/* 4. Hotel Name */}
        <CufSelect
          label="Hotel name"
          required={true}
          value={hotel.hotelName}
          placeholder="Select Hotel"
          options={hotelOptions}
          onChange={(val) => {
            handleHotelSelect(val);
            onClearError?.(`hotel_${hotel.id}_name`);
          }}
          error={errors[`hotel_${hotel.id}_name`]}
          isOpen={open === 'hotelName'}
          onToggle={() => toggle('hotelName')}
          onClose={close}
          searchable={true}
          searchPlaceholder="Search hotel..."
          header={`Hotels in ${hotel.location || 'Location'} (${hotelOptions.length})`}
        />

        {/* 5. Select Room Type (Filtered strictly by API for selected hotel) */}
        <div className="cuf-field" ref={roomTypeWrapRef} style={{ position: 'relative' }}>
          <label className="cuf-label">
            Select Room Type <span className="cuf-label-req">*</span>
          </label>
          <div className="cuf-inline-row">
            <div style={{ flex: 1, minWidth: 0, position: 'relative' }}>
              <button
                type="button"
                className={`cuf-custom-select-trigger ${open === 'roomType' ? 'cuf-custom-select-trigger--open' : ''} ${
                  errors[`hotel_${hotel.id}_rooms`]
                    ? 'cuf-custom-select-trigger--error'
                    : isUnderCapacity
                    ? 'cuf-trigger--warning'
                    : ''
                }`}
                onClick={() => toggle('roomType')}
                aria-expanded={open === 'roomType'}
              >
                <span className={`cuf-custom-select-value ${!hotel.roomType ? 'cuf-custom-select-placeholder' : ''}`}>
                  {!hotel.hotelName
                    ? 'Select hotel first'
                    : isLoadingRoomTypes
                    ? 'Loading room types...'
                    : hotel.roomType
                    ? `${hotel.roomType}${isUnderCapacity ? ` (Need ${adultCount - totalBeds} more)` : ''}`
                    : 'Select type'}
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
                onUpdateCount={(rType, delta) => {
                  handleUpdateRoomCount(rType, delta);
                  onClearError?.(`hotel_${hotel.id}_rooms`);
                }}
                roomTypes={availableRoomTypes}
                adultCount={adultCount}
                hotelName={hotel.hotelName}
                isLoading={isLoadingRoomTypes}
              />
              {errors[`hotel_${hotel.id}_rooms`] && (
                <span className="cuf-field-error-text">{errors[`hotel_${hotel.id}_rooms`]}</span>
              )}
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

