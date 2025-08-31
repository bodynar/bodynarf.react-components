import { ActionFn } from "@bodynarf/utils";

/** Element with click event */
export type ClickableElement = {
    /** Click handler */
    onClick?: ActionFn;
};

