'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Plane,
  Building2,
  Car,
  ShieldCheck,
  ChevronDown,
  Calendar,
  Users
} from 'lucide-react';
import Image from 'next/image';
import { PassportIcon } from './icons/PassportIcon';
import { AirlineMarquee } from './AirlineMarquee';
import heroBg from '../../assets/hero_sunset.webp';

export function HeroSection({ onSearchSubmit, activeCategory = 'all', onSelectCategory }) {
  const [activeTab, setActiveTab] = useState(() =>
    activeCategory === 'hotels' ? 'hotels' : activeCategory === 'visa' ? 'visa' : 'hotels'
  );
  const [prevCategory, setPrevCategory] = useState(activeCategory);

  // Hotel fields
  const [hotelDestination, setHotelDestination] = useState('Singapore');
  const [checkIn, setCheckIn] = useState('2026-04-15');
  const [checkOut, setCheckOut] = useState('2026-04-18');
  const [guests, setGuests] = useState('2 Adults (1 Room)');
  const [showGuestsMenu, setShowGuestsMenu] = useState(false);
  const [adultCount, setAdultCount] = useState(2);
  const [roomCount, setRoomCount] = useState(1);
  const guestsRef = useRef(null);

  // Umrah/Flights fields
  const [fromCity, setFromCity] = useState('Multan (MUX)');
  const [departDate, setDepartDate] = useState('2026-05-10');

  // Visas fields
  const [visaDestination, setVisaDestination] = useState('Dubai, UAE');
  const [visaCheckIn, setVisaCheckIn] = useState('2026-04-15');
  const [visaGuests, setVisaGuests] = useState('2 adults');

  // Umrah additional fields
  const [umrahNoOfDays, setUmrahNoOfDays] = useState('15');
  const [umrahVisaType, setUmrahVisaType] = useState('Tourist');

  // Car Rentals fields
  const [carLocation, setCarLocation] = useState('Jeddah, Saudi Arabia');
  const [carPickupDate, setCarPickupDate] = useState('2026-05-10');
  const [carDropoffDate, setCarDropoffDate] = useState('2026-05-17');
  const [carType, setCarType] = useState('GMC Yukon (VIP Umrah)');

  // Outside-click & Escape listener for Guests dropdown popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (guestsRef.current && !guestsRef.current.contains(event.target)) {
        setShowGuestsMenu(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowGuestsMenu(false);
      }
    };
    if (showGuestsMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showGuestsMenu]);

  // Sync activeTab if activeCategory changes externally
  if (activeCategory !== prevCategory) {
    setPrevCategory(activeCategory);
    if (activeCategory === 'hotels' || activeCategory === 'umrah' || activeCategory === 'visa') {
      setActiveTab(activeCategory);
    }
  }

  const updateGuests = (a, r) => {
    setAdultCount(a);
    setRoomCount(r);
    setGuests(`${a} Adult${a > 1 ? 's' : ''} (${r} Room${r > 1 ? 's' : ''})`);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowGuestsMenu(false);

    let params = {};
    if (activeTab === 'hotels') {
      params = {
        destination: hotelDestination,
        checkIn,
        checkOut,
        guests,
        adultCount,
        roomCount
      };
    } else if (activeTab === 'umrah') {
      params = {
        fromCity,
        departDate,
        noOfDays: umrahNoOfDays,
        visaType: umrahVisaType
      };
    } else if (activeTab === 'visa') {
      params = {
        destinationCountry: visaDestination,
        checkIn: visaCheckIn,
        guests: visaGuests
      };
    } else if (activeTab === 'cars') {
      params = {
        pickupLocation: carLocation,
        pickupDate: carPickupDate,
        dropoffDate: carDropoffDate,
        carType
      };
    }

    onSearchSubmit?.({ tab: activeTab, params });
  };

  const TABS = [
    {
      id: 'visa',
      label: 'Visas',
      icon: <PassportIcon size={18} className="tab-icon-svg" />,
    },
    {
      id: 'hotels',
      label: 'Hotels',
      icon: <Building2 size={18} className="tab-icon-svg" />,
    },
    {
      id: 'umrah',
      label: 'Umrah',
      icon: (
        <svg className="tab-icon-svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5a.75.75 0 0 1 .75.75v1.05c2.14.41 3.75 2.25 3.75 4.45v2.75h1a.75.75 0 0 1 .75.75v7.5H4.75v-7.5a.75.75 0 0 1 .75-.75h1V8.75c0-2.2 1.61-4.04 3.75-4.45V3.25A.75.75 0 0 1 12 2.5zM4 20.5h16v1.5H4v-1.5zm8-8.5a2 2 0 0 0-2 2v4.5h4v-4.5a2 2 0 0 0-2-2z"/>
        </svg>
      ),
    },
    {
      id: 'cars',
      label: 'Car Rentals',
      icon: (
        <svg className="tab-icon-svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4.66l.12-.34h13.77l.11.34V17z"/>
          <circle cx="7.5" cy="14.5" r="1.5" />
          <circle cx="16.5" cy="14.5" r="1.5" />
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
            <form onSubmit={handleFormSubmit} className="hero-flat-search-bar">
              {/* City */}
              <div className="flat-search-field flat-search-field-wide">
                <label className="flat-field-label">CITY</label>
                <div className="flat-field-value-row">
                  <select
                    className="flat-field-select"
                    value={hotelDestination}
                    onChange={(e) => setHotelDestination(e.target.value)}
                  >
                    <option value="Singapore">Singapore</option>
                    <option value="Saudi Arabia">Saudi Arabia (Makkah &amp; Madina)</option>
                    <option value="Dubai">Dubai, UAE</option>
                    <option value="Baku">Baku, Azerbaijan</option>
                    <option value="Istanbul">Istanbul, Turkey</option>
                    <option value="Kuala Lumpur">Kuala Lumpur, Malaysia</option>
                  </select>
                  <ChevronDown size={14} className="flat-field-chevron" />
                </div>
              </div>

              <div className="flat-search-divider" />

              {/* Check-In */}
              <div className="flat-search-field">
                <label className="flat-field-label">CHECK-IN</label>
                <div className="flat-field-value-row">
                  <input
                    type="date"
                    className="flat-field-input"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                  <Calendar size={14} className="flat-field-icon" />
                </div>
              </div>

              <div className="flat-search-divider" />

              {/* Check-Out */}
              <div className="flat-search-field">
                <label className="flat-field-label">CHECK-OUT</label>
                <div className="flat-field-value-row">
                  <input
                    type="date"
                    className="flat-field-input"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                  <Calendar size={14} className="flat-field-icon" />
                </div>
              </div>

              <div className="flat-search-divider" />

              {/* Guests */}
              <div className="flat-search-field flat-search-field-wide" style={{ position: 'relative' }} ref={guestsRef}>
                <label className="flat-field-label">GUESTS</label>
                <button
                  type="button"
                  className="flat-guests-btn"
                  onClick={() => setShowGuestsMenu(!showGuestsMenu)}
                >
                  <span className="flat-guests-value">{guests}</span>
                  <ChevronDown size={14} className="flat-field-chevron" />
                </button>

                {showGuestsMenu && (
                  <div className="guests-dropdown-popup">
                    <div className="guests-counter-row">
                      <span className="guests-counter-label">Adults</span>
                      <div className="guests-counter-controls">
                        <button type="button" className="guest-counter-btn" onClick={() => updateGuests(Math.max(1, adultCount - 1), roomCount)}>−</button>
                        <span className="guest-counter-val">{adultCount}</span>
                        <button type="button" className="guest-counter-btn" onClick={() => updateGuests(adultCount + 1, roomCount)}>+</button>
                      </div>
                    </div>
                    <div className="guests-counter-row">
                      <span className="guests-counter-label">Rooms</span>
                      <div className="guests-counter-controls">
                        <button type="button" className="guest-counter-btn" onClick={() => updateGuests(adultCount, Math.max(1, roomCount - 1))}>−</button>
                        <span className="guest-counter-val">{roomCount}</span>
                        <button type="button" className="guest-counter-btn" onClick={() => updateGuests(adultCount, roomCount + 1)}>+</button>
                      </div>
                    </div>
                    <button type="button" className="guests-done-btn" onClick={() => setShowGuestsMenu(false)}>Done</button>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <button type="submit" className="flat-search-btn">
                Search
              </button>
            </form>
          )}

          {/* ─── UMRAH Search Bar ─── */}
          {activeTab === 'umrah' && (
            <form onSubmit={handleFormSubmit} className="hero-flat-search-bar">
              <div className="flat-search-field flat-search-field-wide">
                <label className="flat-field-label">DEPARTURE FROM</label>
                <div className="flat-field-value-row">
                  <select className="flat-field-select" value={fromCity} onChange={(e) => setFromCity(e.target.value)}>
                    <option value="Multan (MUX)">Multan (MUX)</option>
                    <option value="Lahore (LHE)">Lahore (LHE)</option>
                    <option value="Islamabad (ISB)">Islamabad (ISB)</option>
                    <option value="Karachi (KHI)">Karachi (KHI)</option>
                    <option value="Peshawar (PEW)">Peshawar (PEW)</option>
                    <option value="Sialkot (SKT)">Sialkot (SKT)</option>
                  </select>
                  <ChevronDown size={16} className="flat-field-chevron" />
                </div>
              </div>
              <div className="flat-search-divider" />
              <div className="flat-search-field">
                <label className="flat-field-label">DEPARTURE DATE</label>
                <div className="flat-field-value-row">
                  <input type="date" className="flat-field-input" value={departDate} onChange={(e) => setDepartDate(e.target.value)} />
                  <Calendar size={16} className="flat-field-icon" />
                </div>
              </div>
              <div className="flat-search-divider" />
              <div className="flat-search-field">
                <label className="flat-field-label">NO. OF DAYS</label>
                <div className="flat-field-value-row">
                  <select
                    className="flat-field-select"
                    value={umrahNoOfDays}
                    onChange={(e) => setUmrahNoOfDays(e.target.value)}
                  >
                    <option value="7">7</option>
                    <option value="10">10</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="28">28</option>
                  </select>
                  <ChevronDown size={16} className="flat-field-chevron" />
                </div>
              </div>
              <div className="flat-search-divider" />
              <div className="flat-search-field">
                <label className="flat-field-label">VISA TYPE</label>
                <div className="flat-field-value-row">
                  <select
                    className="flat-field-select"
                    value={umrahVisaType}
                    onChange={(e) => setUmrahVisaType(e.target.value)}
                  >
                    <option value="Tourist">Tourist</option>
                    <option value="Umrah">Umrah</option>
                    <option value="eVisa">eVisa</option>
                  </select>
                  <ChevronDown size={16} className="flat-field-chevron" />
                </div>
              </div>
              <button type="submit" className="flat-search-btn">Search</button>
            </form>
          )}

          {/* ─── VISAS Search Bar ─── */}
          {activeTab === 'visa' && (
            <form onSubmit={handleFormSubmit} className="hero-flat-search-bar">
              <div className="flat-search-field flat-search-field-wide">
                <label className="flat-field-label">DESTINATION COUNTRY</label>
                <div className="flat-field-value-row">
                  <select
                    className="flat-field-select"
                    value={visaDestination}
                    onChange={(e) => setVisaDestination(e.target.value)}
                  >
                    <option value="Dubai, UAE">Dubai, UAE</option>
                    <option value="Baku, Azerbaijan">Baku, Azerbaijan</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Saudi Arabia">Saudi Arabia (Umrah / Tourist)</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Thailand">Thailand</option>
                    <option value="United Kingdom">United Kingdom (UK)</option>
                    <option value="United States">United States (USA)</option>
                  </select>
                  <ChevronDown size={16} className="flat-field-chevron" />
                </div>
              </div>
              <div className="flat-search-divider" />
              <div className="flat-search-field">
                <label className="flat-field-label">CHECK-IN</label>
                <div className="flat-field-value-row">
                  <input
                    type="date"
                    className="flat-field-input"
                    value={visaCheckIn}
                    onChange={(e) => setVisaCheckIn(e.target.value)}
                  />
                  <Calendar size={16} className="flat-field-icon" />
                </div>
              </div>
              <div className="flat-search-divider" />
              <div className="flat-search-field">
                <label className="flat-field-label">GUESTS</label>
                <div className="flat-field-value-row">
                  <select
                    className="flat-field-select"
                    value={visaGuests}
                    onChange={(e) => setVisaGuests(e.target.value)}
                  >
                    <option value="1 adult">1 adult</option>
                    <option value="2 adults">2 adults</option>
                    <option value="3 adults">3 adults</option>
                    <option value="4 adults">4 adults</option>
                    <option value="5+ adults">5+ adults</option>
                  </select>
                  <ChevronDown size={16} className="flat-field-chevron" />
                </div>
              </div>
              <button type="submit" className="flat-search-btn">Search</button>
            </form>
          )}

          {/* ─── CAR RENTALS Search Bar ─── */}
          {activeTab === 'cars' && (
            <form onSubmit={handleFormSubmit} className="hero-flat-search-bar">
              <div className="flat-search-field flat-search-field-wide">
                <label className="flat-field-label">PICK-UP LOCATION</label>
                <div className="flat-field-value-row">
                  <select
                    className="flat-field-select"
                    value={carLocation}
                    onChange={(e) => setCarLocation(e.target.value)}
                  >
                    <option value="Jeddah, Saudi Arabia">Jeddah, Saudi Arabia</option>
                    <option value="Makkah, Saudi Arabia">Makkah, Saudi Arabia</option>
                    <option value="Madinah, Saudi Arabia">Madinah, Saudi Arabia</option>
                    <option value="Dubai, UAE">Dubai, UAE</option>
                    <option value="Singapore">Singapore</option>
                  </select>
                  <ChevronDown size={16} className="flat-field-chevron" />
                </div>
              </div>
              <div className="flat-search-divider" />
              <div className="flat-search-field">
                <label className="flat-field-label">PICK-UP DATE</label>
                <div className="flat-field-value-row">
                  <input
                    type="date"
                    className="flat-field-input"
                    value={carPickupDate}
                    onChange={(e) => setCarPickupDate(e.target.value)}
                  />
                  <Calendar size={16} className="flat-field-icon" />
                </div>
              </div>
              <div className="flat-search-divider" />
              <div className="flat-search-field">
                <label className="flat-field-label">DROP-OFF DATE</label>
                <div className="flat-field-value-row">
                  <input
                    type="date"
                    className="flat-field-input"
                    value={carDropoffDate}
                    onChange={(e) => setCarDropoffDate(e.target.value)}
                  />
                  <Calendar size={16} className="flat-field-icon" />
                </div>
              </div>
              <div className="flat-search-divider" />
              <div className="flat-search-field">
                <label className="flat-field-label">CAR TYPE</label>
                <div className="flat-field-value-row">
                  <select
                    className="flat-field-select"
                    value={carType}
                    onChange={(e) => setCarType(e.target.value)}
                  >
                    <option value="GMC Yukon (VIP Umrah)">GMC Yukon (VIP Umrah)</option>
                    <option value="Executive SUV">Executive SUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Toyota HiAce (Group)">Toyota HiAce (Group)</option>
                    <option value="Toyota Coaster (Family Bus)">Toyota Coaster (Family Bus)</option>
                  </select>
                  <ChevronDown size={16} className="flat-field-chevron" />
                </div>
              </div>
              <button type="submit" className="flat-search-btn">Search</button>
            </form>
          )}

        </div>
      </section>

      {/* Continuous Scrolling Partner Airlines Marquee */}
      <AirlineMarquee />
    </>
  );
}
