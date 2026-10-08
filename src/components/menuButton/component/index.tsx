import { FC, useCallback, useRef, useState } from "react";

import { getClassName } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getSizeClassName, mapDataAttributes, shouldOpenUpward } from "@bbr/utils";
import Icon from "@bbr/components/icon";
import DropdownMenu, { DropdownMenuItem } from "@bbr/components/dropdownMenu";
import { PopoverPosition } from "@bbr/components/popover";

import "./style.scss";

import { MenuButtonDivider, MenuButtonEntry, MenuButtonProps } from "..";

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
    const [isOpenUp, setIsOpenUp] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const onMenuToggle = useCallback((next: boolean) => {
        if (next && containerRef.current) {
            setIsOpenUp(shouldOpenUpward(containerRef.current, actions.length));
        }
    }, [actions.length]);

    const menuItems: DropdownMenuItem[] = actions.map(entry =>
        isMenuButtonDivider(entry)
            ? { key: entry.id, type: "separator" }
            : {
                key: entry.id,
                label: entry.caption,
                icon: entry.icon,
                title: entry.title,
                disabled: entry.disabled,
                onClick: entry.onClick,
            }
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
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <div
            {...dataAttributes}

            title={title}
            ref={containerRef}
            className={containerClassName}
        >
            <DropdownMenu

                items={menuItems}
                disabled={disabled}

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
                            name={icon}
                            size={iconSize}
                        />
                    </button>
                }
            />
        </div>
    );
};

export default MenuButton;

/** Returns true if the entry is a divider */
const isMenuButtonDivider = (entry: MenuButtonEntry): entry is MenuButtonDivider =>
    (entry as MenuButtonDivider).type === "divider";
