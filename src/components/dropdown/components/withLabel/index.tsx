import { MouseEvent, useCallback, useId, useState } from "react";

import { isNullOrUndefined, isNullOrEmpty, getClassName } from "@bodynarf/utils";

import { getValidationValues, mapDataAttributes } from "@bbr/utils";
import { useComponentOutsideClick } from "@bbr/hooks";

import { DropdownProps } from "@bbr/components/dropdown";
import DropdownItem from "@bbr/components/dropdown/components/item";
import DropdownLabel from "@bbr/components/dropdown/components/label";

const DropdownWithLabel = ({
    items,
    value, onSelect, validationState,
    deselectable = false,
    hideOnOuterClick, listMaxHeight,
    label, placeholder, disabled = false,

    className, title, data,
}: DropdownProps): JSX.Element => {
    const id = useId();

    const [isListVisible, setListVisible] = useState<boolean>(false);
    const [isValidationDefined, styleClassName, validationMessages] = getValidationValues(undefined, validationState);

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
        isListVisible ? "is-active" : "",
        isNullOrEmpty(listMaxHeight) ? "bbr-dropdown--height-default" : "",
        "dropdown"
    ]);

    const labelClassName = getClassName([
        "label",
        label!.className
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    if (label!.horizontal) {
        const labelContainerClassName = getClassName([
            "field-label",
            "is-normal",
            label!.horizontalContainerClassName
        ]);

        const fieldContainerClassName = getClassName([
            "field-body",
            label!.horizontalFieldContainerClassName
        ]);

        return (
            <div className="bbr-dropdown__root-container--with-label bbr-input field is-horizontal">
                <div className={labelContainerClassName}>
                    <label
                        className={labelClassName}
                        htmlFor={id}
                    >
                        {label!.caption}
                    </label>
                </div>
                <div className={fieldContainerClassName}>
                    <div className="field">
                        <div
                            key={id}
                            className={classNames}
                            data-dropdown-id={id}

                            title={title}
                            {...dataAttributes}
                        >
                            <DropdownLabel
                                className={styleClassName}
                                caption={placeholder}
                                deselectable={deselectable}
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
                        {isValidationDefined && validationMessages.length > 0 &&
                            <p className={`help m-help ${styleClassName}`}>{validationMessages.join("\n")}</p>
                        }
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="field">
            <label
                className={labelClassName}
                htmlFor={id}
            >
                {label!.caption}
            </label>
            <div
                key={id}
                className={classNames}
                data-dropdown-id={id}

                title={title}
                {...dataAttributes}
            >
                <DropdownLabel
                    className={styleClassName}
                    caption={placeholder}
                    deselectable={deselectable}
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
            {isValidationDefined && validationMessages.length > 0 &&
                <p className={`help m-help ${styleClassName}`}>{validationMessages.join("\n")}</p>
            }
        </div>
    );
};

export default DropdownWithLabel;
