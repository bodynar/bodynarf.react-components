import { DropdownProps, SelectableItem } from "../dropdown";
import { CheckBoxProps } from "../primitives";

/** Single multiselect item that user can select */
export type MultiselectItem = SelectableItem & {
    /** Is item selected */
    selected: boolean;
};

/** Props type of `Multiselect` */
export type MultiselectProps = Omit<
    DropdownProps,
    | "items" | "onSelect"
    | "value" | "deselectable"
    | "searchable"
> & {
    /** Items which can be selected */
    items: Array<MultiselectItem>;

    /**
     * Handler of changing select state of item
     * @description `item.selected` will be set by component
     * @param item Item that triggered event
     * @param selected New select flag value
     */
    onChange: (item: MultiselectItem, selected: boolean) => void;

    /**
     * Handler of clear selection event.
     * When no handler specified - clear selection cannot be performed
     */
    onClear?: () => void;

    /**
     * Caption for label when some items are selected
     * @example selectionCaption: "selected: {0}"
     * @description Supports only 1 string parameter for number of selected items. Default is `{0} items selected`
     */
    selectionCaption?: string;

    /**
     * Text which would be displayed when search query applied and no items found
     */
    noDataByQuery?: string;

    /**
     * Is search through items enabled. Default is `true`
     */
    searchable?: boolean;

    /** Customization for checkbox */
    checkboxConfig?: Pick<
        CheckBoxProps,
        | "block" | "className" | "data"
        | "fixBackgroundColor" | "hasBackgroundColor"
        | "style" | "withoutBorder"
        | "rounded"
    >;
};
