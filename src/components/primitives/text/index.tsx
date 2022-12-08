import { isNullOrUndefined } from "@bodynarf/utils";

import "../../../common.scss";

import { BaseInputElementProps } from "../types";

import TextWithLabel from "./components/textWithLabel";
import TextWithoutLabel from "./components/textWithoutLabel";

/** Text input conponent props type */
export type TextProps = BaseInputElementProps<string> & {
    /** Focus out event handler */
    onBlur?: () => void;
};

/** Textual input component */
const Text = (props: TextProps): JSX.Element => {
    if (isNullOrUndefined(props.label)) {
        return (<TextWithoutLabel {...props} />);
    }
    else {
        return (<TextWithLabel {...props} />);
    }
};

export default Text;
