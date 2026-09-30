/**
 * UmrahQuotationDocument
 * 2-page print-ready quotation matching the World Track Aviation PDF reference.
 * Page 1: Traveler details, nights, airline, accommodation, transport, totals
 * Page 2: Terms & Conditions, Contact Us, Bank Details, Thank You
 */
import { WORLD_TRACK_WHITE_LOGO_BASE64 } from './logoDataUri';

function parsePaxString(paxStr) {
  const s = String(paxStr || '');
  const adults   = Number((s.match(/(\d+)\s*adult/i)  || [])[1] || 0);
  const children = Number((s.match(/(\d+)\s*child/i)  || [])[1] || 0);
  const infants  = Number((s.match(/(\d+)\s*infant/i) || [])[1] || 0);

  // If no adults matched but there are numbers (e.g. "2 Pax" or "2"), fallback safely
  let finalAdults = adults;
  if (finalAdults === 0 && children === 0 && infants === 0) {
    const rawNum = Number((s.match(/\d+/) || [])[0] || 1);
    finalAdults = rawNum > 0 ? rawNum : 1;
  } else if (finalAdults === 0) {
    finalAdults = 1;
  }
  return { adults: finalAdults, children, infants };
}

function pad2(n) { return String(n).padStart(2, '0'); }

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

function generateRef() {
  return 'WTA-' + Math.floor(100000 + Math.random() * 900000);
}

/* ── 3D Isometric Kaaba SVG (for Makkah) matching reference image ── */
const KAABA_3D_SVG = `<svg viewBox="0 0 52 52" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="26" cy="46" rx="18" ry="4" fill="rgba(0,0,0,0.14)"/>
  <!-- Left Face -->
  <polygon points="10,21 26,30 26,45 10,36" fill="#1b1f24"/>
  <!-- Right Face -->
  <polygon points="26,30 42,21 42,36 26,45" fill="#0d1117"/>
  <!-- Top Face -->
  <polygon points="26,13 42,21 26,30 10,21" fill="#2d333b"/>
  <!-- Golden Kiswah Band - Left -->
  <polygon points="10,24 26,33 26,35.5 10,26.5" fill="#f59e0b"/>
  <!-- Golden Kiswah Band - Right -->
  <polygon points="26,33 42,24 42,26.5 26,35.5" fill="#d97706"/>
  <!-- Golden Door (Bab al-Kaaba) -->
  <polygon points="31,31 37,27.5 37,35.5 31,39" fill="#f59e0b"/>
  <line x1="34" y1="29.5" x2="34" y2="37" stroke="#92400e" stroke-width="0.8"/>
  <!-- Top Rim Accent -->
  <polyline points="10,21 26,13 42,21" stroke="#374151" stroke-width="1"/>
</svg>`;

/* ── 3D Mosque Green Dome SVG (for Madinah) matching reference image ── */
const MOSQUE_3D_SVG = `<svg viewBox="0 0 52 52" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="26" cy="46" rx="18" ry="4" fill="rgba(0,0,0,0.12)"/>
  <!-- Base Building -->
  <polygon points="14,34 26,40 38,34 38,44 26,47 14,44" fill="#f8fafc" stroke="#cbd5e1" stroke-width="0.8"/>
  <path d="M18 42 C18 38 21 38 21 42 Z" fill="#94a3b8"/>
  <path d="M24 44 C24 39 28 39 28 44 Z" fill="#64748b"/>
  <path d="M31 42 C31 38 34 38 34 42 Z" fill="#94a3b8"/>
  <!-- Drum Base -->
  <path d="M16 34 Q26 37 36 34 L36 30 Q26 33 16 30 Z" fill="#e2e8f0"/>
  <!-- Green Dome -->
  <path d="M16 30 Q16 17 26 11 Q36 17 36 30 Q26 33 16 30 Z" fill="url(#domeGrad)"/>
  <!-- Dome Shading -->
  <path d="M26 11 Q36 17 36 30 Q30 32 26 11 Z" fill="rgba(0,0,0,0.14)"/>
  <!-- Golden Finial Crescent -->
  <line x1="26" y1="11" x2="26" y2="6" stroke="#f59e0b" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="26" cy="5" r="2" fill="#f59e0b"/>
  <defs>
    <linearGradient id="domeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#22c55e"/>
      <stop offset="45%" stop-color="#16a34a"/>
      <stop offset="100%" stop-color="#14532d"/>
    </linearGradient>
  </defs>
</svg>`;

/* ── Airplane Watermark SVG ── */
const AIRPLANE_WATERMARK = `<svg class="bg-watermark" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(180, 220) rotate(-28)">
    <path d="M0 -140 C-8 -110 -14 -60 -14 0 L-14 40 L-120 100 L-120 120 L-14 90 L-14 180 L-45 205 L-45 225 L0 215 L45 225 L45 205 L14 180 L14 90 L120 120 L120 100 L14 40 L14 0 C14 -60 8 -110 0 -140 Z" fill="rgba(0, 115, 230, 0.028)"/>
  </g>
</svg>`;

