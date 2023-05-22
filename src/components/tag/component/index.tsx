import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { ElementColor, ElementSize } from "@bbr/components";
import { TagProps } from "@bbr/components/tag";

import "./style.scss";

/** Single tag item */
const Tag = ({
    content,
    size, style, rounded, lightColor, customColor,
    onClick,

    className, title,
}: TagProps): JSX.Element => {

    size ??= ElementSize.Normal;
    style ??= ElementColor.Default;

    if (!isNullOrUndefined(customColor)) {
        style = ElementColor.Default;
    }

    const elClassName = getClassName([
        "bbr-tag",
        "tag",
        style === ElementColor.Default ? "" : `is-${style}`,
        !isNullOrUndefined(customColor) ? "bbr-tag--custom" : "",
        lightColor === true && isNullOrUndefined(customColor) ? "is-light" : "",
        rounded === true ? "is-rounded" : "",
        size === ElementSize.Normal || size === ElementSize.Small ? "" : `is-${size}`,
        isNullOrUndefined(onClick) ? "" : "bbr-tag--clickable",
        className,
    ]);

    return (
        <span
            className={elClassName}
            onClick={onClick}
            title={title}
            color={customColor?.color}
            style={{
                color: customColor?.color,
                backgroundColor: customColor?.backgroundColor,
            }}
        >
            {content}
        </span>
    );
};

export default Tag;
