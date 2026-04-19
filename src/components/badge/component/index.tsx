import { FC } from "react";

import { getClassName, isNullish } from "@bodynarf/utils";

import { ElementColor } from "@bbr/types";
import { getElementColorClassName, mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { BadgeProps } from "..";

/** Overlay badge rendered on top-right of its child element */
const Badge: FC<BadgeProps> = ({
    children,
    value,
    dot = false,
    max = 99,
    color = ElementColor.Danger,
    hidden = false,

    className, title, data,
}) => {
    const dataAttributes = mapDataAttributes(data);

    const wrapperClassName = getClassName([
        "bbr-badge",
        className,
    ]);

    const badgeClassName = getClassName([
        "bbr-badge__indicator",
        getElementColorClassName(color),
        dot ? "bbr-badge__indicator--dot" : "",
        hidden ? "bbr-badge__indicator--hidden" : "",
    ]);

    const displayValue = isNullish(value)
        ? undefined
        : value > max
            ? `${max}+`
            : String(value);

    return (
        <div

            {...dataAttributes}

            title={title}
            className={wrapperClassName}

        >
            {children}
            {!hidden && (
                <span className={badgeClassName}>
                    {!dot && displayValue}
                </span>
            )}
        </div>
    );
};

export default Badge;
