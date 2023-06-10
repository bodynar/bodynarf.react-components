import { useCallback, useId, useState, MouseEvent } from "react";

import { getClassName, isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import { getValidationValues } from "@bbr/utils";
import { useComponentOutsideClick } from "@bbr/hooks";

import { DropdownProps } from "@bbr/components/dropdown";
import DropdownItem from "@bbr/components/dropdown/components/item";
import DropdownLabel from "@bbr/components/dropdown/components/label";

const DropdownCompact = ({
    items,
    value, onSelect,
    deselectable = false,
    className, hideOnOuterClick, listMaxHeight,
    placeholder, compact = false, disabled = false,
    validationState,
}: DropdownProps): JSX.Element => {
    const id = useId();

    const [isListVisible, setListVisible] = useState<boolean>(false);

    const onItemClick = useCallback(
        (event: React.MouseEvent<HTMLLIElement>) => {
            if (disabled) {
                return;
            }

            const target = event.target as HTMLLIElement;

            if (isNullOrUndefined(target)) {
                return;
            }

            const dataValue = target.dataset["dropdownItemValue"];

            if (isNullOrUndefined(dataValue)) {
                return;
            }

            const item = items.find(x => x.value === dataValue);

            if (isNullOrUndefined(item)) {
                return;
            }

            if (value === item) {
                setListVisible(false);
                return;
            }

            onSelect(item);
            setListVisible(false);
        }, [setListVisible, value, items, onSelect, disabled]);

    const onLabelClick = useCallback(
        (event: MouseEvent<HTMLLabelElement>): void => {
            if (disabled) {
                return;
            }

            const target = event.target as HTMLElement;

            if (isNullOrUndefined(target)) {
                return;
            }

            if (target.classList.contains("bi-plus-lg")) {
                onSelect(undefined);
            } else {
                setListVisible(state => !state);
            }
        }, [onSelect, setListVisible, disabled]);

    useComponentOutsideClick(
        `[data-dropdown-id="${id}"]`, isListVisible,
        () => setListVisible(false),
        hideOnOuterClick,
    );

    const [isValidationDefined, styleClassName, validationMessages] = getValidationValues(undefined, validationState);

    const classNames: string = getClassName([
        "bbr-dropdown",
        disabled ? "bbr-dropdown--disabled" : "",
        compact ? "bbr-dropdown--compact" : "",
        isListVisible ? "is-active" : "",
        isNullOrEmpty(listMaxHeight) ? "bbr-dropdown--height-default" : "",
        className,
        "dropdown",
    ]);

    return (
        <>
            <div
                key={id}
                className={classNames}
                data-dropdown-id={id}
            >
                <DropdownLabel
                    selectedItem={value}
                    caption={placeholder}
                    onClick={onLabelClick}
                    className={styleClassName}
                    deselectable={deselectable}
                />
                <div className="dropdown-menu">
                    {items.length > 0
                        ? <ul className="dropdown-content" style={{ maxHeight: listMaxHeight }}>
                            {items.map(item =>
                                <DropdownItem
                                    item={item}
                                    key={item.id}
                                    onClick={onItemClick}
                                    selected={value?.value === item.value}
                                />
                            )}
                        </ul>
                        : <span className="dropdown-content dropdown-item">No items found</span>
                    }
                </div>
            </div>
            {isValidationDefined && validationMessages.length > 0 &&
                <p className={`help m-help ${styleClassName}`}>{validationMessages.join("\n")}</p>
            }
        </>
    );
};

export default DropdownCompact;
