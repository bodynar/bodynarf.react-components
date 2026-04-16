import { FC } from "react";

import { emptyFn, getClassName } from "@bodynarf/utils";

import { ElementColor, ElementPosition } from "@bbr/types";
import { getElementColorClassName, mapDataAttributes } from "@bbr/utils";
import { useTimeout } from "@bbr/hooks";

import "./style.scss";

import { ToastProps } from "..";
import ToastNotification from "../components/notification";
import ToastFixedContainer from "../components/fixedContainer";

/** Toast / Notification component */
const Toast: FC<ToastProps> = ({
    children,
    color = ElementColor.Default,
    closable = true,
    onClose = emptyFn,
    position = ElementPosition.Right,
    fixed = false,
    autoClose,

    className, title, data,
}) => {
    useTimeout(onClose, autoClose ?? null);

    const notificationClassName = getClassName([
        "bbr-toast",
        "notification",
        getElementColorClassName(color),
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    const notification = (
        <ToastNotification
            title={title}
            onClose={onClose}
            closable={closable}
            dataAttributes={dataAttributes}
            className={notificationClassName}
        >
            {children}
        </ToastNotification>
    );

    if (!fixed) {
        return notification;
    }

    const containerClassName = getClassName([
        "bbr-toast__container",
        position === ElementPosition.Right
            ? "bbr-toast__container--right"
            : "bbr-toast__container--left",
    ]);

    return (
        <ToastFixedContainer className={containerClassName}>
            {notification}
        </ToastFixedContainer>
    );
};

export default Toast;

