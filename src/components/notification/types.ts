import { ReactNode } from "react";

import { ElementColor, ElementFloatPosition } from "@bbr/types";

/** A single notification entry */
export type NotificationItem = {
    /** Unique identifier (auto-generated when using `useNotification`) */
    id: string;

    /** Notification content */
    content: ReactNode;

    /**
     * Color variant.
     * @default ElementColor.Default
     */
    color?: ElementColor;

    /**
     * Auto-close delay in milliseconds.
     * When omitted the notification stays until manually dismissed.
     */
    autoClose?: number;

    /**
     * Show the close button.
     * @default true
     */
    closable?: boolean;

    /**
     * Accessible label for the dismiss button.
     * @default "Dismiss"
     */
    dismissLabel?: string;
};

/** Options for adding a notification */
export type AddNotificationOptions = Omit<NotificationItem, "id">;

/** NotificationContainer component props */
export type NotificationContainerProps = {
    /**
     * Horizontal position of the stack on screen.
     * @default ElementFloatPosition.Right
     */
    position?: ElementFloatPosition;

    /**
     * Maximum number of notifications visible at once.
     * Older notifications are removed when the limit is exceeded.
     * @default 5
     */
    maxVisible?: number;
};
