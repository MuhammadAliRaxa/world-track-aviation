'use client';

/**
 * InquiryForm — WorldTrackTravel
 *
 * Standalone, reusable client-side inquiry form component.
 * Connects to POST /inquiry/submit via inquiryService.
 */

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { inquiryService } from '@/services/inquiry.service';
import type {
  ApiInquiryLookups,
  ApiSubmitInquiryRequest,
} from '@/types/api.types';

interface InquiryFormProps {
  defaultType?: 'general' | 'hotel' | 'visa' | 'transport' | 'umrah' | 'tour';
  title?: string;
  subtitle?: string;
  onSuccess?: () => void;
  className?: string;
}

export function InquiryForm({
  defaultType = 'general',
  title = 'Send an Inquiry',
  subtitle = 'Fill out the form below and our team will get back to you within 15 minutes.',
  onSuccess,
  className = '',
}: InquiryFormProps) {
  const [inquiryType, setInquiryType] = useState<
    'general' | 'hotel' | 'visa' | 'transport' | 'umrah' | 'tour'
  >(defaultType);

  const [lookups, setLookups] = useState<ApiInquiryLookups | null>(null);

  // Common fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  // Specific fields
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [countryName, setCountryName] = useState('');
  const [selectedRouteId, setSelectedRouteId] = useState<number>(0);
  const [selectedVehicleId, setSelectedVehicleId] = useState<number>(0);

  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    inquiryService.getInquiryLookups().then((res) => {
      if (res) setLookups(res);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    let payload: ApiSubmitInquiryRequest;

    if (inquiryType === 'hotel') {
      payload = {
        type: 'hotel',
        name,
        email,
        contact,
        message,
        checkin_date: checkinDate,
        checkout_date: checkoutDate,
        adults,
        children,
      };
    } else if (inquiryType === 'visa') {
      payload = {
        type: 'visa',
        name,
        email,
        contact,
        message,
        country_name: countryName,
      };
    } else if (inquiryType === 'transport') {
      payload = {
        type: 'transport',
        name,
        email,
        contact,
        message,
        route_id: selectedRouteId,
        vehicle_type_id: selectedVehicleId,
      };
    } else if (inquiryType === 'umrah') {
      payload = {
        type: 'umrah',
        name,
        email,
        contact,
        message,
        checkin_date: checkinDate,
        checkout_date: checkoutDate,
        adults,
        children,
      };
    } else if (inquiryType === 'tour') {
      payload = {
        type: 'tour',
        name,
        email,
        contact,
        message,
        adults,
        children,
      };
    } else {
      payload = {
        type: 'general',
        name,
        email,
        contact,
        message,
      };
    }

    try {
      const res = await inquiryService.submitInquiry(payload);
      setSuccessMessage(res.message || 'Inquiry submitted successfully!');
      // Reset inputs on success
      setName('');
      setEmail('');
      setContact('');
      setMessage('');
      if (onSuccess) onSuccess();
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : 'Failed to submit inquiry. Please try again.';
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`inquiry-form-card p-6 bg-white rounded-2xl shadow-lg border border-slate-100 ${className}`}
    >
      {title && (
        <h3 className="text-xl font-bold text-slate-900 mb-1">{title}</h3>
      )}
      {subtitle && (
        <p className="text-sm text-slate-500 mb-6">{subtitle}</p>
      )}

      {successMessage ? (
        <div className="p-6 text-center bg-emerald-50 rounded-xl border border-emerald-200">
          <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-emerald-900 mb-1">
            Thank You!
          </h4>
          <p className="text-sm text-emerald-700 mb-4">{successMessage}</p>
          <button
            type="button"
            onClick={() => setSuccessMessage(null)}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 flex items-center gap-2">
              <AlertCircle size={16} className="shrink-0 text-red-500" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Service Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Inquiry Category
            </label>
            <select
              value={inquiryType}
              onChange={(e) =>
                setInquiryType(
                  e.target.value as InquiryFormProps['defaultType'] & string,
                )
              }
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="general">General Inquiry</option>
              <option value="hotel">Hotel Reservation</option>
              <option value="visa">Visa Application</option>
              <option value="transport">Private Transport</option>
              <option value="umrah">Umrah Package</option>
              <option value="tour">Holiday Tour Package</option>
            </select>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                WhatsApp / Phone *
              </label>
              <input
                type="tel"
                required
                placeholder="+92 300 1234567"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Conditional fields based on type */}
          {(inquiryType === 'hotel' || inquiryType === 'umrah') && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Check-in Date
                </label>
                <input
                  type="date"
                  value={checkinDate}
                  onChange={(e) => setCheckinDate(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Check-out Date
                </label>
                <input
                  type="date"
                  value={checkoutDate}
                  onChange={(e) => setCheckoutDate(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                />
              </div>
            </div>
          )}

          {inquiryType === 'visa' && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Destination Country
              </label>
              {lookups?.custom_visa_countries &&
              lookups.custom_visa_countries.length > 0 ? (
                <select
                  value={countryName}
                  onChange={(e) => setCountryName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                >
                  <option value="">Select a Country</option>
                  {lookups.custom_visa_countries.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  placeholder="e.g. Saudi Arabia, UAE, Turkey"
                  value={countryName}
                  onChange={(e) => setCountryName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                />
              )}
            </div>
          )}

          {inquiryType === 'transport' && lookups?.transport_routes && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Transport Route
                </label>
                <select
                  value={selectedRouteId}
                  onChange={(e) => setSelectedRouteId(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                >
                  <option value={0}>Select Route</option>
                  {lookups.transport_routes.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Vehicle Class
                </label>
                <select
                  value={selectedVehicleId}
                  onChange={(e) => setSelectedVehicleId(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                >
                  <option value={0}>Select Vehicle</option>
                  {lookups.vehicles?.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Message / Special Requests
            </label>
            <textarea
              rows={3}
              placeholder="Provide any additional details or specific requirements..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send size={16} />
                <span>Submit Inquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
