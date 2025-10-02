import { useCallback, useState, MouseEvent, FC } from "react";

import { getClassName, isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import { ElementPosition, ElementSize } from "@bbr/types";
import { getPositionClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { TabItem, TabsProps, TabsStyle } from "..";
import TabItemComponent from "../components/item";
import { useMount } from "@bbr/hooks";

/**
 * Tabs panel
 * @throws Items are empty
 */
const Tabs: FC<TabsProps> = ({
    items, onActiveItemChange,
    defaultActive = items[0],
    size,
    position = ElementPosition.Left,
    style = TabsStyle.default, fullWidth = false,

    className, title, data,
}) => {
    if (items.length === 0) {
        throw new Error("Invalid configuration. Tab items must be defined");
    }

    const [activeItem, setActiveItem] = useState<TabItem>(defaultActive);

    const onTabsClick = useCallback(
        (event: MouseEvent<HTMLElement>) => {
            const closestTab = (event.target as HTMLElement).closest(".bbr-tabs__tab");

            if (isNullOrUndefined(closestTab)) {
                return;
            }

            const itemId = closestTab!.attributes.getNamedItem("data-item-id")?.value ?? "";

            if (isNullOrEmpty(itemId)) {
                return;
            }

            const item = items.find(({ id }) => id === itemId);

            if (isNullOrUndefined(item) || item === activeItem) {
                return;
            }

            setActiveItem(item!);
        },
        [activeItem, items]
    );

    useMount(() => onActiveItemChange(activeItem));

    const elClassName = getClassName([
        "bbr-tabs",
        "tabs",
        className,
        getPositionClassName(position),
        getSizeClassName(size, ElementSize.Normal),
        style,
        fullWidth ? "is-fullwidth" : "",
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <nav
            title={title}
            {...dataAttributes}
            onClick={onTabsClick}
            className={elClassName}
        >
            <ul>
                {items.map(item =>
                    <TabItemComponent
                        key={item.id}

                        item={item}
                        activeItem={activeItem.id}
                    />
                )}
            </ul>
        </nav>
    );
};

export default Tabs;
