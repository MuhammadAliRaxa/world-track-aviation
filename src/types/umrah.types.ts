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
}

export interface GroupUmrahPackage extends UmrahPackage {
  departureCity?: string;
  departureDate?: string;
  returnDate?: string;
  airline?: string;
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
