'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { AppBar, Footer, Modals } from '../../../shared';
import { UmrahHotelRow } from './custom/UmrahHotelRow';
import { UmrahTransportRow } from './custom/UmrahTransportRow';
import { UmrahFareInputs } from './custom/UmrahFareInputs';
import { UmrahContactInputs } from './custom/UmrahContactInputs';
import { UmrahVisaDetails } from './custom/UmrahVisaDetails';
import { UmrahCalculationSummary } from './custom/UmrahCalculationSummary';
import { hotelService } from '../../../services/hotel.service';
import { flightService } from '../../../services/flight.service';
import { transportService } from '../../../services/transport.service';

export function CustomUmrahPage({
  h1 = 'Custom Umrah Package',
  heroIntro = "Not every trip fits a fixed package. Tell us your travel dates, how many people are going, which hotel tier you want in Makkah and Madinah, and whether you need a private or shared transfer, and we'll put together a price based on exactly that, not a one-size-fits-all deal.",
} = {}) {
  // Personal Details State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [pax, setPax] = useState('1 Adult');
  const [duration, setDuration] = useState('');

  // Visa Details State
  const [visaType, setVisaType] = useState('');

  // Hotels State
  const [hotels, setHotels] = useState([
    {
      id: 1,
      location: 'Makkah',
      checkIn: '',
      checkOut: '',
      hotelName: '',
      roomType: '',
      nights: 0,
      bedsText: '',
    },
    {
      id: 2,
      location: 'Madinah',
      checkIn: '',
      checkOut: '',
      hotelName: '',
      roomType: '',
      nights: 0,
      bedsText: '',
    },
  ]);

  // Transports State
  const [transports, setTransports] = useState([
    {
      id: 1,
      sector: '',
      vehicleType: '',
    },
  ]);

  // Ticket State
  const [departure, setDeparture] = useState('');
  const [airline, setAirline] = useState('');
  const [sector, setSector] = useState('');

  // Group tickets lookups (routes, airlines, departure dates from API)
  const [ticketLookups, setTicketLookups] = useState({
    routes: [],
    airlines: [],
    departureDates: [],
  });

  // UI States
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [calculatedResult, setCalculatedResult] = useState(null);
  const [includeTransport, setIncludeTransport] = useState(true);

  // API Lookups State for Hotel Details
  const [hotelLookups, setHotelLookups] = useState({
    cities: ['Makkah', 'Madinah'],
    roomTypes: ['Double', 'Triple', 'Quad', 'Sharing'],
    hotels: [],
    loading: true,
  });

  // Duration options loaded from group tickets lookups API
  const [durationOptions, setDurationOptions] = useState([
    '15 Days', '21 Days', '28 Days'
  ]);

  // Transport lookups from API (routes with vehicle types)
  const [transportLookups, setTransportLookups] = useState({
    routes: [],
    vehicleTypes: [],
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let isMounted = true;
    Promise.allSettled([
      hotelService.getHotelLookups(),
      hotelService.getHotels(),
      flightService.getGroupTicketLookups(),
      transportService.getTransportListing(),
    ]).then(([lookupsRes, hotelsRes, flightLookupsRes, transportRes]) => {
      if (!isMounted) return;
      let cities = ['Makkah', 'Madinah'];
      let roomTypes = ['Double', 'Triple', 'Quad', 'Sharing'];
      let hotelsList = [];

      if (lookupsRes.status === 'fulfilled' && lookupsRes.value) {
        const rawCities = lookupsRes.value.cities || [];
        if (rawCities.length > 0) {
          cities = Array.from(new Set(rawCities.map((c) => (c.name === 'Madina' ? 'Madinah' : c.name))));
        }
        const rawRoomTypes = lookupsRes.value.room_types || [];
        if (rawRoomTypes.length > 0) {
          roomTypes = rawRoomTypes.map((r) => r.room_type);
          if (!roomTypes.includes('Sharing')) roomTypes.push('Sharing');
        }
      }

      if (hotelsRes.status === 'fulfilled' && Array.isArray(hotelsRes.value)) {
        hotelsList = hotelsRes.value;
      }

      setHotelLookups({
        cities,
        roomTypes,
        hotels: hotelsList,
        loading: false,
      });

      // Extract durations, routes, airlines, departure dates from /group-tickets/lookups API
      if (flightLookupsRes.status === 'fulfilled' && flightLookupsRes.value) {
        const flightData = flightLookupsRes.value;

        // Durations
        const rawDurations = flightData.durations || [];
        if (Array.isArray(rawDurations) && rawDurations.length > 0) {
          const apiDurations = rawDurations
            .map((d) => {
              if (typeof d === 'number') return `${d} Days`;
              if (typeof d === 'string') return d.includes('Day') ? d : `${d} Days`;
              if (d && typeof d === 'object') {
                const val = d.duration || d.days || d.name || d.id;
                return val ? `${val} Days` : null;
              }
              return null;
            })
            .filter(Boolean);

          if (apiDurations.length > 0) {
            setDurationOptions(apiDurations);
          }
        }

        // Routes (sectors), airlines, departure dates
        const rawRoutes = flightData.routes || [];
        const rawAirlines = flightData.airlines || [];
        const rawDepartures = flightData.departure_dates || [];

        setTicketLookups({
          routes: rawRoutes.map((r) => ({
            value: r.name,
            label: r.name,
            id: r.id,
          })),
          airlines: rawAirlines.map((a) => ({
            value: a.name,
            label: a.name,
            id: a.id,
          })),
          departureDates: rawDepartures.map((dd) => ({
            value: dd.departure_date,
            label: dd.departure_date,
          })),
        });
      }

      // Extract transport routes and vehicle types from /transport/list API
      if (transportRes.status === 'fulfilled' && transportRes.value) {
        const tData = transportRes.value;
        const tRoutes = Array.isArray(tData.data) ? tData.data : (Array.isArray(tData) ? tData : []);
        const tVehicleTypes = tData.vehicle_types || [];

        setTransportLookups({
          routes: tRoutes.map((r) => ({
            id: r.id,
            route: r.route,
            vehicles: (r.vehicles || []).map((v) => ({
              vehicleType: v.vehicle_type,
              price: v.price,
              priceFormatted: v.price_formatted || (v.price ? `SAR ${v.price}` : ''),
              capacity: v.vehicle_capacity,
            })),
          })),
          vehicleTypes: tVehicleTypes.map((vt) => ({
            id: vt.id,
            name: vt.vehicle_type,
            capacity: vt.vehicle_capacity,
          })),
        });
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  // Add Hotel Handler
  const handleAddHotel = () => {
    const nextId = Date.now();
    setHotels([
      ...hotels,
      {
        id: nextId,
        location: hotels.length % 2 === 0 ? 'Makkah' : 'Madinah',
        checkIn: '',
        checkOut: '',
        hotelName: '',
        roomType: '',
        nights: 0,
        bedsText: '',
      },
    ]);
  };

  // Remove Hotel Handler
  const handleRemoveHotel = (id) => {
    if (hotels.length > 1) {
      setHotels(hotels.filter((h) => h.id !== id));
    }
  };

  // Update Hotel Handler
  const handleUpdateHotel = (id, field, value) => {
    setHotels((prev) =>
      prev.map((h) => {
        if (h.id !== id) return h;
        const updated = { ...h, [field]: value };

        // Automatically update nights if check-in or check-out date changes
        if (field === 'checkIn' || field === 'checkOut') {
          const d1 = new Date(field === 'checkIn' ? value : h.checkIn);
          const d2 = new Date(field === 'checkOut' ? value : h.checkOut);
          const diffDays = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
          if (!isNaN(diffDays) && diffDays > 0) {
            updated.nights = diffDays;
          }
        }

        // Automatically update bed badge text if roomType changes
        if (field === 'roomType') {
          if (value === 'Double') updated.bedsText = '(1 Double Bed)';
          else if (value === 'Triple') updated.bedsText = '(1 Triple Bed)';
          else if (value === 'Quad') updated.bedsText = '(1 Quad Bed)';
          else if (value === 'Sharing') updated.bedsText = '(1 Sharing Bed)';
          else if (value) updated.bedsText = `(1 ${value} Bed)`;
        }

        return updated;
      })
    );
  };

  // Add Transport Handler
  const handleAddTransport = () => {
    const nextId = Date.now();
    setTransports([
      ...transports,
      {
        id: nextId,
        sector: '',
        vehicleType: '',
      },
    ]);
  };

  // Remove Transport Handler
  const handleRemoveTransport = (id) => {
    if (transports.length > 1) {
      setTransports(transports.filter((t) => t.id !== id));
    }
  };

  // Update Transport Handler
  const handleUpdateTransport = (id, field, value) => {
    setTransports(
      transports.map((t) => (t.id === id ? { ...t, [field]: value } : t))
    );
  };

  // Calculate Package Cost
  const handleCalculatePackage = (e) => {
    e.preventDefault();
    const hotelCostPerNight = 45000;
    const totalNights = hotels.reduce((acc, h) => acc + (h.nights || 3), 0);
    const transportTotal = visaType === 'Visa without Transport' ? 0 : (transports.length * 35000);
    const visaTotal = visaType ? 45000 : 0;
    const ticketTotal = departure && airline ? 125000 : 0;
    const grandTotal = hotelTotal + transportTotal + visaTotal + ticketTotal;

    setCalculatedResult({
      hotelTotal,
      transportTotal,
      visaTotal,
      ticketTotal,
      grandTotal,
      nightsCount: totalNights,
      pax,
      duration,
    });
  };

  // Generate PDF (placeholder)
  const handleGeneratePDF = () => {
    window.print();
  };

  return (
    <div className="custom-umrah-page-root" style={{ background: '#f8fafc', minHeight: '100vh', color: '#0f172a' }}>
      {/* 1. Header Bar & Floating Navbar */}
      <AppBar
        onOpenContact={() => setIsContactOpen(true)}
        heroContent={
          <div className="tr-hero">
            <div className="tr-hero-bg" />
            <div className="tr-hero-overlay" />
            <div className="tr-hero-body">
              <h1 className="tr-hero-h1">{h1}</h1>
              <p className="tr-hero-intro">{heroIntro}</p>
            </div>
          </div>
        }
      />

      {/* 2. Breadcrumb Navigation */}
      <div className="blog-breadcrumb-row">
        <div className="detail-container breadcrumb-inner">
          <Link
            href="/"
            className="breadcrumb-back-capsule"
            style={{ textDecoration: 'none' }}
          >
            <ArrowLeft size={13} />
            <span>Home</span>
          </Link>
        </div>
      </div>

      {/* 3. Main Form Container */}
      {/* 3. Main Form Container */}
      <div className="custom-umrah-container">
        {/* Top Form Header (Outside Card) */}
        <div className="custom-umrah-header">
          <div className="custom-umrah-header-info">
            <span className="custom-umrah-tag">
              CUSTOM GROUP BOOKING
            </span>
            <h2 className="custom-umrah-title">
              Build your  Custom Umrah Package
            </h2>
            <p className="custom-umrah-subtitle">
              Choose stays, transport and traveler details for an instant UBC calculation.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="custom-umrah-card">
          <form onSubmit={handleCalculatePackage} className="umrah-form-wrapper">

            {/* ── PERSONAL DETAILS SECTION ── */}
            <UmrahContactInputs
              fullName={fullName}
              setFullName={setFullName}
              phone={phone}
              setPhone={setPhone}
              pax={pax}
              setPax={setPax}
              duration={duration}
              setDuration={setDuration}
              durationOptions={durationOptions}
            />

            {/* ── VISA DETAILS SECTION ── */}
            <UmrahVisaDetails
              visaType={visaType}
              setVisaType={setVisaType}
            />

            {/* ── HOTELS SECTION ── */}
            <div className="cuf-hotels-section">
              {hotels.map((hotel, index) => (
                <UmrahHotelRow
                  key={hotel.id}
                  hotel={hotel}
                  index={index}
                  isLast={index === hotels.length - 1}
                  canRemove={hotels.length > 1}
                  onUpdate={handleUpdateHotel}
                  onAdd={handleAddHotel}
                  onRemove={handleRemoveHotel}
                  hotelLookups={hotelLookups}
                />
              ))}
            </div>

            {/* ── TRANSPORTS SECTION (only when visa without transport) ── */}
            {visaType === 'Visa without Transport' && (
              <div className="cuf-transports-section">
                {transports.map((t, index) => (
                  <UmrahTransportRow
                    key={t.id}
                    transport={t}
                    index={index}
                    totalTransports={transports.length}
                    onUpdate={handleUpdateTransport}
                    onAdd={handleAddTransport}
                    onRemove={handleRemoveTransport}
                    transportLookups={transportLookups}
                  />
                ))}
              </div>
            )}

            {/* ── TICKET DETAILS SECTION (only shown for custom duration) ── */}
            {duration && !durationOptions.includes(duration) && (
              <UmrahFareInputs
                departure={departure}
                setDeparture={setDeparture}
                airline={airline}
                setAirline={setAirline}
                sector={sector}
                setSector={setSector}
                ticketLookups={ticketLookups}
              />
            )}

            {/* Bottom Form Actions */}
            <div className="umrah-form-bottom-actions">
              <button
                type="submit"
                className="umrah-btn-calculate"
              >
                Calculate Package
              </button>

              <button
                type="button"
                onClick={handleGeneratePDF}
                className="umrah-btn-generate-pdf"
              >
                Generate PDF
              </button>
            </div>
          </form>

          {/* Instant Calculation Output Box */}
          <UmrahCalculationSummary
            calculatedResult={calculatedResult}
            onOpenContact={() => setIsContactOpen(true)}
          />
        </div>
      </div>

      {/* 4. Contact Modal */}
      <Modals isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}
