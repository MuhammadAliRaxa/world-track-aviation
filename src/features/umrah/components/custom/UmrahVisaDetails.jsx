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
  sharingRateSar = 126,
  privateRateSar = 550,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      value: 'Visa with Sharing Transport',
      label: `Visa with Sharing Transport — SAR ${sharingRateSar}`,
    },
    {
      value: 'Visa with Private Transport',
      label: `Visa with Private Transport — SAR ${privateRateSar}`,
    },
  ];

  return (
    <div className="cuf-section">
      <h3 className="cuf-section-title">Visa Details</h3>
      <div className="cuf-field cuf-field--narrow">
        <CufSelect
          label="Select Visa Type"
          required={true}
          value={visaType}
          placeholder="Select type"
          options={options}
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
