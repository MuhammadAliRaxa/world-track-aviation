'use client';

import React, { useMemo } from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

export function Pagination({
  currentPage = 1,
  totalPages = 1,
  totalCount = 0,
  perPage = 12,
  isLoading = false,
  onPageChange,
  itemName = 'items',
  className = '',
  id,
}) {
  const current = Number(currentPage || 1);
  const total = Number(totalPages || 1);
  const count = Number(totalCount || 0);
  const limit = Number(perPage || 12);

  const pageNumbers = useMemo(() => {
    if (total <= 1) return [];
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    if (current <= 4) {
      return [1, 2, 3, 4, 5, '...', total];
    }
    if (current >= total - 3) {
      return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
    }
    return [1, '...', current - 1, current, current + 1, '...', total];
  }, [current, total]);

  if (total <= 1) return null;

  const startIndex = count > 0 ? (current - 1) * limit + 1 : 0;
  const endIndex = Math.min(current * limit, count);

  return (
    <div className={`gt-pagination-wrap ${className}`.trim()} id={id || 'pagination'}>
      <div className="gt-pagination-controls">
        {/* Previous / Left Button */}
        <button
          type="button"
          className="gt-page-nav-btn gt-page-nav-prev"
          onClick={() => onPageChange && onPageChange(current - 1)}
          disabled={current <= 1 || isLoading}
          aria-label="Previous Page"
        >
          <ChevronLeft size={16} />
          <span>Prev</span>
        </button>

        {/* Page Numbers */}
        <div className="gt-page-numbers">
          {pageNumbers.map((p, idx) =>
            p === '...' ? (
              <span key={`ellipsis-${idx}`} className="gt-page-ellipsis">
                …
              </span>
            ) : (
              <button
                key={`page-${p}`}
                type="button"
                className={`gt-page-num-btn${p === current ? ' gt-page-num-active' : ''}`}
                onClick={() => onPageChange && onPageChange(p)}
                disabled={isLoading}
                aria-current={p === current ? 'page' : undefined}
              >
                {p}
              </button>
            ),
          )}
        </div>

        {/* Next / Right Button */}
        <button
          type="button"
          className="gt-page-nav-btn gt-page-nav-next"
          onClick={() => onPageChange && onPageChange(current + 1)}
          disabled={current >= total || isLoading}
          aria-label="Next Page"
        >
          <span>Next</span>
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="gt-pagination-info">
        {isLoading ? (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Loader2 size={13} style={{ animation: 'spin 1s linear infinite' }} />
            Loading page...
          </span>
        ) : count > 0 ? (
          `Showing ${startIndex} – ${endIndex} of ${count} ${itemName} · Page ${current} of ${total}`
        ) : (
          `Page ${current} of ${total}`
        )}
      </div>
    </div>
  );
}

export default Pagination;
