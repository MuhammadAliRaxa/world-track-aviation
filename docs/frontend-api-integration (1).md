# WorldTrackTravel Frontend API Integration

Base endpoint:

```text
http://admin.worldtracktravel.com/api
```

All public frontend display APIs below can be used without login token.

Protected APIs such as bookings, payment proof upload, user profile, and admin actions are not part of this frontend public integration flow.

This document is written for the React + Next.js frontend. SEO data returned by these APIs should be used in Next.js metadata, Open Graph tags, canonical tags, robots tags, and JSON-LD script output.

Only the canonical frontend endpoint is documented for each feature. Some backend aliases may exist for backward compatibility, but the frontend should use only the single endpoint shown in this document.

## Common Response

Most successful responses follow this shape:

```json
{
  "response": true,
  "data": []
}
```

Paginated listing APIs also return:

```json
{
  "pagination": {
    "current_page": 1,
    "per_page": 12,
    "total_pages": 3,
    "total_records": 28,
    "nextPage": 2,
    "has_more": true
  }
}
```

For load more, send the returned `pagination.nextPage` in the next request body as `filters.nextPage`.

Example:

```json
{
  "filters": {
    "nextPage": 2,
    "perPage": 12
  }
}
```

When no more pages are available, `nextPage` is `null`.

## Price Range Format

Where supported, `price_range` accepts:

```text
under_60000
above_200000
60000_120000
```

## SEO Response Shape

Modules that support SEO return a nullable `seo` object with the item data.

Supported module item SEO:

- Hotels
- Custom visas
- Group Umrah packages
- Custom Umrah packages
- Tours
- Blogs
- Transport rates/routes

SEO object:

```json
{
  "seo": {
    "seo_title": "Luxury Makkah Hotel Near Haram",
    "meta_description": "Book direct wholesale hotel rates in Makkah.",
    "url_slug": "luxury-makkah-hotel-near-haram",
    "canonical_url": "http://admin.worldtracktravel.com/hotels/luxury-makkah-hotel-near-haram",
    "robots_index": "index",
    "robots_follow": "follow",
    "og_title": "Luxury Makkah Hotel Near Haram",
    "og_description": "Book direct wholesale hotel rates in Makkah.",
    "og_image": "http://admin.worldtracktravel.com/storage/hotels/hotel-1.webp",
    "schema_type": "Hotel",
    "custom_schema_json": {
      "@context": "https://schema.org",
      "@type": "Hotel",
      "name": "Luxury Makkah Hotel Near Haram"
    }
  }
}
```

If `seo` is `null`, the frontend should fall back in this order:

1. Page SEO from `/seo/page/{page_key}`
2. Global SEO defaults from `/seo/global`
3. Frontend hardcoded fallback

For Next.js detail pages, prefer item-level `seo` when available. For listing/static pages, use `/seo/page/{page_key}`.

## Global SEO APIs

### Global SEO Settings

```http
GET http://admin.worldtracktravel.com/api/seo/global
```

Use this once in the frontend layout or metadata helper as default fallback SEO for the full website.

Response:

```json
{
  "response": true,
  "data": {
    "site_name": "WorldTrackTravel",
    "default_site_seo_title": "WorldTrackTravel",
    "default_site_seo_description": "Umrah, visa, hotel, tour and transport services.",
    "default_canonical_url": "http://admin.worldtracktravel.com",
    "default_robots_index": "index",
    "default_robots_follow": "follow",
    "default_og_title": "WorldTrackTravel",
    "default_og_description": "Book trusted travel services online.",
    "default_og_image": "http://admin.worldtracktravel.com/storage/seo-og-images/default.webp",
    "default_schema_json": {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": "WorldTrackTravel"
    }
  }
}
```

### Static Page SEO

```http
GET http://admin.worldtracktravel.com/api/seo/page/{page_key}
```

Use this for static or listing pages such as home, about, contact, hotels, visas, transport, tours and blogs.

Common page keys:

```text
home
about-us
contact-us
hotels
visas
transport
tours
blogs
custom-umrah-packages
group-umrah-packages
group-tickets
```

Example:

```http
GET http://admin.worldtracktravel.com/api/seo/page/hotels
```

Response:

