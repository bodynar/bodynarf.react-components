import { useEffect, useRef } from "react";

/**
 * Executes a callback repeatedly with a fixed time delay between calls.
 * Automatically clears interval if delay changes or component unmounts.
 *
 * @param callback - Function to execute at each interval
 * @param delay - Delay in milliseconds, or `null` to disable
 *
 * @example
 * useInterval(() => console.log("Tick"), 1000);
 */
export const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (delay === null) return;
        const id = setInterval(() => savedCallback.current(), delay);
        return () => clearInterval(id);
    }, [delay]);
};
