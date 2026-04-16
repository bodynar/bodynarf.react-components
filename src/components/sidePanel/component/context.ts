import { createContext, useContext } from "react";

import { ActionFn } from "@bodynarf/utils";

/** Internal context value shared between SidePanel and its sub-components */
export type SidePanelContextValue = {
    onClose: ActionFn;
};

/** React context instance for SidePanel internal state */
export const SidePanelContext = createContext<SidePanelContextValue | undefined>(undefined);

/**
 * Returns the nearest SidePanel context value.
 * Throws if called outside of a `<SidePanel />` tree.
 */
export const useSidePanelContext = (): SidePanelContextValue => {
    const ctx = useContext(SidePanelContext);

    if (ctx === undefined) {
        throw new Error("SidePanel sub-components must be used inside <SidePanel />");
    }

    return ctx;
};
