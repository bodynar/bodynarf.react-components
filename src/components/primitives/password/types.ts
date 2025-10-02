import { BaseNotNullableInputElementProps, KeyboardElement } from "@bbr/types";

/** Password component props type */
export type PasswordProps = Omit<
    & BaseNotNullableInputElementProps<string>,
    | "readonly"
>
    & KeyboardElement
    & {
        /**
         * Is clickable icon "Show password" visible.
         * Will show password on click
        */
        canShowPassword?: boolean;

        /**
         * Title for slow password icon
         * @default "Show password"
         */
        showPasswordIconTitle?: string;
    };
