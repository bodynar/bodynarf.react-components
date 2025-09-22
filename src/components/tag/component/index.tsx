import { FC } from "react";

import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

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
    if (!isNullOrUndefined(customColor)) {
        style = ElementColor.Default;
    }

    const elClassName = getClassName([
        "bbr-tag",
        "tag",
        className,
        getElementColorClassName(style),
        !isNullOrUndefined(customColor) ? "bbr-tag--custom" : "",
        lightColor && isNullOrUndefined(customColor) ? "is-light" : "",
        rounded ? "is-rounded" : "",
        getSizeClassName(size, ElementSize.Normal),
        isNullOrUndefined(onClick) ? "" : "bbr-tag--clickable",
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <span
            className={elClassName}
            style={isNullOrUndefined(customColor)
                ? undefined
                : {
                    color: customColor?.color,
                    backgroundColor: customColor?.backgroundColor,
                }
            }

            title={title}
            onClick={onClick}

            {...dataAttributes}
        >
            {content}
        </span>
    );
};

export default Tag;
