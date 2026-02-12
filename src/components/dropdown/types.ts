import { Optional } from "@bodynarf/utils";

import { BaseElementProps, HintConfiguration, ValidationState, LabelConfiguration, ElementIcon } from "@bbr/types";

/** Dropdown item */
export interface SelectableItem {
    /** Unique item identifier */
    id: string;

    /** Item value */
    value: string;

    /** Displaying text */
    displayValue: string;

    /** Element title */
    title?: string;

    /** Element icon configuration */
    icon?: ElementIcon;
}

/** Dropdown component props type */
export interface DropdownProps extends BaseElementProps {
    /** Items which can be selected */
    items: Array<SelectableItem>;

    /**
     * Selected value.
     * Must be stored outside
    */
    value: Optional<SelectableItem>;

    /** Input element placeholder */
    placeholder?: string;

    /** Hide component list when its opened and user click outside */
    hideOnOuterClick?: boolean;

    /** Can user deselect */
    deselectable?: boolean;

    /** Custom component list max-height property */
    listMaxHeight?: string;

    /**
     * Should component be compact
     * Will have width by maximum current selection item width
     */
    compact?: boolean;

    /**
     * Is element disabled
     */
    disabled?: boolean;

    /** Label configuration */
    label?: LabelConfiguration;

    /** Current validation state */
    validationState?: ValidationState;

    /**
     * Field hint configuration.
     * Provides additional information to user to help fill the field
     *
     * (!) Hint will be overridden by the validation state, if specified
     */
    hint?: HintConfiguration;

    /** Caption for component list when there's no data to display */
    noDataText?: string;

    /** Is search through items enabled */
    searchable?: boolean;

    /**
     * Text which would be displayed when search query applied and no items found
     */
    noDataByQuery?: string;

    /**
     * Action to update selected value, which stored outside
    */
    onSelect: (item?: SelectableItem) => void;
}
