'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { hotelsReducer, initialHotelsState } from './hotelsReducer';
import { hotelService } from '../../../services/hotel.service';

const HotelsStateContext = createContext(null);
const HotelsDispatchContext = createContext(null);

/**
 * HotelsProvider
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {Object[]} [props.initialHotels] — SSR-prefetched hotels from server component.
 */
export function HotelsProvider({ children, initialHotels = [] }) {
  const [state, dispatch] = useReducer(hotelsReducer, {
    ...initialHotelsState,
    allHotels: initialHotels.length > 0 ? initialHotels : initialHotelsState.allHotels,
  });

  useEffect(() => {
    // Skip fetch if server already supplied data
    if (initialHotels.length > 0) return;

    // Only auto-fetch client-side if on a route that displays hotel listings
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
    const isHotelRoute = ['/', '/hotels', '/our-hotels', '/hotels-map', '/hotels/map'].some(
      (path) => pathname === path || pathname.startsWith('/hotels/') || pathname.startsWith('/our-hotels/')
    );

    if (!isHotelRoute) return;

    hotelService.getHotels().then((hotels) => {
      if (hotels && hotels.length > 0) {
        dispatch({ type: 'SET_HOTELS', payload: hotels });
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HotelsStateContext.Provider value={state}>
      <HotelsDispatchContext.Provider value={dispatch}>
        {children}
      </HotelsDispatchContext.Provider>
    </HotelsStateContext.Provider>
  );
}

export function useHotelsState() {
  const context = useContext(HotelsStateContext);
  if (context === null) {
    throw new Error('useHotelsState must be used within a HotelsProvider');
  }
  return context;
}

export function useHotelsDispatch() {
  const context = useContext(HotelsDispatchContext);
  if (context === null) {
    throw new Error('useHotelsDispatch must be used within a HotelsProvider');
  }
  return context;
}
