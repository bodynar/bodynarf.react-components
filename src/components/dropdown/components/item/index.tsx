import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { ElementPosition } from "@bbr/types";
import Icon from "@bbr/components/icon/component";

import { SelectableItem } from "../..";

/** Dropdown item props */
interface DropdownItemProps {
    /** Item to present in dropdown */
    item: SelectableItem;

    /** Is item selected*/
    selected: boolean;

    /** Item click handler */
    onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
}

/** Single item in dropdown component */
const DropdownItem = ({
    item, selected, onClick
}: DropdownItemProps): JSX.Element => {
    if (!isNullOrUndefined(item.icon)) {
        return (
            <DropdownItemWithIcon
                item={item}
                selected={selected}
                onClick={onClick}
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
            className={className}
            data-dropdown-item-value={item.value}

            title={item.title}
        >
            {item.displayValue}
        </li>
    );
};

export default DropdownItem;

/** Single item in dropdown component with icon */
// eslint-disable-next-line react/no-multi-comp
const DropdownItemWithIcon = ({
    item, selected, onClick
}: DropdownItemProps): JSX.Element => {
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
                className={className}
                data-dropdown-item-value={item.value}

                title={item.title}
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
            className={className}
            data-dropdown-item-value={item.value}

            title={item.title}
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
