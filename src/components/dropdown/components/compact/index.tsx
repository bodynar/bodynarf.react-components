import { useCallback, useId, useState, MouseEvent } from "react";

import { getClassName, isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import { useComponentOutsideClick } from "../../../../hooks";
import { DropdownProps } from "../..";

import DropdownItem from '../item';
import DropdownLabel from '../label';

const DropdownCompact = ({
    items,
    value, onSelect,
    deselectable,
    className, hideOnOuterClick, listMaxHeight,
    placeholder, compact,
}: DropdownProps): JSX.Element => {
    const id = useId();

    const [isListVisible, setListVisible] = useState<boolean>(false);

    const onItemClick = useCallback(
        (event: React.MouseEvent<HTMLLIElement>) => {
            const target = event.target as HTMLLIElement;

            if (isNullOrUndefined(target)) {
                return;
            }

            const dataValue = target.dataset['dropdownItemValue'];

            if (isNullOrEmpty(dataValue)) {
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
        }, [setListVisible, value, items, onSelect]);

    const onLabelClick = useCallback(
        (event: MouseEvent<HTMLLabelElement>): void => {
            const target = event.target as HTMLElement;

            if (isNullOrUndefined(target)) {
                return;
            }

            if (target.classList.contains("bi-plus-lg")) {
                onSelect(undefined);
            } else {
                setListVisible(state => !state);
            }
        }, [onSelect, setListVisible]);

    useComponentOutsideClick(
        `[data-dropdown-id="${id}"]`, isListVisible,
        () => setListVisible(false),
        hideOnOuterClick,
    );

    const classNames: string = getClassName([
        "bbr-dropdown",
        (compact ?? false) ? "bbr-dropdown--compact" : "",
        isListVisible ? "is-active" : "",
        isNullOrEmpty(listMaxHeight) ? "bbr-dropdown--height-default" : "",
        className,
        "dropdown"
    ]);

    return (
        <div
            key={id}
            className={classNames}
            data-dropdown-id={id}
        >
            <DropdownLabel
                caption={placeholder}
                deselectable={deselectable === true}
                selectedItem={value}
                onClick={onLabelClick}
            />
            <div className="dropdown-menu">
                {items.length > 0
                    ? <ul className="dropdown-content" style={{ maxHeight: listMaxHeight }}>
                        {items.map(item =>
                            <DropdownItem
                                key={item.id}
                                item={item}
                                selected={value?.value === item.value}
                                onClick={onItemClick}
                            />
                        )}
                    </ul>
                    : <span className="dropdown-content dropdown-item">No items found</span>
                }
            </div>
        </div>
    );
};

export default DropdownCompact;