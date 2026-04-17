import { createContext, useContext } from "react";

/** Internal context value shared between ModalWrapper and its sub-components */
export type ModalWrapperContextValue = {
    /** Closes the modal */
    onClose: () => void;
};

/** React context instance for ModalWrapper internal state */
export const ModalWrapperContext = createContext<ModalWrapperContextValue | undefined>(undefined);

/**
 * Returns the nearest ModalWrapper context value.
 * Throws if called outside of a `<ModalWrapper />` tree.
 */
export const useModalWrapperContext = (): ModalWrapperContextValue => {
    const ctx = useContext(ModalWrapperContext);

    if (ctx === undefined) {
        throw new Error("ModalWrapper sub-components must be used inside <ModalWrapper />");
    }

    return ctx;
};
