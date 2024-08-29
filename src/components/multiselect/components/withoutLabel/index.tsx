import { FC, useCallback, useId, useState, MouseEvent } from "react";

import { getClassName, isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import { getStyleClassName, mapDataAttributes } from "@bbr/utils";
import { useComponentOutsideClick } from "@bbr/hooks";
import InternalHint from "@bbr/components/primitives/internal/hint";

import { MultiselectProps, MultiselectItem as MultiselectItemModel } from "../../types";
import MultiselectItem from "../item";
import MultiselectLabel from "../label/component";

/** Props type of `MultiselectWithoutLabel` */
type MultiselectWithoutLabelProps = MultiselectProps & {
    /** Manual component identifier */
    id?: string;
};

const MultiselectWithoutLabel: FC<MultiselectWithoutLabelProps> = ({
    items, onChange, onClear,
    hideOnOuterClick, listMaxHeight,
    placeholder, noDataText = "No items found", selectionCaption = "{0} items selected",

    compact = false, disabled = false,

    validationState,

    className, title, data,
    hint,

    id: propsId,
}) => {
    const generatedId = useId();
    const id = propsId ?? generatedId;

    const [isListVisible, setListVisible] = useState<boolean>(false);
    const [selectedItems, setSelectedItems] = useState<Array<string>>(
        items
            .filter(({ selected }) => selected)
            .map(({ id }) => id)
        ??
        []
    );

    const onItemClick = useCallback(
        (item: MultiselectItemModel) => {
            const isItemSelected = selectedItems.includes(item.id);
            // почему-то тут selectedItems старый

            setSelectedItems(
                isItemSelected
                    ? selectedItems.filter(x => x !== item.id)
                    : [...selectedItems, item.id]
            );

            item.selected = isItemSelected;

            onChange(item, isItemSelected);
        }
        ,
        [onChange, selectedItems]
    )
        ;

    const onItemSelectChange = useCallback(
        (item: MultiselectItemModel, selected: boolean) => {
            setSelectedItems(x =>
                selected
                    ? [...x, item.id]
                    : x.filter(x => x !== item.id)
            );

            item.selected = selected;

            onChange(item, selected);
        },
        [onChange]
    );

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
                onClear?.();
            } else {
                setListVisible(state => !state);
            }
        }, [onClear, setListVisible, disabled]);

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
    const selectedItemsCount = selectedItems.length;

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    const deselectable = !isNullOrUndefined(onClear);

    return (
        <>
            <div
                key={id}
                className={classNames}
                data-dropdown-id={id}

                title={title}
                {...dataAttributes}
            >
                <MultiselectLabel
                    caption={placeholder}
                    onClick={onLabelClick}
                    deselectable={deselectable}
                    className={labelComponentClassName}
                    selectionCaption={selectionCaption}
                    selectedItemsCount={selectedItemsCount}
                />
                <div className="dropdown-menu">
                    {items.length > 0
                        ? <ul className="dropdown-content" style={{ maxHeight: listMaxHeight }}>
                            {items.map(item =>
                                <MultiselectItem
                                    key={item.id}

                                    item={item}
                                    rootId={id}
                                    onItemClick={onItemClick}
                                    onChange={onItemSelectChange}
                                    selected={selectedItems.includes(item.id)}
                                />
                            )}
                        </ul>
                        : <span className="dropdown-content dropdown-item">
                            {noDataText}
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

export default MultiselectWithoutLabel;
