import { FC, ReactNode } from "react";

import { ActionFn } from "@bodynarf/utils";

/** Toast notification body props */
type ToastNotificationProps = {
    /** Notification content */
    children: ReactNode;

    /** Computed root class name */
    className: string;

    /** Mapped data-* attributes */
    dataAttributes: object;

    /** Show close button */
    closable: boolean;

    /** HTML title attribute */
    title?: string;

    /** Close button click handler */
    onClose: ActionFn;
};

/** Inner notification element */
const ToastNotification: FC<ToastNotificationProps> = ({
    children,
    className,
    title,
    dataAttributes,
    closable,
    onClose,
}) => {
    return (
        <div
            {...dataAttributes}

            title={title}
            className={className}
        >
            {closable === true && (
                <button
                    type="button"
                    onClick={onClose}
                    className="delete"
                />
            )}
            {children}
        </div>
    );
};

export default ToastNotification;
