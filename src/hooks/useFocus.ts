import React, { useCallback, useEffect, useRef, useState } from "react";

/**
 * Tracks the focus state of a DOM element.
 *
 * @template T - Element type (defaults to `HTMLElement`)
 * @returns A tuple `[ref, isFocused]` — attach `ref` to the target element
 *
 * @example
 * const [ref, focused] = useFocus<HTMLInputElement>();
 * <input ref={ref} className={focused ? "is-focused" : ""} />
 */
export const useFocus = <T extends HTMLElement = HTMLElement>(): [React.RefObject<T>, boolean] => {
    const ref = useRef<T>(null);
    const [focused, setFocused] = useState(false);

    const onFocus = useCallback(() => setFocused(true),  []);
    const onBlur  = useCallback(() => setFocused(false), []);

    useEffect(() => {
        const el = ref.current;
        if (!el) { return undefined; }

        el.addEventListener("focus", onFocus);
        el.addEventListener("blur",  onBlur);

        return () => {
            el.removeEventListener("focus", onFocus);
            el.removeEventListener("blur",  onBlur);
        };
    }, [onFocus, onBlur]);

    return [ref, focused];
};
