import { FC } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";

import { ElementPosition } from "@bbr/types";
import Icon from "@bbr/components/icon";

import { MenuButtonAction } from "../..";

/** Props type of menu button action item */
type MenuButtonItemProps = {
    /** Action item */
    action: MenuButtonAction;

    /** Click handler */
    onClick: (action: MenuButtonAction) => void;
};

/** Single action item in MenuButton dropdown */
const MenuButtonItem: FC<MenuButtonItemProps> = ({
    action, onClick,
}) => {
    const onItemClick = () => {
        if (!action.disabled) {
            onClick(action);
        }
    };

    const className = getClassName([
        "bbr-menu-button__item",
        "dropdown-item",
        action.disabled ? "bbr-menu-button__item--disabled" : "",
    ]);

    if (isNotNullish(action.icon)) {
        const icon = action.icon;

        const iconClassName = getClassName([
            icon.className,
            icon.position === ElementPosition.Right
                ? "bbr-icon--right"
                : "bbr-icon--left",
        ]);

        if (icon.position === ElementPosition.Right) {
            return (
                <a
                    title={action.title}
                    className={className}
                    onClick={onItemClick}
                >
                    {action.caption}
                    <Icon
                        name={icon.name}
                        size={icon.size}
                        className={iconClassName}
                    />
                </a>
            );
        }

        return (
            <a
                title={action.title}
                className={className}
                onClick={onItemClick}
            >
                <Icon
                    name={icon.name}
                    size={icon.size}
                    className={iconClassName}
                />
                {action.caption}
            </a>
        );
    }

    return (
        <a
            title={action.title}
            className={className}
            onClick={onItemClick}
        >
            {action.caption}
        </a>
    );
};

export default MenuButtonItem;
