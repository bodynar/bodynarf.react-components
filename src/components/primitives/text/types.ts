import { BaseInputElementProps } from "@bbr/types";

/** Text input component props type */
export interface TextProps extends BaseInputElementProps<string> {
    /** Focus out event handler */
    onBlur?: () => void;
}
