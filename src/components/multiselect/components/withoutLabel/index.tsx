import { FC, useCallback, useId, useState, MouseEvent } from "react";

import { getClassName, isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getStyleClassName, mapDataAttributes } from "@bbr/utils";
import { useComponentOutsideClick } from "@bbr/hooks";
import Search from "@bbr/components/search";
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
    placeholder = "",
    noDataText = "No items found", selectionCaption = "{0} items selected", noDataByQuery = "No items found by specified search",

    compact = false, disabled = false, searchable = true,

    validationState,

    className, title, data,
    hint,

    id: propsId, checkboxConfig,
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

            setSelectedItems(x =>
                isItemSelected
                    ? x.filter(x => x !== item.id)
                    : [...x, item.id]
            );

            item.selected = !isItemSelected;

            onChange(item, !isItemSelected);
        }
        ,
        [onChange, selectedItems]
    );

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
                setSelectedItems([]);
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
        "bbr-multiselect",
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
                    <DropdownContent
                        id={id}
                        items={items}
                        searchable={searchable}
                        noDataText={noDataText}
                        onItemClick={onItemClick}
                        noDataByQuery={noDataByQuery}
                        selectedItems={selectedItems}
                        listMaxHeight={listMaxHeight}
                        checkboxConfig={checkboxConfig}
                        onItemSelectChange={onItemSelectChange}
                    />
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

type DropdownContentProps = Pick<MultiselectProps,
    "items" | "noDataText" | "listMaxHeight" | "noDataByQuery" | "checkboxConfig" | "searchable"
> & {
    /** Component root container identifier */
    id: string;

    /** Array of selected items identifiers */
    selectedItems: Array<string>;

    /**
     * Item click handler
     * @param item Item, where event was raised
     */
    onItemClick: (item: MultiselectItemModel) => void;

    /**
     * Item selection change event handler
     * @param item Changed item
     * @param selected New select value
     */
    onItemSelectChange: (item: MultiselectItemModel, selected: boolean) => void;
};

// eslint-disable-next-line react/no-multi-comp
const DropdownContent: FC<DropdownContentProps> = ({
    noDataText, id, listMaxHeight, noDataByQuery,
    items, selectedItems,

    onItemClick, onItemSelectChange, searchable = true,
    checkboxConfig,
}) => {
    const [search, setSearch] = useState("");

    if (items.length === 0) {
        return (
            <div className="dropdown-content">
                <span className="dropdown-item">
                    {noDataText}
                </span>
            </div>
        );
    }

    const filteredItems =
        isNullOrEmpty(search)
            ? items
            : items.filter(({ displayValue }) => displayValue.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

    if (filteredItems.length === 0) {
        return (
            <div
                className="dropdown-content"
                style={{ maxHeight: listMaxHeight }}
            >
                <div className="mx-2 my-1">
                    <Search
                        caption="search"
                        onSearch={setSearch}
                        searchType="byTyping"
                        size={ElementSize.Small}
                    />
                </div>
                <span className="dropdown-item">
                    {noDataByQuery}
                </span>
            </div>
        );
    }

    return (
        <div
            className="dropdown-content"
            style={{ maxHeight: listMaxHeight }}
        >
            {!!searchable &&
                <div className="mx-2 my-1">
                    <Search
                        caption="search"
                        onSearch={setSearch}
                        searchType="byTyping"
                        size={ElementSize.Small}
                    />
                </div>
            }
            <ul>
                {filteredItems.map(item =>
                    <MultiselectItem
                        key={item.id}

                        item={item}
                        rootId={id}
                        onItemClick={onItemClick}
                        onChange={onItemSelectChange}
                        checkboxConfig={checkboxConfig}
                        selected={selectedItems.includes(item.id)}
                    />
                )}
            </ul>
        </div>
    );
};
