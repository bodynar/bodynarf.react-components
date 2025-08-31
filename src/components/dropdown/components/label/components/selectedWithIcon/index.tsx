import { FC } from "react";

import { getClassName, isNullOrEmpty } from "@bodynarf/utils";

import { ElementPosition, ElementSize } from "@bbr/types";
import Icon from "@bbr/components/icon";

import { DropdownLabelProps } from "../../component";

/** Props type of `SelectedItemLabelWithIcon` */
type SelectedItemLabelWithIconProps = Pick<
    DropdownLabelProps,
    | "selectedItem" | "onClick"
    | "deselectable" | "className"
>;

/** Dropdown label when item is selected and it's have icon */
const SelectedItemLabelWithIcon: FC<SelectedItemLabelWithIconProps> = ({
    selectedItem, onClick,
    deselectable, className,
}) => {
    const elClassName = getClassName([
        "button",
        "dropdown-trigger",
        "bbr-dropdown__label",
        isNullOrEmpty(className) ? "" : `${className}--md`,
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
                {!!deselectable &&
                    <Icon
                        name="plus-lg"
                        size={ElementSize.Medium}
                    />
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
                <Icon
                    name="arrow-down"
                    size={ElementSize.Medium}
                />
            </label>
        );
    }

    return (
        <label
            className={elClassName}
            onClick={onClick}
        >
            {!!deselectable &&
                <Icon
                    name="plus-lg"
                    size={ElementSize.Medium}
                />
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
            <Icon
                name="arrow-down"
                size={ElementSize.Medium}
            />
        </label>
    );
};

export default SelectedItemLabelWithIcon;
