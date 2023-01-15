import { MouseEvent } from 'react';

import { getClassName, isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import Icon from '../../../icon';

import { SelectableItem } from "../../types";

export interface DropdownLabelProps {
    /** Caption when no items selected */
    caption: string;

    /** Can user deselect */
    deselectable: boolean;

    /** Selected item */
    selectedItem?: SelectableItem;

    /** Element classnames */
    className?: string;

    /** Click handler*/
    onClick: (event: MouseEvent<HTMLLabelElement>) => void;
}

/** Label component */
const DropdownLabel = ({
    caption,
    selectedItem, onClick,
    deselectable, className,
}: DropdownLabelProps): JSX.Element => {
    const itemSelected = !isNullOrUndefined(selectedItem);

    const text = itemSelected
        ? selectedItem?.displayValue
        : caption;

    const deselectVisible = deselectable && itemSelected;

    const elClassName = getClassName([
        "dropdown-trigger",
        "bbr-dropdown__label",
        isNullOrEmpty(className) ? "" : `${className}--md`,
        itemSelected ? "" : "bbr-dropdown__label--default",
        "button"
    ]);

    return (
        <label
            className={elClassName}
            onClick={onClick}
        >
            {deselectVisible &&
                <Icon name="plus-lg" />
            }
            <span
                className={deselectVisible ? "mx-2" : "mr-2"}
                title={itemSelected ? text : undefined}
            >
                {text}
            </span>
            <Icon name="arrow-down" />
        </label>
    );
};

export default DropdownLabel;
