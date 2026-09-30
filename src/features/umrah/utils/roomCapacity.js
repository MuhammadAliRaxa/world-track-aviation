/**
 * Room capacity mapping and validation helpers based on adult traveler count
 */

export const ROOM_TYPE_CAPACITIES = {
  Single  : 1,
  Sharing : 1,
  Double  : 2,
  Twin    : 2,
  Triple  : 3,
  Quad    : 4,
  Quint   : 5,
};

/**
 * Returns the adult capacity of a single room of the given type.
 */
export function getRoomTypeCapacity(type) {
  if (!type) return 2;
  const t = String(type).trim();
  if (ROOM_TYPE_CAPACITIES[t]) return ROOM_TYPE_CAPACITIES[t];

  const lower = t.toLowerCase();
  if (lower.includes('single') || lower.includes('sharing') || lower.includes('1 bed')) return 1;
  if (lower.includes('double') || lower.includes('twin') || lower.includes('2 bed')) return 2;
  if (lower.includes('triple') || lower.includes('3 bed')) return 3;
  if (lower.includes('quad') || lower.includes('4 bed')) return 4;
  if (lower.includes('quint') || lower.includes('5 bed')) return 5;
  return 2;
}

/**
 * Calculates total bed capacity across all configured rooms.
 * @param {Object} counts - e.g. { Double: 1, Triple: 1 }
 * @returns {number} total beds
 */
export function calculateTotalBeds(counts = {}) {
  let total = 0;
  Object.entries(counts || {}).forEach(([rType, count]) => {
    const num = Number(count) || 0;
    if (num > 0) {
      total += num * getRoomTypeCapacity(rType);
    }
  });
  return total;
}

/**
 * Formats room selection into display labels and bed count.
 */
export function formatRoomSelection(counts = {}) {
  const labelParts = [];
  let totalBeds = 0;

  Object.entries(counts || {}).forEach(([type, count]) => {
    const num = Number(count) || 0;
    if (num > 0) {
      labelParts.push(`${num} ${type}`);
      totalBeds += num * getRoomTypeCapacity(type);
    }
  });

  const label = labelParts.join(', ') || '';
  const bedsText = totalBeds > 0 ? `(${totalBeds} Beds)` : '';
  return { label, bedsText, totalBeds };
}

/**
 * Automatically calculates an optimal room configuration that satisfies targetAdults
 * using ONLY the room types available from the hotel API.
 *
 * @param {string[]} availableTypes - e.g. ['Double', 'Triple']
 * @param {number} targetAdults - number of adult travelers
 * @returns {Object} room counts - e.g. { Double: 1, Triple: 1 }
 */
export function suggestOptimalRooms(availableTypes = [], targetAdults = 1) {
  if (!Array.isArray(availableTypes) || availableTypes.length === 0) return {};
  const adults = Math.max(1, Number(targetAdults) || 1);

  // Map each room type to its capacity and sort descending
  const sortedTypes = availableTypes
    .map((t) => ({ name: t, capacity: getRoomTypeCapacity(t) }))
    .sort((a, b) => b.capacity - a.capacity);

  const counts = {};
  availableTypes.forEach((t) => { counts[t] = 0; });

  // 1. Check for single room exact match (e.g. 5 adults and Quint exists -> 1 Quint)
  const exactMatch = sortedTypes.find((t) => t.capacity === adults);
  if (exactMatch) {
    counts[exactMatch.name] = 1;
    return counts;
  }

  // 2. Greedy allocation: pick largest room combinations
  let remaining = adults;
  for (let i = 0; i < sortedTypes.length; i++) {
    const { name, capacity } = sortedTypes[i];
    if (remaining <= 0) break;

    // Check if remaining adults match an available room type directly
    const directFit = sortedTypes.slice(i).find((t) => t.capacity === remaining);
    if (directFit) {
      counts[directFit.name] = (counts[directFit.name] || 0) + 1;
      remaining = 0;
      break;
    }

    const roomsCount = Math.floor(remaining / capacity);
    if (roomsCount > 0) {
      counts[name] = (counts[name] || 0) + roomsCount;
      remaining -= roomsCount * capacity;
    }
  }

  // 3. If there are still remaining unassigned adults, pick the best fitting room
  if (remaining > 0) {
    // Choose the smallest room type that can fit the remaining adults
    const suitableRoom =
      [...sortedTypes].reverse().find((t) => t.capacity >= remaining) ||
      sortedTypes[sortedTypes.length - 1];
    counts[suitableRoom.name] = (counts[suitableRoom.name] || 0) + 1;
  }

  return counts;
}

/**
 * Validates that all selected hotels have enough bed capacity for the traveling adults.
 */
export function validateHotelsCapacity(hotels = [], adultCount = 1) {
  for (let i = 0; i < hotels.length; i++) {
    const h = hotels[i];
    if (h.hotelName) {
      const beds = calculateTotalBeds(h.roomCounts);
      const hotelLabel = h.hotelName.split(' (')[0];
      const locLabel = h.location || `Hotel ${i + 1}`;

      if (beds === 0) {
        return {
          isValid: false,
          error: `Please select room type for "${hotelLabel}" in ${locLabel}.`,
          hotelId: h.id,
        };
      }

      if (beds < adultCount) {
        const diff = adultCount - beds;
        return {
          isValid: false,
          error: `"${hotelLabel}" (${locLabel}) has only ${beds} bed${beds > 1 ? 's' : ''} for ${adultCount} adults. Please select at least ${adultCount} beds (${diff} more needed).`,
          hotelId: h.id,
        };
      }
    }
  }

  return { isValid: true, error: null };
}
