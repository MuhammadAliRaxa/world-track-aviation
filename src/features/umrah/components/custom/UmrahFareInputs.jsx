'use client';

import React, { useState } from 'react';
import { CufSelect } from './CufSelect';

const FALLBACK_AIRLINES = [
  'PIA – Pakistan International Airlines',
  'Saudi Arabian Airlines (Saudia)',
  'Emirates',
  'Qatar Airways',
  'Air Arabia',
  'Fly Dubai',
  'Air Blue',
  'Serene Air',
];

const FALLBACK_DEPARTURES = Array.from({ length: 12 }, (_, i) => {
  const d = new Date();
  d.setMonth(d.getMonth() + i);
  return {
    value: d.toISOString().slice(0, 7),
    label: d.toLocaleString('en-US', { month: 'long', year: 'numeric' }),
  };
});

export function UmrahFareInputs({
  departure,
  setDeparture,
  airline,
  setAirline,
  sector,
  setSector,
  ticketLookups = {},
}) {
  const [open, setOpen] = useState(null);
  const toggle = (key) => setOpen((c) => (c === key ? null : key));
  const close = () => setOpen(null);

  // Use API data if available, otherwise fall back to defaults
  const sectorOptions =
    ticketLookups.routes && ticketLookups.routes.length > 0
      ? ticketLookups.routes
      : [
          { value: 'ISLAMABAD - JEDDAH - ISLAMABAD', label: 'ISLAMABAD - JEDDAH - ISLAMABAD' },
          { value: 'Lahore-Jeddah-Lahore', label: 'Lahore - Jeddah - Lahore' },
        ];

  const airlineOptions =
    ticketLookups.airlines && ticketLookups.airlines.length > 0
      ? ticketLookups.airlines
      : FALLBACK_AIRLINES;

  const departureOptions =
    ticketLookups.departureDates && ticketLookups.departureDates.length > 0
      ? ticketLookups.departureDates
      : FALLBACK_DEPARTURES;

  return (
    <div className="cuf-section">
      <h3 className="cuf-section-title">Ticket Details</h3>
      <div className="cuf-grid-3">
        {/* Sector (from group-tickets/lookups routes) */}
        <CufSelect
          label="Sector"
          value={sector}
          placeholder="Select Sector"
          options={sectorOptions}
          onChange={setSector}
          isOpen={open === 'sector'}
          onToggle={() => toggle('sector')}
          onClose={close}
        />

        {/* Departure */}
        <CufSelect
          label="Departure"
          value={departure}
          placeholder="Select departure date"
          options={departureOptions}
          onChange={setDeparture}
          isOpen={open === 'departure'}
          onToggle={() => toggle('departure')}
          onClose={close}
        />

        {/* Airline */}
        <CufSelect
          label="Airline"
          value={airline}
          placeholder="Select Airline"
          options={airlineOptions}
          onChange={setAirline}
          alignRight
          isOpen={open === 'airline'}
          onToggle={() => toggle('airline')}
          onClose={close}
        />
      </div>
    </div>
  );
}
