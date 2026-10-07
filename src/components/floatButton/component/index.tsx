import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { ElementSize, FloatPosition } from "@bbr/types";
import { getSizeClassName, mapDataAttributes } from "@bbr/utils";
import { ButtonStyle } from "@bbr/components/button";
import Icon from "@bbr/components/icon";

import "./style.scss";

import { FloatButtonProps } from "..";

/** Default corner the button is pinned to. */
const DEFAULT_POSITION: FloatPosition = "bottom-right";

/** Floating action button pinned to a screen corner. */
const FloatButton: FC<FloatButtonProps> = ({
    icon,
    caption,
    style = ButtonStyle.Primary,
    size = ElementSize.Normal,
    position = DEFAULT_POSITION,
    tooltip,
    onClick,

    className, title, data,
}) => {
    const elClassName = getClassName([
        "bbr-float-button",
        "button",
        `is-${style}`,
        getSizeClassName(size),
        `bbr-float-button--${position}`,
        caption ? "has-caption" : "",
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <button
            {...dataAttributes}

            type="button"
            onClick={onClick}
            className={elClassName}
            title={tooltip ?? title}
        >
            <Icon
                size={size}
                name={icon}
            />
            {caption
                ? <span className="bbr-float-button__caption">
{caption}
                  </span>
                : null
            }
        </button>
    );
};

export default FloatButton;
