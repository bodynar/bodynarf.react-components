import { ReactNode } from "react";

import { ActionFn } from "@bodynarf/utils";

import { BaseElementProps, ElementColor } from "@bbr/types";

/** ConfirmDialog component props */
export type ConfirmDialogProps = BaseElementProps & {
    /** Whether the dialog is currently visible */
    visible: boolean;

    /**
     * Dialog title / heading.
     * @default "Are you sure?"
     */
    title?: string;

    /**
     * Descriptive text shown below the title.
     * Also accepts ReactNode for rich content.
     */
    message?: ReactNode;

    /**
     * Label for the confirm button.
     * @default "Confirm"
     */
    confirmLabel?: string;

    /**
     * Label for the cancel button.
     * @default "Cancel"
     */
    cancelLabel?: string;

    /**
     * Color of the confirm button.
     * @default ElementColor.Danger
     */
    confirmColor?: ElementColor;

    /**
     * When true, the confirm button shows a loading spinner.
     * Use this while an async `onConfirm` is in progress.
     * @default false
     */
    isLoading?: boolean;

    /**
     * Bootstrap icon name (without `bi-` prefix) shown next to the title.
     * @default "exclamation-triangle"
     */
    icon?: string;

    /**
     * When `true`, clicking the backdrop or pressing Escape does NOT close the dialog.
     * The user must interact with one of the buttons.
     * @default false
     */
    cancellable?: boolean;

    /** Called when the user clicks the confirm button */
    onConfirm: ActionFn;

    /** Called when the user clicks cancel, the overlay, or presses Escape */
    onCancel: ActionFn;
};
