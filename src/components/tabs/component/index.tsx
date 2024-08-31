import { useCallback, useState, MouseEvent, useEffect, useRef, FC } from "react";

import { getClassName, isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import { ElementPosition, ElementSize } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { TabItem, TabsProps, TabsStyle } from "..";
import TabItemComponent from "../components/item";

/** Tab position to element class name map */
const positionToClassNameMap: Map<ElementPosition, string> = new Map([
    [ElementPosition.Left, ""],
    [ElementPosition.Center, "is-centered"],
    [ElementPosition.Right, "is-right"],
]);

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
    const isFirstRun = useRef(true);

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

    useEffect(
        () => {
            if (isFirstRun.current) {
                isFirstRun.current = false;
                return;
            }

            onActiveItemChange(activeItem);
        },
        [activeItem, onActiveItemChange]
    );

    const elClassName = getClassName([
        "bbr-tabs",
        "tabs",
        className,
        positionToClassNameMap.get(position),
        getSizeClassName(size, [ElementSize.Normal]),
        style,
        fullWidth ? "is-fullwidth" : "",
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <nav
            className={elClassName}

            title={title}
            {...dataAttributes}
            onClick={onTabsClick}
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

/**
 * Get class name for specified size and constraints
 * @param size Component size
 * @param notAllowedSizes Sizes that not applicable to component
 * @returns Class name for react element
 */
const getSizeClassName = (size?: ElementSize, notAllowedSizes?: Array<ElementSize>): string => {
    notAllowedSizes ??= [];
    if (isNullOrUndefined(size) || notAllowedSizes.includes(size!)) {
        return "";
    }

    return `is-${size}`;
};
