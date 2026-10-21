import type { ApiSeoObject } from './api.types';

export interface HotelSummary {
  name: string;
  distance: string;
}

export interface UmrahPackage {
  id: string;
  title: string;
  badge: string;
  categoryKey: string;
  categoryLabel: string;
  stars: number;
  duration: string;
  tagline: string;
  image: string;
  makkahHotel: HotelSummary;
  madinahHotel: HotelSummary;
  features: string[];
  price: string;
  priceNumeric: number;
  hotelCategory: string;
  description?: string;
  seo?: ApiSeoObject | null;
}

export interface GroupUmrahPackage extends UmrahPackage {
  departureCity?: string;
  departureDate?: string;
  returnDate?: string;
  airline?: string | { id?: number; name?: string; code?: string | null; logo?: string | null };
  airlineCode?: string;
  airlineName?: string;
  airlineLogo?: string | null;
  seatsTotal?: number;
  seatsAvailable?: number;
}

export interface UmrahFilterParams {
  searchQuery?: string;
  category?: string;
  stars?: number[];
  maxPrice?: number;
  duration?: string;
  priceRange?: string;
}
