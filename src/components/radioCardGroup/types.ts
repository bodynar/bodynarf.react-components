import { BaseElementProps, ElementIcon, SizableElement, StylableElement } from "@bbr/types";

/** Single card in a {@link RadioCardGroupProps} */
export type RadioCardItem = {
    /** Card label. Also used as the card value when {@link RadioCardItem.value} is omitted */
    label: string;

    /**
     * Card value — the selection key compared against the group `value`
     * and reported via {@link RadioCardGroupProps.onChange}.
     * Falls back to {@link RadioCardItem.label} when omitted
    */
    value?: string;

    /** Additional description rendered under the label */
    description?: string;

    /** Card icon configuration */
    icon?: ElementIcon;

    /** Is card disabled */
    disabled?: boolean;
};

/** RadioCardGroup component props type */
export type RadioCardGroupProps =
    & BaseElementProps
    & SizableElement
    & StylableElement
    & {
    /** Cards to display */
    items: RadioCardItem[];

    /**
     * Selected card value.
     * When provided, the component acts as a controlled component.
     */
    value?: string;

    /** Initially selected card value (uncontrolled mode) */
    defaultValue?: string;

    /** `name` attribute for the radio inputs in the group */
    name?: string;

    /**
     * Number of columns in the cards grid.
     * @default 1
     */
    columns?: number;

    /**
     * Handler of selection change
     * @param value Selected card value
     */
    onChange?: (value: string) => void;
};
