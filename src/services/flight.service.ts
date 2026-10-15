/**
 * Flight / Group Tickets Service — WorldTrackTravel
 *
 * Endpoints:
 * - POST /group-tickets/list (listing with filters and pagination)
 * - GET  /group-tickets/lookups (durations, departure_dates, airlines, routes)
 *
 * Individual ticket items do not contain item-level SEO;
 * page-level SEO is fetched via /seo/page/group-tickets.
 */

import {
  GroupFlight,
  AirlineItem,
  SectorRouteItem,
  DepartureDateItem,
  DurationItem,
  FlightFilterParams,
} from '../types/flight.types';
import { apiPost, apiGet } from './api.client';
import type {
  ApiGroupTicket,
  ApiGroupTicketLookups,
  ApiGroupTicketFilters,
  ApiPagination,
} from '../types/api.types';

export function formatDateDMY(dateStr: string): string {
  if (!dateStr || typeof dateStr !== 'string') return '';
  const trimmed = dateStr.trim();
  if (/^\d{1,2}\s+[A-Za-z]{3,}\s+\d{4}$/.test(trimmed)) {
    return trimmed;
  }
  const m = trimmed.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (m) {
    const year = m[1];
    const monthIdx = parseInt(m[2], 10) - 1;
    const day = m[3].padStart(2, '0');
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    if (monthIdx >= 0 && monthIdx < 12) {
      return `${day} ${monthNames[monthIdx]} ${year}`;
    }
  }
  const dt = new Date(trimmed.includes('T') ? trimmed : `${trimmed}T00:00:00`);
  if (!isNaN(dt.getTime())) {
    const day = String(dt.getDate()).padStart(2, '0');
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    return `${day} ${monthNames[dt.getMonth()]} ${dt.getFullYear()}`;
  }
  return trimmed;
}

export function parseDateTs(dateStr: string): number {
  if (!dateStr || typeof dateStr !== 'string') return 0;
  const m = dateStr.trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (m) {
    return Date.UTC(parseInt(m[1], 10), parseInt(m[2], 10) - 1, parseInt(m[3], 10));
  }
  const dt = new Date(dateStr);
  return isNaN(dt.getTime()) ? 0 : dt.getTime();
}

export function getAirlineLogo(
  apiLogo?: string | null,
  code?: string | null,
  name?: string | null,
): string | null {
  if (apiLogo && typeof apiLogo === 'string' && apiLogo.trim() !== '') {
    const trimmed = apiLogo.trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed;
    }
    if (trimmed.startsWith('/storage') || trimmed.startsWith('/uploads') || trimmed.startsWith('/media')) {
      return `https://admin.worldtracktravel.com${trimmed}`;
    }
    if (trimmed.startsWith('/')) {
      return trimmed;
    }
    return `https://admin.worldtracktravel.com/${trimmed}`;
  }

  const upperCode = (code || '').toUpperCase().trim();
  const upperName = (name || '').toUpperCase().trim();

  // Saudia / Saudi Arabian Airlines (SV)
  if (upperCode === 'SV' || upperName.includes('SAUDI') || upperName.includes('SAUDIA')) {
    return '/assets/Airlines/Airlines SVG WEBSITE-08.svg';
  }
  // Pakistan International Airlines (PK / PIA)
  if (upperCode === 'PK' || upperName.includes('PIA') || upperName.includes('PAKISTAN')) {
    return '/assets/Airlines/Airlines SVG WEBSITE-12.svg';
  }
  // AirSial (PF)
  if (upperCode === 'PF' || upperName.includes('AIRSIAL') || upperName.includes('AIR SIAL')) {
    return '/assets/Airlines/Airlines SVG WEBSITE-16.svg';
  }
  // Emirates (EK)
  if (upperCode === 'EK' || upperName.includes('EMIRATES')) {
    return '/assets/Airlines/Airlines SVG WEBSITE-05.svg';
  }
  // Flyadeal (F3 / XY / etc.)
  if (upperCode === 'F3' || upperName.includes('FLYADEAL')) {
    return '/assets/Airlines/Airlines SVG WEBSITE-11.svg';
  }
  // Fly Jinnah (9P)
  if (upperCode === '9P' || upperName.includes('JINNAH')) {
    return '/assets/Airlines/Airlines SVG WEBSITE-15.svg';
  }
  // SereneAir (ER)
  if (upperCode === 'ER' || upperName.includes('SERENE')) {
    return '/assets/Airlines/Airlines SVG WEBSITE-18.svg';
  }
  // Oman Air (WY)
  if (upperCode === 'WY' || upperName.includes('OMAN')) {
    return '/assets/Airlines/Airlines SVG WEBSITE-17.svg';
  }
  // Turkish Airlines (TK)
  if (upperCode === 'TK' || upperName.includes('TURKISH')) {
    return '/assets/Airlines/Airlines SVG WEBSITE-13.svg';
  }
  // Qatar Airways (QR)
  if (upperCode === 'QR' || upperName.includes('QATAR')) {
    return '/assets/Airlines/Airlines SVG WEBSITE-06.svg';
  }
  // Kuwait Airways (KU)
  if (upperCode === 'KU' || upperName.includes('KUWAIT')) {
    return '/assets/Airlines/Airlines SVG WEBSITE-07.svg';
  }
  // Gulf Air (GF)
  if (upperCode === 'GF' || upperName.includes('GULF')) {
    return '/assets/Airlines/Airlines SVG WEBSITE-09.svg';
  }
  // Etihad Airways (EY)
  if (upperCode === 'EY' || upperName.includes('ETIHAD')) {
    return '/assets/Airlines/Airlines SVG WEBSITE-10.svg';
  }
  // Jazeera Airways (J9)
  if (upperCode === 'J9' || upperName.includes('JAZEERA')) {
    return '/assets/Airlines/Airlines SVG WEBSITE-14.svg';
  }
  // flydubai (FZ)
  if (upperCode === 'FZ' || upperName.includes('FLYDUBAI')) {
    return '/assets/Airlines/Airlines SVG WEBSITE-01.svg';
  }
  // Air Arabia (G9)
  if (upperCode === 'G9' || upperName.includes('ARABIA')) {
    return '/assets/Airlines/Airlines SVG WEBSITE-02.svg';
  }
  // Thai Airways (TG)
  if (upperCode === 'TG' || upperName.includes('THAI')) {
    return '/assets/Airlines/Airlines SVG WEBSITE-03.svg';
  }
  // Malaysia Airlines (MH)
  if (upperCode === 'MH' || upperName.includes('MALAYSIA')) {
    return '/assets/Airlines/Airlines SVG WEBSITE-04.svg';
  }

  return null;
}

