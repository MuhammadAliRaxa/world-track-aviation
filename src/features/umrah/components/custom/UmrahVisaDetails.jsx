'use client';

import React, { useState } from 'react';
import { CufSelect } from './CufSelect';

const VISA_TYPES = [
  'Visa with Private Transport',
  'Visa with Sharing Transport',
];

export function UmrahVisaDetails({ visaType, setVisaType, error, onClearError }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cuf-section">
      <h3 className="cuf-section-title">Visa Details</h3>
      <div className="cuf-field cuf-field--narrow">
        <CufSelect
          label="Select Visa Type"
          required={true}
          value={visaType}
          placeholder="Select type"
          options={VISA_TYPES}
          onChange={(val) => {
            setVisaType(val);
            onClearError?.('visaType');
          }}
          error={error}
          isOpen={isOpen}
          onToggle={() => setIsOpen((v) => !v)}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
}
