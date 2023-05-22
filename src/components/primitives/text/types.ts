import { BaseInputElementProps } from "@bbr/components";

/** Text input component props type */
export interface TextProps extends BaseInputElementProps<string> {
    /** Focus out event handler */
    onBlur?: () => void;
}
