import { FC } from "react";

import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { ElementPosition } from "@bbr/types";
import Icon from "@bbr/components/icon";

import { TabItem as Item } from "../..";

/** Tabs panel single tab item component props type */
export type TabItemProps = {
    /** Tab item */
    item: Item;

    /** Active item identifier */
    activeItem: string;
};

/** Tabs panel single tab item component */
const TabItem: FC<TabItemProps> = ({
    item, activeItem
}) => {
    if (!isNullOrUndefined(item.icon)) {
        return (
            <TabItemWithIcon
                item={item}
                activeItem={activeItem}
            />
        );
    }

    const className = getClassName([
        "bbr-tabs__tab",
        activeItem === item.id ? "is-active" : undefined,
    ]);

    return (
        <li
            key={item.id}
            className={className}
            data-item-id={item.id}
        >
            <a>
                {item.caption}
            </a>
        </li>
    );
};

export default TabItem;

/** Tabs panel single tab item with icon component */
// eslint-disable-next-line react/no-multi-comp
const TabItemWithIcon: FC<TabItemProps> = ({
    item, activeItem
}) => {
    const iconConfig = item.icon!;

    const className = getClassName([
        "bbr-tabs__tab",
        activeItem === item.id ? "is-active" : undefined,
    ]);

    if (iconConfig.position === ElementPosition.Right) {
        return (
            <li
                key={item.id}
                className={className}
                data-item-id={item.id}
            >
                <a>
                    <span>
                        {item.caption}
                    </span>
                    <Icon {...iconConfig} />
                </a>
            </li>
        );
    }

    return (
        <li
            key={item.id}
            className={className}
            data-item-id={item.id}
        >
            <a>
                <Icon {...iconConfig} />
                <span>
                    {item.caption}
                </span>
            </a>
        </li>
    );
};
