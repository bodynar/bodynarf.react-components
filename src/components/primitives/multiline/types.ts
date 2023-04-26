import { BaseInputElementProps } from "..";

/** Multiline textual input conponent props type */
export interface MultilineProps extends BaseInputElementProps<string> {
    /** Is input should be resizable */
    fixed?: boolean;

    /** Number of initial rows count */
    rows?: number;

    /** Focus out event handler */
    onBlur?: () => void;
}
