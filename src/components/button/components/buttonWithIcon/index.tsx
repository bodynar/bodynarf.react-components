import { FC } from "react";

import { getClassName, isNullOrEmpty, isNullish } from "@bodynarf/utils";

import { ElementPosition } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";
import Icon from "@bbr/components/icon";

import { ButtonWithIconProps } from "../..";

/** Button with icon component */
const ButtonWithIcon: FC<ButtonWithIconProps> = ({
    className, disabled,
    onClick,
    caption, icon,

    title, data,
}) => {
    const iconClassName: string | undefined = isNullOrEmpty(caption)
        ? icon.className
        : getClassName([
            icon.className,
            icon.position === ElementPosition.Right
                ? "bbr-icon--right"
                : "bbr-icon--left"
        ]);

    className = isNullOrEmpty(caption)
        ? getClassName([className, "bbr-button--icon-only"])
        : className;

    const dataAttributes = isNullish(data)
        ? undefined
        : mapDataAttributes(data);

    if (icon.position === ElementPosition.Right) {
        return (
            <button
                type="button"
                title={title}
                onClick={onClick}
                disabled={disabled}
                {...dataAttributes}
                className={className}
            >
                {caption}

                <Icon
                    {...icon}
                    className={iconClassName}
                />
            </button>
        );
    }

    return (
        <button
            type="button"
            title={title}
            onClick={onClick}
            disabled={disabled}
            {...dataAttributes}
            className={className}
        >
            <Icon
                {...icon}
                className={iconClassName}
            />

            {caption}
        </button>
    );
};

export default ButtonWithIcon;
