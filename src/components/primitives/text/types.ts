import { BaseNotNullableInputElementProps } from "@bbr/types";

/** Text input component props type */
export interface TextProps extends BaseNotNullableInputElementProps<string> {
    /** Focus out event handler */
    onBlur?: () => void; // TODO: to type BaseBlurableInputElement
}
