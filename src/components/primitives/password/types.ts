import { BaseNotNullableInputElementProps } from "@bbr/types";

/** Password component props type */
export interface PasswordProps extends Omit<BaseNotNullableInputElementProps<string>, "readonly"> {
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
}
