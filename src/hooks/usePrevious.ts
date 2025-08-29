import { useEffect, useRef } from "react";

/**
 * Stores and returns the previous value of a state or prop.
 *
 * @template T - Type of the stored value
 * @param value - The current value
 * @returns The previous value or `undefined` on the first render
 *
 * @example
 * const prevCount = usePrevious(count);
 */
export const usePrevious = <T>(value: T): T | undefined => {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
};