```json
{
  "response": true,
  "data": {
    "page_key": "hotels",
    "page_name": "Hotels",
    "path": "/hotels",
    "seo": {
      "seo_title": "Hotels in Makkah and Madina",
      "meta_description": "Browse contracted hotels with direct wholesale rates.",
      "canonical_url": "http://admin.worldtracktravel.com/hotels",
      "robots_index": "index",
      "robots_follow": "follow",
      "og_title": "Hotels in Makkah and Madina",
      "og_description": "Find Makkah and Madina hotel rates.",
      "og_image": "http://admin.worldtracktravel.com/storage/page-seo/hotels.webp",
      "custom_schema_json": {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Hotels"
      }
    }
  }
}
```

### SEO Redirects

```http
GET http://admin.worldtracktravel.com/api/seo/redirects
```

Use this in Next.js middleware or server-side routing if redirect handling is added on the frontend.

Response:

```json
{
  "response": true,
  "data": [
    {
      "old_url": "http://admin.worldtracktravel.com/hotels/old-slug",
      "new_url": "http://admin.worldtracktravel.com/hotels/new-slug",
      "status_code": 301,
      "is_active": true
    }
  ]
}
```

### SEO 404 Routes

```http
GET http://admin.worldtracktravel.com/api/seo/404-routes
```

Use this when a hotel, tour, blog, package or other dynamic URL is missing and the frontend needs a configured 404 fallback route.

Response:

```json
{
  "response": true,
  "data": [
    {
      "missing_url": "http://admin.worldtracktravel.com/hotels/deleted-hotel",
      "fallback_url": "http://admin.worldtracktravel.com/hotels",
      "is_active": true
    }
  ]
}
```

## Hotels

### Hotel Listing

```http
POST http://admin.worldtracktravel.com/api/hotel/minRate
```

Use this to show hotel cards/listing.

Request:

```json
{
  "filters": {
    "search": "makkah",
    "city": "Makkah",
    "price_range": "under_60000",
    "hotel_rating": 4,
    "hotel_facilities": [1, 2],
    "room_types": [1],
    "nextPage": 1,
    "perPage": 12
  }
}
```

Response items include hotel data, images with alt text, minimum rate and nullable `seo`.

Example item:

```json
{
  "id": 1,
  "hotel_name": "Safa Albaraka",
  "hotel_city": "Makkah",
  "hotel_address": "80 Bras Basah Road",
  "hotel_rating": "7.5",
  "min_rate": 150,
  "images": [
    {
      "id": 10,
      "file": "http://admin.worldtracktravel.com/storage/hotels/hotel-1.webp",
      "alt_text": "Safa Albaraka hotel room in Makkah"
    }
  ],
  "seo": {
    "seo_title": "Safa Albaraka Hotel in Makkah",
    "meta_description": "Direct hotel rates for Safa Albaraka in Makkah.",
    "url_slug": "safa-albaraka-hotel-makkah",
    "canonical_url": "http://admin.worldtracktravel.com/hotels/safa-albaraka-hotel-makkah",
    "robots_index": "index",
    "robots_follow": "follow",
    "og_title": "Safa Albaraka Hotel in Makkah",
    "og_description": "Direct hotel rates for Safa Albaraka in Makkah.",
    "og_image": "http://admin.worldtracktravel.com/storage/hotels/hotel-1.webp",
    "schema_type": "Hotel",
    "custom_schema_json": {}
  }
}
```

Load more:

```json
{
  "filters": {
    "search": "makkah",
    "city": "Makkah",
    "nextPage": 2,
    "perPage": 12
  }
}
```

### Hotel Lookups

```http
GET http://admin.worldtracktravel.com/api/hotel/lookups
```

Use this for hotel filter UI:

- cities
- hotel ratings
- hotel facilities
- room types

### Hotel Detail

```http
GET http://admin.worldtracktravel.com/api/hotel/{hotel_id}
```

Example:

```http
GET http://admin.worldtracktravel.com/api/hotel/1
```

Use the returned hotel item `seo` object for the Next.js hotel detail page. Use hotel image `alt_text` for image accessibility and SEO.

### Hotel Room Types

```http
GET http://admin.worldtracktravel.com/api/hotel/room/type/{hotel_id}
```

### Hotel Room Rates

```http
POST http://admin.worldtracktravel.com/api/hotel/room/rate
```

### Hotel FAQs

```http
POST http://admin.worldtracktravel.com/api/hotel/faqs
```

Use this endpoint with filters or with an empty body.

Request without filters:

```json
{}
```

Request with filters:

```json
{
  "filters": {
    "category": "Hotel",
    "search": "booking"
  }
}
```

## Custom Visas

### Custom Visa Listing

