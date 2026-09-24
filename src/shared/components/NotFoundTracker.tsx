'use client';

import { useEffect, useRef } from 'react';
import { seoService } from '@/services/seo.service';

export default function NotFoundTracker() {
  const loggedRef = useRef(false);

  useEffect(() => {
    if (loggedRef.current || typeof window === 'undefined') return;
    loggedRef.current = true;

    try {
      const payload = {
        url: window.location.href,
        path: window.location.pathname,
        referrer: document.referrer || '',
        timestamp: new Date().toISOString(),
      };

      // Attempt to send beacon if available for fast asynchronous delivery
      const endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL || 'https://admin.worldtracktravel.com/api'}/seo/404-log`;
      if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(endpoint, blob);
      } else {
        seoService.log404(payload).catch(() => {});
      }
    } catch {
      // Non-blocking
    }
  }, []);

  return null;
}
