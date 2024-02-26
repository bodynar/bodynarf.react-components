import { useCallback, useId, useState, MouseEvent } from "react";

import { getClassName, isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import { getStyleClassName, mapDataAttributes } from "@bbr/utils";
import { useComponentOutsideClick } from "@bbr/hooks";

import { DropdownProps } from "@bbr/components/dropdown";
import DropdownItem from "@bbr/components/dropdown/components/item";
import DropdownLabel from "@bbr/components/dropdown/components/label";
import InternalHint from "@bbr/internalComponent/hint";

const DropdownCompact = ({
    items,
    value, onSelect,
    deselectable = false,
    hideOnOuterClick, listMaxHeight,
    placeholder, compact = false, disabled = false,
    validationState,

    className, title, data,
    hint,
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

    const classNames: string = getClassName([
        "bbr-dropdown",
        className,
        disabled ? "bbr-dropdown--disabled" : "",
        compact ? "bbr-dropdown--compact" : "",
        isListVisible ? "is-active" : "",
        isNullOrEmpty(listMaxHeight) ? "bbr-dropdown--height-default" : "",
        "dropdown",
    ]);

    const labelComponentClassName = getStyleClassName(undefined, validationState);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <>
            <div
                key={id}
                className={classNames}
                data-dropdown-id={id}

                title={title}
                {...dataAttributes}
            >
                <DropdownLabel
                    selectedItem={value}
                    caption={placeholder}
                    onClick={onLabelClick}
                    deselectable={deselectable}
                    className={labelComponentClassName}
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
            <InternalHint
                hint={hint}
                validationState={validationState}
            />
        </>
    );
};

export default DropdownCompact;
