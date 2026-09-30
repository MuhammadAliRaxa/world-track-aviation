'use client';

import React, { useState, useMemo } from 'react';
import { Plus, Minus } from 'lucide-react';
import { CufSelect } from './CufSelect';

const FALLBACK_SECTORS = [
  'Jeddah Airport - Makkah Hotel',
  'Makkah Hotel - Medina Hotel',
  'Medina Hotel - Medina Airport',
  'Medina Airport - Medina Hotel',
  'Makkah Hotel - Jeddah Airport',
  'Makkah Ziarat',
  'Medina Ziarat',
];

const FALLBACK_VEHICLES = [
  { value: 'SEDAN', label: 'SEDAN (4 Person)' },
  { value: 'STARIA', label: 'STARIA (7 Person)' },
  { value: 'HIACE', label: 'HIACE (10 Person)' },
  { value: 'COASTER', label: 'COASTER (22 Person)' },
  { value: 'BUS', label: 'BUS (45 Person)' },
];

export function UmrahTransportRow({
  transport,
  index,
  totalTransports,
  onUpdate,
  onAdd,
  onRemove,
  transportLookups = {},
  errors = {},
  onClearError,
}) {
  const [open, setOpen] = useState(null);
  const toggle = (key) => setOpen((c) => (c === key ? null : key));
  const close = () => setOpen(null);

  // Sector Options from API routes
  const sectorOptions = useMemo(() => {
    return transportLookups?.routes && transportLookups.routes.length > 0
      ? transportLookups.routes.map((r) => ({
          value: r.route,
          label: r.route,
          id: r.id,
        }))
      : FALLBACK_SECTORS.map((s) => ({ value: s, label: s }));
  }, [transportLookups?.routes]);

  // Find matching route for vehicle options with prices
  const matchedRoute = useMemo(() => {
    return (transportLookups?.routes || []).find(
      (r) => (r.route || '').toLowerCase().trim() === (transport.sector || '').toLowerCase().trim()
    );
  }, [transportLookups?.routes, transport.sector]);

  const vehicleOptions = useMemo(() => {
    if (matchedRoute && matchedRoute.vehicles && matchedRoute.vehicles.length > 0) {
      return matchedRoute.vehicles.map((v) => ({
        value: v.vehicleType,
        label: `${v.vehicleType} (${v.capacity} Person)${v.priceFormatted ? ` • ${v.priceFormatted}` : ''}`,
      }));
    }
    if (transportLookups?.vehicleTypes && transportLookups.vehicleTypes.length > 0) {
      return transportLookups.vehicleTypes.map((vt) => ({
        value: vt.name,
        label: `${vt.name} (${vt.capacity} Person)`,
      }));
    }
    return FALLBACK_VEHICLES;
  }, [matchedRoute, transportLookups?.vehicleTypes]);

  // Atomic update: sets sector and clears vehicle in a single state pass
  const handleSectorChange = (val) => {
    onUpdate(transport.id, {
      sector: val,
      vehicleType: '',
    });
    onClearError?.(`transport_${transport.id}_sector`);
  };

  const handleVehicleChange = (val) => {
    onUpdate(transport.id, 'vehicleType', val);
    onClearError?.(`transport_${transport.id}_vehicle`);
  };

  return (
    <div className="cuf-section">
      <h3 className="cuf-section-title">Transport Details</h3>
      <div className="cuf-transport-grid">
        {/* Sector from /transport/list API */}
        <CufSelect
          label="Transport Sector"
          required={true}
          value={transport.sector}
          placeholder="Select sector"
          options={sectorOptions}
          onChange={handleSectorChange}
          error={errors[`transport_${transport.id}_sector`]}
          isOpen={open === 'sector'}
          onToggle={() => toggle('sector')}
          onClose={close}
          searchable={true}
          searchPlaceholder="Search sector..."
        />

        {/* Vehicle Type from /transport/list API (with live capacity and rates) */}
        <CufSelect
          label="Vehicle Type"
          required={true}
          value={transport.vehicleType}
          placeholder="Select vehicle"
          options={vehicleOptions}
          onChange={handleVehicleChange}
          error={errors[`transport_${transport.id}_vehicle`]}
          isOpen={open === 'vehicle'}
          onToggle={() => toggle('vehicle')}
          onClose={close}
        />

        {/* Buttons */}
        <div className="cuf-field cuf-field--btns">
          <label className="cuf-label">&nbsp;</label>
          <div className="cuf-icon-btn-row">
            <button
              type="button"
              onClick={() => totalTransports > 1 && onRemove(transport.id)}
              className="cuf-icon-btn cuf-icon-btn--red"
              style={{
                opacity: totalTransports > 1 ? 1 : 0.85,
                cursor: totalTransports > 1 ? 'pointer' : 'default',
              }}
              title="Remove transport"
            >
              <Minus size={15} strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={onAdd}
              className="cuf-icon-btn cuf-icon-btn--blue"
              title="Add transport"
            >
              <Plus size={15} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
