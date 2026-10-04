/* eslint-disable react/destructuring-assignment */
import { ReactNode, useCallback, useState, FC } from "react";

import { isNullOrEmpty, isNotNullish, isNullish, getClassName } from "@bodynarf/utils";

import { ElementPosition } from "@bbr/types";
import { getSizeClassName, mapDataAttributes } from "@bbr/utils";
import { ButtonStyle } from "@bbr/components/button";
import Icon from "@bbr/components/icon";

import "./style.scss";

import { ToggleButtonProps } from "..";

/**
 * ToggleButton component.
 * Solid when active, outlined when inactive (if `outlined` is set)
 * @throws Caption is not defined and icon configuration is not defined at the same time
 */
const ToggleButton: FC<ToggleButtonProps> = (props) => {
    if (isNullOrEmpty(props.caption) && isNullish(props.icon)) {
        throw new Error("No button content provided.");
    }

    const {
        caption, icon,
        active: controlledActive,
        defaultActive = false,
        onToggle,
        style = ButtonStyle.Primary,
        size,
        outlined = false,
        rounded = false,
        disabled = false,

        className, title, data,
    } = props;

    const isControlled = isNotNullish(controlledActive);
    const [internalActive, setInternalActive] = useState<boolean>(defaultActive);

    const onClick = useCallback(() => {
        const next = !(isControlled ? controlledActive! : internalActive);

        if (!isControlled) {
            setInternalActive(next);
        }

        onToggle?.(next);
    }, [isControlled, controlledActive, internalActive, onToggle]);

    const isActive = isControlled ? controlledActive! : internalActive;

    const iconOnly = isNotNullish(icon) && isNullOrEmpty(caption);

    const elClassName = getClassName([
        "bbr-toggle-button",
        "button",
        className,
        `is-${style}`,
        getSizeClassName(size),
        isActive ? "is-active" : "",
        outlined && !isActive ? "is-outlined" : "",
        rounded ? "is-rounded" : "",
        iconOnly ? "bbr-toggle-button--icon-only" : "",
    ]);

    const dataAttributes = mapDataAttributes(data);

    let content: ReactNode = caption;

    if (isNotNullish(icon)) {
        const iconClassName = iconOnly
            ? icon.className
            : getClassName([
                icon.className,
                icon.position === ElementPosition.Right
                    ? "bbr-icon--right"
                    : "bbr-icon--left"
            ]);

        const iconElement = (
            <Icon
                {...icon}

                className={iconClassName}
            />
        );

        content = icon.position === ElementPosition.Right
            ? <>
                {caption}
                {iconElement}
              </>
            : <>
                {iconElement}
                {caption}
              </>;
    }

    return (
        <button
            {...dataAttributes}

            type="button"
            title={title}
            onClick={onClick}
            disabled={disabled}
            aria-pressed={isActive}
            className={elClassName}
        >
            {content}
        </button>
    );
};

export default ToggleButton;