```http
POST http://admin.worldtracktravel.com/api/visa/list
```

Use this endpoint with filters or with an empty body.

Request without filters:

```json
{}
```

Request with filters:

```json
{
  "filters": {
    "search": "dubai",
    "name": "Dubai",
    "country": "UAE",
    "price_range": "under_50000",
    "nextPage": 1,
    "perPage": 12
  }
}
```

Use `country` for country filter. `county` is also accepted for backward compatibility.

Response items include nullable `seo`. For visa listing/static page metadata use:

```http
GET http://admin.worldtracktravel.com/api/seo/page/visas
```

For visa detail pages, use the visa item `seo` object when available.

## Group Tickets

### Group Ticket Listing

```http
POST http://admin.worldtracktravel.com/api/group-tickets/list
```

Use this endpoint with filters or with an empty body.

Request without filters:

```json
{}
```

Request with filters:

```json
{
  "filters": {
    "name": "islamabad",
    "duration": [15, 21],
    "departure_date": ["2026-09-08"],
    "airlines": [1],
    "routes": [1],
    "price_range": "under_200000",
    "nextPage": 1,
    "perPage": 12
  }
}
```

Group tickets currently use page-level SEO:

```http
GET http://admin.worldtracktravel.com/api/seo/page/group-tickets
```

### Group Ticket Lookups

```http
GET http://admin.worldtracktravel.com/api/group-tickets/lookups
```

Use this for:

- durations
- departure dates
- airlines
- routes

## Group Umrah Packages

### Group Umrah Package Listing

```http
POST http://admin.worldtracktravel.com/api/group-umrah-packages/list
```

Use this endpoint with filters or with an empty body.

Request without filters:

```json
{}
```

Request with filters:

```json
{
  "filters": {
    "name": "umrah",
    "duration": [15, 21],
    "airlines": [1],
    "routes": [1],
    "nextPage": 1,
    "perPage": 12
  }
}
```

Response items include nullable `seo`. Use item `seo` for group Umrah package detail pages and page SEO for listing:

```http
GET http://admin.worldtracktravel.com/api/seo/page/group-umrah-packages
```

## Custom Umrah Packages

### Custom Umrah Package Listing

```http
POST http://admin.worldtracktravel.com/api/custom-umrah-packages/list
```

Use this endpoint with filters or with an empty body.

Request without filters:

```json
{}
```

Request with filters:

```json
{
  "filters": {
    "search": "vip",
    "name": "royal",
    "category": "5 Star",
    "duration": "12",
    "price_range": "under_500000",
    "package_rating": [5],
    "nextPage": 1,
    "perPage": 12
  }
}
```

Response items include nullable `seo`. Use item `seo` for custom Umrah package detail pages and page SEO for listing:

```http
GET http://admin.worldtracktravel.com/api/seo/page/custom-umrah-packages
```

### Custom Umrah Package Lookups

```http
GET http://admin.worldtracktravel.com/api/custom-umrah-packages/lookups
```

Use this for category/rating counts.

## Tours

### Tour Listing

```http
POST http://admin.worldtracktravel.com/api/tour/list
```

Use this endpoint with filters or with an empty body.

Request without filters:

```json
{}
```

Request with filters:

```json
{
  "filters": {
    "search": "dubai",
    "location": "Dubai",
    "city": "Dubai",
    "country": "UAE",
    "price_range": "under_100000",
    "rating": 4,
    "nextPage": 1,
    "perPage": 12
  }
}
```

Response items include nullable `seo`.

Example item:

```json
{
  "id": 1,
  "name": "Dubai City Tour",
  "city": "Dubai",
  "country": "UAE",
  "image": "http://admin.worldtracktravel.com/storage/tours/dubai-city-tour.webp",
  "image_alt_text": "Dubai city skyline tour",
  "price": 158000,
  "seo": {
    "seo_title": "Dubai City Tour",
    "meta_description": "Explore Dubai with guided sightseeing and transfers.",
    "url_slug": "dubai-city-tour",
    "canonical_url": "http://admin.worldtracktravel.com/tours/dubai-city-tour",
    "robots_index": "index",
    "robots_follow": "follow",
    "og_title": "Dubai City Tour",
    "og_description": "Explore Dubai with guided sightseeing and transfers.",
    "og_image": "http://admin.worldtracktravel.com/storage/tours/dubai-city-tour.webp",
    "schema_type": "TouristTrip",
    "custom_schema_json": {}
  }
}
```

