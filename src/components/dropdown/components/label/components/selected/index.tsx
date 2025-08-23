import { FC } from "react";

import { getClassName, isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import Icon from "@bbr/components/icon";

import SelectedItemLabelWithIcon from "../selectedWithIcon";
import { DropdownLabelProps } from "../../component";

/** Props type of `SelectedItemLabel` */
type SelectedItemLabelProps = Pick<
    DropdownLabelProps,
    | "selectedItem" | "onClick"
    | "deselectable" | "className"
>;

/** Dropdown label when item is selected */
const SelectedItemLabel: FC<SelectedItemLabelProps> = ({
    selectedItem, onClick,
    deselectable, className,
}): JSX.Element => {
    if (!isNullOrUndefined(selectedItem!.icon)) {
        return (
            <SelectedItemLabelWithIcon
                deselectable={deselectable}
                onClick={onClick}
                className={className}
                selectedItem={selectedItem}
            />
        );
    }

    const elClassName = getClassName([
        "button",
        "dropdown-trigger",
        "bbr-dropdown__label",
        isNullOrEmpty(className) ? "" : `${className}--md`,
    ]);

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
            </span>
            <Icon
                name="arrow-down"
                size={ElementSize.Medium}
            />
        </label>
    );
};

export default SelectedItemLabel;
