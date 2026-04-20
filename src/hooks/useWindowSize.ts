import { useEffect, useState } from "react";

/** Window dimensions returned by {@link useWindowSize} */
export type WindowSize = {
    /** Current viewport width in pixels */
    width: number;

    /** Current viewport height in pixels */
    height: number;
};

/**
 * Reactively tracks the browser window dimensions.
 * Updates on every `resize` event.
 *
 * @returns `{ width, height }` of the current viewport
 *
 * @example
 * const { width } = useWindowSize();
 */
export const useWindowSize = (): WindowSize => {
    const [size, setSize] = useState<WindowSize>({
        width:  window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const onResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return size;
};
