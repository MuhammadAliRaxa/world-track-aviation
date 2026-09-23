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
  counts = { Double: 0, Triple: 0, Quad: 0, Quint: 0 },
  onUpdateCount,
}) {
  if (!isOpen) return null;

  const ROOM_TYPES = ['Double', 'Triple', 'Quad', 'Quint'];

  return (
    <div
      style={{
        position: 'absolute',
        top: 'calc(100% + 6px)',
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        padding: '20px 22px 18px 22px',
        boxShadow: '0 16px 36px -6px rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.06)',
        zIndex: 60,
      }}
    >
      {ROOM_TYPES.map((room) => {
        const count = counts[room] ?? 0;
        const isAtMin = count <= 0;

        return (
          <div
            key={room}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 4px',
            }}
          >
            <span
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: '#0f172a',
              }}
            >
              {room}
            </span>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Minus Button (Solid blue circle with white icon, matching design) */}
              <button
                type="button"
                onClick={() => onUpdateCount?.(room, -1)}
                disabled={isAtMin}
                aria-label={`Decrease ${room}`}
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: '#0073ff',
                  color: '#ffffff',
                  opacity: isAtMin ? 0.4 : 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: isAtMin ? 'not-allowed' : 'pointer',
                  padding: 0,
                  outline: 'none',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isAtMin) {
                    e.currentTarget.style.backgroundColor = '#005fe0';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isAtMin) {
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
                  color: '#0f172a',
                  userSelect: 'none',
                }}
              >
                {count}
              </span>

              {/* Plus Button (Solid blue circle with white icon) */}
              <button
                type="button"
                onClick={() => onUpdateCount?.(room, 1)}
                aria-label={`Increase ${room}`}
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: '#0073ff',
                  color: '#ffffff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  padding: 0,
                  outline: 'none',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#005fe0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0073ff';
                }}
              >
                <Plus size={12} strokeWidth={3} />
              </button>
            </div>
          </div>
        );
      })}

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