For tour listing page metadata:

```http
GET http://admin.worldtracktravel.com/api/seo/page/tours
```

### Tour Lookups

```http
GET http://admin.worldtracktravel.com/api/tour/lookups
```

## Blogs

### Blog Listing

```http
POST http://admin.worldtracktravel.com/api/blog/list
```

Use this endpoint with filters or with an empty body.

Request without filters:

```json
{}
```

Request with filters:

```json
{
  "filters": {
    "search": "umrah",
    "category": "umrah",
    "nextPage": 1,
    "perPage": 12
  }
}
```

Response items include nullable `seo`. Use blog item `seo` for blog detail pages.

Example item:

```json
{
  "id": 1,
  "title": "Umrah Travel Guide",
  "category": "umrah",
  "image": "http://admin.worldtracktravel.com/storage/blogs/umrah-guide.webp",
  "image_alt_text": "Pilgrims visiting Makkah for Umrah",
  "seo": {
    "seo_title": "Umrah Travel Guide",
    "meta_description": "Read important travel tips for planning Umrah.",
    "url_slug": "umrah-travel-guide",
    "canonical_url": "http://admin.worldtracktravel.com/blogs/umrah-travel-guide",
    "robots_index": "index",
    "robots_follow": "follow",
    "og_title": "Umrah Travel Guide",
    "og_description": "Read important travel tips for planning Umrah.",
    "og_image": "http://admin.worldtracktravel.com/storage/blogs/umrah-guide.webp",
    "schema_type": "BlogPosting",
    "custom_schema_json": {}
  }
}
```

For blog listing page metadata:

```http
GET http://admin.worldtracktravel.com/api/seo/page/blogs
```

### Blog Lookups

```http
GET http://admin.worldtracktravel.com/api/blog/lookups
```

## Transport

### Transport Listing

```http
GET http://admin.worldtracktravel.com/api/transport/list
```

Use this to show the transport rate table/cards.

Response includes:

- `vehicle_types`: useful for table columns and vehicle display.
- `data`: route-based list with vehicle prices.
- `seo`: nullable SEO object on each vehicle/rate item when configured.

Example response shape:

```json
{
  "vehicle_types": [
    {
      "id": 1,
      "vehicle_type": "SEDAN",
      "vehicle_capacity": 4,
      "vehicle_images": [
        {
          "id": 2,
          "file": "http://admin.worldtracktravel.com/storage/vehicles/1_0.webp",
          "alt_text": "White sedan transfer vehicle"
        }
      ]
    }
  ],
  "data": [
    {
      "id": 1,
      "route": "Jeddah Airport - Makkah Hotel",
      "vehicles": [
        {
          "transport_rate_id": 1,
          "vehicle_type_id": 1,
          "vehicle_type": "SEDAN",
          "vehicle_capacity": 4,
          "price": 55,
          "price_formatted": "SAR 55",
          "vehicle_images": [],
          "seo": {
            "seo_title": "Jeddah Airport to Makkah Sedan Transfer",
            "meta_description": "Book sedan transfer from Jeddah Airport to Makkah hotel.",
            "url_slug": "jeddah-airport-to-makkah-sedan-transfer",
            "canonical_url": "http://admin.worldtracktravel.com/transport/jeddah-airport-to-makkah-sedan-transfer",
            "robots_index": "index",
            "robots_follow": "follow",
            "og_title": "Jeddah Airport to Makkah Sedan Transfer",
            "og_description": "Book sedan transfer from Jeddah Airport to Makkah hotel.",
            "og_image": "http://admin.worldtracktravel.com/storage/vehicles/1_0.webp",
            "schema_type": "Service",
            "custom_schema_json": {}
          }
        }
      ]
    }
  ],
  "response": true
}
```

For transport listing page metadata:

```http
GET http://admin.worldtracktravel.com/api/seo/page/transport
```

### Transport Master Lookups

```http
GET http://admin.worldtracktravel.com/api/transport/master/details
```

Includes:

- vehicle types
- transport routes

### Single Transport Rate

```http
POST http://admin.worldtracktravel.com/api/transport/rate
```

Request:

```json
{
  "route_id": 1,
  "vehicle_id": 1
}
```

Response includes transport rate details and nullable `seo`.

## Team

### Team Listing

```http
GET http://admin.worldtracktravel.com/api/team/list
```

Team listing currently uses page/global SEO only unless a dedicated team page SEO key is added later.

## Testimonials

### Testimonial Listing

