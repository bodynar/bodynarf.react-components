import { FC } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";

import { ElementPosition } from "@bbr/types";
import Icon from "@bbr/components/icon";

import { SplitButtonAction } from "../..";

/** Props type of dropdown action item */
type DropdownActionItemProps = {
    /** Action item */
    action: SplitButtonAction;

    /** Click handler */
    onClick: (action: SplitButtonAction) => void;
};

/** Single action item in dropdown */
const DropdownActionItem: FC<DropdownActionItemProps> = ({
    action, onClick,
}) => {
    const onItemClick = () => {
        if (!action.disabled) {
            onClick(action);
        }
    };

    const className = getClassName([
        "bbr-split-button__item",
        "dropdown-item",
        action.disabled ? "bbr-split-button__item--disabled" : "",
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

export default DropdownActionItem;
