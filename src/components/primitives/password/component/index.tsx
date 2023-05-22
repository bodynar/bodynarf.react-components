import { isNullOrUndefined } from "@bodynarf/utils";

import "./style.scss";

import { PasswordProps } from "@bbr/components/password";

import PasswordWithLabel from "@bbr/components/password/components/withLabel";
import PasswordWithoutLabel from "@bbr/components/password/components/withoutLabel";

/** Password input component */
const Password = (props: PasswordProps): JSX.Element => {
    if (isNullOrUndefined(props.label)) {
        return <PasswordWithoutLabel {...props} />;
    }

    return <PasswordWithLabel {...props} />;
};

export default Password;
