import { BaseInputElementProps } from "@bbr/components";

/** Multiline textual input component props type */
export interface MultilineProps extends BaseInputElementProps<string> {
    /** Is input should be resizable */
    fixed?: boolean;

    /** Number of initial rows count */
    rows?: number;

    /** Focus out event handler */
    onBlur?: () => void;
}
