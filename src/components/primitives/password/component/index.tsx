import { FC } from "react";

import { isNullOrUndefined } from "@bodynarf/utils";

import "./style.scss";

import { PasswordProps } from "../..";
import PasswordWithLabel from "../components/withLabel";
import PasswordWithoutLabel from "../components/withoutLabel";

/** Password input component */
const Password: FC<PasswordProps> = (props) => {
    return isNullOrUndefined(props.label)
        ? <PasswordWithoutLabel {...props} />
        : <PasswordWithLabel {...props} />;
};

export default Password;
