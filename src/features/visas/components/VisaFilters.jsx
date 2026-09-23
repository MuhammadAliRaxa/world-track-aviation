import React from 'react';
import { VISA_CATEGORIES } from '../data/visasData';

export function VisaFilters({ activeFilter, onFilterChange }) {
  return (
    <div className="visa-filters-wrapper">
      <div className="visa-filters-pill-group">
        {VISA_CATEGORIES.map((category) => {
          const isActive = activeFilter === category.id;
          return (
            <button
              key={category.id}
              type="button"
              className={`visa-filter-pill ${isActive ? 'active' : ''}`}
              onClick={() => onFilterChange(category.id)}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
