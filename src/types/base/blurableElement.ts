import { FocusEventHandler } from "react";

/** Element that have a blur event (focus out) */
export type BlurableElement = {
    /**
     * Blur component event handler
     * @param event Focus event from the blurred element
     */
    onBlur?: FocusEventHandler<HTMLElement>;
};
