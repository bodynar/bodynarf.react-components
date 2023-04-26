import { isNullOrUndefined } from "@bodynarf/utils";

import "./style.scss";

import { PasswordProps } from "..";

import PasswordWithLabel from "../components/withLabel";
import PasswordWithoutLabel from "../components/withoutLabel";

/** Password input component */
const Password = (props: PasswordProps): JSX.Element => {
    if (isNullOrUndefined(props.label)) {
        return <PasswordWithoutLabel {...props} />;
    }

    return <PasswordWithLabel {...props} />;
};

export default Password;