export function normalizeGroupTicket(item: any): GroupFlight {
  if (!item || typeof item !== 'object') {
    return {
      id: String(Math.random()),
      airlineId: undefined,
      airlineCode: 'SV',
      airlineName: 'Airline',
      airlineLogo: null,
      acType: 'Boeing 777-300ER',
      routeId: undefined,
      route: 'ISLAMABAD - JEDDAH - ISLAMABAD',
      sector: 'ISLAMABAD - JEDDAH - ISLAMABAD',
      duration: 15,
      outboundDate: '',
      outboundTime: '',
      outboundFlight: '',
      inboundDate: '',
      inboundTime: '',
      inboundFlight: '',
      outboundBaggage: '',
      inboundBaggage: '',
      baggage: '',
      seatsLeft: 10,
      pricePKR: 0,
      highlight: null,
    };
  }

  const routeObj = typeof item.route === 'object' && item.route ? item.route : null;
  const routeName =
    routeObj?.name ||
    (typeof item.route === 'string' ? item.route : '') ||
    item.name ||
    '';
  const routeId = routeObj?.id ? Number(routeObj.id) : undefined;

  const airlineObj = typeof item.airline === 'object' && item.airline ? item.airline : null;
  const airlineId = airlineObj?.id
    ? Number(airlineObj.id)
    : item.airline_id
    ? Number(item.airline_id)
    : undefined;
  const airlineName =
    airlineObj?.name ||
    (typeof item.airlineName === 'string' ? item.airlineName : '') ||
    (typeof item.airline === 'string' ? item.airline : '') ||
    'Airline';

  // Fallback airline code if null from API
  let airlineCode =
    airlineObj?.code ||
    (typeof item.airlineCode === 'string' ? item.airlineCode : '');
  if (!airlineCode) {
    const upperName = airlineName.toUpperCase();
    if (upperName.includes('PIA') || upperName.includes('PAKISTAN')) {
      airlineCode = 'PK';
    } else if (upperName.includes('AIRSIAL')) {
      airlineCode = 'PF';
    } else if (upperName.includes('SAUDI')) {
      airlineCode = 'SV';
    } else if (upperName.includes('EMIRATES')) {
      airlineCode = 'EK';
    } else if (upperName.includes('FLYNAS')) {
      airlineCode = 'XY';
    } else {
      airlineCode =
        airlineName.replace(/[^a-zA-Z]/g, '').slice(0, 2).toUpperCase() || 'GT';
    }
  }

  const rawAirlineLogo =
    airlineObj?.logo ||
    airlineObj?.logo_url ||
    airlineObj?.image ||
    (typeof item.airlineLogo === 'string' ? item.airlineLogo : null);
  const airlineLogo = getAirlineLogo(rawAirlineLogo, airlineCode, airlineName);

  const outboundDate =
    item.departure?.date || item.outboundDate || item.departure_date || '';
  const outboundFlightCode = item.departure?.airline_code || item.outboundFlight || '';
  const outboundFlight = outboundFlightCode
    ? /^[A-Z0-9]{2,3}\s/i.test(outboundFlightCode)
      ? outboundFlightCode
      : `${airlineCode} ${outboundFlightCode}`.trim()
    : '';

  const outboundTime = item.departure?.flight_time
    ? `${item.departure.flight_time.slice(0, 5)} - ${item.departure.land_time ? item.departure.land_time.slice(0, 5) : ''}`.trim()
    : item.outboundTime || '';

  const inboundDate = item.arrival?.date || item.inboundDate || '';
  const inboundFlightCode = item.arrival?.airline_code || item.inboundFlight || '';
  const inboundFlight = inboundFlightCode
    ? /^[A-Z0-9]{2,3}\s/i.test(inboundFlightCode)
      ? inboundFlightCode
      : `${airlineCode} ${inboundFlightCode}`.trim()
    : '';

  const inboundTime = item.arrival?.flight_time
    ? `${item.arrival.flight_time.slice(0, 5)} - ${item.arrival.land_time ? item.arrival.land_time.slice(0, 5) : ''}`.trim()
    : item.inboundTime || '';

  const outboundBaggage =
    item.departure?.luggage ||
    item.outboundBaggage ||
    item.baggage ||
    '';

  const inboundBaggage =
    item.arrival?.luggage ||
    item.inboundBaggage ||
    item.baggage ||
    '';

  const baggage =
    item.arrival?.luggage ||
    item.departure?.luggage ||
    item.baggage ||
    '';

  const priceNum =
    typeof item.price === 'string'
      ? parseFloat(item.price)
      : typeof item.price === 'number'
      ? item.price
      : item.pricePKR || 0;

  const durationNum =
    typeof item.duration === 'string'
      ? parseInt(item.duration, 10)
      : typeof item.duration === 'number'
      ? item.duration
      : undefined;

  return {
    id: String(item.id || Math.random()),
    airlineId,
    airlineCode,
    airlineName,
    airlineLogo,
    acType: item.acType || 'Boeing 777-300ER',
    routeId,
    route: routeName,
    sector: routeName,
    duration: durationNum,
    outboundDate,
    outboundTime,
    outboundFlight,
    inboundDate,
    inboundTime,
    inboundFlight,
    outboundBaggage,
    inboundBaggage,
    baggage,
    seatsLeft: item.seats_left ?? item.seatsLeft ?? 10,
    pricePKR: priceNum,
    highlight: item.highlight || null,
  };
}

