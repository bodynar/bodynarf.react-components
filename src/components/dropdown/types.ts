import { BaseElementProps, InputLabel, ValidationState } from "@bbr/components";

/** Dropdown item */
export interface SelectableItem {
    /** Unique item identifier */
    id: string;

    /** Item value */
    value: string;

    /** Displaying text */
    displayValue: string;
}

/** Dropdown component props type */
export interface DropdownProps extends BaseElementProps {
    /** Items which can be selected */
    items: Array<SelectableItem>;

    /** Input element placeholder */
    placeholder: string;

    /**
     * Action to update selected value, which stored outside
    */
    onSelect: (item?: SelectableItem) => void;

    /**
     * Selected value.
     * Must be stored outside
    */
    value?: SelectableItem;

    /** Hide dropdown list when its opened and user click outside */
    hideOnOuterClick: boolean;

    /** Can user deselect */
    deselectable?: boolean;

    /** Custom dropdown list max-height property */
    listMaxHeight?: string;

    /**
     * Should dropdown be compact
     * Will have width by maximum current selection item width
     */
    compact?: boolean;

    /**
     * Is element disabled
     */
    disabled?: boolean;

    /** Label configuration */
    label?: InputLabel;

    /** Current validation state */
    validationState?: ValidationState;
}