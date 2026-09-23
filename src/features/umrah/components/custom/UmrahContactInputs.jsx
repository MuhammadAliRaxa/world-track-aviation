'use client';

import React from 'react';

export function UmrahContactInputs({
  fullName,
  setFullName,
  email,
  setEmail,
  phone,
  setPhone,
}) {
  return (
    <div className="umrah-section-block">
      <h3 className="umrah-section-title">
        Personal Details
      </h3>

      <div className="umrah-grid-3cols">
        <div className="umrah-field-group">
          <label className="umrah-field-label">
            Name *
          </label>
          <input
            type="text"
            required
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="umrah-field-input"
          />
        </div>

        <div className="umrah-field-group">
          <label className="umrah-field-label">
            Email *
          </label>
          <input
            type="email"
            required
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="umrah-field-input"
          />
        </div>

        <div className="umrah-field-group">
          <label className="umrah-field-label">
            Contact Number *
          </label>
          <input
            type="tel"
            required
            placeholder="Phone Number (e.g. +92 300 1234567)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="umrah-field-input"
          />
        </div>
      </div>
    </div>
  );
}
