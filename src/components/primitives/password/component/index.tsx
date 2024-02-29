import { isNullOrUndefined } from "@bodynarf/utils";

import "./style.scss";

import { PasswordProps } from "../..";
import PasswordWithLabel from "../components/withLabel";
import PasswordWithoutLabel from "../components/withoutLabel";

/** Password input component */
const Password = (props: PasswordProps): JSX.Element => {
    return isNullOrUndefined(props.label)
        ? <PasswordWithoutLabel {...props} />
        : <PasswordWithLabel {...props} />;
};

export default Password;
