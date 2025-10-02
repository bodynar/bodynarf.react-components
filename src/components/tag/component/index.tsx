import { FC } from "react";

import { getClassName, isNotNullish, isNullish } from "@bodynarf/utils";

import { ElementColor, ElementSize } from "@bbr/types";
import { getElementColorClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";

import { TagProps } from "..";

import "./style.scss";

/** Single tag item */
const Tag: FC<TagProps> = ({
    content,
    size = ElementSize.Normal, style = ElementColor.Default,
    rounded = false, lightColor = false, customColor,

    onClick,
    className, title, data,
}) => {
    if (isNotNullish(customColor)) {
        style = ElementColor.Default;
    }

    const elClassName = getClassName([
        "bbr-tag",
        "tag",
        className,
        getElementColorClassName(style),
        isNotNullish(customColor) ? "bbr-tag--custom" : "",
        lightColor && isNullish(customColor) ? "is-light" : "",
        rounded ? "is-rounded" : "",
        getSizeClassName(size, ElementSize.Normal),
        isNullish(onClick) ? "" : "is-clickable",
    ]);

    const dataAttributes = isNullish(data)
        ? undefined
        : mapDataAttributes(data);

    return (
        <span
            title={title}
            onClick={onClick}
            {...dataAttributes}
            className={elClassName}

            style={isNullish(customColor)
                ? undefined
                : {
                    color: customColor?.color,
                    backgroundColor: customColor?.backgroundColor,
                }
            }
        >
            {content}
        </span>
    );
};

export default Tag;
