/**
 * Canonical API Response Types — WorldTrackTravel
 *
 * These types match the shapes documented in docs/frontend-api-integration.md.
 * They are separate from the legacy mock-data types (hotel.types.ts, etc.)
 * which remain for backward compatibility with existing mock-path code.
 */

// ---------------------------------------------------------------------------
// Common Response Wrappers
// ---------------------------------------------------------------------------

export interface ApiResponse<T> {
  response: boolean;
  data: T;
  pagination?: ApiPagination;
  message?: string;
}

export interface ApiPagination {
  current_page: number;
  per_page: number;
  total_pages: number;
  total_records: number;
  /** Next page number, or null when no more pages. */
  nextPage: number | null;
  has_more: boolean;
}

// ---------------------------------------------------------------------------
// SEO
// ---------------------------------------------------------------------------

export interface ApiSeoObject {
  seo_title: string;
  meta_description: string;
  url_slug: string;
  canonical_url: string;
  robots_index: string;
  robots_follow: string;
  og_title: string;
  og_description: string;
  og_image: string;
  schema_type?: string;
  /** Pre-built JSON-LD object — may be empty `{}`. */
  custom_schema_json: Record<string, unknown>;
}

export interface ApiGlobalSeo {
  site_name: string;
  default_site_seo_title: string;
  default_site_seo_description: string;
  default_canonical_url: string;
  default_robots_index: string;
  default_robots_follow: string;
  default_og_title: string;
  default_og_description: string;
  default_og_image: string;
  default_schema_json: Record<string, unknown>;
}

export interface ApiPageSeo {
  page_key: string;
  page_name: string;
  path: string;
  seo: ApiSeoObject;
}

export interface ApiSeoRedirect {
  old_url: string;
  new_url: string;
  status_code: number;
  is_active: boolean;
}

export interface ApiSeo404Route {
  missing_url: string;
  fallback_url: string;
  is_active: boolean;
}

// ---------------------------------------------------------------------------
// Images
// ---------------------------------------------------------------------------

export interface ApiImage {
  id: number;
  file: string;
  alt_text: string;
}

// ---------------------------------------------------------------------------
// Hotels
// ---------------------------------------------------------------------------

export interface ApiHotel {
  id: number;
  hotel_name: string;
  hotel_city: string;
  hotel_address: string;
  hotel_rating: string;
  /** Star category e.g. "5 Star", "3 Star", "Economy" */
  category?: string;
  min_rate: number;
  images: ApiImage[];
  seo: ApiSeoObject | null;
}

export interface ApiHotelDetail extends ApiHotel {
  description?: string;
  facilities?: ApiHotelFacility[];
}

export interface ApiHotelFacility {
  id: number;
  name: string;
}

export interface ApiHotelRoomType {
  id: number;
  name: string;
  capacity?: number;
  description?: string;
}

export interface ApiHotelLookupCity {
  name: string;
  hotels_count: number;
}

export interface ApiHotelLookupCategory {
  value: string;
  hotels_count: number;
}

export interface ApiHotelLookupFacility {
  id: number;
  facility: string;
}

export interface ApiHotelLookupRoomType {
  id: number;
  room_type: string;
}

export interface ApiHotelLookups {
  all_destinations_count?: number;
  cities: ApiHotelLookupCity[];
  hotel_category: ApiHotelLookupCategory[];
  hotel_facilities: ApiHotelLookupFacility[];
  room_types: ApiHotelLookupRoomType[];
}

export interface ApiHotelFilters {
  search?: string;
  city?: string;
  price_range?: string;
  hotel_rating?: number;
  hotel_category?: string;
  hotel_facilities?: number[];
  room_types?: number[];
  nextPage?: number | null;
  perPage?: number;
}

// ---------------------------------------------------------------------------
// Visas
// ---------------------------------------------------------------------------

export interface ApiVisa {
  id: number;
  title?: string;
  sub_title?: string;
  name?: string;
  country?: string;
  visa_type?: string;
  processing_time?: string;
  stay_duration?: string;
  entry_type?: string;
  validity?: string;
  rate?: string | number;
  price?: string | number;
  price_range?: string;
  description?: string;
  image?: string | null;
  image_alt_text?: string | null;
  seo?: ApiSeoObject | null;
  [key: string]: unknown;
}

export interface ApiVisaFilters {
  search?: string;
  name?: string;
  country?: string;
  price_range?: string;
  nextPage?: number | null;
  perPage?: number;
}

// ---------------------------------------------------------------------------
// Group Tickets (Flights)
// ---------------------------------------------------------------------------

