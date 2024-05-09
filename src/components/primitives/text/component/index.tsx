import { isNullOrUndefined } from "@bodynarf/utils";

import { TextProps } from "..";
import TextWithLabel from "../components/withLabel";
import TextWithoutLabel from "../components/withoutLabel";

/** Textual input component */
const Text = (props: TextProps): JSX.Element => {
    return isNullOrUndefined(props.label)
        ? <TextWithoutLabel {...props} />
        : <TextWithLabel {...props} />;
};

export default Text;
