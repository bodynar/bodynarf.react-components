import { FC } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";

import { ElementPosition } from "@bbr/types";
import Icon from "@bbr/components/icon/component";

import { SelectableItem } from "../..";

/** Dropdown item props */
type DropdownItemProps = {
    /** Item to present in dropdown */
    item: SelectableItem;

    /** Is item selected*/
    selected: boolean;

    /** Item click handler */
    onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
};

/** Single item in dropdown component */
const DropdownItem: FC<DropdownItemProps> = ({
    item, selected, onClick
}) => {
    if (isNotNullish(item.icon)) {
        return (
            <DropdownItemWithIcon
                item={item}
                onClick={onClick}
                selected={selected}
            />
        );
    }

    const className = getClassName([
        "bbr-dropdown-item",
        "dropdown-item",
        selected ? "is-active" : "",
        "is-flex is-align-items-center",
    ]);

    return (
        <li
            key={item.id}

            onClick={onClick}
            title={item.title}
            className={className}
            data-dropdown-item-value={item.value}
        >
            {item.displayValue}
        </li>
    );
};

export default DropdownItem;

/** Single item in dropdown component with icon */
// eslint-disable-next-line react/no-multi-comp
const DropdownItemWithIcon: FC<DropdownItemProps> = ({
    item, selected, onClick
}) => {
    const icon = item.icon!;

    const className = getClassName([
        "bbr-dropdown-item",
        "dropdown-item",
        selected ? "is-active" : "",
        "is-flex is-align-items-center",
    ]);

    const iconClassName = getClassName([
        icon.className,
        icon.position === ElementPosition.Right
            ? "bbr-icon--right"
            : "bbr-icon--left",
    ]);

    if (icon.position === ElementPosition.Right) {
        return (
            <li
                key={item.id}

                onClick={onClick}
                title={item.title}
                className={className}
                data-dropdown-item-value={item.value}
            >
                {item.displayValue}
                <Icon
                    name={icon.name}
                    size={icon.size}
                    className={iconClassName}
                />
            </li>
        );
    }

    return (
        <li
            key={item.id}

            onClick={onClick}
            title={item.title}
            className={className}
            data-dropdown-item-value={item.value}
        >
            <Icon
                name={icon.name}
                size={icon.size}
                className={iconClassName}
            />
            {item.displayValue}
        </li>
    );
};
