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
  options = [],
  sharingRateSar = 126,
  privateRateSar = 550,
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Normalize options from API data and ensure NO price is shown in labels
  const rawList = options && options.length > 0 ? options : DEFAULT_VISA_TYPES;
  const formattedOptions = rawList
    .filter((opt) => {
      const val = typeof opt === 'string' ? opt : (opt.value || opt.label || '');
      return val && !String(val).toLowerCase().includes('infant');
    })
    .map((opt) => {
      if (typeof opt === 'string') {
        const clean = opt.replace(/\s*—\s*SAR\s*\d+(\.\d+)?/gi, '').replace(/\s*\(?SAR\s*\d+(\.\d+)?\)?/gi, '').trim();
        return { value: clean, label: clean };
      }
      const rawText = opt.label || opt.value || '';
      const clean = String(rawText).replace(/\s*—\s*SAR\s*\d+(\.\d+)?/gi, '').replace(/\s*\(?SAR\s*\d+(\.\d+)?\)?/gi, '').trim();
      const val = opt.value ? String(opt.value).replace(/\s*—\s*SAR\s*\d+(\.\d+)?/gi, '').replace(/\s*\(?SAR\s*\d+(\.\d+)?\)?/gi, '').trim() : clean;
      return {
        ...opt,
        value: val,
        label: clean || val,
      };
    });

  return (
    <div className="cuf-section">
      <h3 className="cuf-section-title">Visa Details</h3>
      <div className="cuf-field cuf-field--narrow">
        <CufSelect
          label="Select Visa Type"
          required={true}
          value={visaType}
          placeholder="Select type"
          options={formattedOptions}
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
