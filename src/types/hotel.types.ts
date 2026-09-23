export interface RoomType {
  id: string;
  name: string;
  capacity: string;
  price: string;
  unit: string;
}

export interface Hotel {
  id: string;
  aliases?: string[];
  name: string;
  location: string;
  category: string;
  destinationKey?: string;
  address: string;
  tag: string;
  rating: string;
  reviewsCount: string;
  stars: number;
  price: string;
  priceNumeric?: number;
  unit: string;
  image: string | any;
  gallery: (string | any)[];
  amenities: string[];
  amenityKeys?: string[];
  occupancy?: string[];
  description: string;
  highlights: string[];
  roomTypes: RoomType[];
  featured?: boolean;
  distance?: string;
  available_from?: string;
  lat?: string;
  lng?: string;
}

export interface HotelFilterParams {
  searchQuery?: string;
  destination?: string;
  maxPrice?: number;
  price_range?: string;
  stars?: number[];
  amenities?: string[];
  occupancy?: string[];
}
