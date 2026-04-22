import { useEffect, useState } from "react";

/**
 * Returns a debounced copy of `value` that only updates after
 * the specified `delay` has elapsed without a new value arriving.
 *
 * @template T - Type of the value
 * @param value - The value to debounce
 * @param delay - Delay in milliseconds
 * @returns The debounced value
 *
 * @example
 * const debouncedSearch = useDebounce(searchText, 300);
 */
export const useDebounce = <T>(value: T, delay: number): T => {
    const [debounced, setDebounced] = useState<T>(value);

    useEffect(() => {
        const id = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(id);
    }, [value, delay]);

    return debounced;
};
