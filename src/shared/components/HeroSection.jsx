'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Building2,
  ChevronDown,
  Check,
} from 'lucide-react';
import Image from 'next/image';
import { PassportIcon } from './icons/PassportIcon';
import { AirlineMarquee } from './AirlineMarquee';
import heroBg from '../../assets/Main header.webp';
import { apiPost } from '../../services/api.client';
import { hotelService, normalizeHotelDetail } from '../../services/hotel.service';
import { visaService, normalizeVisaDetail } from '../../services/visa.service';
import { umrahService, normalizeGroupUmrahPackage } from '../../services/umrah.service';
import { useHotelsDispatch } from '../../features/hotels/state/HotelsContext';

function getTodayIso() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getFutureIso(daysAhead = 3) {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatDisplayDate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
}

function HeroDropdownField({
  label,
  value,
  displayValue,
  options = [],
  isOpen,
  onToggle,
  onSelect,
  isWide = false,
  alignRight = false,
}) {
  return (
    <div
      className={`hero-pill-field ${isWide ? 'hero-pill-field-wide' : ''} ${isOpen ? 'is-active' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      role="button"
      tabIndex={0}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      <div className="pill-field-content">
        <span className="pill-field-label">{label}</span>
        <span className="pill-field-value">{displayValue || value}</span>
      </div>

      <ChevronDown
        size={14}
        strokeWidth={2.4}
        className={`pill-field-chevron ${isOpen ? 'is-open' : ''}`}
      />

      {isOpen && (
        <div
          className={`hero-pill-dropdown-menu ${alignRight ? 'align-right' : ''}`}
          role="listbox"
          onClick={(e) => e.stopPropagation()}
        >
          {options.map((opt) => {
            const optVal = typeof opt === 'object' ? opt.value : opt;
            const optLabel = typeof opt === 'object' ? opt.label : opt;
            const isSelected = String(value) === String(optVal);

            return (
              <div
                key={String(optVal)}
                role="option"
                aria-selected={isSelected}
                className={`hero-pill-dropdown-item ${isSelected ? 'is-selected' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(optVal);
                }}
              >
                <span className="hero-pill-dropdown-item-label">{optLabel}</span>
                {isSelected && (
                  <Check size={16} strokeWidth={2.6} className="hero-pill-dropdown-check" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function HeroSection({
  onSearchSubmit,
  activeCategory = 'all',
  onSelectCategory,
  initialLookups = null,
  initialVisaLookups = null,
  initialGroupUmrahLookups = null,
}) {
  const hotelsDispatch = useHotelsDispatch();
  const [isSearchingHotel, setIsSearchingHotel] = useState(false);
  const [isSearchingVisa, setIsSearchingVisa] = useState(false);
  const [isSearchingUmrah, setIsSearchingUmrah] = useState(false);
  const [activeTab, setActiveTab] = useState(() =>
    activeCategory === 'visa' ? 'visa' : activeCategory === 'umrah' ? 'umrah' : 'hotels'
  );
  const [prevCategory, setPrevCategory] = useState(activeCategory);

  // Active floating dropdown identifier ('hotel-dest', 'hotel-room-type', 'visa-dest', 'visa-type', 'umrah-routes', 'umrah-duration', etc.)
  const [openDropdown, setOpenDropdown] = useState(null);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    if (!openDropdown) return;
    const handleClickOutside = (e) => {
      if (!e.target.closest('.hero-pill-field')) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpenDropdown(null);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openDropdown]);

  const [lookupCities, setLookupCities] = useState(() => initialLookups?.cities || []);
  const [lookupRoomTypes, setLookupRoomTypes] = useState(() => initialLookups?.room_types || []);
  const [hotelDestination, setHotelDestination] = useState(
    () => initialLookups?.cities?.[0]?.name || 'Madina'
  );
  const [hotelCheckIn, setHotelCheckIn] = useState(() => getTodayIso());
  const [hotelCheckOut, setHotelCheckOut] = useState(() => getFutureIso(3));
  const [hotelRoomType, setHotelRoomType] = useState('All Room Types');
  const [hotelAdults, setHotelAdults] = useState(2);
  const [hotelChildren, setHotelChildren] = useState(0);
  const [hotelRooms, setHotelRooms] = useState(1);

  const guestsDisplayLabel = `${hotelAdults} adults (${hotelRooms}Room)`;

  const handleHotelCheckInChange = (val) => {
    setHotelCheckIn(val);
    if (!hotelCheckOut || hotelCheckOut <= val) {
      const d = new Date(val);
      d.setDate(d.getDate() + 1);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      setHotelCheckOut(`${year}-${month}-${day}`);
    }
  };

  const handleHotelCheckOutChange = (val) => {
    if (!val || val <= hotelCheckIn) {
      const d = new Date(hotelCheckIn);
      d.setDate(d.getDate() + 1);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      setHotelCheckOut(`${year}-${month}-${day}`);
    } else {
      setHotelCheckOut(val);
    }
  };

  // Fetch hotel lookups to populate destination and room type options directly from API
  useEffect(() => {
    let isMounted = true;
    hotelService
      .getHotelLookups()
      .then((lookups) => {
        if (!isMounted) return;
        const cities = lookups?.cities || [];
        const roomTypes = lookups?.room_types || [];
        if (Array.isArray(cities) && cities.length > 0) {
          setLookupCities(cities);
          setHotelDestination((current) => {
            if (!current || current === 'All Destinations' || current === 'Singapore') {
              return cities[0]?.name || 'Madina';
            }
            const exists = cities.some(
              (c) => (c.name || c.value || '').toLowerCase() === current.toLowerCase()
            );
            return exists ? current : cities[0]?.name || 'Madina';
          });
        }
        if (Array.isArray(roomTypes) && roomTypes.length > 0) {
          setLookupRoomTypes(roomTypes);
        }
      })
      .catch((err) => {
        console.error('[HeroSection] getHotelLookups error:', err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Visas fields: Real API data only from GET /visa/lookups
  const [lookupVisaCountries, setLookupVisaCountries] = useState(
    () => initialVisaLookups?.countries || []
  );
  const [lookupVisaTypes, setLookupVisaTypes] = useState(
    () => initialVisaLookups?.visa_types || []
  );
  const [visaDestination, setVisaDestination] = useState(
    () => initialVisaLookups?.countries?.[0]?.value || 'All Destinations'
  );
  const [visaCheckIn, setVisaCheckIn] = useState(() => getFutureIso(7));
  const [visaType, setVisaType] = useState('All Visa Types');

  // Fetch visa lookups directly from GET /visa/lookups
  useEffect(() => {
    let isMounted = true;
    visaService
      .getVisaLookups()
      .then((lookups) => {
        if (!isMounted) return;
        const countries = lookups?.countries || [];
        const visaTypes = lookups?.visa_types || [];
        if (Array.isArray(countries) && countries.length > 0) {
          setLookupVisaCountries(countries);
          setVisaDestination((current) => {
            if (!current || current === 'All Destinations') {
              return countries[0]?.value || 'All Destinations';
            }
            const exists = countries.some(
              (c) => (c.value || c.name || '').toLowerCase() === current.toLowerCase()
            );
            return exists ? current : countries[0]?.value || 'All Destinations';
          });
        }
        if (Array.isArray(visaTypes) && visaTypes.length > 0) {
          setLookupVisaTypes(visaTypes);
        }
      })
      .catch((err) => {
        console.error('[HeroSection] getVisaLookups error:', err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Group Umrah fields: Real API data only from GET /group-umrah-packages/lookups
  const [lookupRoutes, setLookupRoutes] = useState(() => initialGroupUmrahLookups?.routes || []);
  const [lookupDurations, setLookupDurations] = useState(() => initialGroupUmrahLookups?.durations || []);
  const [lookupDepartureDates, setLookupDepartureDates] = useState(
    () => initialGroupUmrahLookups?.departure_dates || []
  );
  const [selectedRoute, setSelectedRoute] = useState('All Routes');
  const [selectedDepartureDate, setSelectedDepartureDate] = useState('All Departure Dates');
  const [umrahDuration, setUmrahDuration] = useState('All Durations');

  // Fetch group Umrah lookups directly from GET /group-umrah-packages/lookups
  useEffect(() => {
    let isMounted = true;
    umrahService
      .getGroupUmrahLookups()
      .then((lookups) => {
        if (!isMounted) return;
        const routes = lookups?.routes || [];
        const durations = lookups?.durations || [];
        const dates = lookups?.departure_dates || [];
        if (Array.isArray(routes) && routes.length > 0) {
          setLookupRoutes(routes);
        }
        if (Array.isArray(durations) && durations.length > 0) {
          setLookupDurations(durations);
        }
        if (Array.isArray(dates) && dates.length > 0) {
          setLookupDepartureDates(dates);
        }
      })
      .catch((err) => {
        console.error('[HeroSection] getGroupUmrahLookups error:', err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Sync activeTab if activeCategory changes externally
  if (activeCategory !== prevCategory) {
    setPrevCategory(activeCategory);
    if (activeCategory === 'hotels' || activeCategory === 'umrah' || activeCategory === 'visa') {
      setActiveTab(activeCategory);
      setOpenDropdown(null);
    }
  }

  // Options configuration — Real API data only
  const hotelDestOptions = useMemo(() => {
    const list = [{ value: 'All Destinations', label: 'All Destinations' }];
    if (Array.isArray(lookupCities) && lookupCities.length > 0) {
      lookupCities.forEach((c) => {
        const name = typeof c === 'string' ? c : (c.name || c.value || '');
        if (name && !list.some((item) => item.value.toLowerCase() === name.toLowerCase())) {
          list.push({ value: name, label: name });
        }
      });
    } else {
      list.push({ value: 'Madina', label: 'Madina' });
      list.push({ value: 'Makkah', label: 'Makkah' });
    }
    return list;
  }, [lookupCities]);

  const hotelRoomTypeOptions = useMemo(() => {
    const list = [{ value: 'All Room Types', label: 'All Room Types' }];
    if (Array.isArray(lookupRoomTypes) && lookupRoomTypes.length > 0) {
      lookupRoomTypes.forEach((rt) => {
        list.push({ value: String(rt.id), label: rt.room_type });
      });
    }
    return list;
  }, [lookupRoomTypes]);

  const selectedRoomTypeLabel = useMemo(() => {
    if (!hotelRoomType || hotelRoomType === 'All Room Types') return 'All Room Types';
    const found = lookupRoomTypes.find((r) => String(r.id) === String(hotelRoomType));
    return found?.room_type || hotelRoomType;
  }, [hotelRoomType, lookupRoomTypes]);

  const visaDestOptions = useMemo(() => {
    const list = [{ value: 'All Destinations', label: 'All Destinations' }];
    if (Array.isArray(lookupVisaCountries) && lookupVisaCountries.length > 0) {
      lookupVisaCountries.forEach((c) => {
        const val = typeof c === 'string' ? c : (c.value || c.name || c.country || '');
        if (val && !list.some((item) => item.value.toLowerCase() === val.toLowerCase())) {
          list.push({ value: val, label: val });
        }
      });
    } else {
      ['Saudi Arabia', 'United Arab Emirates (UAE)', 'Turkey', 'Azerbaijan'].forEach((c) => {
        list.push({ value: c, label: c });
      });
    }
    return list;
  }, [lookupVisaCountries]);

  const visaTypeOptions = useMemo(() => {
    const list = [{ value: 'All Visa Types', label: 'All Visa Types' }];
    if (Array.isArray(lookupVisaTypes) && lookupVisaTypes.length > 0) {
      lookupVisaTypes.forEach((t) => {
        const val = typeof t === 'string' ? t : (t.value || t.name || t.visa_type || '');
        if (val && !list.some((item) => item.value.toLowerCase() === val.toLowerCase())) {
          list.push({ value: val, label: val });
        }
      });
    } else {
      ['E-Visa', 'Visit Visa'].forEach((t) => {
        list.push({ value: t, label: t });
      });
    }
    return list;
  }, [lookupVisaTypes]);

  const groupUmrahRouteOptions = useMemo(() => {
    const list = [{ value: 'All Routes', label: 'All Routes' }];
    if (Array.isArray(lookupRoutes) && lookupRoutes.length > 0) {
      lookupRoutes.forEach((r) => {
        list.push({ value: String(r.id), label: r.name });
      });
    }
    return list;
  }, [lookupRoutes]);

  const selectedRouteLabel = useMemo(() => {
    if (!selectedRoute || selectedRoute === 'All Routes') return 'All Routes';
    const found = lookupRoutes.find((r) => String(r.id) === String(selectedRoute));
    return found?.name || selectedRoute;
  }, [selectedRoute, lookupRoutes]);

  const groupUmrahDepartureDateOptions = useMemo(() => {
    const list = [{ value: 'All Departure Dates', label: 'All Departure Dates' }];
    if (Array.isArray(lookupDepartureDates) && lookupDepartureDates.length > 0) {
      lookupDepartureDates.forEach((d) => {
        list.push({
          value: d.value,
          label: d.label || d.value,
        });
      });
    }
    return list;
  }, [lookupDepartureDates]);

  const selectedDepartureDateLabel = useMemo(() => {
    if (!selectedDepartureDate || selectedDepartureDate === 'All Departure Dates') {
      return 'All Departure Dates';
    }
    const found = lookupDepartureDates.find((d) => d.value === selectedDepartureDate);
    return found?.label || selectedDepartureDate;
  }, [selectedDepartureDate, lookupDepartureDates]);

  const groupUmrahDurationOptions = useMemo(() => {
    const list = [{ value: 'All Durations', label: 'All Durations' }];
    if (Array.isArray(lookupDurations) && lookupDurations.length > 0) {
      lookupDurations.forEach((d) => {
        const val = typeof d === 'object' && d !== null ? (d.value ?? d.duration ?? d.id) : d;
        const lbl = typeof d === 'object' && d !== null ? (d.label || `${val} Days`) : `${val} Days`;
        if (val != null && !list.some((item) => item.value === String(val))) {
          list.push({
            value: String(val),
            label: lbl,
          });
        }
      });
    } else {
      ['15', '21', '28'].forEach((num) => {
        list.push({ value: num, label: `${num} Days` });
      });
    }
    return list;
  }, [lookupDurations]);

  const selectedDurationLabel = useMemo(() => {
    if (!umrahDuration || umrahDuration === 'All Durations') return 'All Durations';
    const found = groupUmrahDurationOptions.find((d) => String(d.value) === String(umrahDuration));
    return found?.label || `${umrahDuration} Days`;
  }, [umrahDuration, groupUmrahDurationOptions]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setOpenDropdown(null);

    if (activeTab === 'hotels') {
      setIsSearchingHotel(true);
      const city = hotelDestination.split(',')[0].trim();
      const normalizedCity = city.toLowerCase() === 'madinah' ? 'Madina' : city;

      // POST /hotel/minRate
      const filters = {};
      if (normalizedCity && normalizedCity !== 'All Destinations' && normalizedCity !== 'all') {
        filters.city = normalizedCity;
      }
      if (hotelCheckIn && hotelCheckOut && hotelCheckOut > hotelCheckIn) {
        filters.check_in = hotelCheckIn;
        filters.check_out = hotelCheckOut;
      }
      if (hotelRoomType && hotelRoomType !== 'All Room Types' && hotelRoomType !== 'all') {
        filters.room_types = [Number(hotelRoomType)];
      }

      try {
        const res = await apiPost('/hotel/minRate', { filters });
        const rawHotels = Array.isArray(res?.data) ? res.data : [];
        const normalized = rawHotels.map(normalizeHotelDetail).filter(Boolean);

        if (normalized.length > 0 && hotelsDispatch) {
          hotelsDispatch({ type: 'SET_HOTELS', payload: normalized });
        }

        onSearchSubmit?.({
          tab: 'hotels',
          params: {
            destination: hotelDestination === 'All Destinations' ? '' : hotelDestination,
            city: normalizedCity === 'All Destinations' ? '' : normalizedCity,
            roomType: hotelRoomType === 'All Room Types' ? '' : selectedRoomTypeLabel,
            checkIn: hotelCheckIn,
            checkOut: hotelCheckOut,
            adults: hotelAdults,
            children: hotelChildren,
            rooms: hotelRooms,
            results: normalized,
          },
        });
      } catch (err) {
        console.error('[HeroSection] POST /hotel/minRate error:', err);
        onSearchSubmit?.({
          tab: 'hotels',
          params: {
            destination: hotelDestination === 'All Destinations' ? '' : hotelDestination,
            city: normalizedCity === 'All Destinations' ? '' : normalizedCity,
            roomType: hotelRoomType === 'All Room Types' ? '' : selectedRoomTypeLabel,
            checkIn: hotelCheckIn,
            checkOut: hotelCheckOut,
            results: [],
          },
        });
      } finally {
        setIsSearchingHotel(false);
      }
      return;
    }

    if (activeTab === 'visa') {
      setIsSearchingVisa(true);
      const filters = {};
      if (visaDestination && visaDestination !== 'All Destinations' && visaDestination !== 'all') {
        filters.country = visaDestination;
      }
      if (visaType && visaType !== 'All Visa Types' && visaType !== 'all') {
        filters.visa_type = visaType;
      }

      try {
        const hasFilters = Object.keys(filters).length > 0;
        const res = await apiPost('/visa/list', hasFilters ? { filters } : {});
        const rawVisas = Array.isArray(res?.data) ? res.data : [];
        const normalized = rawVisas.map(normalizeVisaDetail).filter(Boolean);

        onSearchSubmit?.({
          tab: 'visa',
          params: {
            destinationCountry: visaDestination === 'All Destinations' ? '' : visaDestination,
            country: visaDestination === 'All Destinations' ? '' : visaDestination,
            visaType: visaType === 'All Visa Types' ? '' : visaType,
            checkIn: visaCheckIn,
            results: normalized,
          },
        });
      } catch (err) {
        console.error('[HeroSection] POST /visa/list error:', err);
        onSearchSubmit?.({
          tab: 'visa',
          params: {
            destinationCountry: visaDestination === 'All Destinations' ? '' : visaDestination,
            country: visaDestination === 'All Destinations' ? '' : visaDestination,
            visaType: visaType === 'All Visa Types' ? '' : visaType,
            checkIn: visaCheckIn,
            results: [],
          },
        });
      } finally {
        setIsSearchingVisa(false);
      }
      return;
    }

    if (activeTab === 'umrah') {
      setIsSearchingUmrah(true);
      const filters = {};
      if (selectedRoute && selectedRoute !== 'All Routes' && selectedRoute !== 'all') {
        filters.routes = [Number(selectedRoute)];
      }
      if (selectedDepartureDate && selectedDepartureDate !== 'All Departure Dates' && selectedDepartureDate !== 'all') {
        filters.departure_date = selectedDepartureDate;
      }
      if (umrahDuration && umrahDuration !== 'All Durations' && umrahDuration !== 'all') {
        filters.duration = [Number(umrahDuration)];
      }

      try {
        const hasFilters = Object.keys(filters).length > 0;
        const res = await apiPost('/group-umrah-packages/list', hasFilters ? { filters } : {});
        const rawPackages = Array.isArray(res?.data) ? res.data : [];
        const normalized = rawPackages.map(normalizeGroupUmrahPackage).filter(Boolean);

        onSearchSubmit?.({
          tab: 'umrah',
          params: {
            route: selectedRoute === 'All Routes' ? '' : selectedRouteLabel,
            routeId: selectedRoute === 'All Routes' ? '' : selectedRoute,
            departureDate: selectedDepartureDate === 'All Departure Dates' ? '' : selectedDepartureDate,
            departureDateLabel: selectedDepartureDate === 'All Departure Dates' ? '' : selectedDepartureDateLabel,
            departDate: selectedDepartureDate === 'All Departure Dates' ? '' : selectedDepartureDateLabel,
            noOfDays: umrahDuration === 'All Durations' ? '' : umrahDuration,
            durationLabel: umrahDuration === 'All Durations' ? '' : selectedDurationLabel,
            results: normalized,
          },
        });
      } catch (err) {
        console.error('[HeroSection] POST /group-umrah-packages/list error:', err);
        onSearchSubmit?.({
          tab: 'umrah',
          params: {
            route: selectedRoute === 'All Routes' ? '' : selectedRouteLabel,
            routeId: selectedRoute === 'All Routes' ? '' : selectedRoute,
            departureDate: selectedDepartureDate === 'All Departure Dates' ? '' : selectedDepartureDate,
            departureDateLabel: selectedDepartureDate === 'All Departure Dates' ? '' : selectedDepartureDateLabel,
            departDate: selectedDepartureDate === 'All Departure Dates' ? '' : selectedDepartureDateLabel,
            noOfDays: umrahDuration === 'All Durations' ? '' : umrahDuration,
            durationLabel: umrahDuration === 'All Durations' ? '' : selectedDurationLabel,
            results: [],
          },
        });
      } finally {
        setIsSearchingUmrah(false);
      }
      return;
    }

    onSearchSubmit?.({ tab: activeTab, params: {} });
  };

  const TABS = [
    {
      id: 'visa',
      label: 'Visas',
      icon: <PassportIcon size={17} className="tab-icon-svg" />,
    },
    {
      id: 'hotels',
      label: 'Hotels',
      icon: <Building2 size={17} className="tab-icon-svg" />,
    },
    {
      id: 'umrah',
      label: 'Group Umrah',
      icon: (
        <svg className="tab-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5a.75.75 0 0 1 .75.75v1.05c2.14.41 3.75 2.25 3.75 4.45v2.75h1a.75.75 0 0 1 .75.75v7.5H4.75v-7.5a.75.75 0 0 1 .75-.75h1V8.75c0-2.2 1.61-4.04 3.75-4.45V3.25A.75.75 0 0 1 12 2.5zM4 20.5h16v1.5H4v-1.5zm8-8.5a2 2 0 0 0-2 2v4.5h4v-4.5a2 2 0 0 0-2-2z"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="hero-landing-wrapper" id="home">
        {/* Background Media — full bleed */}
        <div className="hero-image-container">
          <Image
            src={heroBg}
            alt="World Track Aviation - Masjid Al Haram"
            className="hero-main-image"
            priority
            fetchPriority="high"
            fill
            sizes="100vw"
            quality={85}
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div className="hero-dark-vignette" />
        </div>

        {/* Main Interactive Zone — title + tabs + search bar */}
        <div className="hero-interactive-zone">

          {/* Large Hero Title */}
          <h1 className="hero-headline-title">
            Everything You Need for Every<br />Destination.
          </h1>

          {/* Tab Capsule — floating above search bar */}
          <div className="service-tab-container">
            <div className="service-tab-capsule">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`service-tab-pill ${activeTab === tab.id ? 'active-pill' : ''}`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setOpenDropdown(null);
                  }}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ─── HOTELS Search Bar ─── */}
          {activeTab === 'hotels' && (
            <form onSubmit={handleFormSubmit} className="hero-pill-search-bar">
              {/* Field 1: DESTINATION Dropdown */}
              <HeroDropdownField
                label="DESTINATION"
                value={hotelDestination}
                options={hotelDestOptions}
                isWide={true}
                isOpen={openDropdown === 'hotel-dest'}
                onToggle={() =>
                  setOpenDropdown((curr) => (curr === 'hotel-dest' ? null : 'hotel-dest'))
                }
                onSelect={(val) => {
                  setHotelDestination(val);
                  setOpenDropdown(null);
                }}
              />

              {/* Field 2: CHECK-IN Date */}
              <div
                className="hero-pill-field"
                onClick={(e) => {
                  setOpenDropdown(null);
                  const input = e.currentTarget.querySelector('input[type="date"]');
                  if (input && typeof input.showPicker === 'function') {
                    try { input.showPicker(); } catch (_) {}
                  }
                }}
              >
                <div className="pill-field-content">
                  <span className="pill-field-label">CHECK-IN</span>
                  <span className="pill-field-value">{formatDisplayDate(hotelCheckIn)}</span>
                </div>
                <input
                  type="date"
                  className="pill-native-date-input"
                  value={hotelCheckIn}
                  onChange={(e) => handleHotelCheckInChange(e.target.value)}
                  aria-label="Check-in Date"
                />
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#000000" className="pill-field-calendar-svg">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                </svg>
              </div>

              {/* Field 3: CHECK-OUT Date */}
              <div
                className="hero-pill-field"
                onClick={(e) => {
                  setOpenDropdown(null);
                  const input = e.currentTarget.querySelector('input[type="date"]');
                  if (input && typeof input.showPicker === 'function') {
                    try { input.showPicker(); } catch (_) {}
                  }
                }}
              >
                <div className="pill-field-content">
                  <span className="pill-field-label">CHECK-OUT</span>
                  <span className="pill-field-value">{formatDisplayDate(hotelCheckOut)}</span>
                </div>
                <input
                  type="date"
                  className="pill-native-date-input"
                  value={hotelCheckOut}
                  onChange={(e) => handleHotelCheckOutChange(e.target.value)}
                  aria-label="Check-out Date"
                />
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#000000" className="pill-field-calendar-svg">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                </svg>
              </div>

              {/* Field 4: GUESTS Dropdown / Popup */}
              <div
                className={`hero-pill-field ${openDropdown === 'hotel-guests' ? 'is-active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDropdown((curr) => (curr === 'hotel-guests' ? null : 'hotel-guests'));
                }}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-expanded={openDropdown === 'hotel-guests'}
              >
                <div className="pill-field-content">
                  <span className="pill-field-label">GUESTS</span>
                  <span className="pill-field-value">{guestsDisplayLabel}</span>
                </div>
                <ChevronDown
                  size={15}
                  strokeWidth={2.5}
                  className={`pill-field-chevron ${openDropdown === 'hotel-guests' ? 'is-open' : ''}`}
                />

                {openDropdown === 'hotel-guests' && (
                  <div
                    className="hero-pill-dropdown-menu align-right hero-guests-popover"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="hero-guest-row">
                      <div className="guest-row-text">
                        <span className="guest-row-title">Adults</span>
                        <span className="guest-row-sub">Ages 12+</span>
                      </div>
                      <div className="guest-counter-ctrls">
                        <button
                          type="button"
                          className="guest-count-btn"
                          disabled={hotelAdults <= 1}
                          onClick={() => setHotelAdults((a) => Math.max(1, a - 1))}
                        >
                          -
                        </button>
                        <span className="guest-count-num">{hotelAdults}</span>
                        <button
                          type="button"
                          className="guest-count-btn"
                          onClick={() => setHotelAdults((a) => a + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="hero-guest-row">
                      <div className="guest-row-text">
                        <span className="guest-row-title">Children</span>
                        <span className="guest-row-sub">Ages 2-11</span>
                      </div>
                      <div className="guest-counter-ctrls">
                        <button
                          type="button"
                          className="guest-count-btn"
                          disabled={hotelChildren <= 0}
                          onClick={() => setHotelChildren((c) => Math.max(0, c - 1))}
                        >
                          -
                        </button>
                        <span className="guest-count-num">{hotelChildren}</span>
                        <button
                          type="button"
                          className="guest-count-btn"
                          onClick={() => setHotelChildren((c) => c + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="hero-guest-row">
                      <div className="guest-row-text">
                        <span className="guest-row-title">Rooms</span>
                        <span className="guest-row-sub">Total rooms</span>
                      </div>
                      <div className="guest-counter-ctrls">
                        <button
                          type="button"
                          className="guest-count-btn"
                          disabled={hotelRooms <= 1}
                          onClick={() => setHotelRooms((r) => Math.max(1, r - 1))}
                        >
                          -
                        </button>
                        <span className="guest-count-num">{hotelRooms}</span>
                        <button
                          type="button"
                          className="guest-count-btn"
                          onClick={() => setHotelRooms((r) => r + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="hero-guest-done-row">
                      <button
                        type="button"
                        className="hero-guest-done-btn"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="hero-pill-search-btn"
                disabled={isSearchingHotel}
              >
                {isSearchingHotel ? (
                  <span className="hero-search-spinner" aria-label="Searching..." />
                ) : (
                  'Search'
                )}
              </button>
            </form>
          )}

          {/* ─── VISAS Search Bar ─── */}
          {activeTab === 'visa' && (
            <form onSubmit={handleFormSubmit} className="hero-pill-search-bar">
              {/* Field 1: DESTINATION COUNTRY Dropdown */}
              <HeroDropdownField
                label="DESTINATION COUNTRY"
                value={visaDestination}
                options={visaDestOptions}
                isWide={true}
                isOpen={openDropdown === 'visa-dest'}
                onToggle={() =>
                  setOpenDropdown((curr) => (curr === 'visa-dest' ? null : 'visa-dest'))
                }
                onSelect={(val) => {
                  setVisaDestination(val);
                  setOpenDropdown(null);
                }}
              />

              {/* Field 2: ENTRY DATE */}
              <div
                className="hero-pill-field"
                onClick={(e) => {
                  setOpenDropdown(null);
                  const input = e.currentTarget.querySelector('input[type="date"]');
                  if (input && typeof input.showPicker === 'function') {
                    try { input.showPicker(); } catch (_) {}
                  }
                }}
              >
                <div className="pill-field-content">
                  <span className="pill-field-label">ENTRY DATE</span>
                  <span className="pill-field-value">{formatDisplayDate(visaCheckIn)}</span>
                </div>
                <input
                  type="date"
                  className="pill-native-date-input"
                  value={visaCheckIn}
                  onChange={(e) => setVisaCheckIn(e.target.value)}
                  aria-label="Entry Date"
                />
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#000000" className="pill-field-calendar-svg">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                </svg>
              </div>

              {/* Field 3: VISA TYPE Dropdown */}
              <HeroDropdownField
                label="VISA TYPE"
                value={visaType}
                options={visaTypeOptions}
                alignRight={true}
                isOpen={openDropdown === 'visa-type'}
                onToggle={() =>
                  setOpenDropdown((curr) => (curr === 'visa-type' ? null : 'visa-type'))
                }
                onSelect={(val) => {
                  setVisaType(val);
                  setOpenDropdown(null);
                }}
              />

              <button
                type="submit"
                className="hero-pill-search-btn"
                disabled={isSearchingVisa}
              >
                {isSearchingVisa ? (
                  <span className="hero-search-spinner" aria-label="Searching..." />
                ) : (
                  'Search'
                )}
              </button>
            </form>
          )}

          {/* ─── GROUP UMRAH Search Bar ─── */}
          {activeTab === 'umrah' && (
            <form onSubmit={handleFormSubmit} className="hero-pill-search-bar">
              {/* Field 1: ROUTES Dropdown */}
              <HeroDropdownField
                label="ROUTES"
                value={selectedRoute}
                displayValue={selectedRouteLabel}
                options={groupUmrahRouteOptions}
                isWide={true}
                isOpen={openDropdown === 'umrah-routes'}
                onToggle={() =>
                  setOpenDropdown((curr) => (curr === 'umrah-routes' ? null : 'umrah-routes'))
                }
                onSelect={(val) => {
                  setSelectedRoute(val);
                  setOpenDropdown(null);
                }}
              />

              {/* Field 2: DEPARTURE DATE Dropdown */}
              <HeroDropdownField
                label="DEPARTURE DATE"
                value={selectedDepartureDate}
                displayValue={selectedDepartureDateLabel}
                options={groupUmrahDepartureDateOptions}
                isOpen={openDropdown === 'umrah-departure-date'}
                onToggle={() =>
                  setOpenDropdown((curr) =>
                    curr === 'umrah-departure-date' ? null : 'umrah-departure-date'
                  )
                }
                onSelect={(val) => {
                  setSelectedDepartureDate(val);
                  setOpenDropdown(null);
                }}
              />

              {/* Field 3: DURATION Dropdown */}
              <HeroDropdownField
                label="DURATION"
                value={umrahDuration}
                displayValue={selectedDurationLabel}
                options={groupUmrahDurationOptions}
                alignRight={true}
                isOpen={openDropdown === 'umrah-duration'}
                onToggle={() =>
                  setOpenDropdown((curr) => (curr === 'umrah-duration' ? null : 'umrah-duration'))
                }
                onSelect={(val) => {
                  setUmrahDuration(val);
                  setOpenDropdown(null);
                }}
              />

              <button
                type="submit"
                className="hero-pill-search-btn"
                disabled={isSearchingUmrah}
              >
                {isSearchingUmrah ? (
                  <span className="hero-search-spinner" aria-label="Searching..." />
                ) : (
                  'Search'
                )}
              </button>
            </form>
          )}

        </div>
      </section>

      {/* Continuous Scrolling Partner Airlines Marquee */}
      <AirlineMarquee />
    </>
  );
}
