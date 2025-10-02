import { FC } from "react";

import { isNullish } from "@bodynarf/utils";

import "./style.scss";

import { PasswordProps } from "../..";
import PasswordWithLabel from "../components/withLabel";
import PasswordWithoutLabel from "../components/withoutLabel";

/** Password input component */
const Password: FC<PasswordProps> = (props) => {
    // eslint-disable-next-line react/destructuring-assignment
    return isNullish(props.label)
        ? <PasswordWithoutLabel {...props} />
        : (
            <PasswordWithLabel
                {...props}
                // eslint-disable-next-line react/destructuring-assignment
                label={props.label}
            />
        );
};

export default Password;
