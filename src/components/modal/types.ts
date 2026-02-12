import { ReactNode } from "react";

import { ActionFn } from "@bodynarf/utils";

import { BaseElementProps, ElementSize } from "@bbr/types";
import { ButtonProps } from "@bbr/components/button";

/** Modal window component props */
export type ModalWrapperProps = BaseElementProps & {
    /** Modal window body content */
    children: ReactNode;

    /** Action buttons in the footer */
    actions: Array<ButtonProps>;

    /**
     * Modal window title.
     * If not provided - header will not be displayed
     */
    title?: string;

    /**
     * Modal window size.
     * @default Normal
     */
    size?: ElementSize;

    /**
     * Show close button in the header.
     * @default true
     */
    showCloseButton?: boolean;

    /**
     * Close modal when clicking on background overlay.
     * @default true
     */
    closeOnBackgroundClick?: boolean;

    /**
     * Close modal on Escape key press.
     * @default true
     */
    closeOnEscape?: boolean;

    /** Close button click handler */
    onCloseClick: ActionFn;

    /**
     * Handler for Enter key press.
     * If not provided - Enter key will not be handled
     */
    onEnterPress?: ActionFn;
};
