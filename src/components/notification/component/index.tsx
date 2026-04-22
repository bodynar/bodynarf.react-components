/* eslint-disable react/prop-types */
import { FC, useContext } from "react";

import { getClassName } from "@bodynarf/utils";

import { ElementPosition } from "@bbr/types";

import "./style.scss";

import { NotificationContainerProps } from "..";

import { NotificationContext } from "./context";
import { NotificationProvider } from "./provider";

import NotificationEntry from "../components/entry";

/** Renders the stacked notification list at a fixed position on screen */
// eslint-disable-next-line custom/functional-component-definition
const NotificationContainer: FC<NotificationContainerProps> & {
    Provider: typeof NotificationProvider;
} = ({
    position = ElementPosition.Right,
    maxVisible = 5,
}) => {
        const ctx = useContext(NotificationContext);

        if (ctx === null) {
            return null;
        }

        const visibleItems = ctx.items.slice(0, maxVisible);

        const containerClassName = getClassName([
            "bbr-notification-container",
            position === ElementPosition.Right
                ? "bbr-notification-container--right"
                : "bbr-notification-container--left",
        ]);

        const handleClose = ctx.remove;

        return (
            <div className={containerClassName}>
                {visibleItems.map(item => (
                    <NotificationEntry

                        key={item.id}

                        item={item}
                        onClose={handleClose}

                    />
                ))}
            </div>
        );
    };

NotificationContainer.Provider = NotificationProvider;

export default NotificationContainer;
