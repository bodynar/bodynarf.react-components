import { ReactNode } from "react";

import { ActionFn } from "@bodynarf/utils";

import { BaseElementProps, ElementColor, ElementFloatPosition } from "@bbr/types";

/** Toast / Notification component props */
export type ToastProps = BaseElementProps & {
    /** Toast message content */
    children: ReactNode;

    /**
     * Color variant.
     * @default ElementColor.Default
     */
    color?: ElementColor;

    /**
     * Show close (delete) button.
     * @default true
     */
    closable?: boolean;

    /**
     * Horizontal position of the toast on screen.
     * Applied only when `fixed` is `true`.
     * @default ElementFloatPosition.Right
     */
    position?: ElementFloatPosition;

    /**
     * Render toast in a fixed position overlay (top corner of viewport).
     * @default false
     */
    fixed?: boolean;

    /**
     * Auto-close delay in milliseconds.
     * When set, calls `onClose` automatically after the specified duration.
     * Requires `onClose` to actually hide the toast (the parent controls visibility).
     */
    autoClose?: number;

    /** Close button click handler */
    onClose?: ActionFn;
};
