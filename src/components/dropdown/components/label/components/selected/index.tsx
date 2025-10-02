import { FC } from "react";

import { getClassName, isNotNullish, isNullOrEmpty } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import Icon from "@bbr/components/icon";

import SelectedItemLabelWithIcon from "../selectedWithIcon";
import { DropdownLabelProps } from "../../component";

/** Props type of `SelectedItemLabel` */
type SelectedItemLabelProps =
    & Pick<
        DropdownLabelProps,
        | "onClick"
        | "deselectable" | "className"
    >
    & Required<Pick<DropdownLabelProps, "selectedItem">>;

/** Dropdown label when item is selected */
const SelectedItemLabel: FC<SelectedItemLabelProps> = ({
    selectedItem, onClick,
    deselectable, className,
}) => {
    if (isNotNullish(selectedItem.icon)) {
        return (
            <SelectedItemLabelWithIcon
                onClick={onClick}
                className={className}
                deselectable={deselectable}
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
            onClick={onClick}
            className={elClassName}
        >
            {!!deselectable &&
                <Icon
                    name="plus-lg"
                    size={ElementSize.Medium}
                />
            }
            <span
                title={selectedItem.title}
                className={deselectable ? "px-2" : "pr-2"}
            >
                {selectedItem.displayValue}
            </span>
            <Icon
                name="arrow-down"
                size={ElementSize.Medium}
            />
        </label>
    );
};

export default SelectedItemLabel;
