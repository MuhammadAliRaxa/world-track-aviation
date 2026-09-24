/**
 * JSON-LD Utilities — WorldTrackTravel
 *
 * Safe serialization and rendering of JSON-LD structured data.
 * Prevents XSS injection from </script> sequences in schema values.
 */

import React from 'react';

// ---------------------------------------------------------------------------
// Safe JSON-LD serialization
// ---------------------------------------------------------------------------

/**
 * Serializes a schema object to a JSON string safe for use in
 * <script type="application/ld+json"> tags.
 *
 * Escapes the </script> sequence to prevent script tag injection.
 * Returns null if the schema is empty or serialization fails.
 */
export function safeJsonLd(schema: Record<string, unknown> | null | undefined): string | null {
  if (!schema || Object.keys(schema).length === 0) return null;

  try {
    return JSON.stringify(schema).replace(/<\/script>/gi, '<\\/script>');
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// JSON-LD Script Server Component
// ---------------------------------------------------------------------------

interface JsonLdScriptProps {
  schema: Record<string, unknown> | Array<Record<string, unknown>> | null | undefined;
}

/**
 * Server component that renders a <script type="application/ld+json"> block.
 * Safely serializes the schema. Renders nothing if schema is empty/null.
 */
export function JsonLdScript({ schema }: JsonLdScriptProps): React.ReactElement | null {
  if (!schema) return null;
  const serialized = Array.isArray(schema)
    ? JSON.stringify(schema).replace(/<\/script>/gi, '<\\/script>')
    : safeJsonLd(schema as Record<string, unknown>);
  if (!serialized) return null;

  return React.createElement('script', {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: serialized },
  });
}

// ---------------------------------------------------------------------------
// Schema Generators
// ---------------------------------------------------------------------------

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': 'https://worldtracktravel.com/#organization',
    name: 'World Track Aviation & Tourism',
    alternateName: ['World Track Aviation', 'World Track Travel'],
    legalName: 'World Track Travel & Tourism (Pvt.) Ltd.',
    url: 'https://worldtracktravel.com',
    logo: 'https://worldtracktravel.com/assets/world_track_logo.png',
    image: 'https://worldtracktravel.com/assets/world_track_logo.png',
    description:
      'IATA-accredited travel agency in Islamabad (#27351170, Ministry Lic #ID-2637) specializing in Umrah packages, flight tickets, hotel reservations in Makkah & Madinah, private airport transport, and worldwide visa services.',
    telephone: '+92-51-2120721',
    email: 'worldtrackaviation@gmail.com',
    priceRange: '$$$',
    currenciesAccepted: 'PKR, SAR, USD',
    paymentAccepted: 'Cash, Bank Transfer, Credit Card',
    openingHours: 'Mo,Tu,We,Th,Fr,Sa 09:00-19:00',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office #4, Islamabad Center, Fazal-ul-Haq Road, Blue Area',
      addressLocality: 'Islamabad',
      addressRegion: 'Federal Capital',
      postalCode: '44000',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '33.7145',
      longitude: '73.0645',
    },
    areaServed: [
      { '@type': 'City', name: 'Islamabad' },
      { '@type': 'City', name: 'Rawalpindi' },
      { '@type': 'City', name: 'Vehari' },
      { '@type': 'Country', name: 'Pakistan' },
      { '@type': 'City', name: 'Makkah' },
      { '@type': 'City', name: 'Madinah' },
      { '@type': 'City', name: 'Jeddah' },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+92-51-2120721',
        contactType: 'customer service',
        areaServed: 'PK',
        availableLanguage: ['English', 'Urdu'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+92-335-0122252',
        contactType: 'reservations',
        contactOption: 'WhatsApp',
        areaServed: 'PK',
        availableLanguage: ['English', 'Urdu', 'Arabic'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+92-329-2721721',
        contactType: 'emergency',
        contactOption: 'WhatsApp',
        areaServed: ['PK', 'SA'],
        availableLanguage: ['English', 'Urdu', 'Arabic'],
      },
    ],
    department: [
      {
        '@type': 'TravelAgency',
        name: 'World Track Aviation - Vehari Branch',
        telephone: '+92-313-7943362',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Main Multan Road',
          addressLocality: 'Vehari',
          addressRegion: 'Punjab',
          addressCountry: 'PK',
        },
      },
    ],
    identifier: [
      {
        '@type': 'PropertyValue',
        propertyID: 'IATA Number',
        value: '27351170',
      },
      {
        '@type': 'PropertyValue',
        propertyID: 'Ministry License',
        value: 'ID-2637',
      },
      {
        '@type': 'PropertyValue',
        propertyID: 'Accreditation',
        value: 'DTS Approved',
      },
    ],
    sameAs: [
      'https://web.facebook.com/worldtrackaviation/',
      'https://www.instagram.com/worldtrackaviation/',
    ],
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://worldtracktravel.com/#website',
    url: 'https://worldtracktravel.com',
    name: 'World Track Aviation & Tourism',
    description: 'Travel Agency in Islamabad - Umrah, Visas, Hotels & Flights',
    publisher: {
      '@id': 'https://worldtracktravel.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://worldtracktravel.com/our-hotels/?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
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

export function getBlogPostingSchema(blog: {
  id?: string | number;
  title?: string;
  summary?: string;
  image?: string;
  publishedAt?: string;
  createdAt?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://worldtracktravel.com/our-blogs/${blog.id}/`,
    },
    headline: blog.title || 'Travel Guide',
    description: blog.summary || 'Travel insights and Umrah guide by World Track Aviation.',
    image: blog.image || 'https://worldtracktravel.com/assets/world_track_logo.png',
    datePublished: blog.publishedAt || blog.createdAt || '2026-01-01',
    author: {
      '@type': 'Organization',
      name: 'World Track Aviation',
      url: 'https://worldtracktravel.com',
    },
    publisher: {
      '@id': 'https://worldtracktravel.com/#organization',
    },
  };
}