export interface ApiGroupTicketFlightLeg {
  date?: string;
  airline_code?: string;
  flight_time?: string;
  land_time?: string;
  luggage?: string | null;
}

export interface ApiGroupTicket {
  id: number;
  name?: string;
  route?: { id: number; name: string } | string;
  airline?: {
    id: number;
    name: string;
    code?: string | null;
    logo?: string | null;
  } | string;
  seats_left?: number;
  duration?: number;
  price?: string | number;
  departure?: ApiGroupTicketFlightLeg;
  arrival?: ApiGroupTicketFlightLeg;
  /** Group tickets does not provide item-level SEO — uses page-level SEO only. */
  seo?: ApiSeoObject | null;
  [key: string]: unknown;
}

export interface ApiGroupTicketLookupItem {
  id?: number;
  name?: string;
  code?: string | null;
  logo?: string | null;
  departure_date?: string;
  tickets_count?: number;
  count?: number;
}

export interface ApiGroupTicketLookups {
  durations: number[] | ApiGroupTicketLookupItem[];
  departure_dates: Array<{ departure_date?: string; name?: string; tickets_count?: number; count?: number }>;
  airlines: Array<{ id: number; name: string; code?: string | null; logo?: string | null; tickets_count?: number; count?: number }>;
  routes: Array<{ id: number; name: string; tickets_count?: number; count?: number }>;
}

export interface ApiGroupTicketFilters {
  name?: string;
  duration?: number[];
  departure_date?: string[];
  /** Numeric IDs from /group-tickets/lookups */
  airlines?: number[];
  /** Numeric IDs from /group-tickets/lookups */
  routes?: number[];
  price_range?: string;
  nextPage?: number | null;
  perPage?: number;
}

// ---------------------------------------------------------------------------
// Group Umrah Packages
// ---------------------------------------------------------------------------

export interface ApiGroupUmrahPackage {
  id: number;
  name?: string;
  duration?: number;
  price?: number;
  seo: ApiSeoObject | null;
  [key: string]: unknown;
}

export interface ApiGroupUmrahFilters {
  name?: string;
  duration?: number[];
  /** Numeric IDs */
  airlines?: number[];
  /** Numeric IDs */
  routes?: number[];
  nextPage?: number | null;
  perPage?: number;
}

// ---------------------------------------------------------------------------
// Custom Umrah Packages
// ---------------------------------------------------------------------------

export interface ApiCustomUmrahPackage {
  id: number;
  name?: string;
  category?: string;
  duration?: string;
  price?: number;
  price_range?: string;
  package_rating?: number;
  seo: ApiSeoObject | null;
  [key: string]: unknown;
}

export interface ApiCustomUmrahLookupItem {
  id: number;
  name: string;
  count?: number;
}

export interface ApiCustomUmrahLookups {
  categories: ApiCustomUmrahLookupItem[];
  ratings: ApiCustomUmrahLookupItem[];
}

export interface ApiCustomUmrahFilters {
  search?: string;
  name?: string;
  category?: string;
  duration?: string;
  price_range?: string;
  package_rating?: number[];
  nextPage?: number | null;
  perPage?: number;
}

// ---------------------------------------------------------------------------
// Tours
// ---------------------------------------------------------------------------

export interface ApiTour {
  id: number;
  name: string;
  facilities?: string[];
  price?: string | number;
  days?: number;
  nights?: number;
  duration?: string;
  rating?: string | number;
  reviews?: number;
  city?: string;
  country?: string;
  location?: string;
  description?: string;
  image?: string | null;
  image_alt_text?: string | null;
  seo?: ApiSeoObject | null;
  [key: string]: unknown;
}

export interface ApiTourLookupDestination {
  city: string;
  country: string;
  name: string;
  tours_count: number;
}

export interface ApiTourLookupRating {
  value: string | number;
  tours_count: number;
}

export interface ApiTourLookupFacility {
  id: number;
  facility: string;
}

export interface ApiTourLookups {
  all_destinations_count?: number;
  destinations?: ApiTourLookupDestination[];
  ratings?: ApiTourLookupRating[];
  tour_facilities?: ApiTourLookupFacility[];
  /** Legacy fields for backwards compat */
  locations?: { id?: number; name: string; count?: number }[];
  cities?: { id?: number; name: string; count?: number }[];
  countries?: { id?: number; name: string; count?: number }[];
}

export interface ApiTourFilters {
  search?: string;
  location?: string;
  city?: string;
  country?: string;
  price_range?: string;
  rating?: number | string;
  nextPage?: number | null;
  perPage?: number;
}

// ---------------------------------------------------------------------------
// Blogs
// ---------------------------------------------------------------------------

