import { FC, KeyboardEvent, ReactNode, useCallback, useState } from "react";

import { getClassName } from "@bodynarf/utils";

import Icon from "@bbr/components/icon";
import Popover, { PopoverPosition } from "@bbr/components/popover";

import "./style.scss";

import { DropdownMenuItem, DropdownMenuProps } from "..";

/** Dropdown menu — popover based list of actions */
const DropdownMenu: FC<DropdownMenuProps> = ({
    items, trigger,
    position = PopoverPosition.Bottom,
    hideOnOuterClick = true,
    onToggle,
    disabled = false,

    className, title, data,
}) => {
    const [visible, setVisible] = useState(false);

    const onPopoverToggle = useCallback((next: boolean) => {
        if (disabled) {
            return;
        }

        setVisible(next);
        onToggle?.(next);
    }, [disabled, onToggle]);

    const onItemClick = useCallback((item: DropdownMenuItem) => {
        setVisible(false);

        item.onClick?.();
    }, []);

    const renderItem = (item: DropdownMenuItem): ReactNode => {
        switch (item.type) {
            case "separator":
                return (
                    <li key={item.key}>
                        <hr />
                    </li>
                );

            case "header":
                return (
                    <li
                        key={item.key}

                        className="bbr-dropdown-menu__header"
                    >
                        {item.label}
                    </li>
                );

            default:
                return (
                    <MenuItem
                        key={item.key}

                        item={item}
                        onClick={onItemClick}
                    />
                );
        }
    };

    return (
        <Popover

            data={data}
            title={title}
            position={position}
            className={className}
            hideOnOuterClick={hideOnOuterClick}

            onToggle={onPopoverToggle}
            visible={disabled ? false : visible}

        >
            <Popover.Trigger>
                {trigger}
            </Popover.Trigger>
            <Popover.Content className="bbr-dropdown-menu__container">
                <ul
                    role="menu"

                    className="bbr-dropdown-menu"
                >
                    {items.map(renderItem)}
                </ul>
            </Popover.Content>
        </Popover>
    );
};

/** Props of a single dropdown menu item */
type MenuItemProps = {
    /** Menu entry to render */
    item: DropdownMenuItem;

    /** Called when the item is activated */
    onClick: (item: DropdownMenuItem) => void;
};

/** A single clickable dropdown menu entry */
const MenuItem: FC<MenuItemProps> = ({ item, onClick }) => {
    const elClassName = getClassName([
        "bbr-dropdown-menu__item",
        item.disabled ? "is-disabled" : "",
    ]);

    const onKeyDown = useCallback((event: KeyboardEvent<HTMLAnchorElement>) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onClick(item);
        }
    }, [item, onClick]);

    return (
        <li>
            <a

                role="menuitem"
                title={item.title}
                className={elClassName}
                aria-disabled={item.disabled}
                tabIndex={item.disabled ? -1 : 0}

                onKeyDown={item.disabled ? undefined : onKeyDown}
                onClick={item.disabled ? undefined : () => onClick(item)}

            >
                {item.icon
                    ? (
                        <span className="icon">
                            <Icon {...item.icon} />
                        </span>
                    )
                    : null
                }
                <span>
                    {item.label}
                </span>
            </a>
        </li>
    );
};

export default DropdownMenu;
