import { FC } from "react";

import { isNullOrUndefined } from "@bodynarf/utils";

import { TextProps } from "..";
import TextWithLabel from "../components/withLabel";
import TextWithoutLabel from "../components/withoutLabel";

/** Textual input component */
const Text: FC<TextProps> = (props) => {
    return isNullOrUndefined(props.label)
        ? <TextWithoutLabel {...props} />
        : <TextWithLabel {...props} />;
};

export default Text;
