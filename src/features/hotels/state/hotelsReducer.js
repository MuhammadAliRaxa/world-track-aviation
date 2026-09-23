export const initialHotelsState = {
  allHotels: [],
  activeFilter: 'All', // All | Singapore | Saudi Arabia | Dubai | Baku
  favorites: [],
  selectedHotelForBooking: null,
  isQuoteModalOpen: false,
  searchQuery: '',
};

export function hotelsReducer(state, action) {
  switch (action.type) {
    case 'SET_HOTELS':
      return {
        ...state,
        allHotels: action.payload,
      };

    case 'SET_FILTER':
      return {
        ...state,
        activeFilter: action.payload,
      };

    case 'TOGGLE_FAVORITE': {
      const hotelId = action.payload;
      const exists = state.favorites.includes(hotelId);
      return {
        ...state,
        favorites: exists
          ? state.favorites.filter((id) => id !== hotelId)
          : [...state.favorites, hotelId],
      };
    }

    case 'OPEN_BOOKING_MODAL':
      return {
        ...state,
        selectedHotelForBooking: action.payload,
      };

    case 'CLOSE_BOOKING_MODAL':
      return {
        ...state,
        selectedHotelForBooking: null,
      };

    case 'OPEN_QUOTE_MODAL':
      return {
        ...state,
        isQuoteModalOpen: true,
      };

    case 'CLOSE_QUOTE_MODAL':
      return {
        ...state,
        isQuoteModalOpen: false,
      };

    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      };

    default:
      throw new Error(`Unhandled action type in hotelsReducer: ${action.type}`);
  }
}
