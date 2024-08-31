import { useCallback, useId, useState, MouseEvent, FC } from "react";

import { getClassName, isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import { getStyleClassName, mapDataAttributes } from "@bbr/utils";
import { useComponentOutsideClick } from "@bbr/hooks";
import InternalHint from "@bbr/internalComponent/hint";

import { DropdownProps } from "../..";
import DropdownItem from "../../components/item";
import DropdownLabel from "../../components/label";

/** Props type of `DropdownCompact` */
type DropdownCompactProps = DropdownProps & {
    /** Manual compact dropdown identifier */
    id?: string;
};

/** Dropdown component without label */
const DropdownCompact: FC<DropdownCompactProps> = ({
    items, value, onSelect,
    hideOnOuterClick, listMaxHeight,
    placeholder, noDataText = "No items found", noDataByQuery = "No items found by specified search",

    compact = false, disabled = false, deselectable = false, searchable = false,

    validationState,

    className, title, data,
    hint,

    id: propsId,
}) => {
    const generatedId = useId();
    const id = propsId ?? generatedId;

    const [isListVisible, setListVisible] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string | null>(null);

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
            setSearchValue(null);
            setListVisible(false);
        }, [setListVisible, value, items, onSelect, disabled]);

    const onLabelClick = useCallback(
        (event: MouseEvent<HTMLElement>): void => {
            if (disabled) {
                return;
            }

            const target = event.target as HTMLElement;

            if (isNullOrUndefined(target)) {
                return;
            }

            if (target.classList.contains("bi-plus-lg")) {
                onSelect(undefined);
                setSearchValue(null);
            } else {
                setListVisible(state => !state);
            }
        }, [onSelect, setListVisible, disabled]);

    const onSearchChange = useCallback(
        (value: string) => {
            setSearchValue(value.length === 0 ? null : value);

            onSelect(undefined);
        },
        [setSearchValue, onSelect]
    );

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
    const filteredItems = isNullOrEmpty(searchValue)
        ? items
        : items.filter(({ displayValue }) =>
            displayValue.toLocaleLowerCase().includes(searchValue!.toLocaleLowerCase()))
        ;

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
                    searchable={searchable}
                    lastSearch={searchValue}
                    deselectable={deselectable}
                    isListVisible={isListVisible}
                    onSearchChange={onSearchChange}
                    className={labelComponentClassName}
                />
                <div className="dropdown-menu">
                    {filteredItems.length > 0
                        ? <ul className="dropdown-content" style={{ maxHeight: listMaxHeight }}>
                            {filteredItems.map(item =>
                                <DropdownItem
                                    key={item.id}

                                    item={item}
                                    onClick={onItemClick}
                                    selected={value?.value === item.value}
                                />
                            )}
                        </ul>
                        : <span className="dropdown-content dropdown-item">
                            {isNullOrEmpty(searchValue) ? noDataText : noDataByQuery}
                        </span>
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
