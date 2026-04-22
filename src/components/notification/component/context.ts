import { createContext, useContext } from "react";

import { AddNotificationOptions, NotificationItem } from "../..";

/** Context value for the notification system */
export type NotificationContextValue = {
    /** All current notification items (read by container) */
    items: NotificationItem[];

    /** Add a new notification and receive its id */
    add: (options: AddNotificationOptions) => string;

    /** Remove a notification by id */
    remove: (id: string) => void;

    /** Remove all notifications */
    clear: () => void;
};

/** Context for the notification system */
export const NotificationContext = createContext<NotificationContextValue | null>(null);

/** Access the notification system. Must be used inside a `<NotificationProvider>`. */
export const useNotification = (): Omit<NotificationContextValue, "items"> => {
    const ctx = useContext(NotificationContext);

    if (ctx === null) {
        throw new Error("useNotification must be used inside <NotificationProvider>");
    }

    const { add, remove, clear } = ctx;

    return { add, remove, clear };
};
