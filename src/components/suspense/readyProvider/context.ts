import { createContext } from "react";

/** Suspense ready state context */
export const SuspenseReadyContext = createContext<{
    /** Whether suspense has resolved */
    isReady: boolean;
    /** Set ready state */
    setReady: (ready: boolean) => void;
}>({
    isReady: false,
    setReady: () => { },
});
