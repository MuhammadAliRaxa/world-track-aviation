import { useMemo, useCallback } from 'react';
import { useHotelsState, useHotelsDispatch } from '../state/HotelsContext';

export function useHotels() {
  const state = useHotelsState();
  const dispatch = useHotelsDispatch();

  const setFilter = useCallback((filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  }, [dispatch]);

  const toggleFavorite = useCallback((hotelId) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: hotelId });
  }, [dispatch]);

  const openBooking = useCallback((hotel) => {
    dispatch({ type: 'OPEN_BOOKING_MODAL', payload: hotel });
  }, [dispatch]);

  const closeBooking = useCallback(() => {
    dispatch({ type: 'CLOSE_BOOKING_MODAL' });
  }, [dispatch]);

  const openQuoteModal = useCallback(() => {
    dispatch({ type: 'OPEN_QUOTE_MODAL' });
  }, [dispatch]);

  const closeQuoteModal = useCallback(() => {
    dispatch({ type: 'CLOSE_QUOTE_MODAL' });
  }, [dispatch]);

  // Derived filtered hotels
  const filteredHotels = useMemo(() => {
    if (state.activeFilter === 'All') {
      return state.allHotels;
    }
    return state.allHotels.filter(
      (h) => h.category.toLowerCase() === state.activeFilter.toLowerCase()
    );
  }, [state.allHotels, state.activeFilter]);

  return {
    hotels: filteredHotels,
    allHotels: state.allHotels,
    activeFilter: state.activeFilter,
    favorites: state.favorites,
    selectedHotelForBooking: state.selectedHotelForBooking,
    isQuoteModalOpen: state.isQuoteModalOpen,
    setFilter,
    toggleFavorite,
    openBooking,
    closeBooking,
    openQuoteModal,
    closeQuoteModal,
  };
}
