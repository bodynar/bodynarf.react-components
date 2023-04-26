import { BaseInputElementProps } from "..";

/** Text input conponent props type */
export interface TextProps extends BaseInputElementProps<string> {
    /** Focus out event handler */
    onBlur?: () => void;
}
