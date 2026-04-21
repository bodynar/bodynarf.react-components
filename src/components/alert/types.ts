import { ReactNode } from "react";

import { ActionFn } from "@bodynarf/utils";

import { BaseElementProps, ElementColor } from "@bbr/types";

/** Alert component props */
export type AlertProps = BaseElementProps & {
    /** Alert body content */
    children: ReactNode;

    /**
     * Color variant.
     * @default ElementColor.Info
     */
    color?: ElementColor;

    /**
     * Optional header title displayed above the body.
     * When provided, renders a `.message-header` block.
     */
    header?: string;

    /**
     * Show a close (delete) button in the header.
     * Requires `header` to be set; otherwise the button is not rendered.
     * @default true
     */
    closable?: boolean;

    /**
     * Accessible label for the close button.
     * @default "close"
     */
    closeLabel?: string;

    /** Close button click handler */
    onClose?: ActionFn;
};
