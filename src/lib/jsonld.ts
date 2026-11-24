/**
 * JSON-LD Utilities — WorldTrackTravel
 *
 * Safe serialization and rendering of JSON-LD structured data.
 * Prevents XSS injection from </script> sequences in schema values.
 */

import React from 'react';
import { cleanAndSerializeSchema, RawSchemaInput } from './schema-cleaner';

// ---------------------------------------------------------------------------
// Safe JSON-LD serialization
// ---------------------------------------------------------------------------

/**
 * Serializes and cleans a schema object or string to a JSON string safe for use in
 * <script type="application/ld+json"> tags.
 *
 * Strips markdown code fences, escapes </script>, and returns null if empty.
 */
export function safeJsonLd(schema: RawSchemaInput): string | null {
  return cleanAndSerializeSchema(schema);
}

// ---------------------------------------------------------------------------
// JSON-LD Script Server Component
// ---------------------------------------------------------------------------

interface JsonLdScriptProps {
  schema: RawSchemaInput | Array<RawSchemaInput>;
}

/**
 * Server component that renders a <script type="application/ld+json"> block.
 * Safely strips markdown fences, validates JSON, and serializes the schema.
 * Renders nothing if schema is empty/null/invalid.
 */
export function JsonLdScript({ schema }: JsonLdScriptProps): React.ReactElement | null {
  if (!schema) return null;

  let serialized: string | null = null;

  if (Array.isArray(schema)) {
    const validItems: unknown[] = [];
    for (const item of schema) {
      if (!item) continue;
      if (typeof item === 'string') {
        const cleanedStr = cleanAndSerializeSchema(item);
        if (cleanedStr) {
          try {
            validItems.push(JSON.parse(cleanedStr));
          } catch {}
        }
      } else if (typeof item === 'object') {
        if (Object.keys(item).length > 0) {
          validItems.push(item);
        }
      }
    }
    if (validItems.length === 0) return null;
    serialized = cleanAndSerializeSchema(validItems.length === 1 ? (validItems[0] as any) : (validItems as any));
  } else {
    serialized = cleanAndSerializeSchema(schema);
  }

  if (!serialized) return null;

  return React.createElement('script', {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: serialized },
  });
}

// ---------------------------------------------------------------------------
// Schema Generators (No automatic fallbacks — return null if not provided)
// ---------------------------------------------------------------------------

export function getOrganizationSchema(customSchema?: Record<string, unknown> | string | null) {
  if (customSchema) {
    try {
      const parsed = typeof customSchema === 'string' ? JSON.parse(customSchema) : customSchema;
      if (parsed && typeof parsed === 'object' && Object.keys(parsed).length > 0) {
        return parsed as Record<string, unknown>;
      }
    } catch {
      // Return null on parse error
    }
  }

  return null;
}

export function getWebsiteSchema(customSchema?: Record<string, unknown> | string | null) {
  if (customSchema) {
    try {
      const parsed = typeof customSchema === 'string' ? JSON.parse(customSchema) : customSchema;
      if (parsed && typeof parsed === 'object' && Object.keys(parsed).length > 0) {
        return parsed as Record<string, unknown>;
      }
    } catch {
      // Return null on parse error
    }
  }

  return null;
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  const base = 'https://worldtracktravel.com';
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path.startsWith('http') ? item.path : `${base}${item.path.startsWith('/') ? item.path : `/${item.path}`}`,
    })),
  };
}

export function getHotelSchema(hotel: {
  id?: string | number;
  name?: string;
  description?: string;
  image?: string;
  city?: string;
  address?: string;
  stars?: number | string;
  price?: string | number;
  lat?: number | string;
  lng?: number | string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    '@id': `https://worldtracktravel.com/our-hotels/${hotel.id}/#hotel`,
    name: hotel.name || 'Verified Hotel',
    description: hotel.description || `Verified hotel in ${hotel.city || 'Makkah / Madinah'}.`,
    url: `https://worldtracktravel.com/our-hotels/${hotel.id}/`,
    image: hotel.image || 'https://worldtracktravel.com/assets/world_track_logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: hotel.address || 'Haram Proximity',
      addressLocality: hotel.city || 'Makkah',
      addressCountry: 'SA',
    },
    ...(hotel.stars
      ? {
          starRating: {
            '@type': 'Rating',
            ratingValue: String(hotel.stars),
          },
        }
      : {}),
    ...(hotel.price
      ? {
          priceRange: typeof hotel.price === 'number' ? `PKR ${hotel.price.toLocaleString('en-PK')}` : String(hotel.price),
        }
      : {}),
    ...(hotel.lat && hotel.lng
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: String(hotel.lat),
            longitude: String(hotel.lng),
          },
        }
      : {}),
  };
}

export function getTouristTripSchema(trip: {
  id?: string | number;
  name?: string;
  description?: string;
  image?: string;
  price?: string | number;
  url?: string;
  duration?: string | number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: trip.name || 'Travel Package',
    description: trip.description || 'Exclusive travel package by World Track Aviation.',
    url: trip.url,
    image: trip.image,
    touristType: ['Pilgrim', 'Leisure Traveler'],
    provider: {
      '@id': 'https://worldtracktravel.com/#organization',
    },
    offers: {
      '@type': 'Offer',
      price: typeof trip.price === 'number' ? trip.price : String(trip.price || '').replace(/[^0-9]/g, '') || '0',
      priceCurrency: 'PKR',
      availability: 'https://schema.org/InStock',
      url: trip.url,
      validFrom: new Date().toISOString().split('T')[0],
    },
  };
}

function parseIsoDate(dateStr?: string): string {
  if (!dateStr) return new Date().toISOString().split('T')[0];
  try {
    if (/^\d{4}-\d{2}-\d{2}/.test(dateStr)) return dateStr.split('T')[0];
    const cleaned = dateStr.replace(/(\d{1,2})\/([a-zA-Z]+)\/(\d{4})/, '$2 $1, $3');
    const d = new Date(cleaned);
    if (!isNaN(d.getTime())) return d.toISOString().split('T')[0];
  } catch {}
  return dateStr;
}

export function getBlogPostingSchema(blog: {
  id?: string | number;
  title?: string;
  summary?: string;
  image?: string;
  publishedAt?: string;
  createdAt?: string;
  author?: string;
}) {
  const publishedDate = parseIsoDate(blog.publishedAt || blog.createdAt);
  const canonicalUrl = `https://worldtracktravel.com/our-blogs/${blog.id}/`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    url: canonicalUrl,
    headline: blog.title || 'Travel Guide',
    description: blog.summary || 'Travel insights and Umrah guide by World Track Aviation.',
    image: blog.image || 'https://worldtracktravel.com/assets/world_track_logo.png',
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: {
      '@type': 'Person',
      name: blog.author || 'World Track Aviation',
    },
    publisher: {
      '@id': 'https://worldtracktravel.com/#organization',
    },
  };
}