```http
POST http://admin.worldtracktravel.com/api/testimonials/list
```

Use this endpoint with filters or with an empty body.

Request without filters:

```json
{}
```

Request with filters:

```json
{
  "filters": {
    "category": "Umrah Package"
  }
}
```

Testimonials currently use page/global SEO only.

## Contact Info

Use this for offices, hotlines, email, address, WhatsApp, and map coordinates.

```http
GET http://admin.worldtracktravel.com/api/admin/contact/info
```

For contact page metadata:

```http
GET http://admin.worldtracktravel.com/api/seo/page/contact-us
```

## Inquiry Lookups

Use this before rendering inquiry forms.

```http
GET http://admin.worldtracktravel.com/api/inquiry/lookups
```

Returns:

- sections
- services
- room types
- countries
- custom visa countries
- transport routes
- vehicles

### Inquiry Types

```http
GET http://admin.worldtracktravel.com/api/inquiry/types
```

## Submit Inquiry

Public endpoint. No login required.

```http
POST http://admin.worldtracktravel.com/api/inquiry/submit
```

Accepted inquiry types:

```text
hotel
visa
transport
umrah
tour
general
```

### General Inquiry

```json
{
  "type": "general",
  "name": "John Doe",
  "email": "john@example.com",
  "contact": "+923001234567",
  "service_category": "Umrah Packages & Visas",
  "message": "I need help planning an Umrah package."
}
```

### Hotel Inquiry

```json
{
  "type": "hotel",
  "checkin_date": "2026-10-15",
  "checkout_date": "2026-10-20",
  "adults": 2,
  "children": 1,
  "infants": 0,
  "room_type_id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "contact": "+923001234567",
  "message": "Need hotel near Haram."
}
```

### Visa Inquiry

```json
{
  "type": "visa",
  "country_name": "UAE",
  "name": "John Doe",
  "email": "john@example.com",
  "contact": "+923001234567",
  "message": "Need Dubai visa details."
}
```

### Transport Inquiry

```json
{
  "type": "transport",
  "route_id": 1,
  "vehicle_type_id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "contact": "+923001234567",
  "message": "Need transfer from Jeddah Airport to Makkah."
}
```

### Umrah Inquiry

```json
{
  "type": "umrah",
  "checkin_date": "2026-10-15",
  "checkout_date": "2026-10-30",
  "adults": 2,
  "children": 1,
  "infants": 0,
  "room_type_id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "contact": "+923001234567",
  "message": "Need custom Umrah package."
}
```

### Tour Inquiry

```json
{
  "type": "tour",
  "adults": 2,
  "children": 0,
  "infants": 0,
  "name": "John Doe",
  "email": "john@example.com",
  "contact": "+923001234567",
  "message": "Need help with Dubai tour."
}
```

Successful inquiry response:

```json
{
  "message": "Inquiry submitted successfully.",
  "data": {},
  "accepted_types": [
    "hotel",
    "visa",
    "transport",
    "umrah",
    "tour",
    "general"
  ],
  "response": true
}
```

## Additional Public Calculator Lookups

These are available without login for frontend dependent dropdowns:

```http
GET http://admin.worldtracktravel.com/api/calculator/visa/type
POST http://admin.worldtracktravel.com/api/calculator/hotel
POST http://admin.worldtracktravel.com/api/calculator/room
```

## Next.js SEO Integration Notes

- Use item-level `seo` for dynamic detail pages such as hotel detail, blog detail, tour detail, package detail, visa detail, and transport detail.
- Use `/seo/page/{page_key}` for listing/static pages such as `/hotels`, `/blogs`, `/tours`, `/transport`, `/visas`, `/about-us`, and `/contact-us`.
- Use `/seo/global` as the final fallback for missing item/page SEO.
- Render `canonical_url` as the canonical link.
- Render `robots_index` and `robots_follow` as the robots meta value, for example `index,follow`.
- Render `og_title`, `og_description`, and `og_image` in Open Graph and Twitter metadata.
- Parse `custom_schema_json` and render it in a `<script type="application/ld+json">` block.
- Use image `alt_text` / `image_alt_text` from API responses on frontend image tags.
- Use POST listing APIs when filters or pagination are needed.
- Use `filters.nextPage` for load more.
- Keep all previous filters when loading the next page.
- Use lookup endpoints to build filter sidebars/dropdowns.
- Do not send auth token for public display APIs.
- Do not call booking/payment/user profile APIs unless a login workflow is added later.
