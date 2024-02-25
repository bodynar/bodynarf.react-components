import { useCallback, useState, MouseEvent, useEffect, useRef } from "react";

import { getClassName, isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import "./style.scss";

import { BaseElementProps, ElementPosition, ElementSize } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";

import { TabItem, TabsStyle } from "@bbr/components/tabs";
import TabItemComponent from "@bbr/components/tabs/components/item";

/** Tabs component props type */
export interface TabsProps extends BaseElementProps {
    /** Tabs */
    items: Array<TabItem>;

    /** Handler of changing current active item */
    onActiveItemChange: (item: TabItem) => void;

    /**
     * Active item by default.
     * If not set - first item will be active
     */
    defaultActive?: TabItem;

    /**
     * Component size.
     * Default is `normal`
     */
    size?: ElementSize;

    /** Component position */
    position?: ElementPosition;

    /** Component style */
    style?: TabsStyle;

    /** Is component tabs should take all width of parent */
    fullWidth?: boolean;
}

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
const Tabs = ({
    items, onActiveItemChange,
    defaultActive = items[0],
    size,
    position = ElementPosition.Left,
    style = TabsStyle.default, fullWidth = false,

    className, title, data,
}: TabsProps): JSX.Element => {
    if (items.length === 0) {
        throw new Error("Invalid configuration. Tab items must be defined");
    }

    const [activeItem, setActiveItem] = useState<TabItem>(defaultActive);
    const isFirstRun = useRef(true);

    const onTabsClick = useCallback(
        (container: MouseEvent<HTMLElement>) => {
            const closestTab = (container.target as HTMLElement).closest(".bbr-tabs__tab");

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
            onClick={onTabsClick}
            className={elClassName}

            title={title}
            {...dataAttributes}
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
