export interface VisaDocument {
  title: string;
  icon?: string;
}

export interface VisaCategory {
  id: string;
  label: string;
}

export interface VisaItem {
  id: string;
  aliasId?: string;
  country: string;
  countryKey: string;
  title: string;
  badge: string;
  badgeType?: string;
  category?: string;
  isFastTrack?: boolean;
  duration: string;
  priceUSD?: number;
  pricePKR: string;
  priceNumeric?: number;
  image: string;
  imageAltText?: string | null;
  validity: string;
  stayDuration: string;
  processingType: string;
  heroTitle?: string;
  detailTitle?: string;
  eyebrow?: string;
  detailDesc?: string;
  featuredImage?: string;
  aboutTitle?: string;
  aboutText?: string;
  eligibility?: string[];
  requiredDocs?: VisaDocument[] | string[];
  includedServices?: string[];
  faq?: { q: string; a: string }[];
  faqs?: { q: string; a: string }[];
  specs?: {
    processingTime?: string;
    stayDuration?: string;
    entryType?: string;
    validity?: string;
    visaType?: string;
    price?: string;
    pricePKR?: string;
  };
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

export interface VisaFilterParams {
  category?: string;
  searchQuery?: string;
  country?: string;
  price_range?: string;
  entryType?: string[];
  processingTime?: string[];
  nextPage?: number | null;
  perPage?: number;
}
