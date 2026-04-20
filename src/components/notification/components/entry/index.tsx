import { FC, useEffect, useRef } from "react";

import { getClassName } from "@bodynarf/utils";

import { ElementColor } from "@bbr/types";
import { getElementColorClassName } from "@bbr/utils";

import { NotificationItem } from "../..";

/** Props for the {@link NotificationEntry} component */
type NotificationEntryProps = {
    item: NotificationItem;
    onClose: (id: string) => void;
};

/** A single notification toast entry */
const NotificationEntry: FC<NotificationEntryProps> = ({ item, onClose }) => {
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (!item.autoClose) {
            return undefined;
        }

        timerRef.current = setTimeout(() => onClose(item.id), item.autoClose);

        return () => {
            if (timerRef.current !== null) {
                clearTimeout(timerRef.current);
            }
        };
    }, [item.id, item.autoClose, onClose]);

    const notificationClassName = getClassName([
        "bbr-notification-entry",
        "notification",
        getElementColorClassName(item.color ?? ElementColor.Default),
    ]);

    const handleClose = () => onClose(item.id);

    return (
        <div className={notificationClassName}>
            {(item.closable ?? true)
                ? (
                    <button
                        type="button"
                        className="delete"
                        aria-label="Dismiss"
                        onClick={handleClose}
                    />
                )
                : null}
            {item.content}
        </div>
    );
};

export default NotificationEntry;
