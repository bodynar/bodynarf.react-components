import { MouseEvent } from "react";

import { getClassName, isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import { ElementPosition, ElementSize } from "@bbr/types";
import Icon from "@bbr/components/icon";

import { SelectableItem } from "../..";

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
    if (isNullOrUndefined(selectedItem)) {
        return <EmptyLabel
            caption={caption}
            deselectable={deselectable}
            onClick={onClick}
            className={className}
        />;
    }

    if (!isNullOrUndefined(selectedItem!.icon)) {
        return <SelectedItemLabelWithIcon
            caption={caption}
            deselectable={deselectable}
            onClick={onClick}
            className={className}
            selectedItem={selectedItem}
        />;
    }

    const elClassName = getClassName([
        "dropdown-trigger",
        "bbr-dropdown__label",
        isNullOrEmpty(className) ? "" : `${className}--md`,
        "button"
    ]);

    return (
        <label
            className={elClassName}
            onClick={onClick}
        >
            {deselectable &&
                <Icon name="plus-lg" size={ElementSize.Medium} />
            }
            <span
                className={deselectable ? "px-2" : "pr-2"}
                title={selectedItem!.title}
            >
                {selectedItem!.displayValue}
            </span>
            <Icon name="arrow-down" size={ElementSize.Medium} />
        </label>
    );
};

export default DropdownLabel;

const EmptyLabel = ({
    caption, onClick, className,
}: DropdownLabelProps): JSX.Element => {

    const elClassName = getClassName([
        "dropdown-trigger",
        "bbr-dropdown__label",
        isNullOrEmpty(className) ? "" : `${className}--md`,
        "bbr-dropdown__label--default",
        "button"
    ]);

    return (
        <label
            className={elClassName}
            onClick={onClick}
        >
            <span className="mr-2">
                {caption}
            </span>
            <Icon name="arrow-down" size={ElementSize.Medium} />
        </label>
    );
};

const SelectedItemLabelWithIcon = ({
    selectedItem, onClick,
    deselectable, className,
}: DropdownLabelProps): JSX.Element => {
    const elClassName = getClassName([
        "dropdown-trigger",
        "bbr-dropdown__label",
        isNullOrEmpty(className) ? "" : `${className}--md`,
        "button"
    ]);

    const icon = selectedItem!.icon!;

    const iconClassName = getClassName([
        icon.className,
        icon.position === ElementPosition.Right
            ? "bbr-icon--right"
            : "bbr-icon--left",
        "bbr-dropdown-item__icon"
    ]);

    if (icon.position === ElementPosition.Right) {
        return (
            <label
                className={elClassName}
                onClick={onClick}
            >
                {deselectable &&
                    <Icon name="plus-lg" size={ElementSize.Medium} />
                }
                <span
                    className={deselectable ? "px-2" : "pr-2"}
                    title={selectedItem!.title}
                >
                    {selectedItem!.displayValue}
                    <Icon
                        name={icon.name}
                        size={icon.size}
                        className={iconClassName}
                    />
                </span>
                <Icon name="arrow-down" size={ElementSize.Medium} />
            </label>
        );
    }

    return (
        <label
            className={elClassName}
            onClick={onClick}
        >
            {deselectable &&
                <Icon name="plus-lg" size={ElementSize.Medium} />
            }
            <span
                className={deselectable ? "mx-2" : "mr-2"}
                title={selectedItem!.title}
            >
                <Icon
                    name={icon.name}
                    size={icon.size}
                    className={iconClassName}
                />
                {selectedItem!.displayValue}
            </span>
            <Icon name="arrow-down" size={ElementSize.Medium} />
        </label>
    );
};
