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
  FlightFilterParams,
} from '../types/flight.types';
import { apiPost, apiGet } from './api.client';
import type {
  ApiGroupTicket,
  ApiGroupTicketLookups,
  ApiGroupTicketFilters,
  ApiPagination,
} from '../types/api.types';

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
      baggage: '46 KG (2 Pcs × 23 KG)',
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
    'ISLAMABAD - JEDDAH - ISLAMABAD';
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

  const airlineLogo =
    airlineObj?.logo ||
    (typeof item.airlineLogo === 'string' ? item.airlineLogo : null);

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

  const baggage =
    item.departure?.luggage ||
    item.arrival?.luggage ||
    item.baggage ||
    '46 KG (2 Pcs × 23 KG)';

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

  async getDurations(): Promise<number[]> {
    const lookups = await this.getGroupTicketLookups();
    if (!lookups || !Array.isArray(lookups.durations)) return [15, 21, 28];
    return lookups.durations
      .map((d: any) => (typeof d === 'number' ? d : Number(d.id || d.name || d.duration)))
      .filter((n) => !isNaN(n) && n > 0);
  },

  async getDepartureDates(): Promise<string[]> {
    const lookups = await this.getGroupTicketLookups();
    if (!lookups || !Array.isArray(lookups.departure_dates)) return [];
    return lookups.departure_dates
      .map((d: any) => (typeof d === 'string' ? d : d.departure_date || d.name || ''))
      .filter(Boolean);
  },

  async getAirlines(): Promise<AirlineItem[]> {
    const lookups = await this.getGroupTicketLookups();
    if (!lookups || !Array.isArray(lookups.airlines)) return [];
    return lookups.airlines.map((a: any) => ({
      id: Number(a.id || 0),
      code: a.code || (a.name ? a.name.slice(0, 2).toUpperCase() : 'AL'),
      name: a.name || 'Airline',
      logo: a.logo || null,
      count: a.tickets_count ?? a.count ?? 1,
    }));
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
