import { FC, useCallback } from "react";

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

    onClick, onRemove,
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

    const sizeClass = getSizeClassName(size, ElementSize.Normal);

    const onDeleteClick = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation();
        onRemove!();
    }, [onRemove]);

    if (isNullish(onRemove)) {
        return (
            <TagSpan
                data={data}
                title={title}
                content={content}
                onClick={onClick}
                className={elClassName}
                customColor={customColor}
            />
        );
    }

    return (
        <div className="tags has-addons">
            <TagSpan
                data={data}
                title={title}
                content={content}
                onClick={onClick}
                className={elClassName}
                customColor={customColor}
            />
            <span
                role="button"
                onClick={onDeleteClick}
                className={getClassName(["tag", "is-delete", "is-clickable", sizeClass])}
            />
        </div>
    );
};

export default Tag;

/** Props for the {@link TagSpan} component */
type TagSpanProps =
    & Pick<TagProps,
        | "title" | "customColor"
        | "content" | "onClick"
        | "className" | "data"
    >;

const TagSpan: FC<TagSpanProps> = ({
    title, content, onClick, className, data, customColor
}) => (
    <span
        {...mapDataAttributes(data)}

        title={title}
        onClick={onClick}
        className={className}
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