export const flightService = {
  /**
   * Paginated group ticket listing with full API filter fields.
   * - Request without filters: {}
   * - Request with filters: { filters: { name, duration, departure_date, airlines, routes, price_range, nextPage, perPage } }
   * - Load more: keep prior filters, update nextPage
   */
  async getGroupTicketsPaginated(
    filters?: ApiGroupTicketFilters,
  ): Promise<{
    tickets: GroupFlight[];
    rawTickets: ApiGroupTicket[];
    pagination: ApiPagination | undefined;
  }> {
    try {
      const hasFilters =
        filters &&
        Object.entries(filters).some(([k, v]) => {
          if (v === undefined || v === null || v === '') return false;
          if (Array.isArray(v)) return v.length > 0;
          return true;
        });

      const body = hasFilters ? { filters } : {};

      const res = await apiPost<ApiGroupTicket[]>(
        '/group-tickets/list',
        body,
        { cache: 'no-store' } as RequestInit,
      );

      const rawTickets = Array.isArray(res.data) ? res.data : [];
      return {
        tickets: rawTickets.map(normalizeGroupTicket),
        rawTickets,
        pagination: res.pagination,
      };
    } catch {
      return { tickets: [], rawTickets: [], pagination: undefined };
    }
  },

  /**
   * Fetch group flights list via POST /group-tickets/list.
   */
  async getGroupFlights(
    filters?: FlightFilterParams | ApiGroupTicketFilters,
  ): Promise<GroupFlight[]> {
    try {
      let apiFilters: ApiGroupTicketFilters = {};

      if (filters) {
        if ('name' in filters && filters.name) apiFilters.name = filters.name;
        if ('searchQuery' in filters && filters.searchQuery) apiFilters.name = filters.searchQuery;
        if ('duration' in filters && filters.duration) apiFilters.duration = filters.duration;
        if ('departure_date' in filters && filters.departure_date) apiFilters.departure_date = filters.departure_date;
        if ('dates' in filters && filters.dates) apiFilters.departure_date = filters.dates;
        if ('airlines' in filters && filters.airlines) {
          // If numeric array, pass directly
          if (typeof filters.airlines[0] === 'number') {
            apiFilters.airlines = filters.airlines as unknown as number[];
          }
        }
        if ('airlineIds' in filters && filters.airlineIds) apiFilters.airlines = filters.airlineIds;
        if ('routes' in filters && filters.routes) apiFilters.routes = filters.routes;
        if ('routeIds' in filters && filters.routeIds) apiFilters.routes = filters.routeIds;
        if ('price_range' in filters && filters.price_range) apiFilters.price_range = filters.price_range;
        if ('nextPage' in filters && filters.nextPage) apiFilters.nextPage = filters.nextPage;
        if ('perPage' in filters && filters.perPage) apiFilters.perPage = filters.perPage;
      }

      const { tickets } = await this.getGroupTicketsPaginated(
        Object.keys(apiFilters).length > 0 ? apiFilters : undefined,
      );
      return tickets;
    } catch {
      return [];
    }
  },

  /**
   * GET /group-tickets/lookups
   * Returns durations, departure_dates, airlines, routes.
   */
  async getGroupTicketLookups(): Promise<ApiGroupTicketLookups | null> {
    try {
      const res = await apiGet<ApiGroupTicketLookups>(
        '/group-tickets/lookups',
        { cache: 'no-store' } as RequestInit,
      );
      return res.data ?? null;
    } catch {
      return null;
    }
  },

  async getDurations(): Promise<DurationItem[]> {
    const lookups = await this.getGroupTicketLookups();
    if (!lookups || !Array.isArray(lookups.durations)) {
      return [
        { duration: 15, count: undefined },
        { duration: 21, count: undefined },
        { duration: 28, count: undefined },
      ];
    }
    return lookups.durations
      .map((d: any) => {
        if (typeof d === 'number') {
          return { duration: d, count: undefined };
        }
        const val = Number(d?.duration ?? d?.days ?? d?.name ?? d?.id ?? 0);
        const count = typeof d === 'object' && d !== null ? (d.tickets_count ?? d.count) : undefined;
        return {
          duration: val,
          count: typeof count === 'number' ? count : (typeof count === 'string' && !isNaN(Number(count)) ? Number(count) : undefined),
        };
      })
      .filter((d) => !isNaN(d.duration) && d.duration > 0)
      .sort((a, b) => a.duration - b.duration);
  },

  async getDepartureDates(): Promise<DepartureDateItem[]> {
    const lookups = await this.getGroupTicketLookups();
    if (!lookups || !Array.isArray(lookups.departure_dates)) return [];
    return lookups.departure_dates
      .map((d: any) => {
        const val = typeof d === 'string' ? d : d.departure_date || d.name || '';
        const count = typeof d === 'object' && d !== null ? (d.tickets_count ?? d.count) : undefined;
        return {
          value: val,
          label: formatDateDMY(val),
          count: typeof count === 'number' ? count : undefined,
        };
      })
      .filter((d) => Boolean(d.value))
      .sort((a, b) => parseDateTs(a.value) - parseDateTs(b.value));
  },

  async getAirlines(): Promise<AirlineItem[]> {
    const lookups = await this.getGroupTicketLookups();
    if (!lookups || !Array.isArray(lookups.airlines)) return [];
    return lookups.airlines.map((a: any) => {
      const code = a.code || (a.name ? a.name.slice(0, 2).toUpperCase() : 'AL');
      const name = a.name || 'Airline';
      return {
        id: Number(a.id || 0),
        code,
        name,
        logo: getAirlineLogo(a.logo, code, name),
        count: a.tickets_count ?? a.count ?? 1,
      };
    });
  },

  async getSectors(): Promise<SectorRouteItem[]> {
    const lookups = await this.getGroupTicketLookups();
    if (!lookups || !Array.isArray(lookups.routes)) return [];
    return lookups.routes.map((r: any) => {
      const id = Number(r.id || 0);
      const name = r.name || r.key || 'Sector';
      const label = name.split(' - ').slice(0, 2).join(' - ');
      return {
        id,
        key: name,
        label,
        fullLabel: name,
        count: r.tickets_count ?? r.count ?? 1,
      };
    });
  },

  /** Aliases for compatibility */
  getAirlinesList(): Promise<AirlineItem[]> {
    return this.getAirlines();
  },

  getSectorsRoutes(): Promise<SectorRouteItem[]> {
    return this.getSectors();
  },
} as const;
