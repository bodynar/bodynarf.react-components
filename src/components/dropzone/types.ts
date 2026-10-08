import { ReactElement, ReactNode } from "react";

import { BaseElementProps, DisableableElement, SizableElement, StylableElement } from "@bbr/types";

import type DropzoneAccept from "./components/accept";
import type DropzoneIdle from "./components/idle";
import type DropzoneReject from "./components/reject";

/** Possible dropzone visual states while the user is dragging files over it. */
export type DropzoneDragState = "idle" | "accept" | "reject";

/**
 * Dropzone component props.
 *
 * Renders a drag-and-drop area that collects files via native HTML5 DnD
 * or via a hidden `<input type="file">` opened on click.
 *
 * The content shown for each drag state can be customized with the
 * `Dropzone.Idle` / `Dropzone.Accept` / `Dropzone.Reject` slot components.
 */
export type DropzoneProps =
    & BaseElementProps
    & SizableElement
    & StylableElement
    & DisableableElement
    & {
        /**
         * Optional drag-state slots ({@link DropzoneIdleElement}, {@link DropzoneAcceptElement},
         * {@link DropzoneRejectElement}) that override the default content per state.
         */
        children?: DropzoneSlotElement | DropzoneSlotElement[];

        /**
         * File types\extensions allowed to be dropped or selected.
         * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/accept
         */
        accept?: string;

        /** Name of the underlying hidden file input (used as its id when omitted). */
        name?: string;

        /** Allow more than one file to be selected or dropped at once. */
        multiple?: boolean;

        /** Main text shown in the default content (when no slot overrides it). */
        text?: string;

        /** Secondary text shown under {@link DropzoneProps.text} in the default content. */
        description?: string;

        /**
         * Value change handler.
         * Called with the collected files whenever the user drops files
         * or picks them through the native file dialog.
         */
        onValueChange?: (files: File[]) => void;
    };

/** Props for the `Dropzone.Idle` slot — content rendered while nothing is being dragged. */
export type DropzoneIdleProps = {
    /** Content rendered when the dropzone is in the idle state. */
    children: ReactNode;
};

/** Props for the `Dropzone.Accept` slot — content rendered while accepted files are dragged over. */
export type DropzoneAcceptProps = {
    /** Content rendered when the dropzone is in the accept state. */
    children: ReactNode;
};

/** Props for the `Dropzone.Reject` slot — content rendered while rejected files are dragged over. */
export type DropzoneRejectProps = {
    /** Content rendered when the dropzone is in the reject state. */
    children: ReactNode;
};

/** Element rendered by the `Dropzone.Idle` slot. */
export type DropzoneIdleElement = ReactElement<DropzoneIdleProps, typeof DropzoneIdle>;

/** Element rendered by the `Dropzone.Accept` slot. */
export type DropzoneAcceptElement = ReactElement<DropzoneAcceptProps, typeof DropzoneAccept>;

/** Element rendered by the `Dropzone.Reject` slot. */
export type DropzoneRejectElement = ReactElement<DropzoneRejectProps, typeof DropzoneReject>;

/** Any of the `Dropzone` drag-state slot elements. */
export type DropzoneSlotElement =
    | DropzoneIdleElement
    | DropzoneAcceptElement
    | DropzoneRejectElement;
