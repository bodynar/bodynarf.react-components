import { DropdownProps, SelectableItem } from "../dropdown";

/** Props type of `Multiselect` */
export type MultiselectProps = Omit<
    DropdownProps,
    | "onSelect" | "value"
    | "deselectable"
> & {

    /** Selected items */
    selection: Array<SelectableItem>;

    /**
     * Handler of changing select state of item
     * @param item Item that triggered event
     * @param value New select flag value
     */
    onChange: (item: SelectableItem, value: boolean) => void;

    /**
     * Handler of clear selection event.
     * When no handler specified - clear selection cannot be performed
     */
    onClear?: () => void;
};
