import { FC, MouseEvent, useCallback } from "react";

import { getClassName, isNotNullish, isNullish } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import Icon from "@bbr/components/icon";

import "./style.scss";

import { MenuItemConfig, MenuProps } from "..";

/** Vertical navigation menu based on Bulma `.menu` */
const Menu: FC<MenuProps> = ({
    sections,
    activeItemId,
    onItemClick,

    className, title, data,
}) => {
    const dataAttributes = mapDataAttributes(data);

    const elClassName = getClassName([
        "bbr-menu",
        "menu",
        className,
    ]);

    const handleItemClick = useCallback(
        (item: MenuItemConfig, event: MouseEvent<HTMLAnchorElement>) => {
            if (item.disabled) {
                event.preventDefault();
                return;
            }

            if (isNullish(item.href)) {
                event.preventDefault();
            }

            onItemClick?.(item.id);
        },
        [onItemClick],
    );

    return (
        <aside
            {...dataAttributes}

            title={title}
            className={elClassName}
        >
            {sections.map((section, sectionIndex) => (
                <div
                    // eslint-disable-next-line react/no-array-index-key
                    key={sectionIndex}

                    className="bbr-menu__section"
                >
                    {isNotNullish(section.label) && (
                        <p className="menu-label">
                            {section.label}
                        </p>
                    )}

                    <ul className="menu-list">
                        {section.items.map((item) => (
                            <MenuItem
                                key={item.id}

                                item={item}
                                activeItemId={activeItemId}
                                handleItemClick={handleItemClick}
                            />
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    );
};

export default Menu;

/** Props for the {@link MenuItem} component */
type MenuItemProps = {
    /** The menu item configuration */
    item: MenuItemConfig;

    /** The ID of the currently active menu item */
    activeItemId?: string;

    /** Callback function to handle item click events */
    handleItemClick: (item: MenuItemConfig, event: MouseEvent<HTMLAnchorElement>) => void;
};

/** Component representing a single menu item */
const MenuItem: FC<MenuItemProps> = ({
    item, activeItemId, handleItemClick
}) => {
    const isActive = item.id === activeItemId;

    const itemClassName = getClassName([
        isActive ? "is-active" : "",
        item.disabled ? "bbr-menu__item--disabled" : "",
    ]);

    return (
        <li key={item.id}>
            <a
                href={item.href ?? "#"}
                aria-disabled={item.disabled}
                className={itemClassName || undefined}
                onClick={(e) => handleItemClick(item, e)}
            >
                {isNotNullish(item.icon) && (
                    <span className="icon is-small mr-2">
                        <Icon name={item.icon} />
                    </span>
                )}
                {item.label}
            </a>
        </li>
    );
};
