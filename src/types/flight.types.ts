export interface GroupFlight {
  id: string;
  airlineId?: number;
  airlineCode: string;
  airlineName: string;
  airlineLogo?: string | null;
  acType: string;
  routeId?: number;
  route: string;
  sector: string;
  duration?: number;
  outboundDate: string;
  outboundTime: string;
  outboundFlight: string;
  inboundDate: string;
  inboundTime: string;
  inboundFlight: string;
  baggage: string;
  seatsLeft: number;
  pricePKR: number;
  highlight?: string | null;
}

export interface AirlineItem {
  id: number;
  code: string;
  name: string;
  logo?: string | null;
  count: number;
}

export interface SectorRouteItem {
  id: number;
  key: string;
  label: string;
  fullLabel: string;
  count: number;
}

export interface FlightFilterParams {
  searchQuery?: string;
  dates?: string[];
  departure_date?: string[];
  airlines?: string[];
  airlineIds?: number[];
  sectors?: string[];
  routeIds?: number[];
  duration?: number[];
  price_range?: string;
  nextPage?: number | null;
  perPage?: number;
}
