import { BaseNotNullableInputElementProps, LabelConfiguration } from "@bbr/types";

/** Switch/Toggle component props type */
export type SwitchProps = Omit<BaseNotNullableInputElementProps<boolean>,
    | "readonly" | "validationState"
    | "loading" | "placeholder"
    | "hint" | "autofocus"
    | "label"
> & {
    /** Label configuration */
    label?: Omit<LabelConfiguration, "horizontal"> & Partial<Pick<LabelConfiguration, "horizontal">>;

    /** Display switch with rounded edges (pill-shaped) */
    rounded?: boolean;

    /** Display switch with outlined style */
    outlined?: boolean;

    /** Display switch as thin variant */
    thin?: boolean;

    /**
     * Right-to-left mode.
     * Switch will be displayed on the right side of the label
     */
    rtl?: boolean;

    /**
     * Display component with label as form element.
     * Label will be placed at left
     */
    isFormLabel?: boolean;
};
