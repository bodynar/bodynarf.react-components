import { FC, useCallback } from "react";

import { getClassName, isNotNullish, isNullish } from "@bodynarf/utils";

import { ElementColor, ElementSize } from "@bbr/types";
import { getElementColorClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";

import { ChipProps } from "..";

import "./style.scss";

/** Single chip item */
const Chip: FC<ChipProps> = ({
    content,
    size = ElementSize.Normal, style = ElementColor.Default,
    rounded = false, lightColor = false, customColor,

    onClick, onRemove, removeLabel = "Remove",
    className, title, data,
}) => {
    if (isNotNullish(customColor)) {
        style = ElementColor.Default;
    }

    const elClassName = getClassName([
        "bbr-chip",
        "tag",
        className,
        getElementColorClassName(style),
        isNotNullish(customColor) ? "bbr-chip--custom" : "",
        lightColor && isNullish(customColor) ? "is-light" : "",
        rounded ? "is-rounded" : "",
        getSizeClassName(size, ElementSize.Normal),
        isNullish(onClick) ? "" : "is-clickable",
    ]);

    const onDeleteClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onRemove!();
    }, [onRemove]);

    return (
        <span
            {...mapDataAttributes(data)}

            title={title}
            onClick={onClick}
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
            {isNotNullish(onRemove) ? (
                <button
                    type="button"
                    onClick={onDeleteClick}
                    aria-label={removeLabel}
                    className="bbr-chip__delete delete is-small is-clickable"
                />
            ) : null}
        </span>
    );
};

export default Chip;
