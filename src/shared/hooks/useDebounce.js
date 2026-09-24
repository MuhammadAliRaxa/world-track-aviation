import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook to debounce any fast-changing value (e.g. search input, sliders, filter states).
 * @template T
 * @param {T} value - The input value to debounce
 * @param {number} delay - Delay in milliseconds (default 800ms)
 * @returns {T} - The debounced value
 */
export function useDebounce(value, delay = 800) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Custom hook to debounce a callback function (e.g. search submit, filter change handler).
 * @param {Function} callback - The callback function to debounce
 * @param {number} delay - Delay in milliseconds (default 800ms)
 * @returns {Function} - The debounced callback with .cancel() and .flush() methods
 */
export function useDebouncedCallback(callback, delay = 800) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debouncedFn = useCallback(
    (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [delay]
  );

  debouncedFn.cancel = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  debouncedFn.flush = (...args) => {
    debouncedFn.cancel();
    callbackRef.current(...args);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedFn;
}

/**
 * Standalone debounce utility for vanilla JS / handlers
 * @param {Function} fn - Function to debounce
 * @param {number} delay - Delay in milliseconds (default 800ms)
 * @returns {Function} - Debounced function with .cancel()
 */
export function debounce(fn, delay = 800) {
  let timeoutId = null;
  const debounced = function (...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
  debounced.cancel = () => {
    if (timeoutId) clearTimeout(timeoutId);
  };
  return debounced;
}

export default useDebounce;
