import { FC, useCallback, useId, useRef, useState } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";

import { ElementPosition, ElementSize } from "@bbr/types";
import { getSizeClassName, mapDataAttributes, shouldOpenUpward } from "@bbr/utils";
import { useComponentOutsideClick } from "@bbr/hooks";
import Icon from "@bbr/components/icon";

import "./style.scss";

import { SplitButtonAction, SplitButtonProps } from "..";

import DropdownActionItem from "../components/dropdownActionItem";

/** Split button with dropdown of alternative actions */
const SplitButton: FC<SplitButtonProps> = ({
    style,
    caption,
    icon,
    size,
    light = false,
    outlined = false,
    rounded = false,
    isLoading = false,
    disabled = false,
    onClick,
    actions,
    hideOnOuterClick = true,

    className, title, data,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenUp, setIsOpenUp] = useState(false);
    const id = useId();
    const containerRef = useRef<HTMLDivElement>(null);

    const onToggleClick = useCallback(() => {
        if (disabled || isLoading) {
            return;
        }

        if (containerRef.current) {
            const openUp = shouldOpenUpward(containerRef.current, actions.length);
            setIsOpenUp(openUp);
        }

        setIsOpen(state => !state);
    }, [disabled, isLoading, actions.length]);

    const onActionClick = useCallback(
        (action: SplitButtonAction) => {
            action.onClick();
            setIsOpen(false);
        }, []
    );

    const onPrimaryClick = useCallback(() => {
        if (disabled || isLoading) {
            return;
        }

        onClick();
    }, [disabled, isLoading, onClick]);

    useComponentOutsideClick(
        `[data-split-button-id="${id}"]`, isOpen,
        () => setIsOpen(false),
        hideOnOuterClick,
    );

    const sizeClass = getSizeClassName(size);

    const buttonClassName = getClassName([
        "bbr-button",
        "button",
        `is-${style}`,
        light ? "is-light" : "",
        sizeClass,
        outlined ? "is-outlined" : "",
        rounded ? "is-rounded-left" : "",
        isLoading ? "is-loading" : "",
    ]);

    const toggleClassName = getClassName([
        "bbr-button",
        "button",
        "bbr-split-button__toggle",
        `is-${style}`,
        light ? "is-light" : "",
        sizeClass,
        outlined ? "is-outlined" : "",
        rounded ? "is-rounded-right" : "",
    ]);

    const containerClassName = getClassName([
        "bbr-split-button",
        className,
        isOpen ? "is-active" : "",
        isOpenUp ? "is-up" : "",
        "dropdown",
    ]);

    const dataAttributes = mapDataAttributes(data);

    const iconSize = size === ElementSize.Large
        ? ElementSize.Medium
        : size === ElementSize.Medium
            ? ElementSize.Normal
            : ElementSize.Small;

    return (
        <div
            {...dataAttributes}

            title={title}
            ref={containerRef}
            data-split-button-id={id}
            className={containerClassName}
        >
            <div className="bbr-split-button__buttons">
                <button
                    type="button"
                    disabled={disabled}
                    onClick={onPrimaryClick}
                    className={buttonClassName}
                >
                    {isNotNullish(icon) && icon.position !== ElementPosition.Right && (
                        <Icon
                            name={icon.name}
                            size={icon.size}
                            className={getClassName([icon.className, "bbr-icon--left"])}
                        />
                    )}

                    {caption}

                    {isNotNullish(icon) && icon.position === ElementPosition.Right && (
                        <Icon
                            name={icon.name}
                            size={icon.size}
                            className={getClassName([icon.className, "bbr-icon--right"])}
                        />
                    )}
                </button>
                <button
                    type="button"
                    disabled={disabled}
                    onClick={onToggleClick}
                    className={toggleClassName}
                >
                    <Icon
                        size={iconSize}
                        name="chevron-down"
                    />
                </button>
            </div>

            <div className="dropdown-menu bbr-split-button__menu">
                <div className="dropdown-content">
                    {actions.map((action: SplitButtonAction) => (
                        <DropdownActionItem
                            key={action.id}

                            action={action}
                            onClick={onActionClick}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SplitButton;
