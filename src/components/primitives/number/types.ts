import { BaseNullableInputElementProps, BlurableElement, KeyboardElement } from "@bbr/types";

/** Number component props type */
export type NumberProps = BaseNullableInputElementProps<number>
    & BlurableElement
    & KeyboardElement
    & {
        /**
         * Difference which will be used to change value after step button click.
         * See html input step documentation.
         * @default 1
        */
        step?: number;

        /**
         * Reset value to `defaultValue` (or `0` if not specified) on focus out when the field is empty.
         * Prevents the input from having no value.
         * @default false
         */
        resetToDefaultOnBlur?: boolean;
    };
