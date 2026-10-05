import { FC, useCallback, useRef, useState } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";

import { ElementPosition, ElementSize } from "@bbr/types";
import { getSizeClassName, mapDataAttributes, shouldOpenUpward } from "@bbr/utils";
import Icon from "@bbr/components/icon";
import DropdownMenu, { DropdownMenuItem } from "@bbr/components/dropdownMenu";
import { PopoverPosition } from "@bbr/components/popover";

import "./style.scss";

import { SplitButtonAction, SplitButtonProps } from "..";

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
    const [isOpenUp, setIsOpenUp] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const onMenuToggle = useCallback((next: boolean) => {
        if (next && containerRef.current) {
            setIsOpenUp(shouldOpenUpward(containerRef.current, actions.length));
        }
    }, [actions.length]);

    const onPrimaryClick = useCallback(() => {
        if (disabled || isLoading) {
            return;
        }

        onClick();
    }, [disabled, isLoading, onClick]);

    const menuItems: DropdownMenuItem[] = actions.map((action: SplitButtonAction) => ({
        key: action.id,
        label: action.caption,
        icon: action.icon,
        title: action.title,
        disabled: action.disabled,
        onClick: action.onClick,
    }) as DropdownMenuItem);

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

                <DropdownMenu

                    items={menuItems}
                    disabled={disabled || isLoading}

                    onToggle={onMenuToggle}
                    hideOnOuterClick={hideOnOuterClick}

                    position={isOpenUp ? PopoverPosition.Top : PopoverPosition.Bottom}

                    trigger={
                        <button
                            type="button"
                            disabled={disabled}
                            className={toggleClassName}
                        >
                            <Icon
                                size={iconSize}
                                name="chevron-down"
                            />
                        </button>
                    }
                />
            </div>
        </div>
    );
};

export default SplitButton;
