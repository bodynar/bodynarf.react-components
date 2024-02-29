import { BaseInputElementProps } from "@bbr/types";

/** Multiline textual input component props type */
export interface MultilineProps extends Omit<BaseInputElementProps<string>, "rounded"> {
    /** Is input should be resizable */
    fixed?: boolean;

    /** Number of initial rows count */
    rows?: number;

    /** Focus out event handler */
    onBlur?: () => void;
}
