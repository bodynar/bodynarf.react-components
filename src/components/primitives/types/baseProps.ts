import { BaseElementProps, ElementColor, ElementSize } from "@bbr/components";

import { InputLabel, ValidationState } from ".";

/** Base properties for input components */
export interface BaseInputElementProps<TValue> extends BaseElementProps {
    /** Value change handler. Changed value must be stored outside of component */
    onValueChange: (value?: TValue) => void;

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
    label?: InputLabel;

    /** Displaying loading state of component as spinner in right end of component */
    loading?: boolean;

    /** Style. Colors the border */
    style?: ElementColor;

    /** Name of element. Required for form elements */
    name?: string;

    /** Current validation state */
    validationState?: ValidationState;
}
