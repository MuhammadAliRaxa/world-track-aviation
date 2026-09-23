# Umrah Package API Rename Handoff

This file explains the latest Umrah package naming and endpoint changes for the React + Next.js frontend.

Base API URL:

```text
http://admin.worldtracktravel.com/api
```

Production API URL:

```text
https://admin.worldtracktravel.com/api
```

## Module Naming

Use these names going forward:

| Frontend Area | Current Meaning | Use This API / SEO Key |
| --- | --- | --- |
| Umrah Package | Public website package listing/cards with Makkah/Madina hotel, image, price, category, duration, SEO content | `/umrah-packages`, `umrah-packages` |
| Custom Umrah Package | Calculator/booking style package flow that was previously using `UmrahPackage` internally | `/custom-umrah`, `custom-umrah-packages` |
| Group Umrah Package | Group ticket based Umrah package | `/group-umrah-packages`, `group-umrah-packages` |

## Important Endpoint Changes

### Umrah Package Listing

Use this for the public frontend Umrah package listing page.

```http
POST https://admin.worldtracktravel.com/api/umrah-packages/list
```

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

Also supported:

```http
GET https://admin.worldtracktravel.com/api/umrah-packages
POST https://admin.worldtracktravel.com/api/umrah-packages
```

### Umrah Package Lookups

Use this for category/rating counts.

```http
GET https://admin.worldtracktravel.com/api/umrah-packages/lookups
```

### Umrah Package SEO

Use this for the Umrah Package listing page metadata.

```http
GET https://admin.worldtracktravel.com/api/seo/page/umrah-packages
```

### Custom Umrah Package SEO

Use this only for the custom calculator/booking package flow.

```http
GET https://admin.worldtracktravel.com/api/seo/page/custom-umrah-packages
```

## SEO Implementation Guidance

For Next.js metadata:

1. Use item-level `seo` from listing/detail API responses when available.
2. Use page SEO as fallback:
   - Umrah Package listing: `/seo/page/umrah-packages`
   - Group Umrah Package listing: `/seo/page/group-umrah-packages`
3. Use global SEO as final fallback:

```http
GET https://admin.worldtracktravel.com/api/seo/global
```

## Summary For Frontend Developer

- Public package listing page must use `/api/umrah-packages/list`.
- Public package listing SEO must use `/api/seo/page/umrah-packages`.
