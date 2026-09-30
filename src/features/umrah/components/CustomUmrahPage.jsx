'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { AppBar, Footer, Modals } from '../../../shared';
import { UmrahHotelRow } from './custom/UmrahHotelRow';
import { UmrahTransportRow } from './custom/UmrahTransportRow';
import { UmrahFareInputs } from './custom/UmrahFareInputs';
import { UmrahContactInputs } from './custom/UmrahContactInputs';
import { UmrahVisaDetails } from './custom/UmrahVisaDetails';
import { UmrahCalculationSummary } from './custom/UmrahCalculationSummary';
import { openUmrahQuotationWindow } from './custom/UmrahQuotationDocument';
import { hotelService } from '../../../services/hotel.service';
import { flightService } from '../../../services/flight.service';
import { transportService } from '../../../services/transport.service';
import { visaService } from '../../../services/visa.service';

export function CustomUmrahPage({
  h1 = 'Custom Umrah Package',
  heroIntro = "Not every trip fits a fixed package. Tell us your travel dates, how many people are going, which hotel tier you want in Makkah and Madinah, and whether you need a private or shared transfer, and we'll put together a price based on exactly that, not a one-size-fits-all deal.",
} = {}) {
  // Personal Details State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [pax, setPax] = useState('1 Adult');
  const [duration, setDuration] = useState('');

  // Visa Details State
  const [visaType, setVisaType] = useState('');

  // Hotels State
  const [hotels, setHotels] = useState([
    {
      id: 1,
      location: 'Makkah',
      checkIn: '',
      checkOut: '',
      hotelName: '',
      roomType: '',
      nights: 0,
      bedsText: '',
    },
    {
      id: 2,
      location: 'Madinah',
      checkIn: '',
      checkOut: '',
      hotelName: '',
      roomType: '',
      nights: 0,
      bedsText: '',
    },
  ]);

  // Transports State
  const [transports, setTransports] = useState([
    {
      id: 1,
      sector: '',
      vehicleType: '',
    },
  ]);

  // Ticket State
  const [departure, setDeparture] = useState('');
  const [airline, setAirline] = useState('');
  const [sector, setSector] = useState('');
  // Live ticket price per pax from API (PKR); 0 = not yet fetched / no match
  const [ticketPricePerPax, setTicketPricePerPax] = useState(0);

  // Group tickets lookups (routes, airlines, departure dates from API)
  const [ticketLookups, setTicketLookups] = useState({
    routes: [],
    airlines: [],
    departureDates: [],
  });

  // UI States
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [calculatedResult, setCalculatedResult] = useState(null);
  const [includeTransport, setIncludeTransport] = useState(true);

  // API Lookups State for Hotel Details
  const [hotelLookups, setHotelLookups] = useState({
    cities: ['Makkah', 'Madinah'],
    roomTypes: ['Double', 'Triple', 'Quad', 'Sharing'],
    hotels: [],
    loading: true,
  });

  // Duration options loaded from group tickets lookups API
  const [durationOptions, setDurationOptions] = useState([
    '15 Days', '21 Days', '28 Days'
  ]);

  // Transport lookups from API (routes with vehicle types)
  const [transportLookups, setTransportLookups] = useState({
    routes: [],
    vehicleTypes: [],
  });

  // Visa API lookups (sharing transport visa rate & rate of exchange ROE)
  const [visaApiData, setVisaApiData] = useState({
    sharingRateSar: 550,
    roe: 78,
  });

  // All raw tickets from API — used for cascading sector → dates → airlines
  const [allTickets, setAllTickets] = useState([]);


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let isMounted = true;
    Promise.allSettled([
      hotelService.getHotelLookups(),
      hotelService.getHotels(),
      flightService.getGroupTicketLookups(),
      transportService.getTransportListing(),
      visaService.getCalculatorVisaTypes(),
      flightService.getGroupTicketsPaginated(), // all tickets for cascading filter
    ]).then(([lookupsRes, hotelsRes, flightLookupsRes, transportRes, visaRes, allTicketsRes]) => {
      if (!isMounted) return;
      let cities = ['Makkah', 'Madinah'];
      let roomTypes = ['Double', 'Triple', 'Quad', 'Sharing'];
      let hotelsList = [];

      if (lookupsRes.status === 'fulfilled' && lookupsRes.value) {
        const rawCities = lookupsRes.value.cities || [];
        if (rawCities.length > 0) {
          cities = Array.from(new Set(rawCities.map((c) => (c.name === 'Madina' ? 'Madinah' : c.name))));
        }
        const rawRoomTypes = lookupsRes.value.room_types || [];
        if (rawRoomTypes.length > 0) {
          roomTypes = rawRoomTypes.map((r) => r.room_type);
          if (!roomTypes.includes('Sharing')) roomTypes.push('Sharing');
        }
      }

      if (hotelsRes.status === 'fulfilled' && Array.isArray(hotelsRes.value)) {
        hotelsList = hotelsRes.value;
      }

      setHotelLookups({
        cities,
        roomTypes,
        hotels: hotelsList,
        loading: false,
      });

      // Extract durations, routes, airlines, departure dates from /group-tickets/lookups API
      if (flightLookupsRes.status === 'fulfilled' && flightLookupsRes.value) {
        const flightData = flightLookupsRes.value;

        // Durations
        const rawDurations = flightData.durations || [];
        if (Array.isArray(rawDurations) && rawDurations.length > 0) {
          const apiDurations = rawDurations
            .map((d) => {
              if (typeof d === 'number') return `${d} Days`;
              if (typeof d === 'string') return d.includes('Day') ? d : `${d} Days`;
              if (d && typeof d === 'object') {
                const val = d.duration || d.days || d.name || d.id;
                return val ? `${val} Days` : null;
              }
              return null;
            })
            .filter(Boolean);

          if (apiDurations.length > 0) {
            setDurationOptions(apiDurations);
          }
        }

        // Routes (sectors) only — departure dates & airlines now come from allTickets cascade
        const rawRoutes = flightData.routes || [];
        setTicketLookups((prev) => ({
          ...prev,
          routes: rawRoutes.map((r) => ({
            value: r.name,
            label: r.name,
            id: r.id,
          })),
        }));
      }

      // Store full ticket list for cascading Sector → Dates → Airlines
      if (allTicketsRes.status === 'fulfilled' && allTicketsRes.value) {
        const tickets = allTicketsRes.value.tickets || [];
        setAllTickets(tickets);
      }

      // Extract transport routes and vehicle types from /transport/list API
      if (transportRes.status === 'fulfilled' && transportRes.value) {
        const tData = transportRes.value;
        const tRoutes = Array.isArray(tData.data) ? tData.data : (Array.isArray(tData) ? tData : []);
        const tVehicleTypes = tData.vehicle_types || [];

        setTransportLookups({
          routes: tRoutes.map((r) => ({
            id: r.id,
            route: r.route,
            vehicles: (r.vehicles || []).map((v) => ({
              vehicleType: v.vehicle_type,
              price: v.price,
              priceFormatted: v.price_formatted || (v.price ? `SAR ${v.price}` : ''),
              capacity: v.vehicle_capacity,
            })),
          })),
          vehicleTypes: tVehicleTypes.map((vt) => ({
            id: vt.id,
            name: vt.vehicle_type,
            capacity: vt.vehicle_capacity,
          })),
        });
      }

      // Extract sharing transport visa rate & exchange rate (ROE) from /calculator/visa/type API
      if (visaRes.status === 'fulfilled' && visaRes.value) {
        const vData = visaRes.value;
        const items = Array.isArray(vData?.data) ? vData.data : [];
        const roe = Number(vData?.roe) || 78;
        const sharingItem = items.find(
          (i) => i.id === 2 || (i.visa_type && i.visa_type.toLowerCase().includes('transport'))
        );
        const sharingRate = Number(sharingItem?.visa_rates?.selling_price) || 550;
        setVisaApiData({
          sharingRateSar: sharingRate,
          roe,
        });
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);


  // When custom days are selected in duration, clear ticket fields
  useEffect(() => {
    if (duration && !durationOptions.includes(duration)) {
      setDeparture('');
      setAirline('');
      setSector('');
      setTicketPricePerPax(0);
    }
  }, [duration, durationOptions]);

  // Fetch real ticket price from loaded tickets / API when departure + airline + sector are all set
  useEffect(() => {
    if (!departure || !airline) {
      setTicketPricePerPax(0);
      return;
    }

    const clean = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const airlineClean = clean(airline);
    const sectorClean = clean(sector);

    // 1. Instant match against loaded allTickets in memory
    if (allTickets && allTickets.length > 0) {
      const matchedLocal = allTickets.find((t) => {
        const dateMatch = (t.outboundDate || t.departure_date) === departure;
        const nameClean = clean(t.airlineName);
        const secClean  = clean(t.sector || t.route);
        const nameMatch = nameClean.includes(airlineClean) || airlineClean.includes(nameClean);
        const sectorMatch = !sectorClean || secClean.includes(sectorClean) || sectorClean.includes(secClean);
        return dateMatch && nameMatch && sectorMatch && t.pricePKR > 0;
      });

      if (matchedLocal?.pricePKR > 0) {
        setTicketPricePerPax(matchedLocal.pricePKR);
        console.log(
          `[TicketPrice] Matched: ${matchedLocal.airlineName} · ${matchedLocal.sector} · PKR ${matchedLocal.pricePKR.toLocaleString()}/pax`,
          matchedLocal,
        );
        return;
      }
    }

    // 2. Query API if not found in loaded memory
    let cancelled = false;
    flightService.getGroupTicketsPaginated({
      departure_date: departure,
    }).then(({ tickets }) => {
      if (cancelled) return;
      const matched = tickets.find((t) => {
        const nameClean = clean(t.airlineName);
        const secClean  = clean(t.sector || t.route);
        const nameMatch = nameClean.includes(airlineClean) || airlineClean.includes(nameClean);
        const sectorMatch = !sectorClean || secClean.includes(sectorClean) || sectorClean.includes(secClean);
        return nameMatch && sectorMatch && t.pricePKR > 0;
      }) || tickets.find((t) => t.pricePKR > 0);

      if (matched?.pricePKR > 0) {
        setTicketPricePerPax(matched.pricePKR);
        console.log(
          `[TicketPrice] Matched from API: ${matched.airlineName} · ${matched.sector} · PKR ${matched.pricePKR.toLocaleString()}/pax`,
          matched,
        );
      } else {
        setTicketPricePerPax(0);
        console.warn('[TicketPrice] No match found for', { departure, airline, sector }, '→ will use fallback PKR 135,000');
      }
    }).catch(() => {
      if (!cancelled) setTicketPricePerPax(0);
    });
    return () => { cancelled = true; };
  }, [departure, airline, sector, allTickets]);

  // Add Hotel Handler
  const handleAddHotel = () => {
    const nextId = Date.now();
    setHotels([
      ...hotels,
      {
        id: nextId,
        location: hotels.length % 2 === 0 ? 'Makkah' : 'Madinah',
        checkIn: '',
        checkOut: '',
        hotelName: '',
        roomType: '',
        nights: 0,
        bedsText: '',
      },
    ]);
  };

  // Remove Hotel Handler
  const handleRemoveHotel = (id) => {
    if (hotels.length > 1) {
      setHotels(hotels.filter((h) => h.id !== id));
    }
  };

  // Update Hotel Handler (supports both (id, 'field', value) and (id, { field1: val1, ... }))
  const handleUpdateHotel = (id, fieldOrObject, value) => {
    setHotels((prev) =>
      prev.map((h) => {
        if (h.id !== id) return h;
        const updates =
          typeof fieldOrObject === 'object' && fieldOrObject !== null
            ? fieldOrObject
            : { [fieldOrObject]: value };
        const updated = { ...h, ...updates };

        // Automatically update nights if check-in or check-out date changes
        const checkInVal = updates.checkIn !== undefined ? updates.checkIn : h.checkIn;
        const checkOutVal = updates.checkOut !== undefined ? updates.checkOut : h.checkOut;
        if (updates.checkIn !== undefined || updates.checkOut !== undefined) {
          const d1 = new Date(checkInVal);
          const d2 = new Date(checkOutVal);
          const diffDays = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
          if (!isNaN(diffDays) && diffDays > 0) {
            updated.nights = diffDays;
          }
        }

        // Automatically update bed badge text if roomType changes
        if (updates.roomType !== undefined) {
          const rt = updates.roomType;
          if (rt === 'Double') updated.bedsText = '(1 Double Bed)';
          else if (rt === 'Triple') updated.bedsText = '(1 Triple Bed)';
          else if (rt === 'Quad') updated.bedsText = '(1 Quad Bed)';
          else if (rt === 'Sharing') updated.bedsText = '(1 Sharing Bed)';
          else if (rt && !updates.bedsText) updated.bedsText = `(1 ${rt} Bed)`;
        }

        return updated;
      })
    );
  };

  // Add Transport Handler
  const handleAddTransport = () => {
    const nextId = Date.now();
    setTransports((prev) => [
      ...prev,
      {
        id: nextId,
        sector: '',
        vehicleType: '',
      },
    ]);
  };

  // Remove Transport Handler
  const handleRemoveTransport = (id) => {
    setTransports((prev) => {
      if (prev.length > 1) {
        return prev.filter((t) => t.id !== id);
      }
      return prev;
    });
  };

  // Update Transport Handler (supports both (id, 'field', value) and (id, { field1: val1, ... }))
  const handleUpdateTransport = (id, fieldOrObject, value) => {
    setTransports((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t;
        const updates =
          typeof fieldOrObject === 'object' && fieldOrObject !== null
            ? fieldOrObject
            : { [fieldOrObject]: value };
        return { ...t, ...updates };
      })
    );
  };

  const parsePaxCount = (paxStr) => {
    if (!paxStr) return 1;
    const matches = String(paxStr).match(/\d+/g);
    if (!matches || matches.length === 0) return 1;
    return matches.reduce((sum, n) => sum + parseInt(n, 10), 0);
  };

  // Calculate Package Cost
  const computePackageCalculation = () => {
    const paxNum = parsePaxCount(pax);
    const roe = visaApiData.roe || 78;

    // 1. Hotels Estimate — Use real API room rates (SAR × ROE) per hotel
    let calculatedHotelTotal = 0;
    let totalNights = 0;

    hotels.forEach((h) => {
      const nights = Math.max(1, Number(h.nights) || 3);
      totalNights += nights;

      const roomCounts  = h.roomCounts || {};
      const roomRates   = h.roomRates  || {};   // per-room-type SAR rates from /hotel/room/rate
      const minRateSar  = Number(h.minRateSar)  || 0; // hotel min_rate in SAR from listing API

      // Tier-based fallback multiplier (only used when no API rate is available)
      const nameLower = (h.hotelName || '').toLowerCase();
      let tierMultiplier = 1;
      if (
        nameLower.includes('5') || nameLower.includes('clock') ||
        nameLower.includes('fairmont') || nameLower.includes('raffles') ||
        nameLower.includes('swiss') || nameLower.includes('hilton') ||
        nameLower.includes('intercontinental')
      ) { tierMultiplier = 1.45; }
      else if (
        nameLower.includes('4') || nameLower.includes('marriott') ||
        nameLower.includes('movenpick') || nameLower.includes('anwar')
      ) { tierMultiplier = 1.15; }

      // Hardcoded fallback base rates in SAR (used only when API returns nothing)
      const fallbackRatesSar = {
        Double : Math.round(488 * tierMultiplier), // ≈ PKR 38,000 / 78 ROE
        Triple : Math.round(564 * tierMultiplier),
        Quad   : Math.round(641 * tierMultiplier),
        Quint  : Math.round(718 * tierMultiplier),
        Sharing: Math.round(410 * tierMultiplier),
      };

      let hotelDailyRoomsCost = 0;
      let hasConfiguredRooms  = false;

      Object.entries(roomCounts).forEach(([rType, count]) => {
        const countNum = Number(count) || 0;
        if (countNum > 0) {
          hasConfiguredRooms = true;

          // Priority: 1) API per-room-type rate  2) hotel min_rate  3) hardcoded fallback
          let rateSar;
          if (roomRates[rType] && roomRates[rType] > 0) {
            rateSar = roomRates[rType];                      // best: real room-type rate
          } else if (minRateSar > 0) {
            rateSar = minRateSar;                            // good: hotel min rate
          } else {
            rateSar = fallbackRatesSar[rType] || fallbackRatesSar['Double'];  // last resort
          }

          // Safety check against test numbers entered in PKR in database (e.g. 100,000)
          if (rateSar > 10000) {
            rateSar = Math.round(rateSar / roe);
          }

          const ratePkr = Math.round(rateSar * roe);
          hotelDailyRoomsCost += countNum * ratePkr;
        }
      });

      if (!hasConfiguredRooms) {
        // Fallback: 1 Double room using min_rate or hardcoded
        let rateSar = minRateSar > 0 ? minRateSar : fallbackRatesSar['Double'];
        if (rateSar > 10000) rateSar = Math.round(rateSar / roe);
        hotelDailyRoomsCost = Math.round(rateSar * roe);
      }

      calculatedHotelTotal += nights * hotelDailyRoomsCost;
    });


    // 2. Visa Estimate — Live API for Sharing Transport; Private Transport has no visa transport markup
    let visaTotal = 0;
    if (visaType === 'Visa with Sharing Transport') {
      // Live API rate in SAR × ROE exchange rate
      const perPaxSharingFee = Math.round(visaApiData.sharingRateSar * roe);
      visaTotal = paxNum * perPaxSharingFee;
    } else if (visaType === 'Visa with Private Transport') {
      // For private transport, transport is billed separately as private vehicle rates
      visaTotal = 0;
    }

    // 3. Transport Estimate — Fixed Vehicle Price per route from API rates
    let transportTotal = 0;
    if (visaType === 'Visa with Private Transport') {
      transports.forEach((t) => {
        const matchedRoute = (transportLookups?.routes || []).find((r) => r.route === t.sector);
        const matchedVehicle = matchedRoute?.vehicles?.find((v) => v.vehicleType === t.vehicleType);

        if (matchedVehicle && matchedVehicle.price) {
          // Live price from /transport/list API in SAR converted using live ROE
          const sarPrice = Number(matchedVehicle.price) || 0;
          transportTotal += Math.round(sarPrice * roe);
        } else {
          // Default route rate from API (430 SAR) converted using ROE
          transportTotal += Math.round(430 * roe);
        }
      });
    } else {
      // Included in Visa with Sharing Transport
      transportTotal = 0;
    }

    // 4. Ticket Estimate — live pricePKR from /group-tickets/list API
    let ticketTotal = 0;
    const TICKET_FALLBACK_PKR = 135000;
    const isCustomDays = duration && !durationOptions.includes(duration);
    if (!isCustomDays && departure && airline) {
      const ratePerPax = ticketPricePerPax > 0 ? ticketPricePerPax : TICKET_FALLBACK_PKR;
      ticketTotal = paxNum * ratePerPax;
    }

    // 5. Grand Total
    const grandTotal = calculatedHotelTotal + transportTotal + visaTotal + ticketTotal;

    // ── Console Rate Breakdown ──────────────────────────────────────────────
    console.group('%c💼 WTA Custom Umrah Package — Cost Breakdown', 'color:#1565c0;font-size:14px;font-weight:800;');

    console.log('%cInputs', 'color:#475569;font-weight:700;font-size:12px;');
    console.table({
      'Client Name'  : fullName || 'Not entered',
      'Pax String'   : pax,
      'Total Pax'    : paxNum,
      'Duration'     : duration || `${totalNights} nights`,
      'Visa Type'    : visaType || 'Not selected',
      'ROE (SAR→PKR)': roe,
    });

    console.group('%c🏨 Hotels', 'color:#0d47a1;font-weight:700;');
    hotels.forEach((h, i) => {
      const nights     = Math.max(1, Number(h.nights) || 3);
      const roomCounts = h.roomCounts || {};
      const roomRates  = h.roomRates  || {};
      const minRateSar = Number(h.minRateSar) || 0;
      const fallbackRatesSar = { Double: 488, Triple: 564, Quad: 641, Quint: 718, Sharing: 410 };

      const roomRows   = {};
      let hotelSubTotal = 0;

      Object.entries(roomCounts).forEach(([rType, count]) => {
        const countNum = Number(count) || 0;
        if (countNum > 0) {
          let rateSar; let rateSource;
          if (roomRates[rType] && roomRates[rType] > 0) {
            rateSar = roomRates[rType]; rateSource = '✅ API room-rate';
          } else if (minRateSar > 0) {
            rateSar = minRateSar; rateSource = '🟡 API min_rate (fallback)';
          } else {
            rateSar = fallbackRatesSar[rType] || fallbackRatesSar['Double'];
            rateSource = '🔴 Hardcoded fallback';
          }
          if (rateSar > 10000) rateSar = Math.round(rateSar / roe);
          const ratePkr = Math.round(rateSar * roe);
          const lineAmt = nights * countNum * ratePkr;
          hotelSubTotal += lineAmt;
          roomRows[`${rType} ×${countNum}`] = {
            'Rate (SAR)'       : rateSar,
            'ROE'              : roe,
            'Rate/night (PKR)' : ratePkr.toLocaleString(),
            'Nights'           : nights,
            'Rooms'            : countNum,
            'Sub-total (PKR)'  : lineAmt.toLocaleString(),
            'Source'           : rateSource,
          };
        }
      });

      if (Object.keys(roomRows).length === 0) {
        let rateSar = minRateSar > 0 ? minRateSar : fallbackRatesSar['Double'];
        if (rateSar > 10000) rateSar = Math.round(rateSar / roe);
        const ratePkr = Math.round(rateSar * roe);
        hotelSubTotal = nights * ratePkr;
        roomRows['Double ×1 (default)'] = {
          'Rate (SAR)'       : rateSar,
          'ROE'              : roe,
          'Rate/night (PKR)' : ratePkr.toLocaleString(),
          'Nights'           : nights,
          'Rooms'            : 1,
          'Sub-total (PKR)'  : hotelSubTotal.toLocaleString(),
          'Source'           : minRateSar > 0 ? '🟡 API min_rate' : '🔴 Hardcoded fallback',
        };
      }

      console.group(`Hotel ${i + 1}: ${h.hotelName || 'Unknown'} · ${h.location}`);
      console.log('API min_rate (SAR):', minRateSar || 'N/A', '  |  API room rates (SAR):', Object.keys(roomRates).length > 0 ? roomRates : 'not loaded');
      console.table(roomRows);
      console.log(`%c  Hotel ${i + 1} Total: PKR ${hotelSubTotal.toLocaleString()}`, 'font-weight:700;color:#1565c0;');
      console.groupEnd();
    });
    console.log(`%c  Hotels Grand Total: PKR ${calculatedHotelTotal.toLocaleString()}`, 'font-weight:800;color:#0d47a1;font-size:12px;');
    console.groupEnd();

    console.group('%c🛂 Visa', 'color:#166534;font-weight:700;');
    if (visaType === 'Visa with Sharing Transport') {
      const perPaxSharingFee = Math.round(visaApiData.sharingRateSar * roe);
      console.table({
        'Visa Type'              : visaType,
        'API Rate (SAR)'         : visaApiData.sharingRateSar,
        'ROE'                    : roe,
        'Per-Pax Fee (PKR)'      : perPaxSharingFee.toLocaleString(),
        'Total Pax'              : paxNum,
        'Visa Total (PKR)'       : visaTotal.toLocaleString(),
      });
    } else if (visaType === 'Visa with Private Transport') {
      console.log('Visa with Private Transport → Visa cost = PKR 0 (transport billed separately)');
    } else {
      console.log('No visa type selected → Visa cost = PKR 0');
    }
    console.log(`%c  Visa Total: PKR ${visaTotal.toLocaleString()}`, 'font-weight:800;color:#166534;font-size:12px;');
    console.groupEnd();

    console.group('%c🚌 Transport', 'color:#7c3aed;font-weight:700;');
    if (visaType === 'Visa with Private Transport') {
      const transportRows = transports.map((t) => {
        const matchedRoute   = (transportLookups?.routes || []).find((r) => r.route === t.sector);
        const matchedVehicle = matchedRoute?.vehicles?.find((v) => v.vehicleType === t.vehicleType);
        const sarPrice       = matchedVehicle?.price ? Number(matchedVehicle.price) : 430;
        const pkrCost        = Math.round(sarPrice * roe);
        return {
          Route            : t.sector || 'Not set',
          Vehicle          : t.vehicleType || 'Not set',
          'SAR Price'      : sarPrice,
          ROE              : roe,
          'PKR Cost'       : pkrCost.toLocaleString(),
          'Source'         : matchedVehicle?.price ? 'API' : 'Fallback (430 SAR)',
        };
      });
      console.table(transportRows);
    } else {
      console.log('Sharing transport → included in Visa cost → Transport = PKR 0');
    }
    console.log(`%c  Transport Total: PKR ${transportTotal.toLocaleString()}`, 'font-weight:800;color:#7c3aed;font-size:12px;');
    console.groupEnd();

    console.group('%c✈️ Tickets', 'color:#b45309;font-weight:700;');
    if (isCustomDays) {
      console.log('Custom duration selected → Tickets not included');
    } else if (!departure || !airline) {
      console.log('No departure/airline selected → Tickets not included');
    } else {
      const TICKET_FALLBACK_PKR = 135000;
      const ratePerPax = ticketPricePerPax > 0 ? ticketPricePerPax : TICKET_FALLBACK_PKR;
      console.table({
        'Airline'            : airline,
        'Departure'          : departure,
        'Sector'             : sector || 'Not set',
        'Rate per Pax (PKR)' : ratePerPax.toLocaleString(),
        'Source'             : ticketPricePerPax > 0 ? '✅ API /group-tickets/list' : '🔴 Hardcoded fallback (135,000)',
        'Total Pax'          : paxNum,
        'Ticket Total (PKR)' : ticketTotal.toLocaleString(),
      });
    }
    console.log(`%c  Ticket Total: PKR ${ticketTotal.toLocaleString()}`, 'font-weight:800;color:#b45309;font-size:12px;');
    console.groupEnd();

    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color:#cbd5e1;');
    console.log(
      `%c GRAND TOTAL: PKR ${grandTotal.toLocaleString()}`,
      'background:#1565c0;color:#fff;font-size:14px;font-weight:900;padding:4px 10px;border-radius:4px;'
    );
    console.table({
      '🏨 Hotels'    : `PKR ${calculatedHotelTotal.toLocaleString()}`,
      '🛂 Visa'      : `PKR ${visaTotal.toLocaleString()}`,
      '🚌 Transport' : `PKR ${transportTotal.toLocaleString()}`,
      '✈️ Tickets'   : `PKR ${ticketTotal.toLocaleString()}`,
      '💰 TOTAL'     : `PKR ${grandTotal.toLocaleString()}`,
    });
    console.groupEnd();
    // ── End Console Rate Breakdown ──────────────────────────────────────────

    return {
      hotelTotal: calculatedHotelTotal,
      transportTotal,
      visaTotal,
      ticketTotal,
      grandTotal,
      nightsCount: totalNights,
      pax,
      paxNum,
      duration: duration || `${totalNights} Days`,
      visaType: visaType || 'Not Selected',
      transportSummary:
        visaType === 'Visa with Sharing Transport'
          ? 'Included in Visa (Sharing Transport)'
          : `${transports.length} Private Vehicle${transports.length > 1 ? 's' : ''}`,
      hotels: hotels.map((h) => ({
        location: h.location,
        hotelName: h.hotelName || 'Selected Hotel',
        nights: h.nights || 3,
        roomType: h.roomType || 'Standard Room',
      })),
      transports: transports.map((t) => ({
        sector: t.sector || 'Sector',
        vehicleType: t.vehicleType || 'Vehicle',
      })),
      ticketSummary: !isCustomDays && departure && airline ? `${airline} (${departure})` : 'Not Included',
    };
  };

  // Handle Calculate Package submit
  const handleCalculatePackage = (e) => {
    if (e?.preventDefault) e.preventDefault();
    const result = computePackageCalculation();
    setCalculatedResult(result);
  };

  // Generate PDF / Print Quotation
  const handleGeneratePDF = () => {
    const activeResult = calculatedResult || computePackageCalculation();
    if (!calculatedResult) setCalculatedResult(activeResult);
    openUmrahQuotationWindow({
      fullName,
      pax,
      visaType,
      hotels,
      transports,
      departure,
      airline,
      sector,
      calculatedResult: activeResult,
      allTickets,
    });
  };

  return (
    <div className="custom-umrah-page-root" suppressHydrationWarning style={{ background: '#f8fafc', minHeight: '100vh', color: '#0f172a' }}>
      {/* 1. Header Bar & Floating Navbar */}
      <AppBar
        onOpenContact={() => setIsContactOpen(true)}
        heroContent={
          <div className="tr-hero">
            <div className="tr-hero-bg" />
            <div className="tr-hero-overlay" />
            <div className="tr-hero-body">
              <h1 className="tr-hero-h1">{h1}</h1>
              <p className="tr-hero-intro">{heroIntro}</p>
            </div>
          </div>
        }
      />

      {/* 2. Breadcrumb Navigation */}
      <div className="blog-breadcrumb-row">
        <div className="detail-container breadcrumb-inner">
          <Link
            href="/"
            className="breadcrumb-back-capsule"
            style={{ textDecoration: 'none' }}
          >
            <ArrowLeft size={13} />
            <span>Home</span>
          </Link>
        </div>
      </div>

      {/* 3. Main Form Container */}
      {/* 3. Main Form Container */}
      <div className="custom-umrah-container">
        {/* Top Form Header (Outside Card) */}
        <div className="custom-umrah-header">
          <div className="custom-umrah-header-info">
            <span className="custom-umrah-tag">
              CUSTOM GROUP BOOKING
            </span>
            <h2 className="custom-umrah-title">
              Build your  Custom Umrah Package
            </h2>
            <p className="custom-umrah-subtitle">
              Choose stays, transport and traveler details for an instant UBC calculation.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="custom-umrah-card">
          <form onSubmit={handleCalculatePackage} className="umrah-form-wrapper">

            {/* ── PERSONAL DETAILS SECTION ── */}
            <UmrahContactInputs
              fullName={fullName}
              setFullName={setFullName}
              phone={phone}
              setPhone={setPhone}
              pax={pax}
              setPax={setPax}
              duration={duration}
              setDuration={setDuration}
              durationOptions={durationOptions}
            />

            {/* ── VISA DETAILS SECTION ── */}
            <UmrahVisaDetails
              visaType={visaType}
              setVisaType={setVisaType}
            />

            {/* ── HOTELS SECTION ── */}
            <div className="cuf-hotels-section">
              {hotels.map((hotel, index) => (
                <UmrahHotelRow
                  key={hotel.id}
                  hotel={hotel}
                  index={index}
                  isLast={index === hotels.length - 1}
                  canRemove={hotels.length > 1}
                  onUpdate={handleUpdateHotel}
                  onAdd={handleAddHotel}
                  onRemove={handleRemoveHotel}
                  hotelLookups={hotelLookups}
                />
              ))}
            </div>

            {/* ── TRANSPORTS SECTION (only when visa with private transport) ── */}
            {visaType === 'Visa with Private Transport' && (
              <div className="cuf-transports-section">
                {transports.map((t, index) => (
                  <UmrahTransportRow
                    key={t.id}
                    transport={t}
                    index={index}
                    totalTransports={transports.length}
                    onUpdate={handleUpdateTransport}
                    onAdd={handleAddTransport}
                    onRemove={handleRemoveTransport}
                    transportLookups={transportLookups}
                  />
                ))}
              </div>
            )}

            {/* ── TICKET DETAILS SECTION (only shown for standard group duration; hidden for custom days) ── */}
            {duration && durationOptions.includes(duration) && (
              <UmrahFareInputs
                departure={departure}
                setDeparture={setDeparture}
                airline={airline}
                setAirline={setAirline}
                sector={sector}
                setSector={setSector}
                ticketLookups={ticketLookups}
                allTickets={allTickets}
              />

            )}

            {/* Bottom Form Actions */}
            <div className="umrah-form-bottom-actions">
              <button
                type="submit"
                className="umrah-btn-calculate"
              >
                Calculate Package
              </button>

              <button
                type="button"
                onClick={handleGeneratePDF}
                className="umrah-btn-generate-pdf"
              >
                Generate PDF
              </button>
            </div>
          </form>

          {/* Instant Calculation Output Box */}
          <UmrahCalculationSummary
            calculatedResult={calculatedResult}
            onOpenContact={() => setIsContactOpen(true)}
            whatsAppMessage={
              calculatedResult
                ? `Custom Umrah Package Estimate Inquiry:
• Name: ${fullName || 'Valued Client'}
• Contact: ${phone || 'Not provided'}
• Total Travelers: ${pax}
• Duration: ${calculatedResult.duration} (${calculatedResult.nightsCount} Nights)
• Visa: ${calculatedResult.visaType}
• Hotels: ${calculatedResult.hotels.map((h) => `${h.location}: ${h.hotelName} (${h.nights}n, ${h.roomType})`).join(' | ')}
• Transport: ${calculatedResult.transportSummary}
• Flights: ${calculatedResult.ticketSummary}
• Estimated Total: PKR ${calculatedResult.grandTotal.toLocaleString()}

Please provide an official quote and room confirmation.`
                : `Custom Umrah Package Inquiry:
• Name: ${fullName || 'Valued Client'}
• Contact: ${phone || 'Not provided'}
• Total Travelers: ${pax || '1 Adult'}
• Duration: ${duration || 'Custom'}
• Visa: ${visaType || 'Custom'}`
            }
          />
        </div>
      </div>

      {/* 4. Contact Modal */}
      <Modals
        isContactOpen={isContactOpen}
        onCloseContact={() => setIsContactOpen(false)}
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialName={fullName}
        initialPhone={phone}
        initialMessage={
          calculatedResult
            ? `Custom Umrah Package Estimate Inquiry:
• Name: ${fullName || 'Valued Client'}
• Contact: ${phone || 'Not provided'}
• Total Travelers: ${pax}
• Duration: ${calculatedResult.duration} (${calculatedResult.nightsCount} Nights)
• Visa: ${calculatedResult.visaType}
• Hotels: ${calculatedResult.hotels.map((h) => `${h.location}: ${h.hotelName} (${h.nights}n, ${h.roomType})`).join(' | ')}
• Transport: ${calculatedResult.transportSummary}
• Flights: ${calculatedResult.ticketSummary}
• Estimated Total: PKR ${calculatedResult.grandTotal.toLocaleString()}`
            : ''
        }
      />

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}