function buildQuotationHtml(data) {
  const {
    fullName       = 'Muhammad Abdullah',
    pax            = '1 Adult',
    visaType       = 'Visa With Transport',
    hotels         = [],
    transports     = [],
    departure      = '',
    airline        = '',
    sector         = '',
    calculatedResult,
    refNumber      = generateRef(),
    allTickets     = [],
  } = data;

  const { adults, children, infants } = parsePaxString(pax);
  const totalPax = adults + children + infants;

  /* Format sector codes (e.g. "ISLAMABAD - JEDDAH - ISLAMABAD" -> "ISB-JED") */
  const cleanSectorStr = (s) => {
    if (!s) return 'ISB-JED';
    const upper = s.toUpperCase();
    if (upper.includes('ISB') || upper.includes('ISLAMABAD')) {
      if (upper.includes('JED') || upper.includes('JEDDAH')) return 'ISB-JED';
      if (upper.includes('MED') || upper.includes('MADINAH')) return 'ISB-MED';
    }
    if (upper.includes('LHE') || upper.includes('LAHORE')) {
      if (upper.includes('JED')) return 'LHE-JED';
      if (upper.includes('MED')) return 'LHE-MED';
    }
    if (upper.includes('KHI') || upper.includes('KARACHI')) return 'KHI-JED';
    const parts = s.split(/[-–—]/).map((p) => p.trim()).filter(Boolean);
    if (parts.length >= 2) {
      return (parts[0].slice(0, 3) + '-' + parts[1].slice(0, 3)).toUpperCase();
    }
    return 'ISB-JED';
  };

  const sectorCode = cleanSectorStr(sector);

  /* Subtitle for sector (e.g. "Departure . Islamabad to Jeddah") */
  const getSectorSub = (s) => {
    const upper = (s || '').toUpperCase();
    let city1 = 'Islamabad';
    let city2 = 'Jeddah';
    if (upper.includes('LAHORE') || upper.includes('LHE')) city1 = 'Lahore';
    if (upper.includes('KARACHI') || upper.includes('KHI')) city1 = 'Karachi';
    if (upper.includes('PESHAWAR') || upper.includes('PEW')) city1 = 'Peshawar';
    if (upper.includes('SIALKOT') || upper.includes('SKT')) city1 = 'Sialkot';
    if (upper.includes('MEDINA') || upper.includes('MADINAH') || upper.includes('MED')) city2 = 'Medina';
    return `Departure . ${city1} to ${city2}`;
  };
  const sectorSub = getSectorSub(sector);

  /* Matched ticket from API tickets list */
  let matchedTicket = null;
  if (allTickets && allTickets.length > 0) {
    const airLower = (airline || '').toLowerCase();
    matchedTicket = allTickets.find((t) => {
      const dateMatch = !departure || (t.outboundDate || t.departure_date) === departure;
      const nameMatch = !airline || (t.airlineName || '').toLowerCase().includes(airLower);
      return dateMatch && nameMatch;
    }) || allTickets[0];
  }

  /* Airline code & flight numbers */
  let airlineCode = 'SV';
  if (matchedTicket?.airlineCode) {
    airlineCode = matchedTicket.airlineCode;
  } else if (airline) {
    const upperAir = airline.toUpperCase();
    if (upperAir.includes('SAUDI') || upperAir.includes('SAUDIA')) airlineCode = 'SV';
    else if (upperAir.includes('AIRSIAL')) airlineCode = 'PF';
    else if (upperAir.includes('PIA') || upperAir.includes('PAKISTAN')) airlineCode = 'PK';
    else if (upperAir.includes('EMIRATES')) airlineCode = 'EK';
    else if (upperAir.includes('FLYNAS')) airlineCode = 'XY';
    else if (upperAir.includes('QATAR')) airlineCode = 'QR';
    else if (upperAir.includes('FLY DUBAI')) airlineCode = 'FZ';
    else airlineCode = airline.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase() || 'SV';
  }

  const flightNo1 = (matchedTicket?.outboundFlight || `${airlineCode}723`).replace(/\s+/g, '');
  const flightNo2 = (matchedTicket?.inboundFlight || `${airlineCode}723`).replace(/\s+/g, '');

  /* Extract clean HH:MM:SS times */
  let depTime1 = '18:10:00';
  let arrTime1 = '18:10:00';
  let depTime2 = '18:10:00';
  let arrTime2 = '18:10:00';

  if (matchedTicket?.departure?.flight_time) depTime1 = matchedTicket.departure.flight_time;
  if (matchedTicket?.departure?.land_time) arrTime1 = matchedTicket.departure.land_time;
  if (matchedTicket?.arrival?.flight_time) depTime2 = matchedTicket.arrival.flight_time;
  if (matchedTicket?.arrival?.land_time) arrTime2 = matchedTicket.arrival.land_time;

  if (matchedTicket?.outboundTime && matchedTicket.outboundTime.includes('-')) {
    const parts = matchedTicket.outboundTime.split('-').map((s) => s.trim());
    if (parts[0]) depTime1 = parts[0].length === 5 ? `${parts[0]}:00` : parts[0];
    if (parts[1]) arrTime1 = parts[1].length === 5 ? `${parts[1]}:00` : parts[1];
  }
  if (matchedTicket?.inboundTime && matchedTicket.inboundTime.includes('-')) {
    const parts = matchedTicket.inboundTime.split('-').map((s) => s.trim());
    if (parts[0]) depTime2 = parts[0].length === 5 ? `${parts[0]}:00` : parts[0];
    if (parts[1]) arrTime2 = parts[1].length === 5 ? `${parts[1]}:00` : parts[1];
  }

  const flightDate1 = departure ? formatDate(departure) : (matchedTicket?.outboundDate ? formatDate(matchedTicket.outboundDate) : '25 Oct 2026');
  const flightDate2 = matchedTicket?.inboundDate ? formatDate(matchedTicket.inboundDate) : flightDate1;

  /* Always render 2 rows matching quotation document reference */
  const airlineRows = [
    {
      sector: sectorCode,
      sectorLabel: sectorSub,
      airline: airlineCode,
      flightNo: flightNo1,
      date: flightDate1,
      departure: depTime1,
      arrival: arrTime1,
    },
    {
      sector: sectorCode,
      sectorLabel: sectorSub,
      airline: airlineCode,
      flightNo: flightNo2,
      date: flightDate2,
      departure: depTime2,
      arrival: arrTime2,
    },
  ];

  /* Nights cards — up to 3 cards */
  let nightCards = hotels.map((h) => {
    const isMadinah = (h.location || '').toLowerCase().includes('madin') || (h.location || '').toLowerCase().includes('medin');
    return {
      city: isMadinah ? 'Medinah' : 'Makkah',
      nights: Number(h.nights) || 4,
      checkIn: h.checkIn,
      checkOut: h.checkOut,
    };
  });

  if (nightCards.length === 0) {
    nightCards = [
      { city: 'Makkah', nights: 4, checkIn: '2026-10-16', checkOut: '2026-10-19' },
      { city: 'Medinah', nights: 8, checkIn: '2026-10-16', checkOut: '2026-10-19' },
      { city: 'Makkah', nights: 4, checkIn: '2026-10-16', checkOut: '2026-10-19' },
    ];
  }

  /* Accommodation rows */
  let accommodationRows = hotels.map((h) => {
    const isMadinah = (h.location || '').toLowerCase().includes('madin') || (h.location || '').toLowerCase().includes('medin');
    const roomCounts = h.roomCounts || {};
    const totalRooms = Object.values(roomCounts).reduce((s, c) => s + Number(c || 0), 0) || 1;
    const hotelName = (h.hotelName || (isMadinah ? 'Al Safa Al baraka' : 'Abraj Al kiswa')).split(' (')[0];
    const distanceText = isMadinah ? '600-700 m' : '1000 m - Shuttle Service';

    return {
      city: isMadinah ? 'MEDINAH' : 'MAKKAH',
      hotel: hotelName,
      subDetail: distanceText,
      checkIn: h.checkIn ? formatDate(h.checkIn) : '25 Oct 2026',
      checkOut: h.checkOut ? formatDate(h.checkOut) : '25 Oct 2026',
      nights: Number(h.nights) || 4,
      rooms: totalRooms,
    };
  });

  if (accommodationRows.length === 0) {
    accommodationRows = [
      { city: 'MAKKAH', hotel: 'Abraj Al kiswa', subDetail: '1000 m - Shuttle Service', checkIn: '25 Oct 2026', checkOut: '25 Oct 2026', nights: 4, rooms: 1 },
      { city: 'MAKKAH', hotel: 'Al Safa Al baraka', subDetail: '600-700 m', checkIn: '25 Oct 2026', checkOut: '25 Oct 2026', nights: 8, rooms: 1 },
      { city: 'MAKKAH', hotel: 'Abraj Al kiswa', subDetail: '1000 m - Shuttle Service', checkIn: '25 Oct 2026', checkOut: '25 Oct 2026', nights: 4, rooms: 1 },
    ];
  }

  /* Transport rows */
  let transportRows = [];
  if (transports && transports.length > 0 && transports[0].sector) {
    transports.forEach((t, i) => {
      transportRows.push({
        vehicle: i === 0 ? (t.vehicleType || 'By Bus') : '',
        qty: '01',
        route: t.sector,
        totalPax: pad2(totalPax),
      });
    });
  } else {
    // Standard Umrah 4-leg route as in reference image
    const standardRoutes = [
      'Jeddah – Makkah',
      'Makkah – Medinah',
      'Medinah – Makkah',
      'Makkah – Jeddah',
    ];
    standardRoutes.forEach((r, i) => {
      transportRows.push({
        vehicle: i === 0 ? 'By Bus' : '',
        qty: '01',
        route: r,
        totalPax: pad2(totalPax),
      });
    });
  }

  /* Totals */
  const grandTotal = calculatedResult?.grandTotal || 0;
  // If no calculated result is provided, use default reference figures
  const finalGrandTotal = grandTotal > 0 ? grandTotal : (children > 0 ? 1576400 : 250698);

  const effectivePax = (adults + (children > 0 ? children * 0.7 : 0)) || 1;
  const perAdult = adults > 0 ? Math.round(finalGrandTotal / effectivePax) : finalGrandTotal;
  const perChild = children > 0 ? Math.round(perAdult * 0.7) : 0;
  const perInfant = 0;

  const visaBadgeText = visaType || 'Visa With Transport';

  /* Night card HTML */
  function nightCardHtml(nc) {
    const isMadinah = nc.city.toLowerCase().includes('madin') || nc.city.toLowerCase().includes('medin');
    const icon = isMadinah ? MOSQUE_3D_SVG : KAABA_3D_SVG;
    const cityLabel = isMadinah ? 'Medinah' : 'Makkah';
    const cityColor = isMadinah ? '#16a34a' : '#f59e0b';
    const bg = isMadinah ? '#f0fdf4' : '#f0f7ff';
    const dateStr = (nc.checkIn && nc.checkOut)
      ? formatDate(nc.checkIn) + ' \u2013 ' + formatDate(nc.checkOut)
      : '16 Oct \u2013 19 Oct';

    return `<div class="night-card" style="background:${bg};">
      <div class="night-card-icon">${icon}</div>
      <div class="night-card-content">
        <div class="night-card-city" style="color:${cityColor};">${cityLabel}</div>
        <div class="night-card-nights">${pad2(nc.nights)} Nights</div>
        <div class="night-card-dates">${dateStr}</div>
      </div>
    </div>`;
  }

  /* Terms list */
  const terms = [
    'Rates are quoted per person in PKR and remain subject to change until the booking is confirmed with an advance payment.',
    'Flights, hotels and transport are subject to availability. Hotels of equal or higher category may be substituted if required.',
    'Every traveller must hold a passport valid for at least 6 months from the travel date. Clear passport scans are needed for visa processing.',
    'Visa approval rests solely with the Saudi authorities. World Track is not liable for delays or refusals beyond its control.',
    "Hotel distances are approximate. Check-in and check-out times follow each hotel's policy.",
    'Cancellations and amendments are subject to airline, hotel and visa-provider policies. Visa and ticketing charges are non-refundable once issued.',
    'Flight schedules are set by the airline and may change without notice. Please reconfirm timings before departure.',
    'Travellers are responsible for meeting all Saudi entry, health and vaccination requirements.',
  ];

  /* QR placeholder SVG */
  const qrSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" width="90" height="90">
    <rect width="90" height="90" fill="#f8fafc" rx="6" stroke="#dde3f0" stroke-width="2"/>
    <rect x="10" y="10" width="30" height="30" rx="3" fill="none" stroke="#0077e6" stroke-width="3"/>
    <rect x="16" y="16" width="18" height="18" rx="1" fill="#0077e6"/>
    <rect x="50" y="10" width="30" height="30" rx="3" fill="none" stroke="#0077e6" stroke-width="3"/>
    <rect x="56" y="16" width="18" height="18" rx="1" fill="#0077e6"/>
    <rect x="10" y="50" width="30" height="30" rx="3" fill="none" stroke="#0077e6" stroke-width="3"/>
    <rect x="16" y="56" width="18" height="18" rx="1" fill="#0077e6"/>
    <rect x="50" y="50" width="8" height="8" fill="#0077e6"/>
    <rect x="62" y="50" width="8" height="8" fill="#0077e6"/>
    <rect x="74" y="50" width="6" height="6" fill="#0077e6"/>
    <rect x="50" y="62" width="6" height="6" fill="#0077e6"/>
    <rect x="60" y="60" width="10" height="10" fill="#0077e6"/>
    <rect x="74" y="62" width="6" height="6" fill="#0077e6"/>
    <rect x="52" y="74" width="6" height="6" fill="#0077e6"/>
    <rect x="64" y="72" width="8" height="8" fill="#0077e6"/>
    <rect x="76" y="74" width="4" height="4" fill="#0077e6"/>
  </svg>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>World Track Aviation - Quotation ${refNumber}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800;900&family=Dancing+Script:wght@700&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    body{
      font-family:'Plus Jakarta Sans','Inter',-apple-system,sans-serif;
      background:#e5e7eb;
      color:#0f172a;
      -webkit-print-color-adjust:exact;
      print-color-adjust:exact;
      font-size:12px;
      line-height:1.4;
    }

    /* ── Pages ── */
    .page{
      width:210mm;
      min-height:297mm;
      margin:18px auto;
      background:#ffffff;
      box-shadow:0 10px 40px rgba(0,0,0,0.12);
      page-break-after:always;
      position:relative;
      overflow:hidden;
      display:flex;
      flex-direction:column;
    }
    .page:last-child{page-break-after:auto}

    /* ── Watermark Background ── */
    .bg-watermark{
      position:absolute;
      top:42%;
      left:50%;
      transform:translate(-50%, -50%);
      width:460px;
      height:460px;
      pointer-events:none;
      z-index:0;
    }

    /* ── PAGE 1: Header ── */
    .hdr{
      background:#0073e6;
      padding:24px 28px 60px;
      display:flex;
      justify-content:space-between;
      align-items:flex-start;
      color:#ffffff;
      position:relative;
      z-index:1;
    }
    .hdr-left{display:flex;flex-direction:column;gap:8px}
    .hdr-brand-row{display:flex;align-items:center}
    .hdr-brand-logo{height:36px;width:auto;display:block;object-fit:contain}
    .hdr-company-name{font-size:15px;font-weight:800;color:#ffffff;margin-top:4px}
    .hdr-company-addr{font-size:9.5px;color:rgba(255,255,255,0.88);font-weight:400;margin-top:1px}

    .hdr-right{display:flex;flex-direction:column;align-items:flex-end;text-align:right}
    .hdr-quotation{font-size:36px;font-weight:900;color:#ffffff;line-height:1;letter-spacing:-0.5px}
    .hdr-pkg-title{font-size:12px;font-weight:700;color:#ffffff;margin-top:4px}
    .hdr-ref-badge{
      display:inline-block;
      margin-top:6px;
      background:#f59e0b;
      color:#ffffff;
      font-size:11.5px;
      font-weight:800;
      padding:3px 18px;
      border-radius:20px;
      letter-spacing:0.04em;
    }

    /* ── Content Container (Padded) ── */
    .p1-body{
      padding:0 26px 20px;
      display:flex;
      flex-direction:column;
      gap:14px;
      position:relative;
      z-index:2;
      flex:1;
    }

    /* ── Prepared For Card (Overlaps the blue header container) ── */
    .prep-card{
      background:#ffffff;
      border-radius:14px;
      box-shadow:0 10px 28px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.04);
      border:1px solid #e2e8f0;
      padding:16px 24px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-top:-46px;
      position:relative;
      z-index:10;
    }
    .prep-card-left{display:flex;flex-direction:column;gap:3px}
    .prep-label{font-size:11px;font-weight:700;color:#f59e0b}
    .prep-name{font-size:24px;font-weight:900;color:#0f172a;line-height:1.2}
    .prep-visa-badge{
      align-self:flex-start;
      margin-top:5px;
      background:#e6f9ed;
      color:#16a34a;
      font-size:10.5px;
      font-weight:700;
      padding:4px 14px;
      border-radius:20px;
    }

    .prep-card-right{display:flex;align-items:center}
    .pax-stat-col{
      text-align:center;
      padding:0 20px;
      border-left:1.5px solid #eef2f6;
    }
    .pax-stat-col:first-child{border-left:none}
    .pax-stat-label{font-size:9.5px;font-weight:800;color:#475569;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:2px}
    .pax-stat-val{font-size:32px;font-weight:900;color:#0073e6;line-height:1}

    /* ── Nights Cards Row ── */
    .nights-row{
      display:grid;
      grid-template-columns:repeat(3, 1fr);
      gap:12px;
    }
    .night-card{
      border-radius:12px;
      padding:12px 16px;
      display:flex;
      align-items:center;
      gap:14px;
      border:1px solid rgba(0,0,0,0.04);
    }
    .night-card-icon{flex-shrink:0}
    .night-card-city{font-size:11px;font-weight:700}
    .night-card-nights{font-size:20px;font-weight:900;color:#0f172a;line-height:1.1;margin-top:1px}
    .night-card-dates{font-size:9.5px;color:#64748b;margin-top:2px;font-weight:500}

    /* ── Section Pill Badges ── */
    .pill-badge{
      display:inline-block;
      background:#f59e0b;
      color:#ffffff;
      font-size:11px;
      font-weight:800;
      padding:3.5px 16px;
      border-radius:20px;
      letter-spacing:0.03em;
      margin-bottom:6px;
    }

    /* ── Table Layouts ── */
    .sec-wrap{display:flex;flex-direction:column}
    .tbl{
      width:100%;
      border-collapse:collapse;
      font-size:11px;
    }
    .tbl thead tr{
      background:#eef5fc;
    }
    .tbl th{
      padding:7px 12px;
      font-size:9.5px;
      font-weight:800;
      color:#0f172a;
      text-transform:uppercase;
      letter-spacing:0.05em;
      text-align:left;
      border:none;
    }
    .tbl th:first-child{border-top-left-radius:6px;border-bottom-left-radius:6px}
    .tbl th:last-child{border-top-right-radius:6px;border-bottom-right-radius:6px}
    .tbl td{
      padding:8px 12px;
      border-bottom:1px solid #f1f5f9;
      color:#0f172a;
      vertical-align:middle;
    }
    .tbl tr:last-child td{border-bottom:none}

    .td-sector-code{font-size:12.5px;font-weight:800;color:#0073e6}
    .td-sector-sub{font-size:9px;color:#64748b;margin-top:1px;font-weight:500}
    .td-city{font-size:11.5px;font-weight:800;color:#0073e6}
    .td-hotel-name{font-size:12px;font-weight:700;color:#0f172a}
    .td-hotel-sub{font-size:9.5px;color:#64748b;margin-top:1px}
    .td-veh{font-size:12px;font-weight:800;color:#0073e6}
    .td-num{font-weight:700;color:#0f172a}
    .tar{text-align:right}

    /* ── Bottom Totals Row ── */
    .totals-row{
      display:grid;
      grid-template-columns:1.28fr 1fr;
      gap:14px;
      margin-top:4px;
    }
    .tot-card{
      background:#eef6ff;
      border-radius:12px;
      padding:16px 20px;
      display:flex;
      flex-direction:column;
      justify-content:center;
    }
    .tot-label{font-size:11px;font-weight:800;color:#f59e0b;text-transform:uppercase;letter-spacing:0.04em}
    .tot-amount{font-size:35px;font-weight:900;color:#0073e6;line-height:1.1;letter-spacing:-0.5px;margin:3px 0}
    .tot-sub{font-size:10.5px;color:#64748b;font-weight:500}

    .ppp-card{
      background:#fff8ee;
      border-radius:12px;
      padding:14px 20px;
      display:flex;
      flex-direction:column;
      justify-content:center;
    }
    .ppp-label{font-size:11px;font-weight:800;color:#f59e0b;text-transform:uppercase;letter-spacing:0.04em;margin-bottom:8px}
    .ppp-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}
    .ppp-row:last-child{margin-bottom:0}
    .ppp-key{font-size:12.5px;color:#475569;font-weight:500}
    .ppp-val{font-size:15px;color:#0f172a;font-weight:800}

    /* ── PAGE 2 ── */
    .p2-body{padding:30px 30px 24px}
    .p2-pill{display:inline-block;font-size:11px;font-weight:800;padding:4px 16px;border-radius:20px;color:#ffffff;margin-bottom:12px}
    .p2-pill--orange{background:#f59e0b}
    .p2-pill--blue{background:#0073e6}
    .terms-box{border:1px solid #eef2f6;border-radius:12px;padding:18px 22px;margin-bottom:24px;background:#fafafa}
    .term-row{display:flex;gap:12px;align-items:flex-start;margin-bottom:11px}
    .term-row:last-child{margin-bottom:0}
    .term-num{min-width:28px;height:28px;border-radius:50%;background:#0073e6;color:#ffffff;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0}
    .term-txt{font-size:11.5px;color:#334155;line-height:1.5;padding-top:3px}
    .p2-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:24px}
    .contact-list{display:flex;flex-direction:column;gap:10px}
    .contact-card{background:#f8fafc;border:1px solid #eef2f6;border-radius:12px;padding:12px 16px;display:flex;align-items:center;gap:12px}
    .c-icon{width:38px;height:38px;border-radius:50%;background:#0073e6;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#fff;font-size:16px}
    .c-label{font-size:9px;color:#64748b;font-weight:700;text-transform:uppercase;letter-spacing:0.06em}
    .c-val{font-size:15px;font-weight:800;color:#0f172a;line-height:1.15;margin-top:1px}
    .c-val--sm{font-size:12px}
    .bank-box{background:#f8fafc;border:1px solid #eef2f6;border-radius:12px;padding:16px 18px}
    .bank-row{display:flex;gap:10px;margin-bottom:8px;font-size:11.5px}
    .bank-row:last-child{margin-bottom:0}
    .bank-key{color:#64748b;font-weight:600;min-width:110px;flex-shrink:0}
    .bank-val{color:#0f172a;font-weight:800}
    .qr-row{display:flex;gap:14px;align-items:center;margin-top:12px;padding-top:12px;border-top:1px solid #eef2f6}
    .scan-btn{display:inline-flex;align-items:center;gap:6px;background:#0073e6;color:#fff;border:none;border-radius:8px;padding:8px 14px;font-size:11.5px;font-weight:700}
    .scan-sub{font-size:9.5px;color:#64748b;margin-top:4px;line-height:1.35}
    .thankyou{text-align:center;padding:14px 0 0}
    .ty-script{font-family:'Dancing Script',cursive;font-size:46px;color:#f59e0b;line-height:1}
    .ty-sub{font-size:12.5px;font-weight:700;color:#0073e6;margin-top:3px;letter-spacing:0.03em}

    @media print{
      body{background:#fff!important;padding:0!important}
      .page{box-shadow:none!important;margin:0!important;width:100%!important;min-height:100vh!important}
      .no-print{display:none!important}
    }
  </style>
</head>
<body>

  <div class="no-print" style="position:fixed;top:16px;right:20px;z-index:999;display:flex;gap:8px;">
    <button onclick="window.print()" style="background:#0073e6;color:#fff;border:none;padding:10px 22px;border-radius:8px;font-size:13.5px;font-weight:700;cursor:pointer;font-family:inherit;box-shadow:0 3px 12px rgba(0,115,230,.35);">&#128438; Print / Save PDF</button>
    <button onclick="window.close()" style="background:#ffffff;color:#475569;border:1px solid #cbd5e1;padding:10px 16px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;">&times; Close</button>
  </div>

  <!-- ════════════════ PAGE 1 ════════════════ -->
  <div class="page">
    ${AIRPLANE_WATERMARK}

    <!-- Header -->
    <div class="hdr">
      <div class="hdr-left">
        <div class="hdr-brand-row">
          <img src="${WORLD_TRACK_WHITE_LOGO_BASE64}" alt="World Track - Travel With Trust" class="hdr-brand-logo" />
        </div>
        <div>
          <div class="hdr-company-name">World Track Aviation Pvt Ltd</div>
          <div class="hdr-company-addr">Office No. 04, Islamabad Center, Fazal e Haq Road, Blue Area, Islamabad</div>
        </div>
      </div>
      <div class="hdr-right">
        <div class="hdr-quotation">Quotation</div>
        <div class="hdr-pkg-title">Umrah Package - Standard</div>
        <div class="hdr-ref-badge">${refNumber}</div>
      </div>
    </div>

    <!-- Page 1 Body -->
    <div class="p1-body">

      <!-- Prepared For Card -->
      <div class="prep-card">
        <div class="prep-card-left">
          <div class="prep-label">Prepared For - Family Head</div>
          <div class="prep-name">${fullName || 'Muhammad Abdullah'}</div>
          <div class="prep-visa-badge">${visaBadgeText}</div>
        </div>
        <div class="prep-card-right">
          <div class="pax-stat-col">
            <div class="pax-stat-label">ADULTS</div>
            <div class="pax-stat-val">${pad2(adults)}</div>
          </div>
          <div class="pax-stat-col">
            <div class="pax-stat-label">CHILDS</div>
            <div class="pax-stat-val">${pad2(children)}</div>
          </div>
          <div class="pax-stat-col">
            <div class="pax-stat-label">INFANTS</div>
            <div class="pax-stat-val">${pad2(infants)}</div>
          </div>
        </div>
      </div>

      <!-- Nights Row -->
      <div class="nights-row">
        ${nightCards.map(nightCardHtml).join('')}
      </div>

      <!-- Airline Details -->
      ${airlineRows.length > 0 ? `
      <div class="sec-wrap">
        <div><span class="pill-badge">Airline Details</span></div>
        <table class="tbl">
          <thead>
            <tr>
              <th>SECTOR</th>
              <th>AIRLINE</th>
              <th>FLIGHT NO.</th>
              <th>DATE</th>
              <th>DEPARTURE</th>
              <th>ARRIVAL</th>
            </tr>
          </thead>
          <tbody>
            ${airlineRows.map((r) => `<tr>
              <td>
                <div class="td-sector-code">${r.sector}</div>
                <div class="td-sector-sub">${r.sectorLabel}</div>
              </td>
              <td>${r.airline}</td>
              <td>${r.flightNo}</td>
              <td>${r.date}</td>
              <td>${r.departure}</td>
              <td>${r.arrival}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>` : ''}

      <!-- Accomodation -->
      <div class="sec-wrap">
        <div><span class="pill-badge">Accomodation</span></div>
        <table class="tbl">
          <thead>
            <tr>
              <th>CITY</th>
              <th>HOTEL</th>
              <th>CHECK-IN</th>
              <th>CHECK-OUT</th>
              <th class="tar">NIGHTS</th>
              <th class="tar">ROOMS</th>
            </tr>
          </thead>
          <tbody>
            ${accommodationRows.map((r) => `<tr>
              <td><span class="td-city">${r.city}</span></td>
              <td>
                <div class="td-hotel-name">${r.hotel}</div>
                <div class="td-hotel-sub">${r.subDetail}</div>
              </td>
              <td>${r.checkIn}</td>
              <td>${r.checkOut}</td>
              <td class="tar td-num">${pad2(r.nights)}</td>
              <td class="tar td-num">${pad2(r.rooms)}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>

      <!-- Transport -->
      <div class="sec-wrap">
        <div><span class="pill-badge">Transport</span></div>
        <table class="tbl">
          <thead>
            <tr>
              <th>VEHICLE</th>
              <th>QTY</th>
              <th>ROUTE</th>
              <th class="tar">TOTAL PAX</th>
            </tr>
          </thead>
          <tbody>
            ${transportRows.map((r) => `<tr>
              <td>${r.vehicle ? `<span class="td-veh">${r.vehicle}</span>` : ''}</td>
              <td>${r.qty}</td>
              <td>${r.route}</td>
              <td class="tar td-num">${r.totalPax}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>

      <!-- Totals & Price Per Person Row -->
      <div class="totals-row">
        <div class="tot-card">
          <div class="tot-label">TOTAL AMOUNT</div>
          <div class="tot-amount">PKR ${finalGrandTotal.toLocaleString()}</div>
          <div class="tot-sub">For ${pad2(totalPax)} Travellers \u2013 ${pad2(adults)} Adults, ${pad2(children)} Childs, ${pad2(infants)} Infants</div>
        </div>
        <div class="ppp-card">
          <div class="ppp-label">PRICE PER PERSON</div>
          <div class="ppp-row">
            <span class="ppp-key">Adults</span>
            <span class="ppp-val">${adults > 0 ? perAdult.toLocaleString() : '000,000'}</span>
          </div>
          <div class="ppp-row">
            <span class="ppp-key">Childs</span>
            <span class="ppp-val">${children > 0 ? perChild.toLocaleString() : '000,000'}</span>
          </div>
          <div class="ppp-row">
            <span class="ppp-key">Infants</span>
            <span class="ppp-val">${infants > 0 ? perInfant.toLocaleString() : '000,000'}</span>
          </div>
        </div>
      </div>

    </div>
  </div><!-- /PAGE 1 -->

  <!-- ════════════════ PAGE 2 ════════════════ -->
  <div class="page">
    <div class="p2-body">

      <!-- Terms & Conditions -->
      <div class="p2-pill p2-pill--orange">Terms &amp; Conditions</div>
      <div class="terms-box">
        ${terms.map((t, i) => `<div class="term-row">
          <div class="term-num">${pad2(i + 1)}</div>
          <div class="term-txt">${t}</div>
        </div>`).join('')}
      </div>

      <!-- Contact + Bank grid -->
      <div class="p2-grid">

        <!-- Contact Us -->
        <div>
          <div class="p2-pill p2-pill--blue">Contact Us</div>
          <div class="contact-list">
            <div class="contact-card">
              <div class="c-icon">&#128222;</div>
              <div>
                <div class="c-label">Telephone Line</div>
                <div class="c-val">051 2120721</div>
                <div class="c-label" style="margin-top:6px">Phone/Whatsapp</div>
                <div class="c-val">0329 2721721</div>
              </div>
            </div>
            <div class="contact-card">
              <div class="c-icon">&#9993;</div>
              <div>
                <div class="c-label">Email</div>
                <div class="c-val c-val--sm">worldtrackaviation@gmail.com</div>
              </div>
            </div>
            <div class="contact-card">
              <div class="c-icon">&#127760;</div>
              <div>
                <div class="c-label">Website</div>
                <div class="c-val c-val--sm">worldtracktravel.com</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bank Details -->
        <div>
          <div class="p2-pill p2-pill--blue">Bank details</div>
          <div class="bank-box">
            <div class="bank-row"><span class="bank-key">Bank Name</span><span class="bank-val">United Bank Limited</span></div>
            <div class="bank-row"><span class="bank-key">Account Title</span><span class="bank-val">World Track Aviation<br>(Private) Limited</span></div>
            <div class="bank-row"><span class="bank-key">Account Number</span><span class="bank-val">1471327533588</span></div>
            <div class="bank-row"><span class="bank-key">IBAN</span><span class="bank-val" style="font-size:10.5px;word-break:break-all">PK55UNIL0109000327533588</span></div>
            <div class="qr-row">
              ${qrSvg}
              <div>
                <div class="scan-btn">
                  <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                    <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
                  </svg>
                  Scan to Pay
                </div>
                <div class="scan-sub">Use this QR code for<br>easy and secure payment.</div>
              </div>
            </div>
          </div>
        </div>

      </div><!-- /p2-grid -->

      <!-- Thank You -->
      <div class="thankyou">
        <div class="ty-script">Thank You</div>
        <div class="ty-sub">for choosing World Track Aviation</div>
      </div>

    </div>
  </div><!-- /PAGE 2 -->

</body>
</html>`;
}

export function openUmrahQuotationWindow(data) {
  const html = buildQuotationHtml({ ...data, refNumber: generateRef() });
  const win = window.open('', '_blank', 'width=940,height=1120,scrollbars=yes');
  if (!win) {
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'WTA-Quotation.html';
    a.click();
    URL.revokeObjectURL(url);
    return;
  }
  win.document.open();
  win.document.write(html);
  win.document.close();
}
