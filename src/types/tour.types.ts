export interface TourIncludeItem {
  icon: string;
  label: string;
}

export interface TourPackage {
  id: string;
  slug?: string;
  country: string;
  destination: string;
  location: string;
  title: string;
  rating: string | number;
  reviewCount: string | number;
  duration: string;
  days?: number;
  nights?: number;
  image: string;
  imageAltText?: string | null;
  tags: string[];
  packageIncludes: TourIncludeItem[];
  inclusions: string[];
  pricePKR: string;
  priceLabel: string;
  priceUSD: number;
  stars: number;
  badge?: string;
  description?: string;
  itinerary?: { day: string; title: string; desc: string }[];
  exclusions?: string[];
  popularTags?: string[];
  seo?: {
    seo_title?: string;
    meta_description?: string;
    url_slug?: string;
    canonical_url?: string;
    robots_index?: string;
    robots_follow?: string;
    og_title?: string;
    og_description?: string;
    og_image?: string;
    schema_type?: string;
    custom_schema_json?: Record<string, unknown>;
  } | null;
}

export interface TourFilterParams {
  searchQuery?: string;
  destination?: string;
  city?: string;
  country?: string;
  priceRange?: string;
  stars?: number[];
  rating?: number | string;
  duration?: string;
  nextPage?: number | null;
  perPage?: number;
}

