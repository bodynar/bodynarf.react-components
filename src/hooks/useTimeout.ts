import { useEffect, useRef } from "react";

/**
 * Executes a callback after a specified delay.
 * Automatically clears timeout if delay changes or component unmounts.
 *
 * @param callback - Function to execute after delay
 * @param delay - Delay in milliseconds, or `null` to disable
 *
 * @example
 * useTimeout(() => console.log("Hello after 1s"), 1000);
 */
export const useTimeout = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (delay === null) return;
        const id = setTimeout(() => savedCallback.current(), delay);
        return () => clearTimeout(id);
    }, [delay]);
};
