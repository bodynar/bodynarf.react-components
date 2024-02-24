import { isNullOrUndefined } from "@bodynarf/utils";

import "./style.scss";

import { PasswordProps } from "@bbr/components/password";

import PasswordWithLabel from "@bbr/components/password/components/withLabel";
import PasswordWithoutLabel from "@bbr/components/password/components/withoutLabel";

/** Password input component */
const Password = (props: PasswordProps): JSX.Element => {
    return isNullOrUndefined(props.label)
        ? <PasswordWithoutLabel {...props} />
        : <PasswordWithLabel {...props} />;
};

export default Password;
