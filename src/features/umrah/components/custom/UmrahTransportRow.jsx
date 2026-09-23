'use client';

import React from 'react';

export function UmrahTransportRow({
  transport,
  index,
  totalTransports,
  onUpdate,
  onAdd,
  onRemove,
}) {
  return (
    <div className="umrah-section-block">
      <h3 className="umrah-section-title">
        Add Transport
      </h3>

      <div className="umrah-transport-grid">
        {/* Sector */}
        <div className="umrah-field-group">
          <label className="umrah-field-label">
            Transport Sector
          </label>
          <select
            value={transport.sector}
            onChange={(e) => onUpdate(transport.id, 'sector', e.target.value)}
            className="umrah-field-select"
          >
            <option value="Jed Apt - Mak Htl">Jed Apt - Mak Htl</option>
            <option value="Mak Htl - Med Htl">Mak Htl - Med Htl</option>
            <option value="Med Htl - Jed Apt">Med Htl - Jed Apt</option>
            <option value="Med Apt - Med Htl">Med Apt - Med Htl</option>
          </select>
        </div>

        {/* Vehicle Type */}
        <div className="umrah-field-group">
          <label className="umrah-field-label">
            Vehicle Type
          </label>
          <select
            value={transport.vehicleType}
            onChange={(e) => onUpdate(transport.id, 'vehicleType', e.target.value)}
            className="umrah-field-select"
          >
            <option value="GMC 5-7 Person">GMC 5-7 Person</option>
            <option value="Hyundai H1 7 Person">Hyundai H1 7 Person</option>
            <option value="Coaster 20 Person">Coaster 20 Person</option>
            <option value="Bus 45 Person">Bus 45 Person</option>
          </select>
        </div>

        {/* Action Button */}
        <div>
          {index === 0 && totalTransports > 1 ? (
            <button
              type="button"
              onClick={() => onRemove(transport.id)}
              className="umrah-btn-remove"
              style={{ width: '100%' }}
            >
              Remove
            </button>
          ) : index === totalTransports - 1 ? (
            <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
              {totalTransports > 1 && (
                <button
                  type="button"
                  onClick={() => onRemove(transport.id)}
                  className="umrah-btn-remove"
                  style={{ flex: 1 }}
                >
                  Remove
                </button>
              )}
              <button
                type="button"
                onClick={onAdd}
                className="umrah-btn-add"
                style={{ flex: 1 }}
              >
                Add Transport
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
