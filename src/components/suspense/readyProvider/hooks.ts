import { useContext } from "react";

import { SuspenseReadyContext } from "./context";

/** Hook to access suspense ready state */
export const useSuspenseReady = () => useContext(SuspenseReadyContext);
