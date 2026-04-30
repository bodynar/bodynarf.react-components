import { FC, useCallback, useId, useRef, useState } from "react";

import { getClassName } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getSizeClassName, mapDataAttributes, shouldOpenUpward } from "@bbr/utils";
import { useComponentOutsideClick } from "@bbr/hooks";
import Icon from "@bbr/components/icon";

import "./style.scss";

import { MenuButtonAction, MenuButtonDivider, MenuButtonEntry, MenuButtonProps } from "..";

import MenuButtonItem from "../components/menuButtonItem";

/** Button that opens a dropdown list of actions, without a primary action */
const MenuButton: FC<MenuButtonProps> = ({
    style,
    actions,
    size,
    icon = "three-dots-vertical",
    light = false,
    outlined = false,
    rounded = false,
    disabled = false,
    hideOnOuterClick = true,

    className, title, data,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenUp, setIsOpenUp] = useState(false);
    const id = useId();
    const containerRef = useRef<HTMLDivElement>(null);

    const onToggleClick = useCallback(() => {
        if (disabled) {
            return;
        }

        if (containerRef.current) {
            const openUp = shouldOpenUpward(containerRef.current, actions.length);
            setIsOpenUp(openUp);
        }

        setIsOpen(state => !state);
    }, [disabled, actions.length]);

    const onActionClick = useCallback(
        (action: MenuButtonAction) => {
            action.onClick();
            setIsOpen(false);
        }, []
    );

    useComponentOutsideClick(
        `[data-menu-button-id="${id}"]`, isOpen,
        () => setIsOpen(false),
        hideOnOuterClick,
    );

    const sizeClass = getSizeClassName(size);

    const iconSize = size === ElementSize.Large
        ? ElementSize.Medium
        : size === ElementSize.Medium
            ? ElementSize.Normal
            : ElementSize.Small;

    const toggleClassName = getClassName([
        "bbr-button",
        "button",
        "bbr-menu-button__toggle",
        `is-${style}`,
        light ? "is-light" : "",
        sizeClass,
        outlined ? "is-outlined" : "",
        rounded ? "is-rounded" : "",
    ]);

    const containerClassName = getClassName([
        "bbr-menu-button",
        "dropdown",
        className,
        isOpen ? "is-active" : "",
        isOpenUp ? "is-up" : "",
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <div
            {...dataAttributes}

            title={title}
            ref={containerRef}
            data-menu-button-id={id}
            className={containerClassName}
        >
            <button
                type="button"
                disabled={disabled}
                onClick={onToggleClick}
                className={toggleClassName}
            >
                <Icon
                    name={icon}
                    size={iconSize}
                />
            </button>

            <div className="dropdown-menu bbr-menu-button__menu">
                <div className="dropdown-content">
                    {actions.map((entry: MenuButtonEntry) =>
                        isMenuButtonDivider(entry)
                            ? (
                                <hr
                                    key={entry.id}

                                    className="dropdown-divider"
                                />
                            )
                            : (
                                <MenuButtonItem
                                    key={entry.id}

                                    action={entry}
                                    onClick={onActionClick}
                                />
                            )
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenuButton;

/** Returns true if the entry is a divider */
const isMenuButtonDivider = (entry: MenuButtonEntry): entry is MenuButtonDivider =>
    (entry as MenuButtonDivider).type === "divider";
