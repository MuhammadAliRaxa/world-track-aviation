import React from 'react';
import { useHotels } from '../hooks/useHotels';

export function HotelFilters() {
  const { activeFilter, setFilter } = useHotels();

  const filterOptions = [
    { label: 'All', value: 'All' },
    { label: 'Singapore', value: 'Singapore' },
    { label: 'Saudi Arabia', value: 'Saudi Arabia' },
    { label: 'Dubai', value: 'Dubai' },
    { label: 'Baku', value: 'Baku' },
  ];

  return (
    <div className="hotel-filters-container">
      {filterOptions.map((opt) => {
        const isActive = activeFilter.toLowerCase() === opt.value.toLowerCase();
        return (
          <button
            key={opt.value}
            type="button"
            className={`hotel-filter-pill ${isActive ? 'active' : ''}`}
            onClick={() => setFilter(opt.value)}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
