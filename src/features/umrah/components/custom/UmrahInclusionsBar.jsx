'use client';

import React from 'react';
import { Check } from 'lucide-react';

export function UmrahInclusionsBar({
  includeVisa,
  setIncludeVisa,
  includeTransport,
  setIncludeTransport,
  includeTicket,
  setIncludeTicket,
}) {
  return (
    <div className="umrah-inclusions-wrap">
      <label className={`umrah-inclusion-checkbox-label ${includeVisa ? 'active' : ''}`}>
        <input
          type="checkbox"
          checked={includeVisa}
          onChange={(e) => setIncludeVisa(e.target.checked)}
          style={{ display: 'none' }}
        />
        {includeVisa && <Check size={13} />}
        <span>Umrah Visa</span>
      </label>

      <label className={`umrah-inclusion-checkbox-label ${includeTransport ? 'active' : ''}`}>
        <input
          type="checkbox"
          checked={includeTransport}
          onChange={(e) => setIncludeTransport(e.target.checked)}
          style={{ display: 'none' }}
        />
        {includeTransport && <Check size={13} />}
        <span>Transport</span>
      </label>

      <label className={`umrah-inclusion-checkbox-label ${includeTicket ? 'active' : ''}`}>
        <input
          type="checkbox"
          checked={includeTicket}
          onChange={(e) => setIncludeTicket(e.target.checked)}
          style={{ display: 'none' }}
        />
        {includeTicket && <Check size={13} />}
        <span>Ticket</span>
      </label>
    </div>
  );
}
