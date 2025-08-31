import { BaseNullableInputElementProps, LabelConfiguration } from "@bbr/types";

/** Date input component props type */
export interface DateProps extends Omit<
    BaseNullableInputElementProps<Date>,
    "placeholder" | "label"
> {
    /** Label configuration */
    label: LabelConfiguration;

    /** Focus out event handler */
    onBlur?: () => void;
}
