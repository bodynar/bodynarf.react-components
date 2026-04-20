import { useCallback, useEffect, useState } from "react";

/** Return value of {@link useClipboard} */
export type UseClipboardResult = {
    /** `true` for `resetDelay` ms after a successful copy */
    copied: boolean;

    /** Copy `text` to the clipboard */
    copy: (text: string) => void;

    /** Manually reset the `copied` flag */
    reset: () => void;
};

/**
 * Copies text to the clipboard and tracks the "just copied" state.
 *
 * @param resetDelay - How long (ms) `copied` stays `true`. Default: `2000`
 * @returns `{ copy, copied, reset }`
 *
 * @example
 * const { copy, copied } = useClipboard();
 * <button onClick={() => copy(token)}>{copied ? "Copied!" : "Copy"}</button>
 */
export const useClipboard = (resetDelay = 2000): UseClipboardResult => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) { return undefined; }
        const id = setTimeout(() => setCopied(false), resetDelay);
        return () => clearTimeout(id);
    }, [copied, resetDelay]);

    const copy = useCallback((text: string) => {
        navigator.clipboard.writeText(text).then(() => setCopied(true));
    }, []);

    const reset = useCallback(() => setCopied(false), []);

    return { copy, copied, reset };
};
