import { BaseNotNullableInputElementProps, LabelConfiguration } from "@bbr/types";

/** Checkbox component props type */
export type CheckBoxProps = Omit<BaseNotNullableInputElementProps<boolean>,
    | "readonly" | "validationState"
    | "loading" | "placeholder"
    | "hint" | "autofocus"
    | "label"
    | "onKeyDown" | "onKeyUp"
> & {
    /** Label configuration */
    label?: Omit<LabelConfiguration, "horizontal"> & Partial<Pick<LabelConfiguration, "horizontal">>;

    /** Is full colored checkbox */
    block?: boolean;

    /** Remove the checkbox border */
    withoutBorder?: boolean;

    /**
     * Checkbox has background color.
     * Only works if style is set
    */
    hasBackgroundColor?: boolean;

    /**
     * Set unchecked background as transparent.
     * Only used with `hasBackgroundColor` set as `true`
     * @example `{ style: ElementColor.Info, hasBackgroundColor: true, fixBackgroundColor: true }` -
    */
    fixBackgroundColor?: boolean;

    /**
     * Display component with label as form element.
     * Label will be placed at left
     */
    isFormLabel?: boolean;
};