export interface ApiBlog {
  id: number;
  title: string;
  category: string;
  image: string;
  image_alt_text: string;
  seo: ApiSeoObject | null;
  [key: string]: unknown;
}

export interface ApiBlogLookupCategory {
  value: string;
  label: string;
  blogs_count: number;
}

export interface ApiBlogLookups {
  all_categories_count?: number;
  categories: ApiBlogLookupCategory[];
}

export interface ApiBlogFilters {
  search?: string;
  category?: string;
  nextPage?: number | null;
  perPage?: number;
}

// ---------------------------------------------------------------------------
// Transport
// ---------------------------------------------------------------------------

export interface ApiVehicleType {
  id: number;
  vehicle_type: string;
  vehicle_capacity: number;
  vehicle_images: ApiImage[];
}

export interface ApiTransportVehicleRate {
  transport_rate_id: number;
  vehicle_type_id: number;
  vehicle_type: string;
  vehicle_capacity: number;
  price: number;
  price_formatted: string;
  vehicle_images: ApiImage[];
  seo: ApiSeoObject | null;
}

export interface ApiTransportRoute {
  id: number;
  route: string;
  vehicles: ApiTransportVehicleRate[];
}

export interface ApiTransportListing {
  vehicle_types: ApiVehicleType[];
  data: ApiTransportRoute[];
  response: boolean;
}

export interface ApiTransportRate extends ApiTransportVehicleRate {
  route?: string;
}

// ---------------------------------------------------------------------------
// Team
// ---------------------------------------------------------------------------

export interface ApiTeamMember {
  id: number;
  name: string;
  role?: string;
  position?: string;
  image?: string;
  image_alt_text?: string;
  [key: string]: unknown;
}

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export interface ApiTestimonial {
  id: number;
  name: string;
  rating?: number;
  category?: string;
  message?: string;
  review?: string;
  [key: string]: unknown;
}

export interface ApiTestimonialFilters {
  category?: string;
}

// ---------------------------------------------------------------------------
// Contact Info
// ---------------------------------------------------------------------------

export interface ApiContactInfo {
  [key: string]: unknown;
}

// ---------------------------------------------------------------------------
// Inquiry
// ---------------------------------------------------------------------------

export interface ApiInquiryLookups {
  sections?: unknown[];
  services?: unknown[];
  room_types?: ApiInquiryRoomType[];
  countries?: ApiInquiryCountry[];
  custom_visa_countries?: ApiInquiryCountry[];
  transport_routes?: ApiInquiryRoute[];
  vehicles?: ApiInquiryVehicle[];
}

export interface ApiInquiryRoomType {
  id: number;
  name: string;
}

export interface ApiInquiryCountry {
  id: number;
  name: string;
  code?: string;
}

export interface ApiInquiryRoute {
  id: number;
  name: string;
}

export interface ApiInquiryVehicle {
  id: number;
  name: string;
}

export interface ApiInquiryType {
  id: number;
  name: string;
  slug: string;
}

// Inquiry submission types

interface ApiInquiryBase {
  name: string;
  email: string;
  contact: string;
  message?: string;
}

export interface ApiGeneralInquiry extends ApiInquiryBase {
  type: 'general';
  service_category?: string;
}

export interface ApiHotelInquiry extends ApiInquiryBase {
  type: 'hotel';
  checkin_date: string;
  checkout_date: string;
  adults: number;
  children?: number;
  infants?: number;
  room_type_id?: number;
}

export interface ApiVisaInquiry extends ApiInquiryBase {
  type: 'visa';
  country_name: string;
}

export interface ApiTransportInquiry extends ApiInquiryBase {
  type: 'transport';
  route_id: number;
  vehicle_type_id: number;
}

export interface ApiUmrahInquiry extends ApiInquiryBase {
  type: 'umrah';
  checkin_date: string;
  checkout_date: string;
  adults: number;
  children?: number;
  infants?: number;
  room_type_id?: number;
}

export interface ApiTourInquiry extends ApiInquiryBase {
  type: 'tour';
  adults: number;
  children?: number;
  infants?: number;
}

export type ApiSubmitInquiryRequest =
  | ApiGeneralInquiry
  | ApiHotelInquiry
  | ApiVisaInquiry
  | ApiTransportInquiry
  | ApiUmrahInquiry
  | ApiTourInquiry;

export interface ApiSubmitInquiryResponse {
  message: string;
  data: Record<string, unknown>;
  accepted_types: string[];
  response: boolean;
}

// ---------------------------------------------------------------------------
// API Error
// ---------------------------------------------------------------------------

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
    public readonly endpoint?: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}
