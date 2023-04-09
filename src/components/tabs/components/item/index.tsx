import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { TabItem as Item } from "../..";
import Icon from "../../../icon";

/** Tabs panel single tab item component props type */
export interface TabItemProps {
    /** Tab item */
    item: Item;

    /** Active item identifier */
    activeItem: string;
}

/** Tabs panel single tab item component */
const TabItem = ({
    item, activeItem
}: TabItemProps): JSX.Element => {
    if (!isNullOrUndefined(item.icon)) {
        return <TabItemWithIcon item={item} activeItem={activeItem} />;
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
const TabItemWithIcon = ({
    item, activeItem
}: TabItemProps): JSX.Element => {
    const iconConfig = item.icon!;

    const className = getClassName([
        "bbr-tabs__tab",
        activeItem === item.id ? "is-active" : undefined,
    ]);

    if (iconConfig.position === "left") {
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
    }

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
};
