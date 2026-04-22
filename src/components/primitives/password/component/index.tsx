import { createLabelRouter } from "@bbr/utils";

import "./style.scss";

import { PasswordProps } from "../..";
import PasswordWithLabel from "../components/withLabel";
import PasswordWithoutLabel from "../components/withoutLabel";

/** Password input component */
const Password = createLabelRouter<PasswordProps>(PasswordWithoutLabel, PasswordWithLabel);

export default Password;
