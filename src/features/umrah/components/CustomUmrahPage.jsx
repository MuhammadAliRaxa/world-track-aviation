'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { AppBar, Footer, Modals } from '../../../shared';
import { UmrahInclusionsBar } from './custom/UmrahInclusionsBar';
import { UmrahHotelRow } from './custom/UmrahHotelRow';
import { UmrahTransportRow } from './custom/UmrahTransportRow';
import { UmrahFareInputs } from './custom/UmrahFareInputs';
import { UmrahContactInputs } from './custom/UmrahContactInputs';
import { UmrahCalculationSummary } from './custom/UmrahCalculationSummary';

export function CustomUmrahPage() {
  // Inclusion Checkboxes
  const [includeVisa, setIncludeVisa] = useState(true);
  const [includeTransport, setIncludeTransport] = useState(true);
  const [includeTicket, setIncludeTicket] = useState(false);

  // Hotels State
  const [hotels, setHotels] = useState([
    {
      id: 1,
      location: 'Makkah',
      checkIn: '2026-09-14',
      checkOut: '2026-09-17',
      hotelName: 'AL SHOHADA HOTEL AJYAD ROAD 5 STAR',
      roomType: 'Double',
      nights: 3,
      bedsText: '(1 Double Bed) (1 Triple Bed)',
    },
    {
      id: 2,
      location: 'Madinah',
      checkIn: '2026-09-17',
      checkOut: '2026-09-20',
      hotelName: 'AL SHOHADA HOTEL AJYAD ROAD 5 STAR',
      roomType: 'Triple',
      nights: 3,
      bedsText: '(1 Double Bed) (1 Triple Bed)',
    },
  ]);

  // Transports State
  const [transports, setTransports] = useState([
    {
      id: 1,
      sector: 'Jed Apt - Mak Htl',
      vehicleType: 'GMC 5-7 Person',
    },
    {
      id: 2,
      sector: 'Mak Htl - Med Htl',
      vehicleType: 'GMC 5-7 Person',
    },
  ]);

  // Ticket Fares State
  const [adultFare, setAdultFare] = useState('');
  const [childFare, setChildFare] = useState('');
  const [infantFare, setInfantFare] = useState('');

  // Personal Details State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // UI States
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [calculatedResult, setCalculatedResult] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Add Hotel Handler
  const handleAddHotel = () => {
    const nextId = Date.now();
    setHotels([
      ...hotels,
      {
        id: nextId,
        location: hotels.length % 2 === 0 ? 'Makkah' : 'Madinah',
        checkIn: '2026-09-20',
        checkOut: '2026-09-23',
        hotelName: 'AL SHOHADA HOTEL AJYAD ROAD 5 STAR',
        roomType: 'Double',
        nights: 3,
        bedsText: '(1 Double Bed) (1 Triple Bed)',
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
    setHotels(
      hotels.map((h) => (h.id === id ? { ...h, [field]: value } : h))
    );
  };

  // Add Transport Handler
  const handleAddTransport = () => {
    const nextId = Date.now();
    setTransports([
      ...transports,
      {
        id: nextId,
        sector: 'Med Htl - Jed Apt',
        vehicleType: 'GMC 5-7 Person',
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

  // Reset Form
  const handleResetForm = () => {
    setHotels([
      {
        id: 1,
        location: 'Makkah',
        checkIn: '2026-09-14',
        checkOut: '2026-09-17',
        hotelName: 'AL SHOHADA HOTEL AJYAD ROAD 5 STAR',
        roomType: 'Double',
        nights: 3,
        bedsText: '(1 Double Bed) (1 Triple Bed)',
      },
    ]);
    setTransports([
      {
        id: 1,
        sector: 'Jed Apt - Mak Htl',
        vehicleType: 'GMC 5-7 Person',
      },
    ]);
    setAdultFare('');
    setChildFare('');
    setInfantFare('');
    setFullName('');
    setEmail('');
    setPhone('');
    setCalculatedResult(null);
  };

  // Calculate UBC Cost
  const handleCalculateUBC = (e) => {
    e.preventDefault();
    const hotelCostPerNight = 45000;
    const totalNights = hotels.reduce((acc, h) => acc + (h.nights || 3), 0);
    const hotelTotal = totalNights * hotelCostPerNight;
    const transportTotal = transports.length * 35000;
    const visaTotal = includeVisa ? 45000 : 0;
    const ticketTotal = Number(adultFare) || 125000;
    const grandTotal = hotelTotal + transportTotal + visaTotal + ticketTotal;

    setCalculatedResult({
      hotelTotal,
      transportTotal,
      visaTotal,
      ticketTotal,
      grandTotal,
      nightsCount: totalNights,
    });
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
              <h1 className="tr-hero-h1">Build Your Own Umrah Package</h1>
              <p className="tr-hero-intro">
                Not every trip fits a fixed package. Tell us your travel dates, how many people are going, which hotel tier you want in Makkah and Madinah, and whether you need a private or shared transfer, and we'll put together a price based on exactly that, not a one-size-fits-all deal.
              </p>
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
      <div className="custom-umrah-container">
        <div className="custom-umrah-card">
          {/* Top Form Header */}
          <div className="custom-umrah-header">
            <div className="custom-umrah-header-info">
              <span className="custom-umrah-tag">
                CUSTOM GROUP BOOKING
              </span>
              <h2 className="custom-umrah-title">
                Build your Custom Umrah Package
              </h2>
              <p className="custom-umrah-subtitle">
                Choose stays, transport and traveler details for an instant UBC calculation
              </p>
            </div>

            {/* Checkbox Inclusion Pills */}
            <UmrahInclusionsBar
              includeVisa={includeVisa}
              setIncludeVisa={setIncludeVisa}
              includeTransport={includeTransport}
              setIncludeTransport={setIncludeTransport}
              includeTicket={includeTicket}
              setIncludeTicket={setIncludeTicket}
            />
          </div>

          <form onSubmit={handleCalculateUBC} className="umrah-form-wrapper">
            {/* ── HOTELS SECTION ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
                />
              ))}
            </div>

            {/* ── TRANSPORTS SECTION ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {transports.map((t, index) => (
                <UmrahTransportRow
                  key={t.id}
                  transport={t}
                  index={index}
                  totalTransports={transports.length}
                  onUpdate={handleUpdateTransport}
                  onAdd={handleAddTransport}
                  onRemove={handleRemoveTransport}
                />
              ))}
            </div>

            {/* ── ADD TICKET SECTION ── */}
            <UmrahFareInputs
              adultFare={adultFare}
              setAdultFare={setAdultFare}
              childFare={childFare}
              setChildFare={setChildFare}
              infantFare={infantFare}
              setInfantFare={setInfantFare}
            />

            {/* ── PERSONAL DETAILS SECTION ── */}
            <UmrahContactInputs
              fullName={fullName}
              setFullName={setFullName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
            />

            {/* Bottom Form Actions (Reset & Calculate) */}
            <div className="umrah-form-bottom-actions">
              <button
                type="button"
                onClick={handleResetForm}
                className="umrah-btn-reset"
              >
                Reset Form
              </button>

              <button
                type="submit"
                className="umrah-btn-calculate"
              >
                Calculate UBC
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
