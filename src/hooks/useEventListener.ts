import { useEffect, useRef } from "react";

/**
 * Attaches an event listener to a given element (default: window).
 *
 * @template K - Event type
 * @param event - Event name (e.g. "click", "keydown")
 * @param handler - Callback to handle the event
 * @param element - Target element (default: window)
 *
 * @example
 * useEventListener("resize", () => console.log("Resized"));
 */
export const useEventListener = <K extends keyof WindowEventMap>(
    event: K,
    handler: (e: WindowEventMap[K]) => void,
    element: Window | Document | HTMLElement = window
) => {
    const savedHandler = useRef(handler);

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const eventListener = (e: Event) => savedHandler.current(e as any);
        element.addEventListener(event, eventListener);
        return () => element.removeEventListener(event, eventListener);
    }, [event, element]);
};
