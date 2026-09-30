'use client';

import React, { useState, useMemo } from 'react';
import { CufSelect } from './CufSelect';

// ── Fallbacks (used only when API returns nothing) ──────────────────────────
const FALLBACK_SECTORS = [
  { value: 'ISLAMABAD - JEDDAH - ISLAMABAD', label: 'ISLAMABAD - JEDDAH - ISLAMABAD' },
  { value: 'Lahore-Jeddah-Lahore', label: 'Lahore - Jeddah - Lahore' },
];

const FALLBACK_DATES = Array.from({ length: 12 }, (_, i) => {
  const d = new Date();
  d.setMonth(d.getMonth() + i);
  return {
    value: d.toISOString().slice(0, 7),
    label: d.toLocaleString('en-US', { month: 'long', year: 'numeric' }),
  };
});

const FALLBACK_AIRLINES = [
  'PIA – Pakistan International Airlines',
  'Saudi Arabian Airlines (Saudia)',
  'Emirates',
  'Qatar Airways',
  'Air Arabia',
  'Fly Dubai',
];

// ── Helper: does a ticket match the sector? ─────────────────────────────────
function ticketMatchesSector(ticket, sectorVal) {
  if (!sectorVal) return true;
  const clean = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const s = clean(sectorVal);
  const r = clean(ticket.sector || ticket.route || '');
  return r.includes(s) || s.includes(r);
}

// ── Helper: format date string nicely ───────────────────────────────────────
function fmtDate(dateStr) {
  if (!dateStr) return dateStr;
  const d = new Date(dateStr + (dateStr.length === 10 ? 'T00:00:00' : ''));
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

// ── Component ────────────────────────────────────────────────────────────────
export function UmrahFareInputs({
  departure,
  setDeparture,
  airline,
  setAirline,
  sector,
  setSector,
  ticketLookups = {},
  allTickets = [],   // full raw ticket list from API
  errors = {},
  onClearError,
}) {
  const [open, setOpen] = useState(null);
  const toggle = (key) => setOpen((c) => (c === key ? null : key));
  const close = () => setOpen(null);

  const hasTickets = Array.isArray(allTickets) && allTickets.length > 0;

  // ── 1. Sector options (from ticketLookups or allTickets) ─────────────────
  const sectorOptions = useMemo(() => {
    if (ticketLookups.routes && ticketLookups.routes.length > 0) {
      return ticketLookups.routes;
    }
    if (hasTickets) {
      const seen = new Set();
      const list = [];
      allTickets.forEach((t) => {
        const name = t.sector || t.route;
        if (name && !seen.has(name)) {
          seen.add(name);
          list.push({ value: name, label: name });
        }
      });
      if (list.length > 0) return list;
    }
    return FALLBACK_SECTORS;
  }, [ticketLookups.routes, hasTickets, allTickets]);

  // ── 2. Departure dates filtered strictly by selected sector ───────────────
  const departureOptions = useMemo(() => {
    if (!sector) return [];

    if (hasTickets) {
      // Filter tickets to only those matching the chosen sector
      const relevant = allTickets.filter((t) => ticketMatchesSector(t, sector));

      // Extract unique departure dates
      const seen = new Set();
      const dates = [];
      relevant.forEach((t) => {
        const raw = t.outboundDate || t.departure_date || '';
        if (raw && !seen.has(raw)) {
          seen.add(raw);
          dates.push({ value: raw, label: fmtDate(raw) });
        }
      });

      // Sort chronological
      dates.sort((a, b) => (a.value > b.value ? 1 : -1));
      return dates;
    }

    // Only if API completely failed to load tickets
    return ticketLookups.departureDates && ticketLookups.departureDates.length > 0
      ? ticketLookups.departureDates
      : FALLBACK_DATES;
  }, [allTickets, sector, hasTickets, ticketLookups.departureDates]);

  // ── 3. Airlines filtered strictly by selected sector + departure date ─────
  const airlineOptions = useMemo(() => {
    if (!sector || !departure) return [];

    if (hasTickets) {
      // Filter by sector and departure date
      const relevant = allTickets.filter((t) => {
        const raw = t.outboundDate || t.departure_date || '';
        return ticketMatchesSector(t, sector) && raw === departure;
      });

      // Extract unique airline names
      const seen = new Set();
      const airlines = [];
      relevant.forEach((t) => {
        const name = t.airlineName || '';
        if (name && !seen.has(name)) {
          seen.add(name);
          airlines.push({ value: name, label: name });
        }
      });

      return airlines;
    }

    // Only if API completely failed to load tickets
    return ticketLookups.airlines && ticketLookups.airlines.length > 0
      ? ticketLookups.airlines
      : FALLBACK_AIRLINES;
  }, [allTickets, sector, departure, hasTickets, ticketLookups.airlines]);

  // ── Handlers (cascade reset downstream fields on change) ─────────────────
  const handleSectorChange = (val) => {
    setSector(val);
    setDeparture('');
    setAirline('');
  };

  const handleDepartureChange = (val) => {
    setDeparture(val);
    setAirline('');
  };

  // ── Disabled states and dynamic labels ───────────────────────────────────
  const dateDisabled = !sector || (hasTickets && departureOptions.length === 0);
  const airlineDisabled = !sector || !departure || (hasTickets && airlineOptions.length === 0);

  const datePlaceholder = !sector
    ? 'Select sector first'
    : departureOptions.length === 0
    ? 'No departure dates available'
    : 'Select departure date';

  const airlinePlaceholder = !sector
    ? 'Select sector first'
    : !departure
    ? 'Select date first'
    : airlineOptions.length === 0
    ? 'No airlines available'
    : 'Select Airline';

  const dateLabel =
    !sector || departureOptions.length === 0
      ? 'Departure Date'
      : `Departure Date (${departureOptions.length} available)`;

  const airlineLabel =
    !departure || airlineOptions.length === 0
      ? 'Airline'
      : `Airline (${airlineOptions.length} available)`;

  return (
    <div className="cuf-section">
      <h3 className="cuf-section-title">Ticket Details</h3>
      <div className="cuf-grid-3">

        {/* 1 — Sector */}
        <CufSelect
          label="Sector"
          required={true}
          value={sector}
          placeholder="Select Sector"
          options={sectorOptions}
          onChange={(val) => {
            handleSectorChange(val);
            onClearError?.('ticketSector');
          }}
          error={errors.ticketSector}
          isOpen={open === 'sector'}
          onToggle={() => toggle('sector')}
          onClose={close}
        />

        {/* 2 — Departure Date (available only after sector is selected) */}
        <CufSelect
          label={dateLabel}
          required={true}
          value={departure}
          placeholder={datePlaceholder}
          options={departureOptions}
          onChange={(val) => {
            handleDepartureChange(val);
            onClearError?.('ticketDeparture');
          }}
          error={errors.ticketDeparture}
          isOpen={!dateDisabled && open === 'departure'}
          onToggle={() => !dateDisabled && toggle('departure')}
          onClose={close}
          disabled={dateDisabled}
        />

        {/* 3 — Airline (available only after departure date is selected) */}
        <CufSelect
          label={airlineLabel}
          required={true}
          value={airline}
          placeholder={airlinePlaceholder}
          options={airlineOptions}
          onChange={(val) => {
            setAirline(val);
            onClearError?.('ticketAirline');
          }}
          error={errors.ticketAirline}
          alignRight
          isOpen={!airlineDisabled && open === 'airline'}
          onToggle={() => !airlineDisabled && toggle('airline')}
          onClose={close}
          disabled={airlineDisabled}
        />

      </div>
    </div>
  );
}
