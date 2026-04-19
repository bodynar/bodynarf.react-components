import { ReactNode } from "react";

import { BaseElementProps, ElementColor } from "@bbr/types";

/** Badge component props */
export type BadgeProps = BaseElementProps & {
    /** The element(s) over which the badge is rendered */
    children: ReactNode;

    /**
     * Numeric value to display.
     * When provided, renders a numeric badge.
     * Mutually exclusive with `dot`.
     */
    value?: number;

    /**
     * When true, renders a small dot badge (no value displayed).
     * Mutually exclusive with `value`.
     * @default false
     */
    dot?: boolean;

    /**
     * Maximum value. When `value` exceeds this, displays `{max}+`.
     * @default 99
     */
    max?: number;

    /**
     * Color variant of the badge.
     * @default ElementColor.Danger
     */
    color?: ElementColor;

    /**
     * Hide the badge entirely.
     * Useful for toggling visibility without unmounting.
     * @default false
     */
    hidden?: boolean;
};
