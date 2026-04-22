import { FC, ReactNode, useCallback, useMemo, useState } from "react";

import { NotificationItem, AddNotificationOptions } from "../..";
import { NotificationContext } from "./context";

let notifCounter = 0;

const genId = () => `bbr-notif-${++notifCounter}-${Date.now()}`;

/** Provides the notification queue to descendant components */
const NotificationProvider: FC<{ children: ReactNode; }> = ({ children }) => {
    const [items, setItems] = useState<NotificationItem[]>([]);

    const remove = useCallback((id: string) => {
        setItems(prev => prev.filter(n => n.id !== id));
    }, []);

    const add = useCallback((options: AddNotificationOptions): string => {
        const id = genId();

        setItems(prev => [{ ...options, id }, ...prev]);

        return id;
    }, []);

    const clear = useCallback(() => {
        setItems([]);
    }, []);

    const contextValue = useMemo(
        () => ({ items, add, remove, clear }),
        [items, add, remove, clear],
    );

    return (
        <NotificationContext.Provider value={contextValue}>
            {children}
        </NotificationContext.Provider>
    );
};

export { NotificationProvider };
export { NotificationContext };
