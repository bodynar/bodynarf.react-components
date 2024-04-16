import { ChangeEvent, FC, useCallback, MouseEvent } from "react";

import { getClassName, isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import Icon from "@bbr/components/icon";

import { DropdownLabelProps } from "../../component";

import "./style.scss";

/** Props type of `DropdownLabelWithSearch` */
type DropdownLabelWithSearchProps = Pick<
    DropdownLabelProps,
    "caption" | "className" | "onClick" | "selectedItem" | "deselectable"
> & {
    /** Last user search */
    lastSearch: string | null;

    /** Is items list visible */
    isListVisible: boolean;

    /** Handler of search value change by user */
    onSearchChange: (value: string) => void;
};

/** Label component with search */
const DropdownLabelWithSearch: FC<DropdownLabelWithSearchProps> = ({
    caption, className, deselectable,
    lastSearch, onSearchChange, isListVisible,
    onClick, selectedItem,
}) => {
    const elClassName = getClassName([
        "dropdown-trigger",
        "bbr-dropdown__label",
        isNullOrEmpty(className) ? "" : `${className}--md`, // "success--md" OR "danger--md", check dropdown/styles.scss
        "button",
        "bbr-dropdown__search"
    ]);

    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onSearchChange(event.target.value),
        [onSearchChange]
    );

    const inputClassName = getClassName([
        "input",
        deselectable && !isNullOrUndefined(selectedItem) ? "px-2" : "pl-0"
    ]);

    const containerOnClick = useCallback(
        (event: MouseEvent<HTMLElement>) => {
            event.stopPropagation();

            const target = event.target as HTMLElement;

            if (target.nodeName !== "I" && isListVisible) {
                return;
            }

            onClick(event);
        },
        [isListVisible, onClick]
    );

    return (
        <div
            className={elClassName}
            onClick={containerOnClick}
        >
            {deselectable && !isNullOrUndefined(selectedItem)
                &&
                <Icon name="plus-lg" size={ElementSize.Medium} />
            }
            <input
                type="text"
                onChange={onChange}
                placeholder={caption}
                className={inputClassName}
                value={selectedItem?.displayValue ?? lastSearch ?? ""}
            />
            <Icon name="arrow-down" size={ElementSize.Medium} />
        </div>
    );
};

export default DropdownLabelWithSearch;
