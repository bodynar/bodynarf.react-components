import { BaseElementProps, ElementColor, ElementSize } from "@bbr/types";

/** Single radio item */
export interface RadioItem {
    /** Unique item identifier */
    id: string;

    /** Item value */
    value: string;

    /** Displaying text (label) */
    displayValue: string;

    /** Is item disabled */
    disabled?: boolean;

    /** Element title (tooltip) */
    title?: string;
}

/** RadioGroup component props type */
export type RadioGroupProps = BaseElementProps & {
    /** Radio items to display */
    items: Array<RadioItem>;

    /** Currently selected item id */
    value?: string;

    /** Name attribute for all radio inputs in the group */
    name?: string;

    /** Component size */
    size?: ElementSize;

    /** Style. Colors the radio buttons */
    style?: ElementColor;

    /** Is component disabled */
    disabled?: boolean;

    /**
     * Display radio buttons in a row (horizontal).
     * @default false (vertical)
     */
    horizontal?: boolean;

    /**
     * Is full colored radio (filled background).
     * @default false
     */
    block?: boolean;

    /**
     * Display radio with circle style.
     * @default true
     */
    circle?: boolean;

    /**
     * Remove the radio border.
     * @default false
     */
    withoutBorder?: boolean;

    /**
     * Radio has background color.
     * Only works if style is set.
     * @default false
     */
    hasBackgroundColor?: boolean;

    /**
     * Handler of selection change
     * @param item Selected item
     */
    onValueChange?: (item: RadioItem) => void;
};
