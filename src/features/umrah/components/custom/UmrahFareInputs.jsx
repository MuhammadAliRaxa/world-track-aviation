'use client';

import React from 'react';

export function UmrahFareInputs({
  adultFare,
  setAdultFare,
  childFare,
  setChildFare,
  infantFare,
  setInfantFare,
}) {
  return (
    <div className="umrah-section-block">
      <h3 className="umrah-section-title">
        Add Ticket
      </h3>

      <div className="umrah-grid-3cols">
        <div className="umrah-field-group">
          <label className="umrah-field-label">
            Adult Ticket Fare
          </label>
          <input
            type="number"
            placeholder="Enter Adult Price (PKR)"
            value={adultFare}
            onChange={(e) => setAdultFare(e.target.value)}
            className="umrah-field-input"
          />
        </div>

        <div className="umrah-field-group">
          <label className="umrah-field-label">
            Child Ticket Fare
          </label>
          <input
            type="number"
            placeholder="Child Ticket Price (PKR)"
            value={childFare}
            onChange={(e) => setChildFare(e.target.value)}
            className="umrah-field-input"
          />
        </div>

        <div className="umrah-field-group">
          <label className="umrah-field-label">
            Infant Ticket Fare
          </label>
          <input
            type="number"
            placeholder="Infant Ticket Price (PKR)"
            value={infantFare}
            onChange={(e) => setInfantFare(e.target.value)}
            className="umrah-field-input"
          />
        </div>
      </div>
    </div>
  );
}
