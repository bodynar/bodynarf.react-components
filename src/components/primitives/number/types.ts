import { BaseNullableInputElementProps, BlurableElement } from "@bbr/types";

/** Number component props type */
export type NumberProps = BaseNullableInputElementProps<number>
    & BlurableElement
    & {
        /**
         * Difference which will be used to change value after step button click.
         * See html input step documentation.
         * @default 1
        */
        step?: number;
    };
