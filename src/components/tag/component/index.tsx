import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";
import { ElementColor, ElementSize } from "@bbr/components";
import { TagProps } from "@bbr/components/tag";

import "./style.scss";

/** Single tag item */
const Tag = ({
    content,
    size = ElementSize.Normal,
    style = ElementColor.Default,
    rounded = false, lightColor = false, customColor,
    onClick,

    className, title, data,
}: TagProps): JSX.Element => {
    if (!isNullOrUndefined(customColor)) {
        style = ElementColor.Default;
    }

    const elClassName = getClassName([
        "bbr-tag",
        "tag",
        className,
        style === ElementColor.Default ? "" : `is-${style}`,
        !isNullOrUndefined(customColor) ? "bbr-tag--custom" : "",
        lightColor && isNullOrUndefined(customColor) ? "is-light" : "",
        rounded ? "is-rounded" : "",
        size === ElementSize.Normal || size === ElementSize.Small ? "" : `is-${size}`,
        isNullOrUndefined(onClick) ? "" : "bbr-tag--clickable",
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <span
            onClick={onClick}
            className={elClassName}
            style={isNullOrUndefined(customColor)
                ? undefined
                : {
                    color: customColor?.color,
                    backgroundColor: customColor?.backgroundColor,
                }
            }

            title={title}
            {...dataAttributes}
        >
            {content}
        </span>
    );
};

export default Tag;
