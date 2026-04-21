import { DropdownProps, SelectableItem } from "../dropdown";
import { CheckBoxProps } from "../primitives";
import { ElementColor, ElementSize } from "@bbr/types";

/** Single multiselect item that user can select */
export type MultiselectItem = SelectableItem & {
    /** Is item selected */
    selected: boolean;
};

/** Display mode for selected items */
export type MultiselectDisplayMode = "label" | "tags";

/** Configuration for tags display mode */
export type MultiselectTagsConfig = {
    /**
     * Tag color.
     * @default ElementColor.Primary
     */
    color?: ElementColor;

    /**
     * Tag size.
     * @default ElementSize.Normal
     */
    size?: Exclude<ElementSize, ElementSize.Small>;

    /** Is tag with rounded border */
    rounded?: boolean;

    /** Is tag with light color */
    lightColor?: boolean;
};

/** Props type of `Multiselect` */
export type MultiselectProps = Omit<
    DropdownProps,
    | "items" | "onSelect"
    | "value" | "deselectable"
> & {
    /** Items which can be selected */
    items: Array<MultiselectItem>;

    /**
     * Caption for label when some items are selected
     * @example selectionCaption: "selected: {0}"
     * @description Supports only 1 string parameter for number of selected items. Default is `{0} items selected`
     */
    selectionCaption?: string;

    /** Customization for checkbox */
    checkboxConfig?: Pick<
        CheckBoxProps,
        | "block" | "className" | "data"
        | "fixBackgroundColor" | "hasBackgroundColor"
        | "style" | "withoutBorder"
        | "rounded"
    >;

    /**
     * Display mode for selected items.
     * - `"label"` (default): shows selection count in dropdown label
     * - `"tags"`: shows selected items as removable tags inside the input
     */
    displayMode?: MultiselectDisplayMode;

    /** Configuration for tags display mode */
    tagsConfig?: MultiselectTagsConfig;

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
};
