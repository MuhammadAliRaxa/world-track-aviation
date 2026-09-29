'use client';

/**
 * UmrahPillField  – a single "pill" field that looks like the hero search bar.
 *
 * Props:
 *  label       - upper tiny label (e.g. "NAME", "CONTACT *")
 *  value       - current value string shown in the pill
 *  placeholder - greyed text when nothing selected
 *  icon        - optional lucide icon element shown on the left
 *  isOpen      - controlled open state
 *  onToggle    - fired when pill is clicked
 *  onClose     - fired when user picks an option (or we auto-close)
 *  children    - the dropdown panel content (rendered inside floating menu)
 *  alignRight  - push floating menu to the right edge
 *  isInput     - render a plain <input> instead of a button pill
 *  inputType   - type for the <input> (default "text")
 *  inputValue  - value for the <input>
 *  onInputChange - onChange for <input>
 */

import React from 'react';
import { ChevronDown } from 'lucide-react';

export function UmrahPillField({
  label,
  value,
  placeholder = 'Select…',
  icon,
  isOpen,
  onToggle,
  children,
  alignRight = false,
  /* text-input mode */
  isInput = false,
  inputType = 'text',
  inputValue = '',
  onInputChange,
  /* date-input mode */
  isDate = false,
  dateValue = '',
  onDateChange,
}) {
  return (
    <div
      className={`upf-pill ${isOpen ? 'upf-pill--open' : ''}`}
      onClick={(e) => {
        if (!isInput && !isDate) {
          e.stopPropagation();
          onToggle?.();
        }
      }}
      role={isInput || isDate ? undefined : 'button'}
      tabIndex={isInput || isDate ? undefined : 0}
      aria-haspopup={isInput || isDate ? undefined : 'listbox'}
      aria-expanded={isOpen}
      onKeyDown={
        !isInput && !isDate
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onToggle?.();
              }
            }
          : undefined
      }
    >
      {/* Left icon */}
      {icon && <span className="upf-pill-icon">{icon}</span>}

      {/* Text content */}
      <div className="upf-pill-content">
        <span className="upf-pill-label">{label}</span>

        {isInput ? (
          <input
            type={inputType}
            className="upf-pill-input"
            placeholder={placeholder}
            value={inputValue}
            onChange={onInputChange}
            onClick={(e) => e.stopPropagation()}
          />
        ) : isDate ? (
          <>
            <span className="upf-pill-value" style={!dateValue ? { color: '#94a3b8' } : {}}>
              {dateValue
                ? new Date(dateValue + 'T00:00:00').toLocaleDateString('en-PK', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })
                : placeholder}
            </span>
            <input
              type="date"
              className="upf-pill-native-date"
              value={dateValue}
              onChange={(e) => onDateChange?.(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </>
        ) : (
          <span
            className="upf-pill-value"
            style={!value ? { color: '#94a3b8' } : {}}
          >
            {value || placeholder}
          </span>
        )}
      </div>

      {/* Chevron (only for select pills) */}
      {!isInput && !isDate && (
        <ChevronDown
          size={14}
          strokeWidth={2.4}
          className={`upf-pill-chevron ${isOpen ? 'upf-pill-chevron--open' : ''}`}
        />
      )}

      {/* Calendar icon for date pills */}
      {isDate && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="upf-pill-cal-icon">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
        </svg>
      )}

      {/* Floating dropdown panel */}
      {isOpen && children && (
        <div
          className={`upf-dropdown-menu ${alignRight ? 'upf-dropdown-menu--right' : ''}`}
          role="listbox"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      )}
    </div>
  );
}

/**
 * UmrahDropdownOption – a single option row inside a UmrahPillField dropdown.
 */
export function UmrahDropdownOption({ label, isSelected, onClick }) {
  return (
    <div
      role="option"
      aria-selected={isSelected}
      className={`upf-dropdown-item ${isSelected ? 'upf-dropdown-item--selected' : ''}`}
      onClick={onClick}
    >
      <span className="upf-dropdown-item-label">{label}</span>
      {isSelected && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          className="upf-dropdown-check"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </div>
  );
}
