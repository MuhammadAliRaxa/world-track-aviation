import React from 'react';
import { Minus, Plus } from 'lucide-react';

/**
 * Reusable Room Type selection popup with solid blue minus/plus buttons matching design.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the popup is visible
 * @param {Function} props.onClose - Callback to close popup
 * @param {Object} props.counts - { Double: number, Triple: number, Quad: number, Quint: number }
 * @param {Function} props.onUpdateCount - (type: string, delta: number) => void
 */
export function RoomTypePopup({
  isOpen,
  onClose,
  counts = {},
  onUpdateCount,
  roomTypes = [],
  allRoomTypes = null,
  availableRoomTypes = null,
  adultCount = 1,
  hotelName = '',
  isLoading = false,
}) {
  if (!isOpen) return null;

  const DEFAULT_ALL_TYPES = ['Double', 'Triple', 'Quad', 'Quint', 'Sharing'];

  // All room types to display (defaults to standard Umrah types + any additional API types)
  const displayTypes = React.useMemo(() => {
    if (Array.isArray(allRoomTypes) && allRoomTypes.length > 0) {
      return allRoomTypes;
    }
    const set = new Set(DEFAULT_ALL_TYPES);
    if (Array.isArray(availableRoomTypes)) {
      availableRoomTypes.forEach((t) => {
        if (t) set.add(t);
      });
    }
    if (Array.isArray(roomTypes) && roomTypes.length > 0) {
      roomTypes.forEach((t) => {
        if (t) set.add(t);
      });
    }
    return Array.from(set);
  }, [allRoomTypes, availableRoomTypes, roomTypes]);

  // Check if a specific room type is active from the API
  const isTypeActive = (roomType) => {
    // If availableRoomTypes is explicitly passed (e.g. from Custom Umrah)
    if (availableRoomTypes !== null && availableRoomTypes !== undefined) {
      if (!Array.isArray(availableRoomTypes) || availableRoomTypes.length === 0) {
        return false;
      }
      const clean = (s) => String(s || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
      const target = clean(roomType);
      return availableRoomTypes.some((item) => {
        const a = clean(item);
        return a === target || a.includes(target) || target.includes(a);
      });
    }
    // Backward compatibility: if only roomTypes array was passed
    if (Array.isArray(roomTypes) && roomTypes.length > 0) {
      const clean = (s) => String(s || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
      const target = clean(roomType);
      return roomTypes.some((item) => {
        const a = clean(item);
        return a === target || a.includes(target) || target.includes(a);
      });
    }
    return true;
  };

  // Capacity mapping helper
  const getCapacity = (type) => {
    const t = String(type || '').trim().toLowerCase();
    if (t === 'single' || t === 'sharing') return 1;
    if (t === 'double' || t === 'twin') return 2;
    if (t === 'triple') return 3;
    if (t === 'quad') return 4;
    if (t === 'quint') return 5;
    if (t.includes('single')) return 1;
    if (t.includes('double') || t.includes('twin')) return 2;
    if (t.includes('triple')) return 3;
    if (t.includes('quad')) return 4;
    if (t.includes('quint')) return 5;
    return 2;
  };

  const totalBeds = displayTypes.reduce((sum, r) => {
    const isActive = isTypeActive(r);
    const c = isActive ? Number(counts[r] || 0) : 0;
    return sum + c * getCapacity(r);
  }, 0);

  const isUnderCapacity = totalBeds < adultCount;

  return (
    <div
      style={{
        position: 'absolute',
        top: 'calc(100% + 6px)',
        right: 0,
        minWidth: '290px',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '18px 20px',
        boxShadow: '0 16px 36px -6px rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.06)',
        zIndex: 1200,
      }}
    >
      {/* Loading state */}
      {isLoading ? (
        <div style={{ padding: '16px 8px', textAlign: 'center', color: '#64748b', fontSize: '13px' }}>
          Loading hotel room types...
        </div>
      ) : !hotelName ? (
        <div style={{ padding: '16px 8px', textAlign: 'center', color: '#64748b', fontSize: '13px' }}>
          Please select a hotel first to view room types.
        </div>
      ) : (
        <>
          {/* Capacity Validation Status Banner */}
          <div
            style={{
              marginBottom: '14px',
              padding: '10px 12px',
              borderRadius: '10px',
              background: isUnderCapacity ? '#fffbeb' : '#ecfdf5',
              border: `1px solid ${isUnderCapacity ? '#fde68a' : '#a7f3d0'}`,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px',
                fontWeight: 700,
                color: isUnderCapacity ? '#92400e' : '#065f46',
              }}
            >
              <span>Adults: {adultCount}</span>
              <span>Beds: {totalBeds}</span>
            </div>
            <div
              style={{
                marginTop: '4px',
                fontSize: '11.5px',
                fontWeight: 500,
                color: isUnderCapacity ? '#b45309' : '#047857',
              }}
            >
              {isUnderCapacity
                ? `⚠️ Need ${adultCount - totalBeds} more bed${adultCount - totalBeds > 1 ? 's' : ''} to accommodate ${adultCount} adults.`
                : `✓ Accommodates all ${adultCount} adults (${totalBeds} beds).`}
            </div>
          </div>

          {displayTypes.map((room) => {
            const isActive = isTypeActive(room);
            const count = isActive ? (counts[room] ?? 0) : 0;
            const isAtMin = count <= 0;

            return (
              <div
                key={room}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 4px',
                  borderBottom: '1px solid #f8fafc',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '15px',
                      fontWeight: 500,
                      color: isActive ? '#0f172a' : '#64748b',
                    }}
                  >
                    {room}
                  </span>
                  {!isActive && (
                    <span
                      style={{
                        backgroundColor: '#fef2f2',
                        color: '#dc2626',
                        border: '1px solid #fecaca',
                        fontSize: '10px',
                        fontWeight: 700,
                        padding: '1.5px 7px',
                        borderRadius: '6px',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        lineHeight: 1.2,
                      }}
                    >
                      Sold
                    </span>
                  )}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Minus Button */}
                  <button
                    type="button"
                    onClick={() => isActive && onUpdateCount?.(room, -1)}
                    disabled={!isActive || isAtMin}
                    aria-label={`Decrease ${room}`}
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: isActive ? '#0073ff' : '#e2e8f0',
                      color: isActive ? '#ffffff' : '#94a3b8',
                      opacity: (!isActive || isAtMin) ? 0.35 : 1,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: (!isActive || isAtMin) ? 'not-allowed' : 'pointer',
                      padding: 0,
                      outline: 'none',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (isActive && !isAtMin) {
                        e.currentTarget.style.backgroundColor = '#005fe0';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (isActive && !isAtMin) {
                        e.currentTarget.style.backgroundColor = '#0073ff';
                      }
                    }}
                  >
                    <Minus size={12} strokeWidth={3} />
                  </button>

                  {/* Number in Middle */}
                  <span
                    style={{
                      minWidth: '20px',
                      textAlign: 'center',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: isActive ? '#0f172a' : '#94a3b8',
                      userSelect: 'none',
                    }}
                  >
                    {count}
                  </span>

                  {/* Plus Button */}
                  <button
                    type="button"
                    onClick={() => isActive && onUpdateCount?.(room, 1)}
                    disabled={!isActive}
                    aria-label={`Increase ${room}`}
                    title={!isActive ? 'This room type is sold out for this hotel' : `Add ${room}`}
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: isActive ? '#0073ff' : '#e2e8f0',
                      color: isActive ? '#ffffff' : '#94a3b8',
                      opacity: !isActive ? 0.35 : 1,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: !isActive ? 'not-allowed' : 'pointer',
                      padding: 0,
                      outline: 'none',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (isActive) {
                        e.currentTarget.style.backgroundColor = '#005fe0';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (isActive) {
                        e.currentTarget.style.backgroundColor = '#0073ff';
                      }
                    }}
                  >
                    <Plus size={12} strokeWidth={3} />
                  </button>
                </div>
              </div>
            );
          })}
        </>
      )}

      {/* Done Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <button
          type="button"
          onClick={onClose}
          style={{
            backgroundColor: '#0073ff',
            color: '#ffffff',
            fontSize: '13.5px',
            fontWeight: 600,
            padding: '8px 36px',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(0, 115, 255, 0.28)',
            transition: 'background-color 0.15s, transform 0.1s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#005fe0')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0073ff')}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default RoomTypePopup;
