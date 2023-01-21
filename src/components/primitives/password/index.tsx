import { isNullOrUndefined } from "@bodynarf/utils";

import "./style.scss";

import { BaseInputElementProps } from "../types";

import PasswordWithLabel from "./components/withLabel";
import PasswordWithoutLabel from "./components/withoutLabel";

/** Password component props type */
export interface PasswordProps extends Omit<BaseInputElementProps<string>, 'defaultValue' | 'readonly'> {
    /**
     * Is icon "Show password" visible.
     * Will show password on click
    */
    canShowPassword: boolean;
}

/** Password input component */
const Password = (props: PasswordProps): JSX.Element => {
    if (isNullOrUndefined(props.label)) {
        return <PasswordWithoutLabel {...props} />;
    }

    return <PasswordWithLabel {...props} />;
};

export default Password;
