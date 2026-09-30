'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { CufSelect } from './CufSelect';
import { GuestsPopup } from '../../../hotels/components/GuestsPopup';

const DURATION_OPTIONS = [
  '7 Days', '10 Days', '12 Days', '14 Days', '15 Days', '21 Days', '28 Days',
];

export function UmrahContactInputs({
  fullName, setFullName,
  phone, setPhone,
  pax, setPax,
  duration, setDuration,
  durationOptions = ['15 Days', '21 Days', '28 Days'],
}) {
  const [open, setOpen] = useState(null);
  const paxRef = useRef(null);

  // Pax counts matching the Umrah Package Details page (Adult: 1, Child: 0, Infant: 0)
  const [paxCounts, setPaxCounts] = useState({
    Adult: 1,
    Child: 0,
    Infant: 0,
  });

  // Custom days input state
  const [customDays, setCustomDays] = useState('');

  const toggle = (key) => setOpen((c) => (c === key ? null : key));
  const close = () => setOpen(null);

  // Close dropdown on outside click
  useEffect(() => {
    if (open !== 'pax') return;
    function handleClickOutside(event) {
      if (paxRef.current && !paxRef.current.contains(event.target)) {
        close();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  // Handle applying custom duration (e.g. user writes 18 -> "18 Days")
  const handleApplyCustomDuration = () => {
    const raw = String(customDays).trim();
    if (!raw) return;
    const num = parseInt(raw, 10);
    const formatted = !isNaN(num) && num > 0 ? `${num} Days` : (raw.toLowerCase().includes('day') ? raw : `${raw} Days`);
    setDuration(formatted);
    close();
  };

  // Build active duration options list (including custom duration if selected)
  const baseDurations = durationOptions && durationOptions.length > 0 ? durationOptions : DURATION_OPTIONS;
  const activeDurationOptions = [...baseDurations];
  if (duration && !activeDurationOptions.includes(duration)) {
    activeDurationOptions.push(duration);
  }

  // Update counts and format display label exactly like package details page
  const updatePaxCount = (type, delta) => {
    const currentVal = paxCounts[type] ?? 0;
    const minVal = type === 'Adult' ? 1 : 0;
    const nextVal = Math.max(minVal, currentVal + delta);
    const nextCounts = { ...paxCounts, [type]: nextVal };

    const parts = [];
    if (nextCounts.Adult > 0) {
      parts.push(`${nextCounts.Adult} Adult${nextCounts.Adult > 1 ? 's' : ''}`);
    }
    if (nextCounts.Child > 0) {
      parts.push(`${nextCounts.Child} Child${nextCounts.Child > 1 ? 'ren' : ''}`);
    }
    if (nextCounts.Infant > 0) {
      parts.push(`${nextCounts.Infant} Infant${nextCounts.Infant > 1 ? 's' : ''}`);
    }
    const label = parts.join(', ') || '1 Adult';

    setPaxCounts(nextCounts);
    setPax(label);
  };

  return (
    <div className="cuf-section">
      <h3 className="cuf-section-title">Personal Details</h3>
      <div className="cuf-grid-4">
        {/* Name */}
        <div className="cuf-field">
          <label className="cuf-label">Name</label>
          <input
            type="text"
            className="cuf-input"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* Contact */}
        <div className="cuf-field">
          <label className="cuf-label">Contact*</label>
          <input
            type="tel"
            className="cuf-input"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* No of Pax — Uses GuestsPopup matching Umrah Package Details page */}
        <div className="cuf-field" ref={paxRef} style={{ position: 'relative' }}>
          <label className="cuf-label">No of Pax</label>
          <div className="cuf-custom-select-field-wrap">
            <button
              type="button"
              className={`cuf-custom-select-trigger ${open === 'pax' ? 'cuf-custom-select-trigger--open' : ''}`}
              onClick={() => toggle('pax')}
              aria-expanded={open === 'pax'}
            >
              <span className={`cuf-custom-select-value ${!pax ? 'cuf-custom-select-placeholder' : ''}`}>
                {pax || '1 Adult'}
              </span>
              <ChevronDown
                size={15}
                className={`cuf-custom-select-chevron ${open === 'pax' ? 'cuf-custom-select-chevron--open' : ''}`}
              />
            </button>
            <GuestsPopup
              isOpen={open === 'pax'}
              onClose={close}
              counts={paxCounts}
              onUpdateCount={updatePaxCount}
            />
          </div>
        </div>

        {/* Umrah Duration (API options + custom days write-in) */}
        <CufSelect
          label="Umrah Duration"
          value={duration}
          placeholder="Select Days"
          options={activeDurationOptions}
          onChange={setDuration}
          alignRight
          isOpen={open === 'duration'}
          onToggle={() => toggle('duration')}
          onClose={close}
          footer={
            <div
              style={{
                borderTop: '1px solid #f1f5f9',
                padding: '10px 12px 10px',
                backgroundColor: '#f8fafc',
                borderBottomLeftRadius: '14px',
                borderBottomRightRadius: '14px',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#64748b',
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                }}
              >
                Or Write Custom Days
              </div>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <input
                  type="number"
                  min="1"
                  max="365"
                  placeholder="e.g. 18"
                  value={customDays}
                  onChange={(e) => setCustomDays(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleApplyCustomDuration();
                    }
                  }}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    height: '32px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    padding: '0 10px',
                    fontSize: '13px',
                    color: '#0f172a',
                    outline: 'none',
                    backgroundColor: '#ffffff',
                  }}
                />
                <button
                  type="button"
                  onClick={handleApplyCustomDuration}
                  style={{
                    height: '32px',
                    padding: '0 14px',
                    borderRadius: '8px',
                    backgroundColor: '#0073ff',
                    color: '#ffffff',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s ease',
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#005fe0')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0073ff')}
                >
                  Set
                </button>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
