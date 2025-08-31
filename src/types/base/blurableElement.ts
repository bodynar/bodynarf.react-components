import { ActionFn } from "@bodynarf/utils";

/** Element that have a blur event (focus out) */
export type BlurableElement = {
    /**
     * Blur component event handler
     */
    onBlur?: ActionFn;
};
