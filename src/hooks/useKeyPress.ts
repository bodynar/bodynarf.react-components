import { useEffect, useState } from "react";

/**
 * Tracks whether a specific keyboard key is currently held down.
 *
 * @param targetKey - The `KeyboardEvent.key` value to watch (e.g. `"Enter"`, `"Shift"`)
 * @returns `true` while the key is pressed, `false` otherwise
 *
 * @example
 * const shiftHeld = useKeyPress("Shift");
 */
export const useKeyPress = (targetKey: string): boolean => {
    const [pressed, setPressed] = useState(false);

    useEffect(() => {
        const onDown = (e: KeyboardEvent) => { if (e.key === targetKey) { setPressed(true); } };
        const onUp   = (e: KeyboardEvent) => { if (e.key === targetKey) { setPressed(false); } };

        window.addEventListener("keydown", onDown);
        window.addEventListener("keyup",   onUp);

        return () => {
            window.removeEventListener("keydown", onDown);
            window.removeEventListener("keyup",   onUp);
        };
    }, [targetKey]);

    return pressed;
};
