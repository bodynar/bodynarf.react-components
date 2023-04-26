import { isNullOrUndefined } from "@bodynarf/utils";

import "../../../../common.scss";

import { TextProps } from "..";

import TextWithLabel from "../components/textWithLabel";
import TextWithoutLabel from "../components/textWithoutLabel";

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