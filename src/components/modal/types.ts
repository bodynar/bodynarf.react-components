import { ReactNode } from "react";

import { ActionFn } from "@bodynarf/utils";

import { BaseElementProps, ElementSize } from "@bbr/types";
import { ButtonProps } from "@bbr/components/button";

/** Modal window component props */
export type ModalWrapperProps = BaseElementProps & {
    /**
     * Modal window content.
     * Can be plain `ReactNode` (legacy) or a combination of
     * `ModalWrapper.Header`, `ModalWrapper.Body` and `ModalWrapper.Footer` sub-components.
     */
    children: ReactNode;

    /**
     * Action buttons rendered in the footer (legacy API).
     * Ignored when `ModalWrapper.Footer` sub-component is present.
     * @default []
     */
    actions?: Array<ButtonProps>;

    /**
     * Modal window title rendered in the header (legacy API).
     * Ignored when `ModalWrapper.Header` sub-component is present.
     * If not provided and no sub-component header - header section is hidden.
     */
    title?: string;

    /**
     * Modal window size.
     * @default Normal
     */
    size?: ElementSize;

    /**
     * Show the built-in close (×) button in the header.
     * @default true
     */
    showCloseButton?: boolean;

    /**
     * Show the maximize / restore button next to the close button.
     * @default false
     */
    showMaximizeButton?: boolean;

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

/** ModalWrapper.Header sub-component props */
export type ModalWrapperHeaderProps = BaseElementProps & {
    /** Header content — title text, custom buttons, etc. */
    children: ReactNode;
};

/** ModalWrapper.Body sub-component props */
export type ModalWrapperBodyProps = BaseElementProps & {
    /** Body content */
    children: ReactNode;
};

/** ModalWrapper.Footer sub-component props */
export type ModalWrapperFooterProps = BaseElementProps & {
    /** Footer content — action buttons, etc. */
    children: ReactNode;
};
