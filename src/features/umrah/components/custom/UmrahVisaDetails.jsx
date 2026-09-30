'use client';

import React, { useState } from 'react';
import { CufSelect } from './CufSelect';

const DEFAULT_VISA_TYPES = [
  'Visa with Sharing Transport',
  'Visa with Private Transport',
];

export function UmrahVisaDetails({
  visaType,
  setVisaType,
  error,
  onClearError,
  options = DEFAULT_VISA_TYPES,
}) {
  const [isOpen, setIsOpen] = useState(false);
  // Ensure only the first two options are shown and infant visa is never displayed
  const visibleOptions = (options || DEFAULT_VISA_TYPES)
    .filter((opt) => !String(opt).toLowerCase().includes('infant'))
    .slice(0, 2);

  return (
    <div className="cuf-section">
      <h3 className="cuf-section-title">Visa Details</h3>
      <div className="cuf-field cuf-field--narrow">
        <CufSelect
          label="Select Visa Type"
          required={true}
          value={visaType}
          placeholder="Select type"
          options={visibleOptions}
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
