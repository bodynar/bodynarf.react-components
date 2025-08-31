import { BaseNullableInputElementProps, BlurableElement, LabelConfiguration } from "@bbr/types";

/** Date input component props type */
export type DateProps = Omit<
    BaseNullableInputElementProps<Date>,
    "placeholder" | "label"
> & BlurableElement & {
    /** Label configuration */
    label: LabelConfiguration;
};
