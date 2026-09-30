'use client';

/**
 * CufSelect – Custom floating dropdown matching the hero search bar style.
 *
 * Props:
 *   label              - field label (small, above)
 *   value              - currently selected value string
 *   placeholder        - shown when nothing selected
 *   options            - array of { value, label, id } OR array of strings
 *   onChange           - called with selected value string
 *   alignRight         - align floating menu to right edge
 *   isOpen             - controlled open state
 *   onToggle           - toggle open/close
 *   onClose            - close the dropdown
 *   searchable         - show search filter input
 *   searchPlaceholder  - placeholder for search input
 *   header             - optional header text (e.g. "Hotels in Makkah (2)")
 *   footer             - optional footer element
 */

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check, Search } from 'lucide-react';

export function CufSelect({
  label,
  value,
  placeholder = 'Select…',
  options = [],
  onChange,
  alignRight = false,
  isOpen = false,
  onToggle,
  onClose,
  searchable = false,
  searchPlaceholder = 'Search...',
  header,
  footer,
  disabled = false,
}) {
  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Reset search when dropdown closes
  useEffect(() => {
    if (!isOpen) setSearchTerm('');
  }, [isOpen]);

  // Normalize options to { value, label }
  const normalizedOptions = options.map((o) =>
    typeof o === 'string' ? { value: o, label: o } : o
  );

  const displayLabel =
    normalizedOptions.find((o) =>
      String(o.value).toLowerCase().trim() === String(value || '').toLowerCase().trim()
    )?.label || value;

  // Filter options if searchable
  const filteredOptions =
    searchable && searchTerm.trim()
      ? normalizedOptions.filter((o) =>
          o.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : normalizedOptions;

  // Close when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target)
      ) {
        onClose?.();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen, onClose]);

  return (
    <div className="cuf-custom-select-wrap">
      {label && <label className="cuf-label">{label}</label>}
      <div className="cuf-custom-select-field-wrap">
        {/* Trigger */}
        <button
          ref={triggerRef}
          type="button"
          disabled={disabled}
          className={`cuf-custom-select-trigger ${isOpen ? 'cuf-custom-select-trigger--open' : ''} ${disabled ? 'cuf-custom-select-trigger--disabled opacity-60 cursor-not-allowed bg-gray-50' : ''}`}
          onClick={(e) => {
            if (disabled) return;
            e.stopPropagation();
            onToggle?.();
          }}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span
            className={`cuf-custom-select-value ${!value ? 'cuf-custom-select-placeholder' : ''}`}
          >
            {displayLabel || placeholder}
          </span>
          <ChevronDown
            size={14}
            strokeWidth={2.5}
            className={`cuf-custom-select-chevron ${isOpen ? 'cuf-custom-select-chevron--open' : ''}`}
          />
        </button>

        {/* Floating menu */}
        {isOpen && (
          <div
            ref={menuRef}
            className={`cuf-custom-select-menu ${alignRight ? 'cuf-custom-select-menu--right' : ''}`}
            role="listbox"
          >
            {header && (
              <div className="cuf-custom-select-header">
                {header}
              </div>
            )}

            {searchable && (
              <div
                className="cuf-custom-select-search-wrap"
                onClick={(e) => e.stopPropagation()}
              >
                <Search size={14} className="cuf-custom-select-search-icon" />
                <input
                  type="text"
                  className="cuf-custom-select-search-input"
                  placeholder={searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
              </div>
            )}

            {filteredOptions.length === 0 ? (
              <div className="cuf-custom-select-empty">No options found</div>
            ) : (
              filteredOptions.map((opt) => {
                const selected = value === opt.value;
                return (
                  <div
                    key={opt.value}
                    role="option"
                    aria-selected={selected}
                    className={`cuf-custom-select-item ${selected ? 'cuf-custom-select-item--selected' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onChange?.(opt.value);
                      onClose?.();
                    }}
                  >
                    <span className="cuf-custom-select-item-label">
                      {opt.label}
                    </span>
                    {selected && (
                      <Check
                        size={14}
                        strokeWidth={2.6}
                        className="cuf-custom-select-check"
                      />
                    )}
                  </div>
                );
              })
            )}

            {footer && (
              <div
                className="cuf-custom-select-footer"
                onClick={(e) => e.stopPropagation()}
              >
                {footer}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
