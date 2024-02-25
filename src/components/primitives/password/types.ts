import { BaseInputElementProps } from "@bbr/types";

/** Password component props type */
export interface PasswordProps extends Omit<BaseInputElementProps<string>, "defaultValue" | "readonly"> {
    /**
     * Is clickable icon "Show password" visible.
     * Will show password on click
    */
    canShowPassword?: boolean;
}
