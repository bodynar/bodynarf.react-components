import { BaseInputElementProps, InputLabel } from "@bbr/components";

/** Date input component props type */
export interface DateProps extends Omit<BaseInputElementProps<Date | undefined>, "placeholder"> {
    /** Label configuration */
    label: InputLabel;

    /** Focus out event handler */
    onBlur?: () => void;
}
