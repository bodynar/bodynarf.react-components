import { BaseNullableInputElementProps } from "@bbr/types";

/** Number component props type */
export interface NumberProps extends BaseNullableInputElementProps<number> {
    /** Focus out event handler */
    onBlur?: () => void;

    /**
     * Difference which will be used to change value after step button click.
     * See html input step documentation.
     * @default 1
    */
    step?: number;
}
