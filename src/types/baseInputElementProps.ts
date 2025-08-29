import { BaseElementProps, ElementColor, ElementSize, HintConfiguration, ValidationState, LabelConfiguration } from "@bbr/types";

/** Base properties for input components */
export type BaseInputElementProps<TValue> = BaseElementProps & {
    /** Value change handler. Changed value must be stored outside of component */
    onValueChange?: (value?: TValue) => void;

    /** Default value of input component*/
    defaultValue?: TValue;

    /** Input element placeholder */
    placeholder?: string;

    /** Is component borders are rounded */
    rounded?: boolean;

    /** Should be component disabled. Selecting is not allowed */
    disabled?: boolean;

    /** Should be component int read only mode. Selecting is allowed */
    readonly?: boolean;

    /** Component size */
    size?: ElementSize;

    /** Label configuration */
    label?: LabelConfiguration;

    /** Displaying loading state of component as spinner in right end of component */
    loading?: boolean;

    /** Style. Colors the border */
    style?: ElementColor;

    /** Name of element. Required for form elements */
    name?: string;

    /** Current validation state */
    validationState?: ValidationState;

    /**
     * Field hint configuration.
     * Provides additional information to user to help fill the field
     *
     * (!) Hint will be overridden by the validation state, if specified
     */
    hint?: HintConfiguration;

    /**
     * Focus on component after render.
     *
     * !NOTE! Only 1 element on page can have autofocus flag
     */
    autoFocus?: boolean;
}


