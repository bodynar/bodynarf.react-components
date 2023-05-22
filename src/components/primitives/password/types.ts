import { BaseInputElementProps } from "@bbr/components";

/** Password component props type */
export interface PasswordProps extends Omit<BaseInputElementProps<string>, "defaultValue" | "readonly"> {
    /**
     * Is icon "Show password" visible.
     * Will show password on click
    */
    canShowPassword: boolean;
}
