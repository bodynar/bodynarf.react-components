import { BaseInputElementProps, LabelConfiguration } from "@bbr/types";

/** Date input component props type */
export interface DateProps extends Omit<BaseInputElementProps<Date | undefined>, "placeholder"> {
    /** Label configuration */
    label: LabelConfiguration;

    /** Focus out event handler */
    onBlur?: () => void;
}
